// import styled from "styled-components";
import { useEffect, useState, useMemo } from "react";

import { CustomGridLayout } from "./responsiveGrid";
import { startDataUpdate } from "../utils/getData";
import { Container, StyledButton } from "./styled/containerStyled";
import { useDispatch } from "react-redux";
export const MainContent = (props) => {
  const dispatch = useDispatch();
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
