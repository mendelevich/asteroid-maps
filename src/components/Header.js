const React = require('react');

const Header = props => (
  <div className="header">
    <div className="header-left">
      <img alt="asteroid icon" src="/asteroid.png" className="header-icon" />
      <div>Asteroid Maps</div>
    </div>
    <div className="header-right">
      <div>About NEOs</div>
      <div>NASA's website</div>
    </div>
  </div>
);

export default Header;
