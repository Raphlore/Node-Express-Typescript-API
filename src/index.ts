import 'dotenv/config';
import 'module-alias/register';
import App from './app';
import validateEnv from '@/utils/interfaces/validateEnv';
import PostController from '@/resources/post/post.controller';

validateEnv();

const app = new App([new PostController()], Number(process.env.PORT));

app.listen();
