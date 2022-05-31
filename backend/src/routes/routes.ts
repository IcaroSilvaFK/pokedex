import { Router } from "express";
import { PokesController } from "../controllers/Pokes.controller";

const routes = Router();

routes.get("/", (req, res) => {
  res.send("Heyy");
});

routes.get("/pokes", PokesController.getAll);
routes.get("/poke", PokesController.getOne);

export { routes };
