import React, { useState } from "react";
import { WidthProvider, Responsive } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { GraphRendered } from "./graphs/graphComponent";
import { saveToLS, getFromLS } from "../utils/localStorege";
import { Container } from "./styled/containerStyled";
const ReactGridLayout = WidthProvider(Responsive);
const originalLayouts = getFromLS("layouts") || [];

const defaultProps = {
  className: "layout",
  cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
  rowHeight: 30,
};

export const CustomGridLayout = (props) => {
  const [layouts, setLayouts] = useState(
    JSON.parse(JSON.stringify(originalLayouts))
  );
  const [reRenderGraph, setReRenderGraph] = useState(false);

  const resetLayout = () => {
    setLayouts({});
  };

  const onLayoutChange = (layout, layouts) => {
    saveToLS("layouts", layouts);
    setLayouts(layouts);
    setReRenderGraph(!reRenderGraph);
    // props.onLayoutChange(layout); // updates status display
  };
  return (
    <Container>
      <button onClick={resetLayout}>Reset Layout</button>
      <ReactGridLayout
        {...defaultProps}
        layouts={layouts}
        onLayoutChange={(layout, layouts) => onLayoutChange(layout, layouts)}
      >
        <div key="1" data-grid={{ w: 5, h: 8, x: 0, y: 0, minW: 2, minH: 3 }}>
          <GraphRendered reRenderGraph={reRenderGraph} id="graph 1" />
        </div>
        <div key="2" data-grid={{ w: 5, h: 8, x: 6, y: 0, minW: 2, minH: 3 }}>
          {/* <GraphRendered reRenderGraph={reRenderGraph} id="graph 2" /> */}
        </div>
      </ReactGridLayout>
    </Container>
  );
};
