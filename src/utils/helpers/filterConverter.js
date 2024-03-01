const listFilterConverter = (filter) => {
  if (filter === '최신순') {
    return 'createdAt';
  }
  return 'reactionCount';
};

export default listFilterConverter;
