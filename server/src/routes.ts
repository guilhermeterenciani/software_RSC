import express, {request, response} from'express';
import Knex from './database/connection';
import 'reflect-metadata';

import ProfessorController from './controllers/ProfessorController';
import AvaliadorController from './controllers/AvaliadorController';
import LoginController from './controllers/LoginController';
import RscController from './controllers/RscController';
import UserController from './controllers/UserController';
const routs = express.Router();

const avaliadorController = new AvaliadorController();
const professorController = new ProfessorController();
const rscController = new RscController();

routs.post('/avaliador', avaliadorController.create)
routs.get('/avaliador', avaliadorController.index) 

routs.post('/rsc', rscController.create)
routs.get('/rsc', rscController.index) 

routs.post('/professor', professorController.create)
routs.get('/professor', professorController.index)

routs.post('/login', LoginController.autenticar)

routs.post("/users", UserController.store);

export default routs