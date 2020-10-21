import express, {request, response} from'express';
import Knex from './database/connection';

import TeacherController from './controllers/TeacherController'

const routs = express.Router();

const teacherController = new TeacherController();

routs.post('/avaliador', teacherController.create)
routs.get('/listprof', teacherController.index)   
export default routs