import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    div: {
        width: '250px',
        borderColor: 'black',
        borderStyle: 'double',
        borderWidth: '6px',
        marginLeft: 'auto',
        margiRight: 'auto',
        textAlign: 'center',
        marginTop: '5px',
        marginBottom: '10px',
        paddingBottom: '5px',
        fontFamily: "Pokemon GB", 
        fontSize: '10px',
    },
    avatar: {
      margin: 10,
      width: 80,
      height: 80,
    },
  };

class Pokemon extends React.Component {

    render() {

    const { pokemonInfo, classes } = this.props;

    if (Object.keys(pokemonInfo).length === 0) {
        return <div />
    }

    let name = pokemonInfo.name[0].toUpperCase() + pokemonInfo.name.slice(1);

    return(<Avatar alt={name} src={pokemonInfo.image} className={classes.avatar}/>);
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

  export default withStyles(styles)(Pokemon);
