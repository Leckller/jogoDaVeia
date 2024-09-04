import { useAppSelector } from '../../hooks/reduxHooks';
import HistoryBox from './HistoryBox';

function History() {
  const { history } = useAppSelector((s) => s.Velha);
  return (
    <section className="flex flex-row flex-wrap justify-center items-center gap-5 w-full">
      <section className="w-full flex flex-row justify-center items-center">
        <h2 className="text-2xl font-bold">Histórico de partidas</h2>
      </section>
      {history.length > 0 ? history.map((boxes, index) => (
        <section className="w-60 grid grid-rows-3 grid-cols-3" key={ index }>
          {boxes.map((box, i) => (
            <HistoryBox content={ box } key={ i } />
          ))}
        </section>
      )) : (
        <p className="w-60 text-center font-semibold">Tudo vazio por aqui...</p>
      )}
    </section>
  );
}

export default History;
