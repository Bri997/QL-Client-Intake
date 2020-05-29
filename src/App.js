import React from 'react'
import './App.css'

import Home from './screens/Home'

import Amplify from 'aws-amplify'
import { AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import awsExports from './aws-exports'
// import { withAuthenticator } from 'aws-amplify-react'

Amplify.configure(awsExports)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Crane Insurance Agents and Brokers</h1>
      </header>
      <AmplifyAuthenticator className="Auth">
        <div className="Main">
          <Home></Home>
        </div>
      </AmplifyAuthenticator>
    </div>
  )
}

export default App
