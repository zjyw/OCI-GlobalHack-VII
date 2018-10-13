import React from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const renderTextField = (
  { input, label, meta: { touched, error }, ...custom },
) => (
  <TextField
    margin="normal"
    variant="outlined"
    {...input}
    {...custom}
  />
);

const Form = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit} style={{marginLeft: '25px', marginBottom: '25px'}}>
      <div>
        <div>
          <Field
            name="firstName"
            component={renderTextField}
            type="text"
            placeholder="First Name"
          />
        </div>
      </div>
      <div>
        <div>
          <Field
            name="lastName"
            component={renderTextField}
            type="text"
            placeholder="Last Name"
          />
        </div>
      </div>
      <div>
        <div>
          <Field
            name="email"
            component={renderTextField}
            type="email"
            placeholder="Email"
          />
        </div>
      </div>
      <div style={{marginLeft: '25px'}}>
        <Button variant="contained" color="primary" size="large" type="submit">
          Join Now
        </Button>
      </div>
    </form>
  );
};


export default reduxForm({
  form: 'simple', // a unique identifier for this form
})(Form);