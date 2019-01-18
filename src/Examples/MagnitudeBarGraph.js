const React = require('react');
const ReactFauxDOM = require('react-faux-dom');
const d3 = require('d3');

class MagnitudeBarGraph extends React.Component {
  drawChart() {
    const div = new ReactFauxDOM.createElement('div');

    let data = this.props.data;
    const asteroidList = data.near_earth_objects['2015-09-08'];
    const magnitude = asteroidList.map(x => x.absolute_magnitude_h);

    const w = 600;
    const h = 250;
    const padding = 4;

    console.log(magnitude);

    const svg = d3
      .select(div)
      .append('svg')
      .attr('width', w)
      .attr('height', h);

    svg
      .selectAll('text')
      .data(magnitude)
      .enter()
      .append('rect')
      .attr('x', (d, i) => i * (w / magnitude.length))
      .attr('y', d => h - d * 4)
      .attr('width', w / magnitude.length - padding)
      .attr('height', d => d * 4)
      .attr('fill', 'steelblue');

    svg
      .selectAll('text')
      .data(magnitude)
      .enter()
      .append('text')
      .text(d => d)
      .attr(
        'x',
        (d, i) =>
          i * (w / magnitude.length) + (w / magnitude.length - padding) / 2
      )
      .attr('y', d => h - d * 4 + 20);

    return div.toReact();
  }

  render() {
    return this.drawChart();
  }
}

export default MagnitudeBarGraph;
