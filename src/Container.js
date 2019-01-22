import AsteroidMap from './components/svg/AsteroidMap';
import defaultData from './data/defaultData';
import getData from './api/getNasaApi';
import About from './components/About';
const React = require('react');

// TODO: Load data from today's date automatically
// TODO: Add information on hover over
// TODO: Animation of elements
// TODO: About segement

// TODO: Search and show data for specific NEO

// TODO: Styling of buttons

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.getInitialState();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleAbout = this.toggleAbout.bind(this);
  }

  handleChange(event) {
    this.setState({ date: event.target.value });
  }

  async handleSubmit(event) {
    const newData = await getData(this.state.date);
    const viewDate = Object.keys(newData.near_earth_objects)[0];

    this.setState({ neoData: newData, viewDate });
  }

  toggleAbout(event) {
    this.setState({ viewAbout: !this.state.viewAbout });
  }

  getInitialState() {
    const today = new Date();
    const day = today.getDate() < 10 ? `0${today.getDate()}` : today.getDate();
    const month =
      today.getMonth() + 1 < 10
        ? `0${today.getMonth() + 1}`
        : today.getMonth() + 1;
    const year = today.getFullYear();
    const formattedDate = `${year}-${month}-${day}`;
    const viewDate = Object.keys(defaultData.near_earth_objects)[0];

    return {
      neoData: defaultData,
      date: formattedDate,
      viewDate,
      viewAbout: true,
    };
  }

  render() {
    return (
      <div>
        {/* {this.state.viewAbout ? <About toggleAbout={this.toggleAbout} /> : ''} */}

        <div>
          <h1>Asteroids near earth on {this.state.viewDate}</h1>
          <p className="graph-info">
            Size of circle corresponds to relative size of NEO. <br />
            <span className="pink-text">Pink</span> circles signify NEOs listed
            as "potential hazards".
          </p>
          <AsteroidMap data={this.state.neoData} />
          <div className="input-date">
            <label htmlFor="start">Search on:</label>
            <br />
            <input
              type="date"
              id="start"
              name="trip-start"
              value={this.state.date}
              min="1900-01-01"
              max="2200-12-31"
              onChange={this.handleChange}
            />
            <br />
            <button onClick={this.handleSubmit}>Submit</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Container;
