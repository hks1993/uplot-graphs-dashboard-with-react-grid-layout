import { debounce } from "./debounce";
export function getSize(DOMElement) {
  return {
    width: Math.max(DOMElement.clientWidth, 200),
    height: DOMElement.clientHeight - 100,
  };
}

// exports a debounced setGraph function that can reference the graph
export const getDebouncedSetgraph = () =>
  debounce(function (graphRef) {
    this.graph.setSize(getSize(graphRef));
  });
