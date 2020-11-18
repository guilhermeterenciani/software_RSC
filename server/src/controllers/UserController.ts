import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import User from '../app/models/User';

class UserController {
    async store( req: Request, res: Response){
        const repository = getRepository(User);
        const { siape, senha } = req.body;

        const userExists = await repository.findOne({ where: { siape }});

        if (userExists) {
            return res.sendStatus(409);
        }

        const user = repository.create({ siape, senha });
        await repository.save(user);

        return res.json(user);
    }
}

export default new UserController();