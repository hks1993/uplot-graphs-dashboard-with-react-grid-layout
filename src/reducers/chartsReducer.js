export const ChartReducer = (
  state = {
    data: [],
    firstChartData: [],
    secondChartData: [],
  },
  action
) => {
  switch (action.type) {
    case "SET_DATA":
      return {
        ...state,
        data: action.payload,
      };

    case "SET_DATA_FIRST": {
      return {
        ...state,
        firstChartData: action.payload,
      };
    }
    case "SET_DATA_SECOND": {
      return {
        ...state,
        secondChartData: action.payload,
      };
    }
    default:
      return state;
  }
};
