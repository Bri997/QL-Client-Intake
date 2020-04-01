import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import TextField from '@material-ui/core/TextField'

const onSubmit = data => {
  console.log(data)
}

// this is were I can store the data in state

const SingleLineInput = () => {
  const { register, handleSubmit, control } = useForm()

  return (
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
      // answer={answer}
      // onAnswerChange={setAnswer}
      // onAnswerSubmit={onAnswerSubmit}
    />
  )
}

export default SingleLineInput
