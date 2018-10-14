import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TodayIcon from '@material-ui/icons/Today'
import GroupIcon from '@material-ui/icons/Group'
import LocationIcon from '@material-ui/icons/LocationOn'
import AppBar from '../components/appBar';
import { Typography } from '@material-ui/core';
import Chatbot from './chatBot';

const Subtitle = ({message, Icon}) => (<div style={{margin: '35px 0', display: 'flex'}}>
    <Icon style={{color: 'gray', fontSize: '50px', marginLeft: '37px'}} />
    <Typography style={{marginTop: '-58px', marginLeft: '-104px'}} variant="headline">{message}</Typography>
</div>)

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

class Recommendation extends React.Component {
    onSubmit = (e) => console.log(e);
    render() {
        const {classes } = this.props;
        return (
            <div>
                <AppBar />
                <Paper className={classes.root} elevation={1}>
                    <div style={{display: 'flex'}}>
                    <div style={{display: 'flex', flexDirection: 'column', margin: '20px' }}>
                        <div style={{width: '60%', margin: 'auto'}}>
                            <Subtitle Icon={GroupIcon} message={"My Household"} />
                        </div>
                        <ButtonContainer message='Recommended Resources' classes={classes} url="/resources"/>
                        <Typography variant="subtitle1" style={{textAlign: 'center', 'margin-right': '120px'}}>See a list of resources that others like you have found helpful.</Typography>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', margin: '20px'}}>
                        <div style={{width: '60%', margin: 'auto'}}>
                            <Subtitle Icon={LocationIcon} message={"My Locations"} />
                        </div>
                        <ButtonContainer message='Community Involvement' classes={classes} url="/community"/>
                        <Typography variant="subtitle1" style={{textAlign: 'center', 'margin-right': '120px'}}>Connect with people in your area who share your cultural origins.</Typography>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', margin: '20px'}}>
                        <div style={{width: '60%', margin: 'auto'}}>
                            <Subtitle Icon={TodayIcon} message={"My Progress"} />
                        </div>
                        <ButtonContainer message='Task List' classes={classes} url="/tasklist"/>
                        <Typography variant="subtitle1" style={{textAlign: 'center', 'margin-right': '120px'}}>Track your progress, and more. WelcomeU is free, and always will be!</Typography>
                    </div>
                    </div>
                </Paper>
                <Chatbot />
            </div>
        )
    }
}

export default withStyles(styles)(Recommendation);

