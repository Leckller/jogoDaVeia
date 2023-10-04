import styled from 'styled-components';

export const Main = styled.main`
  width: 100vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  div{
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
  }
`;

export const SecGame = styled.section`
  width: 50%;
  height: 70%;
  display: flex;
  flex-flow: row wrap;
  button {
    width: 33%;
    height: 33%;
  }
`;
type ImgPlayersType = {
  imgP: {
    opacity: string;
  }
};

export const ImgPlayers = styled.img<ImgPlayersType>`
  width: 10vw;
  filter: opacity(${(props) => props.imgP.opacity})
`;
