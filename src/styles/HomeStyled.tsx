import styled from 'styled-components';

export const Main = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5vh 0;
  div{
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
  }
`;

export const SecGame = styled.section`
  width: 40%;
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
  width: 8vw;
  filter: opacity(${(props) => props.imgP.opacity})
`;

export const Header = styled.header`
  width: 100vw;
  align-items: center;
  text-align: center;
`;
