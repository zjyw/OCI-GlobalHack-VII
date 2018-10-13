import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = () => ({
    root: {
        flexGrow: 1,
        padding: '9%'
    },
    paper: {
        padding: 10,
        textAlign: 'center',
        color: 'black',
    },
    box: {
        display: 'flex',
    },
    buttonWrapper: {
        display: 'flex',
        flex: 1,
        margin: 'auto',
        padding: '1%',
    },
    button: {
        width: '90%',
        margin: 'auto',
        fontSize: '18px',
    },
});

const firstRow = ['My HouseHold', 'My Locations', 'My Progress'];


function FullWidthGrid(props) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <Paper className={classes.box}>
                {firstRow.map(m =>         <Typography variant="h5" component="h3">
                    This is a sheet of paper.
                </Typography>)}
            </Paper>
        </div>
    );
}

export default withStyles(styles)(FullWidthGrid);
