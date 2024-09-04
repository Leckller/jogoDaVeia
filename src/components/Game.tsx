import Box from './Box';
import { useAppSelector } from '../hooks/reduxHooks';

function Game() {
  const { boxes } = useAppSelector((s) => s.Velha);

  return (
    <main className="grid grid-cols-3 grid-rows-3 w-60">
      {boxes.map((_, i) => (
        <Box index={ i } key={ i } />
      ))}
    </main>
  );
}

export default Game;
