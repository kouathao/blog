export default (state = [], action) => {
  // Most time Reducers are done with Swith case statement
  switch (action.type) {
    case "FETCH_POSTS":
      return action.payload;
    default:
      return state;
  }
};
