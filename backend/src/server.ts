import express from 'express';
import {RegisterClap} from './routes';

import './Database';

const app = express();
app.use(express.json());
app.post("/", RegisterClap);
app.listen(3333);