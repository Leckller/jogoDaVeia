import { useEffect } from 'react';
import { useAppSelector } from '../../hooks/reduxHooks';
import HistoryBox from './HistoryBox';

function History() {
  const { history } = useAppSelector((s) => s.Velha);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      entry.target.classList.add('blur');
      if (entry.isIntersecting) {
        entry.target.classList.remove('blur');
      }
    }, {
      threshold: 0.9,
    });
    document.querySelectorAll('.history').forEach((element) => {
      observer.observe(element);
    });
  }, [history]);

  return (
    <section
      className="flex flex-row flex-wrap
     justify-center items-center gap-5 w-[80%]"
    >

      <section className="w-full flex flex-row justify-center items-center">
        <h2 className="text-2xl font-bold">Histórico de partidas</h2>
      </section>

      <section
        className="flex flex-col h-60 flex-wrap overflow-x-scroll
        snap-x gap-10 carrossel"
      >
        {history.length > 0 ? history.map((boxes, index) => (
          <article
            className="w-60 grid grid-rows-3 grid-cols-3 snap-mandatory history
             snap-center"
            key={ index }
          >
            {boxes.map((box, i) => (
              <HistoryBox content={ box } key={ i } />
            ))}
          </article>
        )) : (
          <p className="w-60 text-center font-semibold">Tudo vazio por aqui...</p>
        )}
      </section>

    </section>
  );
}

export default History;
