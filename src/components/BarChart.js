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
  const width = 460 - margin.left - margin.right;
  const height = 400 - margin.top - margin.bottom;

  useEffect(() => {
    const maxSales = 6000;
    const svg = select("#chart")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    //Custom Axis
    // Add X axis
    const x = scaleBand()
      .range([0, width])
      .domain(data.map(value => value.day))
      .padding(0.3);
    svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(axisBottom(x))
      .selectAll("text")
      .attr("transform", "translate(-10,0)")
      .attr("width", 50)
      .style("text-anchor", "start");
    const xSecondary = scaleBand(); //For the other bar chart
    svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(axisBottom(xSecondary));

    // Add Y axis
    const yRight = scaleLinear()
      .domain([0, 100])
      .range([height, 0]);
    svg.append("g")
      .attr("transform", "translate(" + width + ",0)")
      .call(axisRight(yRight))
      .selectAll("text")
      .style("text-anchor", "start");


    const yLeft = scaleLinear()
      .domain([0, maxSales])
      .range([height, 0]);
    svg.append("g")
      .call(axisLeft(yLeft))
      .selectAll("text")
      .style("text-anchor", "end");

    //Weekday
    let weekday = svg.selectAll("weekday")
      .data(data)
      .enter().append("g")
      .attr("class", "week_day");

    // Add Amount Sales bar
    weekday.selectAll("amount-sales")
      .data(data => [data])
      .enter()
      .append("rect")
      .style("fill", "#135846")
      .attr("x", value => value.amountSales + 10)
      .attr("y", value => value.amountSales - yLeft)
      .attr("width", x.bandwidth())
      .attr("height", d => {
        return height - margin.top - margin.bottom - d.amountSales;
      });

    //Add occupancyPercentage
    weekday.selectAll("occupancy-percentage")
      .data(data => [data])
      .enter()
      .append("rect")
      .attr("class", "bar occupancy")
      .style("fill", "#e23428")
      .attr("x", xSecondary("occupancy"))
      .attr("y", d => yRight(d.occupancyPercentage))
      .attr("width", x.bandwidth())
      .attr("height", d => {
        return height - margin.top - margin.bottom - d.occupancyPercentage;
      });

  }, []);
  return (
    <SvgStyled margin={margin} id="chart">
    </SvgStyled>
  );
};
