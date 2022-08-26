
import { cleanup, render, screen } from '@testing-library/react';
import { ClientCard } from '../components/client-card';
import { IClient } from '../models/client.interface';

afterEach(cleanup);

it('Show the correct data in the card', () => {
  const client: IClient = {
    id: 1, 
    fecha: "06-06-2022", 
    nombres: "Carlos Guerra Carrillo", 
    monto: 63.9, 
    pais: "Peru", 
    tipo: "type", 
    estado: 0
  }
  render(
    <ClientCard {...client} />,
  );
  expect(screen.getByText('Carlos Guerra Carrillo')).toBeTruthy();
  expect(screen.getByText('06-06-2022')).toBeTruthy();
  expect(screen.getByText('Peru')).toBeTruthy();
  expect(screen.getByText(63.9)).toBeTruthy();
  expect(screen.getByText("type")).toBeTruthy();
  expect(screen.getByText("INACTIVO")).toBeTruthy();

});