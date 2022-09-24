//Third party Modules
import express from "express";
import cookieParser from "cookie-parser";
import logger from 'morgan';
import session from "express-session";

//ES Modules fix for __dirname
import path, {dirname} from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

//Import Router
import indexRouter from './app/routes/index.route.server.js';

//Instatiate app-server
const app = express();

//Setup ViewEngine EJS
app.set('views', path.join(__dirname, '/app/views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(session({
    secret: 'MySecret',
    saveUnitialized: false,
    resave: false
}));

//Use my Routes
app.use('/',indexRouter);

//Run app
app.listen(3000);

console.log('Server running at http://localhost:3000');

