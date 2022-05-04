import { useState, useEffect, useId } from "react";
import axios from "axios";
import { AiOutlinePlus } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

import {
  Container,
  Card,
  Powers,
  ContainerStatus,
  ListStatus,
  ContainerCards,
  ButtonMore,
} from "./styles";

interface IPokePorps {
  id: number;
  name: string;
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
  stats: [
    {
      base_stat: number;
    }
  ];
}

export function Home() {
  const navigate = useNavigate();
  const [pokes, setPokes] = useState<IPokePorps[]>([]);
  const [quantit, setQuantit] = useState(20);
  const [loading, setLoading] = useState(true);
  const id = useId();
  const propriertsPowerPoke = ["HP", "ATAQUE", "DEFESA"];

  useEffect(() => {
    (async () => {
      let seila = [];
      for (let i = 1; i < quantit; i++) {
        const { data } = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${i}`
        );
        seila.push(data);
      }
      setPokes(seila);
      setLoading(false);
    })();
  }, [quantit]);

  if (loading) {
    return <h1>Loading</h1>;
  }
  return (
    <Container>
      <ButtonMore onClick={() => setQuantit((prev) => prev + 20)}>
        <AiOutlinePlus size={20} />
      </ButtonMore>
      <img
        alt='PokéAPI'
        src='https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png'
      />
      <ContainerCards>
        {pokes?.map((element) => (
          <Card key={element.id}>
            <img
              src={element.sprites.other.dream_world.front_default}
              alt=''
              width={50}
            />
            <strong>{element.name}</strong>
            <ContainerStatus>
              {element.stats.map((element, index) => {
                return (
                  index < 3 && (
                    <ListStatus key={element.base_stat}>
                      <p>{propriertsPowerPoke[index]}</p>
                      <Powers force={element.base_stat} />
                    </ListStatus>
                  )
                );
              })}
            </ContainerStatus>
            <button
              onClick={() => {
                navigate(`/poke/${element.id}`);
              }}
            >
              Mais Informações
            </button>
          </Card>
        ))}
      </ContainerCards>
    </Container>
  );
}
