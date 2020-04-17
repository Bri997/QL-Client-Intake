import React from 'react'
import { useField } from 'formik'
import { Radio, FormControlLabel } from '@material-ui/core'

const RadioSelect = (props) => {
  const [field] = useField(props)
  return (
    <FormControlLabel
      value
      {...field}
      control={<Radio />}
      label={props.label}
    />
  )
}

export default RadioSelect
