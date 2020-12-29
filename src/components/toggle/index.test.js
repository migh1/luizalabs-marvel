import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import Toggle from './';

test('Atributo Active=true renderiza o toggle ativo', () => {
  const { getByAltText } = render(<Toggle active />);
  expect(getByAltText('Botão toggle ligado')).toBeInTheDocument();
});

test('Atributo Active=false renderiza o toggle inativo', () => {
  const { getByAltText } = render(<Toggle />);
  expect(getByAltText('Botão toggle desligado')).toBeInTheDocument();
});

test('OnClick retorna true quando Toggle desligado', async () => {
  const mockJestFn = jest.fn();
  const { getByAltText } = render(<Toggle onClick={mockJestFn} />);

  fireEvent.click(getByAltText('Botão toggle desligado'));

  await waitFor(() => {
    expect(mockJestFn.mock.calls[0][0]).toBeTruthy();
  });
});

test('OnClick retorna false quando Toggle ligado', async () => {
  const mockJestFn = jest.fn();
  const { getByAltText } = render(<Toggle active onClick={mockJestFn} />);

  fireEvent.click(getByAltText('Botão toggle ligado'));

  await waitFor(() => {
    expect(mockJestFn.mock.calls[0][0]).toBeFalsy();
  });
});
