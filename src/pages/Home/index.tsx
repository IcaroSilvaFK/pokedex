import { useState, useEffect, useId } from "react";
import axios from "axios";
import { AiOutlinePlus } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

import {
  Container as ContainerStyled,
  Card,
  Powers,
  ContainerStatus,
  ListStatus,
  ContainerCards,
  ButtonMore,
} from "./styles";
import { Box, Container, Spinner } from "@chakra-ui/react";

interface IPokesApi {
  id: string;
  abilities: [
    {
      id: string;
      name: string;
    }
  ];
  name: string;
  sprites: {
    front_default_svg: string;
  };
  stats: [
    {
      id: string;
      name: string;
      base_stat: number;
    }
  ];
  weight: number;
}

export function Home() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [pokes, setPokes] = useState<IPokesApi[]>([]);
  const [quantity, setQuantity] = useState(100);

  const propriertsPowerPoke = ["HP", "ATAQUE", "DEFESA"];

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("http://localhost:8080/pokes", {
        params: {
          quantity,
        },
      });
      console.log(data);
      setPokes(data);
      setLoading(false);
    })();
  }, [quantity]);

  if (loading) {
    return (
      <Container
        display='flex'
        alignItems='center'
        justifyContent='center'
        flexDirection='column'
      >
        <Box w='100%' padding='20px'>
          <img
            alt='PokéAPI'
            src='https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png'
            width='250px'
          />
        </Box>
        <Spinner
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='blue.500'
          size='xl'
          marginTop='50px'
        />
      </Container>
    );
  }
  return (
    <ContainerStyled>
      <img
        alt='PokéAPI'
        src='https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png'
      />
      <ButtonMore onClick={() => setQuantity((prev) => prev + 100)}>
        <AiOutlinePlus />
      </ButtonMore>
      <ContainerCards>
        {pokes?.map((poke) => (
          <Card key={poke.id}>
            <img src={poke.sprites.front_default_svg} alt='' width={50} />
            <strong>{poke.name}</strong>
            <ContainerStatus>
              {poke.stats.map((element, index) => {
                return (
                  index < 3 && (
                    <ListStatus key={element.id}>
                      <p>{propriertsPowerPoke[index]}</p>
                      <Powers force={element.base_stat} />
                    </ListStatus>
                  )
                );
              })}
            </ContainerStatus>
            <button
              onClick={() => {
                navigate(`/poke/${poke.id}`);
              }}
            >
              Mais Informações
            </button>
          </Card>
        ))}
      </ContainerCards>
    </ContainerStyled>
  );
}
