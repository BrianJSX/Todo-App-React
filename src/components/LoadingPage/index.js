import React, { Component } from 'react';
import Styles from './style';
import { withStyles } from '@material-ui/core/styles';
import LoadingIcon from '../../assets/images/loader_small.gif';
import { connect } from 'react-redux';
class LoadingPage extends Component {
    render() {
        let { classes, showLoading } = this.props;
        let xhtml  = null;
        if(showLoading) { 
            xhtml = (
                <div className={classes.container}>
                    <img src={LoadingIcon} alt="icon" className={classes.icon} />
                </div>
            );
        } else { 
            xhtml = '';
        }
        return xhtml;
    }
}
const mapStateToProps = (state) => {
    return {
        showLoading: state.uiLoader.showLoading
    };
};
const mapDispatchToProps = null;

export default withStyles(Styles)(connect(mapStateToProps, mapDispatchToProps)(LoadingPage));