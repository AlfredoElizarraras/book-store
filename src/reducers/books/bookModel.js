const bookModel = payload => {
  const { id, title, category } = payload;
  return ({
    id,
    title,
    category,
    progress: 0,
    author: 'No Author',
    progressMeasure: 'chapter',
    progressMeasureValue: 'Introduction',
    maxProgressValue: 0,
    currentProgressValue: 0,
  });
};

export default bookModel;
