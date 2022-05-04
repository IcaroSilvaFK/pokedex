import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { Container, ContainerPoke, Column, HorizontalCard } from "./styles";

interface IPokePorps {
  name: string;
  abilities: [
    {
      ability: {
        name: string;
      };
    }
  ];
  sprites: {
    back_default: string;
    back_shiny: string;
    front_default: string;
    front_shiny: string;
    other: {
      home: {
        front_default: string;
      };
    };
  };
  stats: [
    {
      base_stat: number;
      stat: {
        name: string;
      };
    }
  ];
}

export function Poke() {
  const [infos, setInfos] = useState<IPokePorps>({} as IPokePorps);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      console.log("a");
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      );
      console.log(data);
      setInfos(data);
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return <h1>Loading</h1>;
  }

  return (
    <Container>
      <img
        alt='PokéAPI'
        src='https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png'
      />
      <ContainerPoke>
        <Column>
          <img src={infos.sprites?.other.home.front_default} alt='' />
          <h1>{infos.name}</h1>
          <strong>Habilidades :</strong>
          <ul>
            {infos.abilities.map((element) => (
              <li key={element.ability.name}>
                <span>{element.ability.name}</span>
              </li>
            ))}
          </ul>
          <HorizontalCard>
            {infos.stats.map(
              (element, index) =>
                index < 3 && (
                  <li>
                    <p>{element.stat.name.toUpperCase()}</p>
                    <span>{element.base_stat}</span>
                  </li>
                )
            )}
          </HorizontalCard>
        </Column>
        <Column>
          <img src={infos.sprites.back_default} alt='' />
          <img src={infos.sprites.back_shiny} alt='' />
          <img src={infos.sprites.front_default} alt='' />
          <img src={infos.sprites.front_shiny} alt='' />
        </Column>
      </ContainerPoke>
    </Container>
  );
}
