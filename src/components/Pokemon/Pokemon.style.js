import { withStyles } from '@material-ui/core/styles';

import Pokemon from './Pokemon';

const styles = {
    div: {
        width: '250px',
        marginLeft: 'auto',
        margiRight: 'auto',
        textAlign: 'center',
        marginTop: '5px',
        marginBottom: '10px',
        paddingBottom: '5px',
        fontFamily: "Pokemon GB", 
        fontSize: '10px',
    },
    name: {
      fontSize: '15px',
      marginBottom: '-3px',
    },
    avatar: {
      margin: 10,
      width: 80,
      height: 80,
    },
  };

  export default withStyles(styles)(Pokemon);