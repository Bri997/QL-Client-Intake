import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Link, Switch } from 'react-router-dom'
import SectionOne from './SectionOne'

const Home = () => {
  const { register, handleSubmit, control } = useForm()

  const onSubmit = data => {
    const user = {
      userEmail: data.email,
      userPassword: data.password
    }
    console.log(user)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Log In</h2>
      <Controller
        as={TextField}
        name="TextField"
        control={control}
        defaultValue=""
        type="text"
        placeholder="Email"
        // eslint-disable-next-line
        name="email"
        id="outlined-required"
        label="Email"
        ref={register}
        variant="outlined"
      />

      <Controller
        as={TextField}
        name="TextField"
        control={control}
        defaultValue=""
        type="password"
        placeholder="Password"
        // eslint-disable-next-line
        name="password"
        id="outlined-required"
        label="Password"
        ref={register}
        variant="outlined"
      />

      <Button variant="contained" color="primary" type="submit">
        Primary
      </Button>
      <hr></hr>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/SectionOne">SectionOne</Link>
            </li>
          </ul>
        </div>

        <Switch>
          <Route exact path="/SectionOne">
            <SectionOne />
          </Route>
        </Switch>
      </Router>
    </form>
  )
}

export default Home

// https://codesandbox.io/s/react-hook-form-hookforminput-rzu9s
// https://react-hook-form.com/api#Controller
