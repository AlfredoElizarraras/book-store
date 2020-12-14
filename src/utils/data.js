import { v4 as uuid } from 'uuid';

export default {
  books: [
    {
      id: uuid(),
      title: 'The Hunger Games',
      category: 'Action',
      progress: 64,
      author: 'Suzanne Collins',
      progressMeasureValue: 'Chapter 17',
      progressMeasure: 'chapter',
      maxProgressValue: 0,
      currentProgressValue: 0,
    },

    {
      id: uuid(),
      title: 'Dune',
      category: 'Science Fiction',
      progress: 8,
      author: 'Frank Herbert',
      progressMeasureValue: 'Chapter 3: "A Lesson Learned"',
      progressMeasure: 'chapter',
      maxProgressValue: 0,
      currentProgressValue: 0,
    },

    {
      id: uuid(),
      title: 'Capital in the Twenty-First Century',
      category: 'Economy',
      progress: 0,
      author: 'Suzanne Collins',
      progressMeasure: 'chapter',
      progressMeasureValue: 'Introduction',
      maxProgressValue: 0,
      currentProgressValue: 0,
    },
  ],
};
