import { prisma } from "../prisma/prisma";
import { baseURL } from "../configs/axios";
import { IPokeProps } from "../interface/Poke.interface";

export class PokesRepository {
  async getAll(quantity: number) {
    const countPokes = await prisma.poke.count();

    if (countPokes <= quantity) {
      for (let i = quantity; i < quantity + 100; i++) {
        const { data } = await baseURL.get(`${i}`);
        const pokeRecived: IPokeProps = data;

        const poke = await prisma.poke.create({
          data: {
            name: pokeRecived.name,
            weight: pokeRecived.weight,
            sprites: {
              create: {
                back_default: pokeRecived.sprites.back_default,
                back_shiny: pokeRecived.sprites.back_shiny,
                front_default: pokeRecived.sprites.front_default,
                front_shiny: pokeRecived.sprites.front_shiny,
                front_default_svg:
                  pokeRecived.sprites.other.dream_world.front_default,
              },
            },
          },
        });
        pokeRecived.stats.forEach(async (element) => {
          await prisma.stats.create({
            data: {
              base_stat: element.base_stat,
              name: element.stat.name,
              poke_id: poke.id,
            },
          });
        });

        pokeRecived.abilities.forEach(async (ability) => {
          await prisma.ability.create({
            data: {
              name: ability.ability.name,
              poke_id: poke.id,
            },
          });
        });
        pokeRecived.moves.forEach(async ({ move }) => {
          await prisma.movies.create({
            data: {
              name: move.name,
              url: move.url,
              poke_id: poke.id,
            },
          });
        });
      }
      const pokes = await prisma.poke.findMany({
        include: {
          movies: {
            select: {
              name: true,
              url: true,
            },
          },
          abilities: {
            select: {
              name: true,
            },
          },
          sprites: {
            select: {
              back_default: true,
              back_shiny: true,
              front_default: true,
              front_default_svg: true,
              front_shiny: true,
            },
          },
          stats: {
            select: {
              base_stat: true,
              name: true,
            },
          },
        },
      });
      return pokes;
    }
    const pokes = await prisma.poke.findMany({
      include: {
        abilities: {
          select: {
            id: true,
            name: true,
          },
        },
        movies: {
          select: {
            name: true,
            url: true,
          },
        },
        sprites: {
          select: {
            back_default: true,
            back_shiny: true,
            front_default: true,
            front_default_svg: true,
            front_shiny: true,
          },
        },
        stats: {
          select: {
            id: true,
            base_stat: true,
            name: true,
          },
        },
      },
      take: quantity,
      orderBy: {
        name: "asc",
      },
    });
    return pokes;
  }
  async getOne(id: string) {
    const poke = await prisma.poke.findFirst({
      where: {
        id,
      },
      include: {
        abilities: {
          select: {
            id: true,
            name: true,
          },
        },
        movies: {
          select: {
            id: true,
            name: true,
            url: true,
          },
        },
        sprites: {
          select: {
            back_default: true,
            back_shiny: true,
            front_default: true,
            front_default_svg: true,
            front_shiny: true,
          },
        },
        stats: {
          select: {
            base_stat: true,
            id: true,
            name: true,
          },
        },
      },
    });

    return poke;
  }
}
