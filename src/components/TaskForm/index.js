import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import AddToPhotosIcon from "@material-ui/icons/AddToPhotos";
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import { Field, reduxForm } from "redux-form";
import * as TaskActionCreator from "../../actions";
import Styles from "./style";
import validate from "./validate";

class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
    }

    handleClickOpen = () => {
        this.setState({
            open: true,
        });
    };

    handleClose = () => {
        this.setState({
            open: false,
        });
    };

    onSubmitForm = (data) => {
        let { TaskActionCreator } = this.props;
        let { actAddTask } = TaskActionCreator;
        actAddTask(data);
    };

    render() {
        let { open } = this.state;
        let { handleSubmit, classes, invalid, submiting } = this.props;

        const renderTextField = ({
            label,
            input,
            meta: { touched, invalid, error },
            ...custom
        }) => (
            <TextField
                label={label}
                placeholder={label}
                error={touched && invalid}
                helperText={touched && error}
                {...input}
                {...custom}
            />
        );
        const renderFromHelper = ({ touched, error }) => {
            if (!(touched && error)) {
                return;
            } else {
                return <FormHelperText>{touched && error}</FormHelperText>;
            }
        };

        const renderSelectField = ({
            input,
            label,
            meta: { touched, error },
            children,
            ...custom
        }) => (
            <FormControl error={touched && error}>
                <InputLabel htmlFor="age-native-simple">Status</InputLabel>
                <Select
                    native
                    {...input}
                    {...custom}
                    inputProps={{
                        name: "status",
                        id: "status-native-simple",
                    }}
                >
                    {children}
                </Select>
                {renderFromHelper({ touched, error })}
            </FormControl>
        );

        return (
            <div>
                <Button
                    onClick={this.handleClickOpen}
                    variant="outlined"
                    color="primary"
                >
                    <AddToPhotosIcon></AddToPhotosIcon> Thêm công việc
        </Button>
                <Dialog
                    fullWidth={true}
                    open={open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <form onSubmit={handleSubmit(this.onSubmitForm)}>
                        <DialogTitle id="form-dialog-title">Thêm công việc</DialogTitle>
                        <DialogContent>
                            <Grid
                                container
                                direction="column"
                                justify="center"
                                alignItems="center"
                            >
                                <Grid item xs={12}>
                                    <Field
                                        name="title"
                                        component={renderTextField}
                                        label="Task Name"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Field
                                        name="description"
                                        component={renderTextField}
                                        label="Task Desciption"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Field
                                        classes={classes}
                                        name="status"
                                        component={renderSelectField}
                                        label="Favorite Color"
                                    >
                                        <option value="" />
                                        <option value={1}>READY</option>
                                        <option value={2}>IN PROCESS</option>
                                        <option value={3}>DONE</option>
                                    </Field>
                                </Grid>
                            </Grid>
                        </DialogContent>
                        <DialogActions>
                            <Button color="primary" onClick={this.handleClose}>
                                Cancel
              </Button>
                            <Button
                                disabled={invalid || submiting}
                                type="submit"
                                color="primary"
                            >
                                lưu
              </Button>
                        </DialogActions>
                    </form>
                </Dialog>
            </div>
        );
    }
}

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => {
    return {
        TaskActionCreator: bindActionCreators(TaskActionCreator, dispatch),
    };
};

export default compose(
    withStyles(Styles),
    connect(mapStateToProps, mapDispatchToProps),
    reduxForm({
        form: "TASK_FORM",
        validate,
    })
)(TaskForm);
