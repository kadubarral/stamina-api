import { Router, Application } from 'express';
import pool from '../db';

const router = Router();

export const setRoutes = (app: Application) => {
    router.get('/api/example', async (req, res) => {
        try {
            const result = await pool.query('SELECT text FROM messages LIMIT 1');
            if (result.rows.length > 0) {
                res.send(result.rows[0].text);
            } else {
                res.status(404).send('No message found');
            }
        } catch (error) {
            res.status(500).send('Database error');
        }
    });

    app.use(router);
};