import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import { withRouter } from "react-router";

class Pokemon extends React.Component {

  goToDetail = () => {
    const { pokemonInfo } = this.props;
    this.props.history.push('/detail_page/' + pokemonInfo.id);
  }

  render() {

    const { pokemonInfo, classes } = this.props;

    if (Object.keys(pokemonInfo).length === 0) {
        return <div />
    }

    return(<Avatar alt={pokemonInfo.name} src={pokemonInfo.image} className={classes.avatar} onClick={this.goToDetail}/>);
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

  export default withRouter(Pokemon);
