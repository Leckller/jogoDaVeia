import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { play } from '../../redux/Reducers/Velha';

function Box({ index }: { index: number }) {
  const dispatch = useAppDispatch();
  const { boxes, disable } = useAppSelector((s) => s.Velha);
  return (
    <button
      className="border size-20"
      disabled={ boxes[index] !== null || disable }
      onClick={ () => { dispatch(play(index)); } }
    >
      <p className="text-2xl font-extrabold">
        {boxes[index]}
      </p>
    </button>
  );
}

export default Box;
