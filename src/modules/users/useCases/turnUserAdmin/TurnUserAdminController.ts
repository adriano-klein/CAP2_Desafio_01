import { Request, Response } from "express";
import { User } from "modules/users/model/User";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;


    try {
      const admin = this.turnUserAdminUseCase.execute({ user_id: user_id });
      return response.status(201).json(admin);  

    } catch (error) {
      return response.status(404).json({error})
    }

  }
}

export { TurnUserAdminController };
