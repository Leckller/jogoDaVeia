import styled from 'styled-components';

export const MainNovidades = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  button{
    margin-right: 70vw;
  }
  div {
    h2{
      padding: 2vh;
    }
    margin: 1vh;
    text-align: center;
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    height: 20%;
    div{
      height: 100%;
      border: solid black 1px;
      padding: 1vw;
    }
}
`;
