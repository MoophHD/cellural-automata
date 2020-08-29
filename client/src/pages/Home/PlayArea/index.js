import React, { useEffect } from "react";
import styled from "styled-components";
import Grid from "../../../components/Grid";

function PlayArea({ grid, running, options }) {
  useEffect(() => {}, [running, options]);
  return (
    <Container>
      <Grid running={running} options={options} grid={grid} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default PlayArea;
