const React = require('react');

const About = props => (
  <div className="intro-container">
    <h1>Near-earth objects (NEOs)</h1>
    <div className="intro-nasa">
      <p>
        "Near-Earth Objects (NEOs) are comets and asteroids that have been
        nudged by the gravitational attraction of nearby planets into orbits
        that allow them to enter the Earth’s neighborhood. Composed mostly of
        water ice with embedded dust particles, comets originally formed in the
        cold outer planetary system while most of the rocky asteroids formed in
        the warmer inner solar system between the orbits of Mars and Jupiter.
        The scientific interest in comets and asteroids is due largely to their
        status as the relatively unchanged remnant debris from the solar system
        formation process some 4.6 billion years ago. The giant outer planets
        (Jupiter, Saturn, Uranus, and Neptune) formed from an agglomeration of
        billions of comets and the left over bits and pieces from this formation
        process are the comets we see today. Likewise, today’s asteroids are the
        bits and pieces left over from the initial agglomeration of the inner
        planets that include Mercury, Venus, Earth, and Mars."
      </p>
      <p>- NASA, Center for Near Earth Object Studies </p>
    </div>
    <button onClick={props.toggleAbout}>Close</button>
  </div>
);

export default About;
