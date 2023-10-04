import styled from 'styled-components';

export const Main = styled.main`
  width: 100vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5vh 0;
`;

export const SecGame = styled.section`
  width: 40%;
  height: 100%;
  display: flex;
  flex-flow: row wrap;
  margin-top: 2vh;
  button {
    width: 33%;
    height: 33%;
    background-color: transparent;
    border: none;
    box-shadow: 3px 3px 9px black
  }
  @media (max-width: 420px) {
    width: 80%;
    height: 40%;
    button {
    }
  }
`;
type ImgPlayersType = {
  imgP: {
    opacity: string;
  }
};

export const ImgPlayers = styled.img<ImgPlayersType>`
  width: 8vw;
  height: 8vw;
  filter: opacity(${(props) => props.imgP.opacity});
  @media (max-width: 420px) {
    width: 15vw;
    height: 15vw;
  }
`;

export const Header = styled.header`
  width: 100vw;
  text-align: center;
  padding-top: 2vh;
  font-size: 2vw;
`;
export const Footer = styled.footer`
  width: 100vw;
  height: 5vh;
  text-align: center;
  font-size: 2vw;
`;

export const ImgsDiv = styled.div`
    width: 100%;
    height: 10vh;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    text-align: center;
    div {
      width: 10vw;
      flex-flow: row wrap;
    }
    @media (max-width: 420px) {
      div{
        width: 30vw;
      flex-flow: row wrap;
      }
}
`;
