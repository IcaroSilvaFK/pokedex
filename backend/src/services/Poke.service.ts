import { PokesRepository } from "../repository/Pokes.repository";

export class PokesService {
  constructor(private readonly pokesService: PokesRepository) {}

  async getAll(quantity: string) {
    const pokes = await this.pokesService.getAll(+quantity);

    return pokes;
  }
  async getOne(id: string) {
    const poke = await this.pokesService.getOne(id);

    return poke;
  }
}
