import express from "express";
import Joi from "joi";
import * as dotenv from "dotenv";
dotenv.config();
const app = express();
const { PORT } = process.env;
app.use(express.json());
let planets = [
    {
        id: 1,
        name: "Mercury",
    },
    {
        id: 2,
        name: "Venus",
    },
];
app.get('/api/planets', (req, res) => {
    res.status(200).json(planets);
});
app.get('/api/planets/:id', (req, res) => {
    const { id } = req.params;
    const planet = planets.find(p => p.id === Number(id));
    res.status(200).json(planet);
});
const planetSchema = Joi.object({
    id: Joi.number().integer().required(),
    name: Joi.string().required(),
});
app.post('/api/planets/', (req, res) => {
    const { id, name } = req.body;
    const newPlanet = { id, name };
    const validatedPlanet = planetSchema.validate(newPlanet);
    if (validatedPlanet.error) {
        return res.status(400).json({ msg: validatedPlanet.error.details[0].message });
    }
    else {
        planets = [...planets, newPlanet];
        res.status(201).json({ msg: 'The planet was created' });
    }
});
app.put('/api/planets/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    planets = planets.map(p => p.id === Number(id) ? Object.assign(Object.assign({}, p), { name }) : p);
    res.status(200).json({ msg: "The planet was updated" });
});
app.delete('/api/planets/:id', (req, res) => {
    const { id } = req.params;
    planets = planets.filter(p => p.id !== Number(id));
    res.status(200).json({ msg: "The planet was deleted" });
});
app.listen(PORT, () => {
    console.log(`[server]: Server is running at http://localhost:${PORT}`);
});
