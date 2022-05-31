export interface IPokeProps {
  abilities: [
    {
      ability: {
        name: string;
      };
    }
  ];
  name: string;
  weight: number;
  sprites: {
    back_default: string;
    back_shiny: string;
    front_default: string;
    front_shiny: string;
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
  stats: [
    {
      base_stat: number;
      stat: { name: string };
    }
  ];
  moves: [
    {
      move: {
        name: string;
        url: string;
      };
    }
  ];
}
