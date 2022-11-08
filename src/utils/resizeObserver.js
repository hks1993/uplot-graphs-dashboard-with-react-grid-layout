import { getDebouncedSetgraph } from "./graphsFunctions";
export const resizeObserverInstance = new ResizeObserver((events) => {
  const filteredEvents = events;
  filteredEvents.forEach((event) => {
    const rect = {
      clientWidth: event.borderBoxSize[0].inlineSize,
      clientHeight: event.borderBoxSize[0].blockSize,
    };
    const graphInstance = event.target?.graph;
    window.requestAnimationFrame(() => {
      getDebouncedSetgraph()({ graph: graphInstance }, rect);
    });
  });
});
