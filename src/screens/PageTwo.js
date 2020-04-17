import React from 'react'
import { Formik, Field, FieldArray } from 'formik'
import MultiLine from '../components/Multiline'
import {
  TextField,
  Button,
  MenuItem,
  Select,
  FormControl,
  FormHelperText,
} from '@material-ui/core'
import RadioSelect from '../components/RadioSelect'
import PageTwoStyles from './PageTwoStyles'
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import { v4 as uuidv4 } from 'uuid'

const PageTwo = () => {
  const classes = PageTwoStyles()
  return (
    <div className={classes.main}>
      Page Two
      <Formik
        initialValues={{
          otherNamedInsured: '',
          otherNamedInsuredOperations: '',
          otherFEIN: '',
          ownershipsInfo: [
            { id: uuidv4(), name: '', ownershipPercentage: '', workComp: '' },
          ],
          locations: [
            {
              id: uuidv4(),
              locationAddress: '',
              locationOperations: '',
              buildingOwner: '',
              LeaseSpaceToOthers: '',
              buildingConstructionInfo: '',
              buildingContentsValue: '',
            },
          ],
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
                  {values.ownershipsInfo.map((ownershipInfo, index) => {
                    return (
                      <div key={ownershipInfo.id}>
                        <Field
                          name={`ownershipsInfo.${index}.name`}
                          placeholder="info"
                          variant="outlined"
                          type="input"
                          as={TextField}
                          c
                        />
                        <Field
                          name={`ownershipsInfo.${index}.ownershipPercentage`}
                          placeholder="%"
                          variant="outlined"
                          type="input"
                          as={TextField}
                        />
                        <Field
                          as={FormControl}
                          variant="outlined"
                          className={classes.formControl}
                        >
                          <Field
                            name={`ownershipsInfo.${index}.workComp`}
                            type="select"
                            as={Select}
                            label="Workers Comp"
                          >
                            <MenuItem value="none">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value="include">Include</MenuItem>
                            <MenuItem value="exclude">Exclude</MenuItem>
                          </Field>
                          <FormHelperText>
                            Some important helper text
                          </FormHelperText>
                        </Field>
                        <Button
                          variant="contained"
                          color="secondary"
                          className={classes.button}
                          startIcon={<DeleteIcon />}
                          onClick={() => arrayHelpers.remove(index)}
                        >
                          Remove
                        </Button>
                        <div>
                          <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            onClick={() =>
                              arrayHelpers.push({
                                id: uuidv4(),
                                name: '',
                                ownershipPercentage: '',
                                workComp: '',
                              })
                            }
                          >
                            + Add a Owner
                          </Button>
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}
            </FieldArray>
            <div>
              <div>
                <h2>Location Information </h2>
                <FieldArray name="locations">
                  {(arrayHelpers) => (
                    <div>
                      {values.locations.map((location, index) => {
                        return (
                          <div key={location.id}>
                            <Field
                              name={`locations.${index}.locationAddress`}
                              placeholder="locationAddress"
                              variant="outlined"
                              type="input"
                              as={TextField}
                            />
                            <h2>
                              Description of operations (Office, Storage,
                              Warehouse, Manufacturing, etc)
                            </h2>
                            <Field
                              name={`locations.${index}.locationOperations`}
                              placeholder="operations"
                              variant="outlined"
                              type="input"
                              as={TextField}
                            />
                            <h2>Are you the building owner?</h2>
                            <RadioSelect
                              name={`locations.${index}.buildingOwner`}
                              type="radio"
                              value="yes"
                              label="Yes"
                            />
                            <RadioSelect
                              name={`locations.${index}.buildingOwner`}
                              type="radio"
                              value="no"
                              label="No"
                            />
                            <h2>Do you lease any space to others?</h2>
                            <RadioSelect
                              name={`locations.${index}.LeaseSpaceToOthers`}
                              type="radio"
                              value="yes"
                              label="Yes"
                            />
                            <RadioSelect
                              name={`locations.${index}.LeaseSpaceToOthers`}
                              type="radio"
                              value="no"
                              label="No"
                            />
                            <h2>Location construction information</h2>
                            <p>
                              Does the building have sprinklers? Does it have a
                              basement? When was the last time roof, HVAC,
                              electrical, and/or plumbing updated?
                            </p>
                            <MultiLine
                              placeholder="If applicable"
                              name={`locations.${index}.buildingConstructionInfo`}
                              label="Location construction information"
                              variant="outlined"
                              rows={3}
                              fullWidth
                              className={classes.multiLine}
                            />
                            <h2>Location value of contents</h2>
                            <p>
                              If we took all contents out of your building and
                              set them outside, what would be the total value?{' '}
                            </p>
                            <Field
                              name={`locations.${index}.buildingContentsValue`}
                              placeholder="Value"
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

                            <div>
                              <Button
                                variant="contained"
                                color="primary"
                                size="small"
                                onClick={() =>
                                  arrayHelpers.push({
                                    id: uuidv4(),
                                    locationAddress: '',
                                    locationOperations: '',
                                    buildingOwner: '',
                                    LeaseSpaceToOthers: '',
                                    buildingConstructionInfo: '',
                                    buildingContentsValue: '',
                                  })
                                }
                              >
                                + Add another location
                              </Button>
                            </div>
                          </div>
                        )
                      })}
                      <hr></hr>
                    </div>
                  )}
                </FieldArray>
              </div>
            </div>
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
