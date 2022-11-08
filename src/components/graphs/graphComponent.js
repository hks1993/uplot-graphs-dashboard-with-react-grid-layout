import { useContext } from "react";
import { ChartsContext } from "../../reducers/chartsContext";
import { MyPlotFunction } from "./graphWarpper";
import { useSelector } from "react-redux";

export const GraphRendered = (props) => {
  // const {
  //   state: { firstChartData, secondChartData },
  // } = useContext(ChartsContext);
  const firstChartData = useSelector((state) => state.firstChartData);
  const secondChartData = useSelector((state) => state.secondChartData);
  const getRelevantGraphData = () => {
    if (props.graphName === "first") {
      return firstChartData;
    }
    if (props.graphName === "second") {
      return secondChartData;
    }
    return [];
  };
  return <MyPlotFunction {...props} data={getRelevantGraphData()} />;
};
