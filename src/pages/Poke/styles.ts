import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;

  padding: 20px;
  .PokéAPI {
    margin-left: 30px;
  }
`;

export const ContainerPoke = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;
  gap: 30px;

  margin-top: -40px;

  h1 {
    text-align: center;

    &::first-letter {
      text-transform: uppercase;
    }

    font-weight: 400;
  }
  strong {
    font-size: 1.1rem;
  }
  ul {
    display: flex;
    gap: 20px;

    padding: 5px;
    font-size: 1rem;
    li {
      span {
        background: rgba(0, 0, 0, 0.4);
        padding: 5px;
        border-radius: 10px;
        color: #fff;
      }
    }
  }
`;

export const HorizontalCard = styled.div`
  display: flex;

  gap: 30px;

  margin-top: 10px;
  li {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      font-weight: bold;
    }
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;

  .img--hoverEffect {
    &:hover {
      transform: scale(1.1);
    }
  }

  @media (max-width: 500px) {
    width: 100%;

    align-items: center;

    .img--hoverEffect {
      display: none;
    }
  }
`;
