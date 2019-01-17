import FrequencyChart from './Examples/FrequencyChart';
import AsteroidMap from './Examples/AsteroidMap';
import testdata from './testdata';
const React = require('react');

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.getInitialState();
  }

  getInitialState() {
    return {
      width: 960,
      height: 600,
      data: [
        { letter: 'A', frequency: 0.08167 },
        { letter: 'B', frequency: 0.01492 },
        { letter: 'C', frequency: 0.0278 },
        { letter: 'D', frequency: 0.04253 },
        { letter: 'E', frequency: 0.12702 },
        { letter: 'F', frequency: 0.02288 },
        { letter: 'G', frequency: 0.02022 },
        { letter: 'H', frequency: 0.06094 },
        { letter: 'I', frequency: 0.06973 },
        { letter: 'J', frequency: 0.00153 },
        { letter: 'K', frequency: 0.00747 },
        { letter: 'L', frequency: 0.04025 },
        { letter: 'M', frequency: 0.02517 },
        { letter: 'N', frequency: 0.06749 },
        { letter: 'O', frequency: 0.07507 },
        { letter: 'P', frequency: 0.01929 },
        { letter: 'Q', frequency: 0.00098 },
        { letter: 'R', frequency: 0.05987 },
        { letter: 'S', frequency: 0.06333 },
        { letter: 'T', frequency: 0.09056 },
        { letter: 'U', frequency: 0.02758 },
        { letter: 'V', frequency: 0.01037 },
        { letter: 'W', frequency: 0.02465 },
        { letter: 'X', frequency: 0.0015 },
        { letter: 'Y', frequency: 0.01971 },
        { letter: 'Z', frequency: 0.00074 },
      ],
    };
  }

  render() {
    return (
      <div>
        <p>Hello world</p>
        <FrequencyChart
          width={this.state.width}
          height={this.state.height}
          data={this.state.data}
        />
        <AsteroidMap data={testdata} />
      </div>
    );
  }
}

export default Container;
