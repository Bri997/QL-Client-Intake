import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

function Home() {
  const { register, handleSubmit, control } = useForm()

  const onSubmit = data => {
    console.log(data)
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
        name="email1"
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
    </form>
  )
}

export default Home

// https://codesandbox.io/s/react-hook-form-hookforminput-rzu9s
// https://react-hook-form.com/api#Controller
