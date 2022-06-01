import styled from "styled-components";
import { select } from "d3";
import { useEffect, useRef } from "react";
const WrapperSvg = styled.div`
  border: 1px solid red;
`;
export const BarChart = () => {
  const svgRef = useRef();
  const wrapperRef = useRef();
  const data = [12, 5, 6, 6, 9, 10];

  useEffect(() => {
    const svg = select(svgRef.current);
    svg
      .selectAll("circle")
      .data(data)
      .join(
        enter => enter.append("circle")
          .attr("class", "new"),
        update => update.attr("class", "updated"),
        exit => exit.remove()
      )
      .attr("stroke", "red")
      .attr("r", value => value)
      .attr("cx", value => value * 2)
      .attr("cy", value => value * 2);
  }, [data]);
  return (<WrapperSvg ref={wrapperRef}>
    <svg ref={svgRef}>
    </svg>
  </WrapperSvg>);
};
