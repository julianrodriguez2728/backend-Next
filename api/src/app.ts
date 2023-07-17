import express, { Application, Request, Response, NextFunction } from 'express';
import router from './routes/index';
const cookieParser = require('cookie-parser')
const morgan = require('morgan')

const app: Application = express();
app.use(express.urlencoded({ extended: true, limit: '50mb' })); //middleware
app.use(express.json({ limit: '50mb' }));
app.use(cookieParser());
app.use(morgan('dev'));
app.use((req: Request, res: Response, next: NextFunction) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

interface error {
  status: number;
  message: string;
}

app.use((err: error, req: Request, res: Response, next: NextFunction) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

app.use('/', router);

export default app;
