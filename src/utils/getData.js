import Prando from "prando";
const random1 = new Prando("first");
const random2 = new Prando("second");
export function getPoints(startIndex, chunkSize, range = 12) {
  const indexArr = [];
  const firstArr = [];
  const secondArr = [];
  for (let i = 1; i <= chunkSize; i++) {
    indexArr.push(startIndex + i * range);
    firstArr.push(random1.nextInt(0, 100));
    secondArr.push(random2.nextInt(0, 100));
  }

  return [indexArr, firstArr, secondArr];
}

export const startDataUpdate = function (dispatch, intervalRef) {
  const frequency = 5;
  const dispatchData = (graph) => {
    const newData = getPoints(this[graph].startIndex, frequency);
    this[graph].startIndex = [...newData[0]].pop();
    this[graph].data[0] = [...this[graph].data[0], ...newData[0]];
    this[graph].data[1] = [...this[graph].data[1], ...newData[1]];
    this[graph].data[2] = [...this[graph].data[2], ...newData[2]];
    if (graph === "first") {
      dispatch({
        type: "SET_DATA_FIRST",
        payload: [...this[graph].data],
      });
    }
    if (graph === "second") {
      dispatch({
        type: "SET_DATA_SECOND",
        payload: [...this[graph].data],
      });
    }
  };
  dispatchData("first");
  dispatchData("second");
  intervalRef.current = setInterval(() => {
    dispatchData("first");
    dispatchData("second");
  }, 1000);
}.bind({
  first: { data: [[], [], []], startIndex: Math.floor(Date.now() / 1e3) },
  second: { data: [[], [], []], startIndex: Math.floor(Date.now() / 1e3) },
});
