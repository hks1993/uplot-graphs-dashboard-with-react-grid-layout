import { useContext } from "react";
import { ChartsContext } from "../../reducers/chartsContext";
import { MyPlotFunction } from "./graphWarpper";

export const GraphRendered = (props) => {
  const {
    state: { data },
  } = useContext(ChartsContext);
  return <MyPlotFunction {...props} data={data} />;
};
