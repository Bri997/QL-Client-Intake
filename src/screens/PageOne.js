import React from 'react'
import { Formik, Form, Field, useField, FieldArray } from 'formik'
import { TextField, Button } from '@material-ui/core'
import PageOneStyle from './PageOneStyles'
import SaveIcon from '@material-ui/icons/Save'

const MultiLine = props => {
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

const AddressArray = props => {
  const [field, meta] = useField(props)

  return (
    <FieldArray name="addresses">
      <MultiLine
        {...field}
        placeholder={props.placeholder}
        name={props.name}
        label={props.label}
        variant={props.variant}
        rows={props.rows}
      />
    </FieldArray>
  )
}

const PageOne = () => {
  const classes = PageOneStyle()
  return (
    <div className={classes.root}>
      Page One
      <Formik
        initialValues={{
          nameOfBusiness: '',
          businessDescription: '',
          fein: '',
          website: '',
          addresses: [
            { mailingAddress: '', sameAsMailing: true, physicalAddress: '' }
          ],
          primaryContactFirstName: '',
          primaryContactLastName: '',
          primaryContactPhone: '',
          primaryContactEmail: '',
          otherNamedInsured: '',
          otherFEIN: ''
        }}
      >
        {({ values, errors, isSubmitting }) => (
          <Form>
            <h2>Legal Name of Business</h2>
            <Field
              placeholder="Business Name"
              name="nameOfBusiness"
              type="input"
              as={TextField}
              label="Business Name"
              variant="outlined"
              className={classes.textField}
            />
            <h2>Brief Business Description</h2>
            <MultiLine
              placeholder="Tell us about your company, its history, and all the things that make you great!"
              name="businessDescription"
              label="Description"
              variant="outlined"
              rows={6}
              fullWidth
              className={classes.multiLine}
            />
            <h2>FEIN of Business</h2>
            <Field
              placeholder="FEIN"
              name="fein"
              type="input"
              as={TextField}
              label="FEIN Required*"
              variant="outlined"
              className={classes.textField}
            />
            <h2>Company Website</h2>
            <Field
              placeholder="Website URL"
              name="website"
              type="input"
              as={TextField}
              label="Website URL"
              variant="outlined"
              className={classes.textField}
            />
            <h2>Physical Address</h2>
            <MultiLine
              placeholder="Physical Address"
              name="physicalAddress"
              label="Physical Address"
              variant="outlined"
              rows={3}
              fullWidth
              className={classes.multiLine}
            />
            <h2>Address</h2>
            <AddressArray
              placeholder="Mailing Address"
              name="mailingAddress"
              label="Mailing Address"
              variant="outlined"
              rows={3}
              fullWidth={true}
              className={classes.multiLine}
            />
            <Button>Add a Physical Address</Button>
            <h2>Primary Contact Name</h2>
            <Field
              placeholder="First Name"
              name="primaryContactFirstName"
              type="input"
              as={TextField}
              label="First Name"
              variant="outlined"
              className={classes.textField}
            />
            <Field
              placeholder="Last Name"
              name="primaryContactLastName"
              type="input"
              as={TextField}
              label="Last Name"
              variant="outlined"
              className={classes.textField}
            />
            <h2>Phone</h2>
            <Field
              placeholder="Phone"
              name="primaryContactPhone"
              type="input"
              as={TextField}
              label="Phone"
              variant="outlined"
              className={classes.textField}
            />
            <h2>Primary Contact Email</h2>
            <Field
              placeholder="Email"
              name="primaryContactEmail"
              type="input"
              as={TextField}
              label="Email"
              variant="outlined"
              className={classes.textField}
            />
            <h2>Other Named Insured(s)</h2>
            <p>
              If you own other companies or LLC's, please tell us about those
              operations.
            </p>
            <MultiLine
              placeholder="If applicable"
              name="otherNamedInsured"
              label="Other Insured Operations"
              variant="outlined"
              rows={3}
              fullWidth
              className={classes.multiLine}
            />
            <h2>Other Named Insured FEIN(s)</h2>
            <Field
              placeholder="If applicable"
              name="otherFEIN"
              type="input"
              as={TextField}
              label="Other FEIN"
              variant="outlined"
              className={classes.textField}
            />
            <div>
              <Button
                disabled={isSubmitting}
                type="submit"
                variant="contained"
                color="primary"
                size="medium"
                className={classes.button}
                startIcon={<SaveIcon />}
              >
                Save & Continue
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

export default PageOne
