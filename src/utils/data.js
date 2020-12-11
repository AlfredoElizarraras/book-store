import { v4 as uuid } from 'uuid';

export default [
  {
    id: uuid(),
    title: 'The Hunger Games',
    category: 'Action',
    progress: 64,
  },

  {
    id: uuid(),
    title: 'Dune',
    category: 'Science Fiction',
    progress: 8,
  },
  {
    id: uuid(),
    title: 'Capital in the Twenty-First Century',
    category: 'Economy',
    progress: 0,
  },
];
