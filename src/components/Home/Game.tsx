import Box from './Box';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { reiniciar } from '../../redux/Reducers/Velha';

function Game() {
  const { boxes, status, disable } = useAppSelector((s) => s.Velha);
  const dispatch = useAppDispatch();
  return (
    <section className="flex flex-col gap-5">
      <section>
        <p className="text-2xl font-semibold text-center">
          {status}
        </p>
      </section>
      <section className="grid grid-cols-3 grid-rows-3 relative w-60">
        {disable && (
          <button
            className="bg-[rgba(0,0,0,0.1)] absolute w-full h-full"
            onClick={ () => dispatch(reiniciar()) }
          >
            <p className="text-2xl font-bold">
              Reiniciar
            </p>
          </button>
        )}
        {boxes.map((_, i) => (
          <Box index={ i } key={ i } />
        ))}
      </section>
    </section>
  );
}

export default Game;
