import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import SearchBar from './';

test('Existe Placeholder', () => {
  const { getByPlaceholderText } = render(<SearchBar />);
  expect(getByPlaceholderText('Procure por heróis')).toBeInTheDocument();
});

test('Atualizou valor do campo', () => {
  const { getByPlaceholderText } = render(<SearchBar onChange={() => jest.fn()} />);

  fireEvent.change(getByPlaceholderText('Procure por heróis'), {
    target: { value: 'magik' },
  });
  expect(getByPlaceholderText('Procure por heróis').value).toBe('magik');
});
