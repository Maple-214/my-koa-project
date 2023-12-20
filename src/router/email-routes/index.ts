import Router from 'koa-router';
import { emailInfo } from '@/controller/email.controller';

const emailRouter = new Router({ prefix: '/email' });
/**
 * @swagger
 *
 * /email/:
 *   get:
 *     description: get all users
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: get all users
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/authLogin"
 *
 */
emailRouter.get('/', emailInfo);

export default emailRouter;
