import React from 'react'
import { Formik, Form, Field, useField, FieldArray } from 'formik'
import MultiLine from '../components/Multiline'
import { TextField, Button } from '@material-ui/core'
import PageTwoStyles from './PageTwoStyles'
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import { v4 as uuidv4 } from 'uuid'

const PageTwo = () => {
  const classes = PageTwoStyles()
  return (
    <div className={classes.root}>
      Page Two
      <Formik
        initialValues={{
          otherNamedInsured: '',
          otherNamedInsuredOperations: '',
          otherFEIN: '',
          ownershipsInfo: [{ name: '', id: uuidv4() }],
        }}
      >
        {({ values, errors, isSubmitting }) => (
          <form>
            <h2>Other Named Insured(s)</h2>
            <p>
              Do have a separate company or LLC that owns your building? Any
              Other entity that you operate under?
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
            <h2>Other Named Insured(s) Operations</h2>
            <p>
              If you own other companies or LLC's, please tell us about those
              operations.
            </p>
            <MultiLine
              placeholder="If applicable"
              name="otherNamedInsuredOperations"
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
            <h2>Ownership Information</h2>

            <FieldArray name="ownershipsInfo">
              {(arrayHelpers) => (
                <div>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    onClick={() =>
                      arrayHelpers.push({ name: '', id: uuidv4() })
                    }
                  >
                    + Add a Business
                  </Button>

                  {values.ownershipsInfo.map((ownershipInfo, index) => {
                    console.log(ownershipInfo.name)

                    return (
                      <div key={ownershipInfo.id}>
                        <Field
                          name={`ownershipsInfo.${index}.name`}
                          placeholder="info"
                          variant="outlined"
                          type="input"
                          as={TextField}
                        />
                        <Button
                          variant="contained"
                          color="secondary"
                          className={classes.button}
                          startIcon={<DeleteIcon />}
                          onClick={() => arrayHelpers.remove(index)}
                        >
                          Remove
                        </Button>
                      </div>
                    )
                  })}
                </div>
              )}
            </FieldArray>

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
          </form>
        )}
      </Formik>
    </div>
  )
}

export default PageTwo
