import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FaCalendar, FaLocationArrow, FaFlag } from 'react-icons/fa';

class MissionCard extends Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div className="mission-container">
        <div data-testid="mission-card">
          <p data-testid="mission-name" className="name-mission">{ name }</p>
          <div className="separador">{' '}</div>
          <div className="dates">
            <p data-testid="mission-year" className="year-mission">
              <FaCalendar />
              { year }
            </p>
            <p data-testid="mission-country" className="country-mission">
              <FaLocationArrow />
              { country }
            </p>
            <p
              data-testid="mission-destination"
              className="destiny"
            >
              <FaFlag />
              {destination}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
