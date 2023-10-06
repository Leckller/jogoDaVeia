import { useNavigate } from 'react-router-dom';
import { MainNovidades } from '../styles/NovidatesStyled';
import { ButtonBot } from '../styles/HomeStyled';

function Novidades() {
  const navigate = useNavigate();
  return (
    <MainNovidades>
      <ButtonBot
        onClick={ () => navigate('/') }
      >
        Voltar

      </ButtonBot>
      <h1>Notas da atualização</h1>
      <div>
        <h2>Beta 1.2</h2>
        <div>
          <h3>---- Additions ----</h3>
          <h4>Bot Cláudia mais inteligente!</h4>
          <h4>Rota para as notas de atualização</h4>
          <h3>---- Bugs fixed ----</h3>
          <h4>Bug das 10 casas</h4>
        </div>
      </div>
    </MainNovidades>
  );
}

export default Novidades;
