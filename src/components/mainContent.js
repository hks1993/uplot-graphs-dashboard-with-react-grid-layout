// import styled from "styled-components";
import { useEffect, useContext, useRef, useState, useMemo } from "react";
import { ChartsContext } from "../reducers/chartsContext";
import { CustomGridLayout } from "./responsiveGrid";
import { startDataUpdate } from "../utils/getData";
import { Container, StyledButton } from "./styled/containerStyled";
export const MainContent = (props) => {
  const { dispatch } = useContext(ChartsContext);
  const [dataUpdate, setDataUpdate] = useState(false);
  const intervalRef = useMemo(
    () => ({
      current: null,
    }),
    []
  );
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
