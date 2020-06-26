"use strict";

var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));

var _FakeNotificationsRepository = _interopRequireDefault(require("../../notifications/repositories/fakes/FakeNotificationsRepository"));

var _FakeCacheProvider = _interopRequireDefault(require("../../../shared/container/providers/CacheProvider/fakes/FakeCacheProvider"));

var _FakeAppointmentsRepository = _interopRequireDefault(require("../repositories/fakes/FakeAppointmentsRepository"));

var _CreateAppointmentService = _interopRequireDefault(require("./CreateAppointmentService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let fakeAppointmentsRepository;
let createAppointment;
let fakeCacheProvider;
let fakeNotificationsRepository;
describe('CreateAppointment', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new _FakeAppointmentsRepository.default();
    fakeCacheProvider = new _FakeCacheProvider.default();
    fakeNotificationsRepository = new _FakeNotificationsRepository.default();
    createAppointment = new _CreateAppointmentService.default(fakeAppointmentsRepository, fakeCacheProvider, fakeNotificationsRepository);
  });
  it('should be able to create a new appointment', async () => {
    jest.spyOn(Date, 'now').mockImplementationOnce(() => {
      return new Date(2020, 4, 10, 12).getTime();
    });
    const appointment = await createAppointment.execute({
      date: new Date(2020, 4, 10, 13),
      provider_id: '123456',
      user_id: '123123'
    });
    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('123456');
  });
  it('should not be able to create two appointment on the same time', async () => {
    const appointmentDate = new Date(2060, 4, 12, 11);
    await createAppointment.execute({
      date: appointmentDate,
      user_id: 'userLogged',
      provider_id: '12321312'
    });
    await expect(createAppointment.execute({
      date: appointmentDate,
      user_id: 'userLogged',
      provider_id: '12321312'
    })).rejects.toBeInstanceOf(_AppError.default);
  });
  it('should not be able to create an appointment on a past date', async () => {
    jest.spyOn(Date, 'now').mockImplementationOnce(() => {
      return new Date(2020, 4, 10, 12).getTime();
    });
    await expect(createAppointment.execute({
      date: new Date(2020, 4, 10, 11),
      provider_id: '123456',
      user_id: '123123'
    })).rejects.toBeInstanceOf(_AppError.default);
  });
  it('should not be able to create an appointment with yourself', async () => {
    jest.spyOn(Date, 'now').mockImplementationOnce(() => {
      return new Date(2020, 4, 10, 12).getTime();
    });
    await expect(createAppointment.execute({
      date: new Date(2020, 4, 10, 13),
      provider_id: 'user-id',
      user_id: 'user-id'
    })).rejects.toBeInstanceOf(_AppError.default);
  });
  it('should not be able to create before 08:00 and after 17:00', async () => {
    jest.spyOn(Date, 'now').mockImplementationOnce(() => {
      return new Date(2020, 4, 10, 12).getTime();
    });
    await expect(createAppointment.execute({
      date: new Date(2020, 4, 11, 7),
      provider_id: 'user-id',
      user_id: 'provider-id'
    })).rejects.toBeInstanceOf(_AppError.default);
    await expect(createAppointment.execute({
      date: new Date(2020, 4, 11, 18),
      provider_id: 'user-id',
      user_id: 'provider-id'
    })).rejects.toBeInstanceOf(_AppError.default);
  });
});