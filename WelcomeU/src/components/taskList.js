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

const styles = theme => ({
    root: {
        display: 'flex',
    },
    formControl: {
        margin: theme.spacing.unit * 3,
    },
});

const CheckListItem = props => <FormControlLabel
    control={
        <Checkbox />
    }
    label={props.label}
/>;

class TaskList extends React.Component {
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

        return (
            <div className={classes.root}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend">Employment</FormLabel>
                    <FormGroup>
                        {EmploymentTasks.map(t => <CheckListItem label={t} />)}
                    </FormGroup>
                </FormControl>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend">Childcare</FormLabel>
                    <FormGroup>
                        {ChildcareTasks.map(t => <CheckListItem label={t} />)}
                    </FormGroup>
                </FormControl>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend">Healthcare</FormLabel>
                    <FormGroup>
                        {HealthcareTasks.map(t => <CheckListItem label={t} />)}
                    </FormGroup>
                </FormControl>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend">Financial Planning</FormLabel>
                    <FormGroup>
                        {FinancialPlanningTasks.map(t => <CheckListItem label={t} />)}
                    </FormGroup>
                </FormControl>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend">Path To Citizenship</FormLabel>
                    <FormGroup>
                        {CitizenshipTasks.map(t => <CheckListItem label={t} />)}
                    </FormGroup>
                </FormControl>
            </div>
        );
    }
}

TaskList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TaskList);
