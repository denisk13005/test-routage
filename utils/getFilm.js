import { films } from '@/mocks/films.json';

export const getFilm = (id) => {
  const film = films.films.filter(el => el.id === id)
  console.debug(film);
  return film
}
