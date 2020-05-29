import React, { useState, useEffect } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Link, Switch } from 'react-router-dom'
import SectionOne from './SectionOne'
import PageOne from './PageOne'
import PageTwo from './PageTwo'
import PageThree from './PageThree'
import SignUp from './SignUp'
import HomeStyles from './HomeStyles'

const Home = () => {
  // const onSubmit = (data) => {
  //   const user = {
  //     userEmail: data.email,
  //     userPassword: data.password,
  //     userConfirmPassword: data.confirmPassword,
  //   }
  //   console.log(user)
  // }

  const [dateTime, setDateTime] = useState(new Date())

  useEffect(() => {
    const id = setInterval(() => setDateTime(new Date()), 1000)
    return () => {
      clearInterval(id)
    }
  }, [])
  const classes = HomeStyles()
  return (
    <div className={classes.root}>
      <h4>{`${dateTime.toLocaleDateString()} ${dateTime.toLocaleTimeString()}`}</h4>

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
    </div>
  )
}

export default Home

// https://codesandbox.io/s/react-hook-form-hookforminput-rzu9s
// https://react-hook-form.com/api#Controller
