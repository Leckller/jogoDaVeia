import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Game from '../components/Home/Game';
import { store } from '../redux/store';

describe('Game Logic', () => {
  test('Testa vitória do "X"', async () => {
    render(<Provider store={ store }><Game /></Provider>);
    console.log(screen.getByText('Vez do O'));
  });
});
