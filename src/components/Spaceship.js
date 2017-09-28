// Code The Spaceship Component Here
// name, speed, hasRockets, colors
import React from 'react';

export default class Spaceship extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>{this.props.speed}</p>
        <p>{this.props.hasRockets}</p>
        <p>{this.props.colors.join(', ')}</p>
      </div>
    )
  }
};

// Specifies the default values for props:
Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
}
