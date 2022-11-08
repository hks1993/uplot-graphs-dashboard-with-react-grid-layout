// import styled from "styled-components";
import { useEffect, useContext, useRef, useState } from "react";
import { ChartsContext } from "../reducers/chartsContext";
import { CustomGridLayout } from "./responsiveGrid";
import { getPoints } from "../utils/getData";
import { Container, StyledButton } from "./styled/containerStyled";

const startDataUpdate = function (dispatch, intervalRef) {
  const dispatchData = (graph) => {
    // console.count("startDataUpdateInterval");
    const newData = getPoints(this[graph].startIndex, range);
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
  const range = 5;
  dispatchData("first");
  dispatchData("second");
  intervalRef.current = setInterval(() => {
    dispatchData("first");
    dispatchData("second");
  }, 1000);
}.bind({
  first: { data: [[], [], []], startIndex: 0 },
  second: { data: [[], [], []], startIndex: 50 },
});
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
    <Container>
      <StyledButton
        onClick={() => {
          setDataUpdate(!dataUpdate);
        }}
        color={!dataUpdate ? "primary" : "secondary"}
      >
        {dataUpdate ? "Pause" : "Start"}
      </StyledButton>
      <CustomGridLayout />
    </Container>
  );
};
