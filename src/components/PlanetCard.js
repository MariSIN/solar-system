import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends Component {
  render() {
    const { PlanetName, PlanetImage } = this.props;
    return (
      <div data-testid="planet-card">
        <p data-testid="planet-name">{PlanetName}</p>
        <img src={ PlanetImage } alt={ `Planeta ${PlanetName}` } />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  PlanetName: PropTypes.string.isRequired,
  PlanetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
