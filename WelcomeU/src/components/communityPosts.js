import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import {EmploymentTasks, ChildcareTasks, FinancialPlanningTasks, HealthcareTasks} from '../constants/posts';

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


class CommunityPosts extends React.Component {
    state = {
        gilad: true,
        jason: false,
        antoine: false,
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };

    render() {
        const { classes } = this.props;
        const { gilad, jason, antoine } = this.state;
        const error = Object.values(this.state).filter(v => v).length !== 2;

        const categoryStyle= {"margin-left":"30px", "margin-bottom":"20px"};
        return (

        <div className={classes.root}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <div style={categoryStyle}>Employment</div>
                    <FormGroup>
                        {EmploymentTasks.map(r => <ButtonContainer classes={classes} message={r.message} url={r.url}/>)}
                    </FormGroup>
                </FormControl>
                <FormControl component="fieldset" className={classes.formControl}>
                    <div style={categoryStyle}>Childcare</div>
                    <FormGroup>
                        {ChildcareTasks.map(r => <ButtonContainer classes={classes} message={r.message} url={r.url}/>)}
                    </FormGroup>
                </FormControl>
                <FormControl component="fieldset" className={classes.formControl}>
                    <div style={categoryStyle}>Healthcare</div>
                    <FormGroup>
                        {HealthcareTasks.map(r => <ButtonContainer classes={classes} message={r.message} url={r.url}/>)}
                    </FormGroup>
                </FormControl>
                <FormControl component="fieldset" className={classes.formControl}>
                    <div style={categoryStyle}>Financial Planning</div>
                    <FormGroup>
                        {FinancialPlanningTasks.map(r => <ButtonContainer classes={classes} message={r.message} url={r.url}/>)}
                    </FormGroup>
                </FormControl>
            </div>
        );
    }
}

CommunityPosts.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CommunityPosts);
