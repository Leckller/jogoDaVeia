import styled from 'styled-components';

export const Main = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5vh 0;
  z-index: 1000;
  @media (max-width: 420px) {
    width: 100vw;
    height: 110vw;
  }

`;

export const ButtonBot = styled.button`
  margin-top: 2vh;
  width: 100px;
  height: auto;
  background-color: transparent;
  border: black solid 1px;
  border-radius: 10vw;
  outline: none;
  cursor: pointer;
`;

const LayoutDiv = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

export default LayoutDiv;

export const SecGame = styled.section`
  width: 35%;
  height: 10vw;
  display: flex;
  flex-flow: row wrap;
  margin-top: 2vh;
  button {
    width: 33%;
    height: 100%;
    background-color: transparent;
    border: none;
    box-shadow: 3px 3px 9px black
  }
  @media (max-width: 420px) {
    width: 80%;
    height: 20%;
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
  transition: 800ms;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  div{
    display: flex;
    width: 50%;
    flex-flow: row nowrap;
    justify-content: space-around;
    button {
      display: flex;
      align-items: center;
      justify-content: center;
    }
}
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
    margin-bottom: 20px;
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

export const SecLastGames = styled.section`
  width: 100vw;
  text-align: center;
  font-size: 1.5vw;
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  padding: 20vw;
h3 {
  width: 100%;
}
div{
  height: 15vh;
  width: 33%;
  height: 20vw;
  border: solid 1px black;
  display: flex;
  flex-flow: row wrap;
  img{
    width: 32%;
    height: 32%;
    box-shadow: 3px 3px 9px black;
  }
  div {
    width: 32%;
    height: 32%;
    box-shadow: 3px 3px 9px black;
  }
}
@media (max-width: 420px) {
  transform: scale(125%);
  width: 100vw;
  display: flex;
  flex-flow: row wrap;
  font-size: 3vw;
  div {
    width: 30%;
    margin: 1%;
    div{
      width: 30%;
      height: 30%;
      background-color: white;
      border: none;
    }
    img {
      width: 33%;
      height: 33%;
    }
  }
}
@media (max-width: 420px) and (max-height: 700px){
  overflow-y: auto;
}
`;
