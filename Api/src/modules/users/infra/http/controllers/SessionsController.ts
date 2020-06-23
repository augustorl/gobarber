import { Request, Response } from 'express';
import { classToClass } from 'class-transformer';
import { container } from 'tsyringe';
import CreateSessionService from '@modules/users/services/CreateSessionService';

export default class SessionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const authUser = container.resolve(CreateSessionService);

    const { user, token } = await authUser.execute({
      email,
      password,
    });

    return response.json({ user: classToClass(user), token });
  }
}
