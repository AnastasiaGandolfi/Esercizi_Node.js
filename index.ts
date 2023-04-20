import express, { Request, Response } from "express";
import Joi from "joi";
import * as dotenv from "dotenv";
import { getAll, getOnById, create, updatedById, deleteByID } from './controllers/planets.js'

dotenv.config()

const app = express();
const { PORT } = process.env;

app.use(express.json())

type Planet = {
  id: number,
  name: string,
};

type Planets = Planet[];

let planets: Planets = [
  {
    id: 1,
    name: "Mercury",
  },
  {
    id: 2,
    name: "Venus",
  },
];

app.get('/api/planets', getAll);

app.get('/api/planets/:id', getOnById);

app.post('/api/planets/',  create)

app.put('/api/planets/:id', updatedById);

app.delete('/api/planets/:id', deleteByID);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
