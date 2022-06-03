import styled from "styled-components";
import { select, scaleBand, axisBottom, axisRight, axisLeft, scaleLinear } from "d3";
import { useEffect } from "react";
import { mockData as data } from "./dataChart";
const SvgStyled = styled.svg`
  width: 100%;
  height: 100%;
`;


export const BarChart = () => {
  const margin = { top: 30, right: 30, bottom: 70, left: 60 };
  const width = 500;
  const height = 400;

  useEffect(() => {
    // TO ASK Tendría que hacer un map y que el valor dependa de los datos que llegan pero añadiendole un poco más al rango
    const maxSales = 7000;
    const svg = select("#chart")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    //Custom Axis
    // Add X axis
    const xScale = scaleBand()
      .range([0, width])
      .domain(data.map(value => value.day))
      .padding(0.3);

    const axisX = axisBottom(xScale).ticks(10);
    svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(axisX)
      .selectAll("text")
      .attr("transform", "translate(-10,0)")
      .attr("width", 50)
      .style("text-anchor", "start");
    const xScaleSecondary = scaleBand().domain(["amountSales", "ocuppancyPercetange"]);

    svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(axisX);

    // Add Y axis
    const yRightScale = scaleLinear()
      .domain([0, 100])
      .range([height, 0]);

    const yRightAxis = axisRight(yRightScale).ticks(10).tickSizeOuter(0);
    svg.append("g")
      .attr("transform", "translate(" + width + ",0)")
      .call(yRightAxis)
      .selectAll("text")
      .style("text-anchor", "start");


    const yLeftScale = scaleLinear()
      .domain([0, maxSales])
      .range([height, 0]);

    const yLeftAxis = axisLeft(yLeftScale).ticks(10).tickSizeOuter(0);
    svg.append("g")
      .call(yLeftAxis)
      .selectAll("text")
      .style("text-anchor", "end");

    //Weekday
    let weekday = svg.selectAll("weekday")
      .data(data)
      .enter()
      .attr("transform", data => `translate(${xScale(data.weekday)},0)`)
      .append("g");

    // Add Amount Sales bar
    weekday.selectAll("amount-sales")
      .data(data => [data])
      .enter()
      .append("rect")
      .style("fill", "#135846")
      .attr("x", xScaleSecondary("amountSales"))
      .attr("y", value => yLeftScale(value.amountSales))
      .attr("width", xScale.bandwidth())
      .attr("height", d => {
        return height - margin.top - margin.bottom - d.amountSales;
      });

    // //Add occupancyPercentage
    // weekday.selectAll("occupancy-percentage")
    //   .data(data => [data])
    //   .enter()
    //   .append("rect")
    //   .attr("class", "bar occupancy")
    //   .style("fill", "#e23428")
    //   .attr("x", xSecondary("occupancy"))
    //   .attr("y", d => yRight(d.occupancyPercentage))
    //   .attr("width", x.bandwidth())
    //   .attr("height", d => {
    //     return height - margin.top - margin.bottom - d.occupancyPercentage;
    //   });

  }, []);
  return (
    <SvgStyled margin={margin} id="chart">
    </SvgStyled>
  );
};
