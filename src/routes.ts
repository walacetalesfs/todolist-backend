import express from 'express';
import TasksController from './controllers/TasksController';
import knex from './database/connections';

const routes = express.Router();

const tasksController = new TasksController();

routes.get('/tasks', tasksController.index);
routes.get('/tasks/:id', tasksController.show);
routes.post('/tasks', tasksController.create);
routes.put('/tasks/:id', tasksController.update);
routes.delete('/tasks/:id', tasksController.delete);

export default routes;