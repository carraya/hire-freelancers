export default (freelancers = [], action) => {
  switch (action.type) {
      case 'FETCH_ALL':
          return action.payload;
      default:
        return freelancers;
  }
}