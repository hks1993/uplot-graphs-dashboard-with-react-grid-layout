import React, { useEffect, useRef, useContext } from "react";
import { ChartsContext } from "../../reducers/chartsContext";
import { getUplot } from "./uplot";
import { defautOptions } from "./zoomFunction";
import "uplot/dist/uPlot.min.css";
import styled from "styled-components";
import { getDebouncedSetgraph, getSize } from "../../utils/graphsFunctions";

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

export const MyPlotFunction = (props) => {
  const graphRef = useRef(null);
  const graphInstance = useRef(null);
  const {
    state: { data },
  } = useContext(ChartsContext);

  // useEffect(() => {
  //   if (graph) {
  //     window.requestAnimationFrame(() => {
  //       //getDebouncedSetgraph()({ graph }, rect);
  //       console.log("called", props.id);
  //       getgetDebouncedSetgraph()()({ graph }, graphRef.current);
  //     });
  //   }
  // }, [props.reRenderGraph]);
  useEffect(() => {
    if (graphRef.current !== null) {
      if (graphInstance.current === null) {
        const gridDimention = getSize(graphRef.current);

        graphInstance.current = new getUplot()(
          { ...defautOptions, ...props.options, ...gridDimention },
          data,
          graphRef.current
        );

        var resizeObserver = new ResizeObserver((event) => {
          const filteredEvents = event.filter((element) => {
            return element.target.id === props.id;
          });
          filteredEvents.forEach((event) => {
            const rect = {
              clientWidth: event.borderBoxSize[0].inlineSize,
              clientHeight: event.borderBoxSize[0].blockSize,
            };

            window.requestAnimationFrame(() => {
              getDebouncedSetgraph()({ graph: graphInstance.current }, rect);
            });
          });
        });
        resizeObserver.observe(graphRef.current, { box: "border-box" });

        return () => {
          if (graphInstance.current) {
            graphInstance.current.destroy();
            graphInstance.current = null;
          }
          resizeObserver.disconnect();
        };
      }
    }
  }, []);
  useEffect(() => {
    console.count("set Data" + props.id);
    if (graphInstance.current !== null) {
      window.requestAnimationFrame(() => graphInstance.current.setData(data));
    }
  }, [data]);

  useEffect(() => {}, [data]);

  return (
    <GraphContainer
      id={`${props.id}`}
      className="graph-container"
      ref={graphRef}
    />
  );
};
