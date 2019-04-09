import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Drawer from '@material-ui/core/Drawer';

class Pokemon extends React.Component {

  state = {
    isOpen: false,
  }

  toggleDrawer = (open) => () => {
    this.setState({
      isOpen: open,
    });
  };

  render() {

    const { pokemonInfo, classes } = this.props;

    if (Object.keys(pokemonInfo).length === 0) {
        return <div />
    }

    let name = pokemonInfo.name[0].toUpperCase() + pokemonInfo.name.slice(1);

    return(<div><Avatar alt={name} src={pokemonInfo.image} className={classes.avatar} onClick={this.toggleDrawer(true)}/>
      <Drawer open={this.state.isOpen} onClose={this.toggleDrawer(false)}>
    <div
      tabIndex={0}
      role="button"
      onClick={this.toggleDrawer(false)}
      onKeyDown={this.toggleDrawer(false)}
    >
      {(<div className={classes.div}>
      <p className={classes.name}>{name}</p>
      <img src={pokemonInfo.image} alt={pokemonInfo.name} /> <br />
      Attack : {pokemonInfo.ability}<br />
      Weight : {pokemonInfo.weight} kg
      </div>)}
    </div>
  </Drawer></div>);
    }
}

Pokemon.propTypes = {
    pokemonInfo: PropTypes.shape({
        name: PropTypes.string,
        image: PropTypes.string,
        ability: PropTypes.string,
        weight: PropTypes.number,
      }).isRequired
  }

  export default Pokemon;
