import express from 'express';
import {RegisterClap} from './routes';
import cors from 'cors';

import './Database';

const app = express();
app.use(cors())
app.use(express.json());
app.post("/", RegisterClap);
app.listen(3333);