import React from 'react'
import { Formik, Form, Field, useFormik } from 'formik'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import {
  CognitoUserPool,
  CognitoUserAttribute,
  CognitoUser,
} from 'amazon-cognito-identity-js'

var AmazonCognitoIdentity = require('amazon-cognito-identity-js')
// var CognitoUserPool = AmazonCognitoIdentity.CognitoUserPool

//https://<your_domain>/login?response_type=code&client_id=<your_app_client_id>&redirect_uri=<your_callback_url>
//https://the300group.auth.us-east-2.amazoncognito.com/login?response_type=code&client_id=6th7k23k4pflve9oa9u775jrhd&redirect_uri=https://www.the300group.net
const SignUp = () => {
  const CognitoUserPool = AmazonCognitoIdentity.CognitoUserPool

  const poolData = {
    UserPoolId: 'us-east-2_iUKtX3Fr3',
    ClientId: 'i8otj3ouft3tdncnkn62ue5bo',
  }
  const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData)
  const attributeList = []

  const userData = {
    UserName: 'brian',
    Pool: userPool,
  }

  var dataEmail = {
    Name: 'email',
    Value: 'email@mydomain.com',
  }

  var dataPhoneNumber = {
    Name: 'phone_number',
    Value: '+15555555555',
  }
  var attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute()
  var attributePhoneNumber = new AmazonCognitoIdentity.CognitoUserAttribute(
    dataPhoneNumber
  )

  attributeList.push(attributeEmail)
  attributeList.push(attributePhoneNumber)

  userPool.signUp('username', 'password', attributeList, null, function(
    err,
    result
  ) {
    if (err) {
      console.log(err.message || JSON.stringify(err))
      return
    }
    var cognitoUser = result.user
    console.log('user name is ' + cognitoUser.getUsername())
  })

  const formik = useFormik({
    initialValues: { email: '', password: '', confirmPassword: '' },
    onSubmit: (values) => {
      const attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute(
        values.email
      )
      attributeList.push(attributeEmail)
      // attributeList.push(attributePhoneNumber);
      console.log(attributeList)
      // alert(JSON.stringify(values, null, 2))
      userPool.SignUp('email', 'password', [], null, (err, data) => {
        if (err) alert(err.message || JSON.stringify(err))
        console.log(err)
        console.log('hey', data)
      })
    },
  })

  return (
    <div>
      <Formik>
        {({ values, errors, isSubmitting }) => (
          <Form onSubmit={formik.handleSubmit}>
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
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <Field
              variant="outlined"
              required
              fullWidth
              label="Password"
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              autoComplete="current-password"
              as={TextField}
              onChange={formik.handleChange}
              value={formik.values.Password}
            />
            <Field
              variant="outlined"
              required
              fullWidth
              label="Confirm Password"
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm Email"
              autoComplete="confirm current-password"
              as={TextField}
              onChange={formik.handleChange}
              value={formik.confirmPassword}
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
