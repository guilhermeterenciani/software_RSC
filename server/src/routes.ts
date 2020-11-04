import express, {request, response} from'express';
import Knex from './database/connection';

import CadastroController from './controllers/CadastroController'
import ProfessorController from './controllers/ProfessorController'
import AvaliadorController from './controllers/AvaliadorController';

const routs = express.Router();

const teacherController = new AvaliadorController();
const cadastroController = new CadastroController();
const professorController = new ProfessorController();

routs.post('/avaliador', teacherController.create)
routs.get('/avaliador', teacherController.index)   

routs.post('/cadastro', cadastroController.create)

routs.post('/professores', professorController.create)
routs.get('/listprofessor', professorController.index)  

export default routs