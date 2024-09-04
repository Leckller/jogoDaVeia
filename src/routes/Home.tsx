import Game from '../components/Home/Game';
import History from '../components/Home/History';

function Home() {
  return (
    <main className="flex flex-col justify-between items-center gap-10">
      <Game />
      <History />
    </main>
  );
}

export default Home;
