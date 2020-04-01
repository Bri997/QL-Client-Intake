import React from 'react'
import { Formik, Field, Form, useField, FieldArray } from 'formik'
import {
  TextField,
  Button,
  Checkbox,
  Radio,
  Select,
  FormControlLabel,
  MenuItem
} from '@material-ui/core'
import * as yup from 'yup'

const MyRadio = props => {
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

const MyTextField = props => {
  const [field, meta] = useField(props)
  const errorText = meta.error && meta.touched ? meta.error : ''
  return (
    <TextField
      {...field}
      helperText={errorText}
      placeholder={props.placeholder}
      variant={props.variant}
      error={!!errorText}
    />
  )
}

const validationSchema = yup.object({
  firstName: yup
    .string()
    .required()
    .max(10),
  pets: yup.array().of(
    yup.object({
      name: yup.string().required()
    })
  )
})

const SectionOne = () => {
  return (
    <div>
      {' '}
      Section One:
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          needsThis: false,
          cookies: [],
          yogurt: [],
          pets: [{ type: 'cat', name: 'Jenga', id: '' + Math.random() }]
        }}
        validationSchema={validationSchema}
        onSubmit={(data, { setSubmitting }) => {
          setSubmitting(true)
          //async call
          console.log('submitted ', data)
          setSubmitting(false)
        }}
      >
        {({ values, errors, isSubmitting }) => (
          <Form>
            <MyTextField
              placeholder="first name"
              name="firstName"
              type="input"
              as={TextField}
              variant="outlined"
            />
            {/* <Field
              placeholder="first name"
              name="firstName"
              type="input"
              as={TextField}
              variant="outlined"
            /> */}
            <div>
              <Field
                placeholder="last name"
                name="lastName"
                type="input"
                as={TextField}
                variant="outlined"
              />
            </div>

            <div>
              {' '}
              Needs This?
              <Field name="needsThis" type="checkbox" as={Checkbox} />
            </div>
            <div>
              Cookies
              <Field
                name="cookies"
                type="checkbox"
                value="chocolate chip"
                as={Checkbox}
              />
              <Field
                name="cookies"
                type="checkbox"
                value="snicker doodle"
                as={Checkbox}
              />
              <Field
                name="cookies"
                type="checkbox"
                value="sugar"
                as={Checkbox}
              />
            </div>

            <div>Yogurt</div>
            <MyRadio name="yogurt" type="radio" value="peach" label="peach" />
            <MyRadio
              name="yogurt"
              type="radio"
              value="blueberry"
              label="blueberry"
            />
            <MyRadio name="yogurt" type="radio" value="honey" label="honey" />

            <FieldArray name="pets">
              {arrayHelpers => (
                <div>
                  <Button
                    onClick={() =>
                      arrayHelpers.push({
                        type: 'fish',
                        name: '',
                        id: '' + Math.random()
                      })
                    }
                  >
                    Add Pet
                  </Button>
                  {values.pets.map((pet, index) => {
                    return (
                      <div key={pet.id}>
                        <MyTextField
                          placeholder="pet name"
                          name={`pets.${index}.name`}
                        />
                        <Field
                          name={`pets.${index}.type`}
                          type="select"
                          as={Select}
                        >
                          <MenuItem value="cat">cat</MenuItem>
                          <MenuItem value="dog">dog</MenuItem>
                          <MenuItem value="fish">fish</MenuItem>
                        </Field>
                        <Button onClick={() => arrayHelpers.remove(index)}>
                          X Remove
                        </Button>
                      </div>
                    )
                  })}
                </div>
              )}
            </FieldArray>

            <div>
              <Button disabled={isSubmitting} type="submit">
                Submit
              </Button>
            </div>
            <pre>{JSON.stringify(values, null, 2)}</pre>
            <pre>{JSON.stringify(errors, null, 2)}</pre>
          </Form>
        )}
      </Formik>
    </div>
  )
}
export default SectionOne
