import express from 'express';
import morgan from 'morgan';
import log from 'fancy-log';
import cors from 'cors';
import dotenv from 'dotenv';

import mainAppRouter from './routes';

dotenv.config();
const app = express();
const port = process.env.PORT || 4040;
const isProduction = process.env.NODE_ENV === 'production';

app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/v1', mainAppRouter);
app.get('/', (req, res) => {
  res.send(
    `<h1>Welcome to IdeaLab API</h1>
      <p>For any more info please visit
      <a href='https://github.com/eokwukwe/idealab-code-challenge'>
      Our Github page</a></P>
      <h4>Thanks  &#x1F600;</h4>`
  );
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const error = new Error('Resource does not exist');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  if (!isProduction) {
    log(error.stack);
  }
  return res.status(error.status || 500).json({
    error: {
      message: error.message
    }
  });
});

export const server = app.listen(port, () => log(`Server is running on http://localhost:${port}`));

export default app;
