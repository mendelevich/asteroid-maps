const React = require('react');
const ReactFauxDOM = require('react-faux-dom');
const d3 = require('d3');

class AsteroidMap extends React.Component {
  drawChart() {
    const div = new ReactFauxDOM.createElement('div');
    let neoData = this.props.neoData;

    const neoDate = Object.keys(neoData.near_earth_objects)[0];
    const nearEarthObjects = neoData.near_earth_objects[neoDate];

    const diameterKm = nearEarthObjects.map(x => {
      const dataObj = {
        diameter:
          (x.estimated_diameter.kilometers.estimated_diameter_max +
            x.estimated_diameter.kilometers.estimated_diameter_min) /
          2,
        name: x.name,
      };

      return dataObj;
    });

    const closeApproach = nearEarthObjects.map(x => {
      const dataObj = {
        missDistanceKm:
          x.close_approach_data[0].miss_distance.kilometers / 1000000,
        name: x.name,
        potentialHazard: x.is_potentially_hazardous_asteroid,
      };

      return dataObj;
    });

    const width = 960;
    const height = 300;

    const scaleDist = d3
      .scaleLinear()
      .domain([
        d3.min(closeApproach, d => +d.missDistanceKm),
        d3.max(closeApproach, d => +d.missDistanceKm),
      ])
      .range([50, width - 50]);

    const scaleRadius = d3
      .scaleLinear()
      .domain([
        d3.min(diameterKm, d => +d.diameter),
        d3.max(diameterKm, d => +d.diameter),
      ])
      .range([5, 20]);

    const xAxis = d3.axisBottom(scaleDist);

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

    const svg = d3
      .select(div)
      .append('svg')
      .attr('width', width)
      .attr('height', height);

    // Add circles
    const nodes = svg
      .selectAll('circle')
      .data(nearEarthObjects)
      .enter()
      .append('circle')
      .attr('cx', (d, i) => scaleDist(closeApproach[i].missDistanceKm))
      .attr('cy', () => height / 2)
      .attr('r', (d, i) => scaleRadius(diameterKm[i].diameter))
      .attr('class', d =>
        d.id === this.props.selectedNeo ? 'selected-circle' : ''
      )
      .attr('fill', d =>
        d.is_potentially_hazardous_asteroid ? '#DC6ACF' : 'white'
      )
      .attr('stroke', d =>
        d.is_potentially_hazardous_asteroid ? 'none' : '#646464'
      )
      .attr('opacity', d => 0.7)
      .on('mouseover', d => {
        tooltip
          .transition()
          .duration(200)
          .style('opacity', 0.9);
        tooltip
          .html(d.name)
          .style('left', d3.event.pageX - 50 + 'px')
          .style('top', d3.event.pageY - 50 + 'px');
      })
      .on('mouseout', d =>
        tooltip
          .transition()
          .duration(500)
          .style('opacity', 0)
      )
      .on('click', d => {
        this.props.selectNeo(d.id);
        tooltip
          .transition()
          .duration(500)
          .style('opacity', 0);
      });

    // add xAxis
    svg
      .append('g')
      .attr('transform', `translate(0,${height - 40})`)
      .attr('class', 'axisWhite')
      .call(xAxis);

    // xAxis label
    svg
      .append('text')
      .attr('transform', 'translate(' + width / 2 + ' ,' + height + ')')
      .style('text-anchor', 'middle')
      .style('fill', 'white')
      .text('Miss distance (10⁶ km)');

    return div.toReact();
  }

  render() {
    return this.drawChart();
  }
}

export default AsteroidMap;
