import express, {request, response} from'express';
import Knex from './database/connection';

import TeacherController from './controllers/TeacherController'
import CadastroController from './controllers/CadastroController';

const routs = express.Router();

const teacherController = new TeacherController();
const cadastroController = new CadastroController();

routs.post('/avaliador', teacherController.create)
routs.get('/listprof', teacherController.index)   
routs.post('/cadastro', cadastroController.create)

export default routs