function backgroundColorConveter(color) {
  switch (color) {
    case 'beige':
      return '--Orange-200';

    case 'blue':
      return '--Blue-200';

    case 'green':
      return '--Green-200';

    default:
      return '--Purple-200';
  }
}

export default backgroundColorConveter;
