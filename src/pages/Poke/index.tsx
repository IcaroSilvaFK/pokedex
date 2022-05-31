import { Box, Button, Container, Heading, Spinner } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { BsArrowLeftShort } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import {
  Container as ContainerPage,
  ContainerPoke,
  Column,
  HorizontalCard,
} from "./styles";

interface IPokeApi {
  name: string;
  sprites: {
    back_default: string;
    back_shiny: string;
    front_default: string;
    front_default_svg: string;
    front_shiny: string;
  };
  stats: [
    {
      base_stat: number;
      id: string;
      name: string;
    }
  ];
  weight: number;
  abilities: [
    {
      id: string;
      name: string;
    }
  ];
  movies: [
    {
      id: string;
      name: string;
      url: string;
    }
  ];
}

export function Poke() {
  const [poke, setPoke] = useState<IPokeApi | null>(null);
  const [image, setImage] = useState<string>();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`http://localhost:8080/poke`, {
        params: {
          id,
        },
      });
      setPoke(data);
      setLoading(false);
    })();
  }, []);

  useEffect(() => {
    setImage(poke?.sprites.front_default);
  }, [poke]);
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
    <ContainerPage>
      <img
        alt='PokéAPI'
        src='https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png'
        className='PokéAPI'
      />
      <ContainerPoke>
        <Column>
          <img src={image} alt='' width={360} />
          <Heading textAlign='center'>{poke?.name}</Heading>
          <strong>Habilidades :</strong>
          <ul>
            {poke?.abilities.map((poke) => (
              <li key={poke.id}>
                <span>{poke.name}</span>
              </li>
            ))}
          </ul>
          <HorizontalCard>
            {poke?.stats.map(
              (element, index) =>
                index < 3 && (
                  <li key={element.id}>
                    <p>{element.name.toUpperCase()}</p>
                    <span>{element.base_stat}</span>
                  </li>
                )
            )}
          </HorizontalCard>
        </Column>
        <Column>
          <img
            src={poke?.sprites.front_default}
            alt={poke?.name}
            onMouseMove={() => {
              setImage(poke?.sprites.front_default);
            }}
            className='img--hoverEffect'
          />

          <img
            src={poke?.sprites.back_default}
            alt={poke?.name}
            onMouseMove={() => {
              setImage(poke?.sprites.back_default);
            }}
            className='img--hoverEffect'
          />
        </Column>
      </ContainerPoke>
      <Button
        background='yellow.300'
        color='red.500'
        _hover={{
          background: "yellow.100",
        }}
        onClick={() => {
          navigate("/");
        }}
      >
        <BsArrowLeftShort size={25} />
      </Button>
    </ContainerPage>
  );
}

/**
    
  

 */
