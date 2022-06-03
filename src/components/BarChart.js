import styled from "styled-components";
import { select, scaleBand, axisBottom, axisRight, axisLeft, scaleLinear } from "d3";
import { useEffect } from "react";
import { mockData as data } from "./dataChart";
const SvgStyled = styled.svg`
  width: 100%;
  height: 100%;
`;


export const BarChart = () => {
  const margin = { top: 30, right: 30, bottom: 70, left: 70 };
  const width = 550;
  const height = 500;

  useEffect(() => {
    // TO ASK Tendría que hacer un map y que el valor dependa de los datos que llegan pero añadiendole un poco más al rango
    const maxSales = 7000;
    const svg = select("#chart")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const xScale = scaleBand()
      .range([0, width - margin.left - margin.right])
      .padding(0.3);
    const xScaleSecondary = scaleBand()
      .domain(["amountSales", "occupancyPercentage"])
      .range([0, xScale.bandwidth()]);
    const yScale = scaleLinear()
      .range([height - margin.top - margin.bottom, 0])
      .domain([0, maxSales]);
    const yScaleRight = scaleLinear()
      .range([height - margin.top - margin.bottom, 0])
      .domain([0, 100]);

    const xAxis = axisBottom(xScale).tickSizeOuter(0);
    const yAxis = axisLeft(yScale).ticks(10).tickSizeOuter(0);
    const yAxis2 = axisRight(yScaleRight).ticks(10).tickSizeOuter(0);

    xScale.domain(data.map(d => d.day));

    const weekday = svg.selectAll(".weekday")
      .data(data)
      .enter()
      .append("g")
      .attr("transform", d => `translate(${xScale(d.day)},0)`);

    /// Add bars
    weekday.selectAll("amountSales")
      .data(d => [d])
      .enter()
      .append("rect")
      .style("fill", "#135846")
      .attr("x", xScaleSecondary("amountSales"))
      .attr("y", d => yScale(d.amountSales))
      .attr("width", 15)
      .attr("height", d => {
        return height - margin.top - margin.bottom - yScale(d.amountSales);
      });

    weekday.selectAll("ocuppancyPercentage")
      .data(d => [d])
      .enter()
      .append("rect")
      .style("fill", "#e23428")
      .attr("x", 15)
      .attr("y", d => yScaleRight(d.occupancyPercentage))
      .attr("width", 15)
      .attr("height", d => {
        return height - margin.top - margin.bottom - yScaleRight(d.occupancyPercentage);
      });

    // Add the X Axis
    svg.append("g")
      .attr("transform", `translate(0,${height - margin.top - margin.bottom})`)
      .call(xAxis);
    // Add the Y Axis
    svg.append("g")
      .call(yAxis);
    svg.append("g")
      .attr("transform", `translate(${width - margin.right - margin.left}, 0)`)
      .call(yAxis2);


  }, []);
  return (
    <SvgStyled margin={margin} id="chart">
    </SvgStyled>
  );
};
