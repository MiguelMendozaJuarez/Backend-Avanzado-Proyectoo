import { Express } from "express";

const api = Express();

api.listen(8000, ()=> {
    console.log('api corriendo');
});