import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { play } from '../redux/Reducers/Velha';

function Box({ index }: { index: number }) {
  const dispatch = useAppDispatch();
  const { boxes } = useAppSelector((s) => s.Velha);
  return (
    <button
      className="border size-20"
      onClick={ () => { dispatch(play(index)); } }
    >
      {boxes[index]}
    </button>
  );
}

export default Box;
