import React from 'react'
import { Formik, Form, Field } from 'formik'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { CognitoUserPool } from 'amazon-cognito-js'

const SignUp = () => {
  const poolData = {
    UserPoolId: 'us-east-2_SobCPAlji',
    ClientId: '6th7k23k4pflve9oa9u775jrhd',
  }

  // const UserPool = new CognitoUserPool(poolData)

  return (
    <div>
      <Formik
        initialValues={{
          email: '',
          password: '',
          confirmPassword: '',
        }}
      >
        {({ values, errors, isSubmitting }) => (
          <Form>
            <h2>Sign Up</h2>
            <Field
              variant="outlined"
              required
              fullWidth
              label="email"
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              autoComplete="email"
              as={TextField}
            />
            <Field
              variant="outlined"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              as={TextField}
            />
            <Field
              variant="outlined"
              required
              fullWidth
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              id="confirmPassword"
              autoComplete="confirm current-password"
              as={TextField}
            />
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
            <pre>{JSON.stringify(values, null, 2)}</pre>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default SignUp
