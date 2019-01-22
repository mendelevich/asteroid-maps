const React = require('react');

const AsteroidTable = props => {
  const neoData = props.neoData;
  const date = props.date;

  const neoList = neoData.near_earth_objects[date];

  const calculateAverage = neo => {
    const avg =
      (neo.estimated_diameter.kilometers.estimated_diameter_min +
        neo.estimated_diameter.kilometers.estimated_diameter_max) /
      2;

    return Math.round(avg * 100) / 100;
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>ID</th>
          <th>Est. diameter (km)</th>
          <th>Potential Hazard</th>
        </tr>
      </thead>
      <tbody>
        {neoList.map(neo => (
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
        ))}
      </tbody>
    </table>
  );
};

export default AsteroidTable;
