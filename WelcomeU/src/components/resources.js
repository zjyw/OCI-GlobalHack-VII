import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import {EmploymentTasks, ChildcareTasks, CitizenshipTasks, FinancialPlanningTasks, HealthcareTasks} from '../constants/tasks';
import Button from "@material-ui/core/Button";
import resources from "../constants/resources";

const styles = () => ({
    root: {
        padding: '4%',
        margin: '3%',
        display: 'flex',
        justifyContent: 'space-between'
    },
    buttonWrapper: {
        display: 'flex',
        flex: 1,
        padding: '1%',
        'margin-right': '140px',
        'margin-bottom': '30px'
    },
    button: {
        width: '60%',
        margin: 'auto',
        fontSize: '10px',
    },
});

const ButtonContainer = ({message, classes, url}) => (
    <div className={classes.buttonWrapper}>
        <Button
            variant="contained"
            href={url}
            color="primary"
            style={{color: 'white', fontSize: '15px'}}
            disableRipple
            className={classes.button}
        >
            {message}
        </Button>
    </div>
);

class Resources extends React.Component {
    state = {
        gilad: true,
        jason: false,
        antoine: false,
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };

    render() {
        const categoryStyle= {"margin-left":"20px", "margin-bottom":"20px"};
        const { classes, } = this.props;
        const { gilad, jason, antoine } = this.state;
        const error = Object.values(this.state).filter(v => v).length !== 2;

        return (
            <div className={classes.root}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <div style={categoryStyle}>Resource List</div>
                    {resources.map(r => <ButtonContainer classes={classes} message={r.message} url={r.url}/>)}
                </FormControl>
            </div>
        );
    }
}

Resources.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Resources);
