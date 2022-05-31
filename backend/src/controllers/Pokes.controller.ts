import { Request, Response } from "express";
import { PokesRepository } from "../repository/Pokes.repository";
import { PokesService } from "../services/Poke.service";

export class PokesController {
  static async getAll(request: Request, response: Response) {
    const pokesRepository = new PokesRepository();
    const pokesService = new PokesService(pokesRepository);
    const { quantity } = request.query;

    try {
      const pokes = await pokesService.getAll(`${quantity}`);

      return response.status(200).json(pokes);
    } catch (error) {
      return response.status(500).json({
        message: "Internal server error",
      });
    }
  }
  static async getOne(request: Request, response: Response) {
    const pokesRepository = new PokesRepository();
    const pokesService = new PokesService(pokesRepository);
    const { id } = request.query;
    try {
      const poke = await pokesService.getOne(`${id}`);

      return response.status(200).json(poke);
    } catch (error) {
      return response.status(500).json({
        message: "Internal server error",
      });
    }
  }
}
