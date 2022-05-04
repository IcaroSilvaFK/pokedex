import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  flex-direction: column;

  gap: 20px;

  img {
    width: 250px;

    margin-left: 20px;
  }

  padding: 20px;
`;

export const ContainerCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  gap: 20px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 20px;

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

  border-radius: 10px;

  width: 250px;

  padding: 20px;

  img {
    width: 80px;
    flex-grow: 1;
  }
  strong {
    font-size: 1.2rem;
  }

  &:hover {
    transform: scale(1.1);
  }
  button {
    padding: 10px;

    border-radius: 4px;

    background: #f0bf1b;

    color: #fff;
  }
`;

export const ContainerStatus = styled.div`
  width: 100%;
`;

export const ListStatus = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;

  p {
    font-size: 0.8rem;
  }

  & + & {
    margin-top: 5px;
  }
`;

export const Powers = styled.div<{ force: number }>`
  position: relative;

  width: 100px;
  height: 10px;

  background: rgba(0, 0, 0, 0.2);

  border-radius: 10px;

  &:before {
    position: absolute;

    height: 100%;

    border-radius: 10px;

    width: ${(props) =>
      props.force < 100 ? (props.force / 100) * 100 : 100}px;

    background: red;
    content: "";
  }
`;

export const ButtonMore = styled.button`
  position: fixed;

  bottom: 1.5rem;
  right: 1.5rem;

  padding: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50px;

  background: #f0bf1b;
  color: #fff;
`;
