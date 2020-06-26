"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _User = _interopRequireDefault(require("../entities/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import IFindAllProvidersDTO from '@modules/users/dtos/IFindAllProvidersDTO';
class UsersRepository {
  constructor() {
    this.ormRepository = void 0;
    this.ormRepository = (0, _typeorm.getRepository)(_User.default);
  }

  async create({
    name,
    email,
    password
  }) {
    const user = this.ormRepository.create({
      name,
      email,
      password
    });
    await this.ormRepository.save(user);
    return user;
  }

  async save(user) {
    return this.ormRepository.save(user);
  }

  async findAllProviders({
    except_user_id
  }) {
    let users;

    if (except_user_id) {
      users = await this.ormRepository.find({
        where: {
          id: (0, _typeorm.Not)(except_user_id)
        }
      });
    } else {
      users = await this.ormRepository.find();
    }

    return users;
  }

  async findById(id) {
    const user = await this.ormRepository.findOne(id);
    return user;
  }

  async findByEmail(email) {
    const user = await this.ormRepository.findOne({
      where: {
        email
      }
    });
    return user;
  } // public async findAllProviders({
  //   except_user_id,
  // }: IFindAllProvidersDTO): Promise<User[]> {
  //   let users: User[];
  //   if (except_user_id) {
  //     users = await this.ormRepository.find({
  //       where: { id: Not(except_user_id) },
  //     });
  //   } else {
  //     users = await this.ormRepository.find();
  // //   }
  //   return users;
  // }


}

var _default = UsersRepository;
exports.default = _default;