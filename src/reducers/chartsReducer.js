export const ChartReducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA": {
      console.count("dispached");
      return {
        ...state,
        data: action.payload,
      };
    }
    default:
      throw new Error("Invalid Action");
  }
};
