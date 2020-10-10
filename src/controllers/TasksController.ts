import knex from '../database/connections';
import { Request, Response } from 'express';

class TasksController {
    public index(req: Request, res: Response) {
        knex("tasks").select('*')
            .then((tasks: any[]) => {
                return res.json(tasks);
            })
            .catch((error) => {
                return res.status(500).json({ error });
            });
    }

    public create(req: Request, res: Response) {
        const { title, description } = req.body;

        knex("tasks").insert({ title, description })
            .then((ids: number[]) => {
                return res.status(201).json({ success: true });
            })
            .catch((error) => {
                return res.status(500).json({ error });
            });
    }

    public show(req: Request, res: Response) {
        const { id } = req.params;

        knex("tasks").select('*').where({ id })
            .then((task: any[]) => {
                return res.json(task.length == 0 ? {} : task[0]);
            })
            .catch((error) => {
                return res.status(404).json({ error });
            });
    }

    public delete(req: Request, res: Response) {
        const { id } = req.params;

        knex("tasks").where({ id }).del()
            .then((task: any) => {
                return res.json({ success: "true" });
            })
            .catch((error) => {
                return res.status(404).json({ error });
            });
    }

    public update(req: Request, res: Response) {
        const { id } = req.params;
        const { title, description } = req.body;

        knex("tasks").where({ id }).update({ title, description })
            .then((task: any) => {
                console.log(task)
                return res.json({ success: "true" });
            })
            .catch((error) => {
                return res.status(404).json({ error });
            });
    }
}

export default TasksController;