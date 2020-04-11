import React from 'react'
import { useField } from 'formik'
import { TextField } from '@material-ui/core'

const MultiLine = (props) => {
  const [field] = useField(props)
  return (
    <TextField
      {...field}
      placeholder={props.placeholder}
      variant={props.variant}
      rows={props.rows}
      multiline={true}
      className={props.className}
      label={props.label}
    />
  )
}

export default MultiLine
