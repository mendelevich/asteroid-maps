const React = require('react');
const ReactFauxDOM = require('react-faux-dom');
const d3 = require('d3');

class AsteroidMap extends React.Component {
  drawChart() {
    const div = new ReactFauxDOM.createElement('div');

    let data = this.props.data;
    const asteroidList = data.near_earth_objects['2015-09-08'];
    const magnitude = asteroidList.map(x => x.absolute_magnitude_h);

    const w = 960;
    const h = 600;
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
      .attr('x', (d, i) => i * (w / data.length))
      .attr('y', d => h - d)
      .attr('width', w / data.length - padding)
      .attr('height', d => d);

    return div.toReact();
  }

  render() {
    return this.drawChart();
  }
}

export default AsteroidMap;
