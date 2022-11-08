import React, { useEffect, useRef, useContext } from "react";
import { ChartsContext } from "../../reducers/chartsContext";
import { getUplot } from "./uplot";
import { defautOptions } from "./zoomFunction";
import "uplot/dist/uPlot.min.css";
import styled from "styled-components";
import { getDebouncedSetgraph, getSize } from "../../utils/graphsFunctions";
import { resizeObserverInstance } from "../../utils/resizeObserver";

const GraphContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  padding: 1rem;
  > div {
    margin-top: 0.5rem;
    overflow: hidden;
  }
`;
const data = [
  [1, 2, 3, 4, 5, 6, 7],
  [40, 43, 60, 65, 71, 73, 80],
  [18, 24, 37, 55, 55, 60, 63],
];

export const MyPlotFunction = (props) => {
  const graphRef = useRef(null);
  const graphInstance = useRef(null);
  const { data } = props;

  useEffect(() => {
    if (graphRef.current !== null && data.length) {
      if (graphInstance.current === null) {
        const gridDimention = getSize(graphRef.current);

        graphInstance.current = new getUplot()(
          { ...defautOptions, ...props.options, ...gridDimention },
          data,
          graphRef.current
        );
        graphRef.current.graph = graphInstance.current;
        resizeObserverInstance.observe(graphRef.current, { box: "border-box" });

        return () => {
          if (graphInstance.current) {
            graphInstance.current.destroy();
            graphInstance.current = null;
          }
          resizeObserverInstance.disconnect();
        };
      }
      if (graphInstance.current !== null) {
        window.requestAnimationFrame(() => graphInstance.current.setData(data));
      }
    }
  }, [data]);

  return (
    <GraphContainer
      id={`${props.id}`}
      className="graph-container"
      ref={graphRef}
    />
  );
};
