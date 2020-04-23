import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Link, Switch } from 'react-router-dom'
import SectionOne from './SectionOne'
import PageOne from './PageOne'
import PageTwo from './PageTwo'
import PageThree from './PageThree'
import SignUp from './SignUp'
const Home = () => {
  const { register, handleSubmit, control } = useForm()

  const onSubmit = (data) => {
    const user = {
      userEmail: data.email,
      userPassword: data.password,
      userConfirmPassword: data.confirmPassword,
    }
    console.log(user)
  }

  return (
    <form action="/signup" onSubmit={handleSubmit(onSubmit)}>
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
      <Controller
        as={TextField}
        name="TextField"
        control={control}
        defaultValue=""
        type="password"
        placeholder="Confirm Password"
        // eslint-disable-next-line
        name="confirmPassword"
        id="outlined-required"
        label="Confirm Password"
        ref={register}
        variant="outlined"
      />

      <Button variant="contained" color="primary" type="submit">
        Submit
      </Button>
      <hr></hr>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/SectionOne">SectionOne</Link>
            </li>
            <li>
              <Link to="/PageOne">Page One</Link>
            </li>
            <li>
              <Link to="/PageTwo">Page Two</Link>
            </li>
            <li>
              <Link to="/PageThree">Page Three</Link>
            </li>
            <li>
              <Link to="/SignUp">SignUp</Link>
            </li>
          </ul>
        </div>

        <Switch>
          <Route exact path="/SectionOne">
            <SectionOne />
          </Route>
          <Route exact path="/PageOne">
            <PageOne />
          </Route>

          <Route exact path="/PageTwo">
            <PageTwo />
          </Route>
          <Route exact path="/PageThree">
            <PageThree />
          </Route>
          <Route exact path="/SignUp">
            <SignUp />
          </Route>
        </Switch>
      </Router>
    </form>
  )
}

export default Home

// https://codesandbox.io/s/react-hook-form-hookforminput-rzu9s
// https://react-hook-form.com/api#Controller
