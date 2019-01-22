const React = require('react');
const neoData = require('../../data/defaultIdData');

const AsteroidTable = props => {
  const calculateAverage = neo => {
    const avg =
      (neo.estimated_diameter.kilometers.estimated_diameter_min +
        neo.estimated_diameter.kilometers.estimated_diameter_max) /
      2;

    return Math.round(avg * 100) / 100;
  };

  return (
    <div>
      <table>
        <tbody className="left-align-table">
          <tr>
            <th>Name</th>
            <td>{neoData.name}</td>
          </tr>
          <tr>
            <th>ID</th>
            <td>{neoData.id}</td>
          </tr>
          <tr>
            <th>Potential Hazard</th>
            <td>{neoData.is_potentially_hazardous_asteroid ? 'Yes' : 'No'}</td>
          </tr>
          <tr>
            <th>Est. diameter (km)</th>
            <td>{calculateAverage(neoData)}</td>
          </tr>
        </tbody>
      </table>

      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Rel. Velocity (km/h)</th>
            <th>Miss distance (km)</th>
            <th>Orbiting Body</th>
          </tr>
        </thead>
        <tbody>
          {neoData.close_approach_data.map((neo, i) => (
            <tr key={i}>
              <td>{neo.close_approach_date}</td>
              <td>{neo.relative_velocity.kilometers_per_hour}</td>
              <td>{neo.miss_distance.kilometers}</td>
              <td>{neo.orbiting_body}</td>
            </tr>
          ))}
          {/* {neoData.map(neo => (
            <tr
              key={neo.id}
              className={neo.id === props.selectedNeo ? 'selected-tr' : ''}
            >
              <td className="left-align-table">{neo.name}</td>
              <td className="left-align-table">
                <a href={neo.nasa_jpl_url}>{neo.id}</a>
              </td>
              <td>{calculateAverage(neo)}</td>
              <td>{neo.is_potentially_hazardous_asteroid ? 'Yes' : 'No'}</td>
            </tr>
          ))} */}
        </tbody>
      </table>

      <table />
    </div>
  );
};

export default AsteroidTable;
