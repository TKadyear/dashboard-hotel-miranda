import styled from "styled-components";
import { select, scaleBand, axisBottom, axisRight, axisLeft, scaleLinear } from "d3";
import { useEffect, useRef } from "react";
const SvgStyled = styled.svg`
  border: 1px solid red;
  width: 100%;
  height: 100%;
`;


// set the dimensions and margins of the graph

export const BarChart = () => {
  const svgRef = useRef();
  // const wrapperRef = useRef();
  const data = [12, 5, 6, 6, 9, 10];
  const axisX = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const margin = { top: 30, right: 30, bottom: 70, left: 60 };
  const width = 460 - margin.left - margin.right;
  const height = 400 - margin.top - margin.bottom;

  useEffect(() => {
    const svg = select(svgRef.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");
    // Add X axis
    const x = scaleBand()
      .range([0, width])
      .domain(axisX)
      .padding(0.2);
    svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(axisBottom(x))
      .selectAll("text")
      .attr("transform", "translate(-10,0)")
      .attr("width", 50)
      .style("text-anchor", "end");

    // Add Y axis
    const yRight = scaleLinear()
      .domain([0, 100])
      .range([height, 0]);
    svg.append("g")
      .call(axisRight(yRight))
      .selectAll("text")
      .attr("transform", "translate(" + width + ",0)")
      .style("text-anchor", "start");


    const yLeft = scaleLinear()
      .domain([0, 1200])
      .range([height, 0]);
    svg.append("g")
      .call(axisLeft(yLeft))
      .selectAll("text")
      .style("text-anchor", "end");
    //Add Bart
    svg
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", 15) //This property make the space between each rect
      .attr("y", value => value) // 150 Represent the total height of the svg, so If you rest the value of the bar/rect make
      .attr("width", x.bandwidth())
      .attr("height", (value) => height - value)
      .attr("fill", "green");

  }, []);
  return (
    <SvgStyled margin={margin} ref={svgRef}>
    </SvgStyled>
  );
};
