// import styled from "styled-components";
import { useEffect, useContext, useRef, useState } from "react";
import { ChartsContext } from "../reducers/chartsContext";
import { CustomGridLayout } from "./responsiveGrid";
import { getPoints } from "../utils/getData";
let count = 0;
const startDataUpdate = function (dispatch, intervalRef) {
  const dispatchData = () => {
    // console.count("startDataUpdateInterval");
    const newData = getPoints(this.startIndex, range);
    this.startIndex = [...newData[0]].pop();
    this.data[0] = [...this.data[0], ...newData[0]];
    this.data[1] = [...this.data[1], ...newData[1]];
    this.data[2] = [...this.data[2], ...newData[2]];
    dispatch({
      type: "SET_DATA",
      payload: [...this.data],
    });
  };
  const range = 5;
  dispatchData();
  intervalRef.current = setInterval(dispatchData, 1000);
}.bind({ data: [[], [], []], startIndex: 0 });
export const MainContent = (props) => {
  const { dispatch } = useContext(ChartsContext);
  const [dataUpdate, setDataUpdate] = useState(false);
  const intervalRef = useRef(null);
  useEffect(() => {
    if (dataUpdate) {
      if (intervalRef.current === null) {
        startDataUpdate(dispatch, intervalRef);
        return () => {
          if (intervalRef.current !== null) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
          }
        };
      }
    } else {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }
    return;
  }, [dataUpdate]);
  return (
    <>
      <CustomGridLayout />
      <button
        onClick={() => {
          setDataUpdate(!dataUpdate);
        }}
      >
        {dataUpdate ? "Pause" : "Start"}
      </button>
    </>
  );
};

// const data = [
//   [1, 2, 3, 4, 5, 6, 7],
//   [40, 43, 60, 65, 71, 73, 80],
//   [18, 24, 37, 55, 55, 60, 63],
// ];
// const data2 = [
//   [...data[0], ...[7, 8, 9, 10, 11, 12, 13]],
//   [...data[1], ...data[2]],
//   [...data[2], ...data[1]],
//   ,
// ];
// dispatch({
//   type: "SET_DATA",
//   payload: data,
// });
// setTimeout(() => {
//   dispatch({
//     type: "SET_DATA",
//     payload: data2,
//   });
// }, 3000);
