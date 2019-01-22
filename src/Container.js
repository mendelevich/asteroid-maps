import AsteroidMap from './components/svg/AsteroidMap';
import defaultData from './data/defaultDateData';
import getData from './api/getDateApi';
import About from './components/About';
import AsteroidTable from './components/svg/AsteroidTable';
import SingleNeoLineGraph from './components/svg/SingleNeoLineGraph';
import SingleNeoTable from './components/svg/SingleNeoTable';
const React = require('react');

// TODO: Add information on hover over
// TODO: Animation of elements
// TODO: About segement

// TODO: Search and show data for specific NEO

// TODO: Styling of buttons

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      neoData: defaultData,
      date: '2019-01-20',
      viewDate: '2019-01-20',
      viewAbout: true,
      selectedNeo: null,
    };
    this.changeDate = this.changeDate.bind(this);
    this.selectDate = this.selectDate.bind(this);
    this.toggleAbout = this.toggleAbout.bind(this);
    this.selectToday = this.selectToday.bind(this);
    this.selectNeo = this.selectNeo.bind(this);
  }

  async componentDidMount() {
    try {
      const todaysData = await this.getInitialState();
      this.setState(todaysData);
    } catch (err) {
      console.log(err);
    }
  }

  changeDate(event) {
    this.setState({ date: event.target.value });
  }

  async selectDate(event) {
    const neoData = await getData(this.state.date);
    const viewDate = Object.keys(neoData.near_earth_objects)[0];
    this.setState({ neoData, viewDate });
  }

  async selectToday(event) {
    const todaysData = await this.getInitialState();
    this.setState(todaysData);
  }

  selectNeo(id) {
    console.log(id);
    this.setState({ selectedNeo: id });
  }

  toggleAbout(event) {
    this.setState(prevState => ({ viewAbout: !prevState.viewAbout }));
  }

  async getInitialState() {
    const today = new Date();
    const day = today.getDate() < 10 ? `0${today.getDate()}` : today.getDate();
    const month =
      today.getMonth() + 1 < 10
        ? `0${today.getMonth() + 1}`
        : today.getMonth() + 1;
    const year = today.getFullYear();

    const formattedDate = `${year}-${month}-${day}`;
    const viewDate = formattedDate;

    const neoData = await getData(viewDate);

    return {
      neoData,
      date: formattedDate,
      viewDate,
      viewAbout: this.state.viewAbout,
      selectedNeo: this.state.selectedNeo,
    };
  }

  render() {
    console.log(this.state.neoData);
    return (
      <div>
        {this.state.viewAbout ? (
          <About toggleAbout={this.toggleAbout} />
        ) : (
          <div>
            <h1>Asteroids near earth on {this.state.viewDate}</h1>
            <p className="graph-info">
              Size of circle corresponds to relative size of NEO. <br />
              <span className="pink-text">Pink</span> circles signify NEOs
              listed as "potential hazards".
            </p>
            <div className="svg-table-container">
              <AsteroidMap
                neoData={this.state.neoData}
                selectNeo={this.selectNeo}
                selectedNeo={this.state.selectedNeo}
              />
              <AsteroidTable
                neoData={this.state.neoData}
                date={this.state.viewDate}
                selectedNeo={this.state.selectedNeo}
              />
            </div>
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
                onChange={this.changeDate}
              />
              <button onClick={this.selectDate}>Submit</button>
              <button onClick={this.selectToday}>Today</button>
            </div>
            <div>
              <SingleNeoLineGraph />
              <SingleNeoTable />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Container;
