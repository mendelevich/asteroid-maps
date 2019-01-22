const React = require('react');
const ReactFauxDOM = require('react-faux-dom');
const d3 = require('d3');

const neoData = require('../../data/defaultIdData');

class SingleNeoLineGraph extends React.Component {
  drawChart() {
    const div = new ReactFauxDOM.createElement('div');
    const margin = { top: 20, right: 20, bottom: 30, left: 50 },
      width = 960 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom;

    const parseTime = d3.timeParse('%Y-%m-%d');
    const today = new Date();

    const closeApproach = neoData.close_approach_data;
    let missDistances = closeApproach.map(x => ({
      date: parseTime(x.close_approach_date),
      missDistanceKm: +x.miss_distance.kilometers / 1000000,
    }));

    // Filter list to show the last 50 years and future 20 years if too long.
    if (missDistances.length > 100) {
      missDistances = missDistances.filter(x => {
        const yearDiff = x.date.getFullYear() - today.getFullYear();
        return yearDiff < 20 && yearDiff > -50;
      });
    }

    const tooltip = d3
      .select('body')
      .append('div')
      .attr('class', 'tooltip')
      .style('opacity', 0)
      .style('position', 'absolute')
      .style('text-align', 'center')
      .style('width', '100px')
      .style('height', '28px')
      .style('padding', '2px')
      .style('font', '12px sans-serif')
      .style('background', 'lightsteelblue')
      .style('border', '0px')
      .style('border-radius', '8px')
      .style('pointer-events', 'none');

    const x = d3.scaleTime().range([0, width]);
    const y = d3.scaleLinear().range([height - 40, 0]);

    const svg = d3
      .select('body')
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    x.domain(d3.extent(missDistances, d => d.date));
    y.domain([0, d3.max(missDistances, d => d.missDistanceKm)]);

    // Create line
    const valueline = d3
      .line()
      .x(d => x(d.date))
      .y(d => y(d.missDistanceKm));

    // Add line
    svg
      .append('path')
      .data([missDistances])
      .attr('class', 'line')
      .attr('d', valueline)
      .attr('fill', 'none')
      .style('stroke', 'white');

    // Add scatterplot
    svg
      .selectAll('dot')
      .data(missDistances)
      .enter()
      .append('circle')
      .attr('r', 3.5)
      .attr('cx', d => x(d.date))
      .attr('cy', d => y(d.missDistanceKm))
      .attr('fill', '#2FE6DE')
      .on('mouseover', d => {
        tooltip
          .transition()
          .duration(200)
          .style('opacity', 0.9);
        tooltip
          .html(d.date.toDateString())
          .style('left', d3.event.pageX - 50 + 'px')
          .style('top', d3.event.pageY - 50 + 'px');
      })
      .on('mouseout', d =>
        tooltip
          .transition()
          .duration(500)
          .style('opacity', 0)
      );

    // add xAxis
    svg
      .append('g')
      .attr('transform', `translate(0,${height - 40})`)
      .call(d3.axisBottom(x))
      .attr('class', 'axisWhite');

    // Add yAxis
    svg
      .append('g')
      .call(d3.axisLeft(y))
      .attr('class', 'axisWhite');

    // Add line showing today
    svg
      .append('line')
      .style('stroke', '#DC6ACF')
      .attr('x1', x(today))
      .attr('x2', x(today))
      .attr('y1', height)
      .attr('y2', 0);

    // xAxis label
    svg
      .append('text')
      .attr('transform', 'translate(' + width / 2 + ' ,' + height + ')')
      .style('text-anchor', 'middle')
      .style('fill', 'white')
      .text('Year');

    // yAxis label
    svg
      .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', 0 - margin.left)
      .attr('x', 0 - height / 2)
      .attr('dy', '1em')
      .style('text-anchor', 'middle')
      .style('fill', 'white')
      .text('Miss distance (10⁶ km)');

    return div.toReact();
  }

  render() {
    return this.drawChart();
  }
}

export default SingleNeoLineGraph;
