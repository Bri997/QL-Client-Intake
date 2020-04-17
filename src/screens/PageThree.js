import React from 'react'
import { Formik, Field, FieldArray } from 'formik'

import { TextField, Button } from '@material-ui/core'

import pageThreeStyles from './PageThreeStytles'
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import { v4 as uuidv4 } from 'uuid'

const PageThree = () => {
  const classes = pageThreeStyles()

  return (
    <div className={classes.main}>
      Page Three
      <Formik
        initialValues={{
          grossSales: [{ classCode1: '', classCode2: '', classCode3: '' }],
          drivers: [
            {
              id: uuidv4(),
              firstName: '',
              lastName: '',
              dob: '',
              DLNumber: '',
              DLState: '',
            },
          ],
          vehicles: [
            {
              id: uuidv4(),
              year: '',
              make: '',
              model: '',
              vin: '',
              operationRadius: '',
            },
          ],
          equipment: [
            {
              id: uuidv4(),
              year: '',
              make: '',
              model: '',
              serialNumber: '',
              insuredValue: '',
            },
          ],
        }}
      >
        {({ values, errors, isSubmitting }) => (
          <form>
            <h2>Gross Sales</h2>
            <p>
              Please NAICS or SIC code for all operations. If you do not have
              the codes, please provide a description of operations.(e.g. 10020
              - Amusement Parks - $1,000,000)
            </p>
            <FieldArray name="grossSales">
              <div>
                {values.grossSales.map((grossSale, index) => {
                  return (
                    // two inputs one is class code the other is sales
                    <div>
                      <Field
                        placeholder="Gross Sales"
                        name={`grossSales.${index}.classCode1`}
                        type="input"
                        as={TextField}
                        label="classCode1"
                        variant="outlined"
                        className={classes.textField}
                      />
                      <Field
                        placeholder="grossSales"
                        name={`grossSales.${index}.classCode2`}
                        type="input"
                        as={TextField}
                        label="classCode2"
                        variant="outlined"
                        className={classes.textField}
                      />
                      <Field
                        placeholder="grossSales"
                        name={`grossSales.${index}.classCode3`}
                        type="input"
                        as={TextField}
                        label="classCode3"
                        variant="outlined"
                        className={classes.textField}
                      />
                    </div>
                  )
                })}
              </div>
            </FieldArray>
            <h2>Drivers</h2>
            <p>Enter here or upload to page 4</p>

            <FieldArray name="drivers">
              {(arrayHelpers) => (
                <div>
                  {values.drivers.map((driver, index) => {
                    return (
                      <div key={driver.id}>
                        <p> Drivers First Name</p>
                        <Field
                          name={`drivers.${index}.firstName`}
                          placeholder="First Name"
                          variant="outlined"
                          type="input"
                          as={TextField}
                        />
                        <p> Drivers Last Name</p>
                        <Field
                          name={`drivers.${index}.lastName`}
                          placeholder="Last Name"
                          variant="outlined"
                          type="input"
                          as={TextField}
                        />
                        <p> Drivers Date of Birth</p>
                        <Field
                          name={`drivers.${index}.dob`}
                          placeholder="DOB"
                          variant="outlined"
                          type="input"
                          as={TextField}
                        />
                        <p> Drivers License Number</p>
                        <Field
                          name={`drivers.${index}.DLNumber`}
                          placeholder="Drivers License Number"
                          variant="outlined"
                          type="input"
                          as={TextField}
                        />
                        <p> Drivers License State</p>
                        <Field
                          name={`drivers.${index}.DLState`}
                          placeholder="Drivers License State"
                          variant="outlined"
                          type="input"
                          as={TextField}
                        />{' '}
                        <Button
                          variant="contained"
                          color="secondary"
                          className={classes.button}
                          startIcon={<DeleteIcon />}
                          onClick={() => arrayHelpers.remove(index)}
                        >
                          Remove Driver
                        </Button>
                        <div>
                          <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            onClick={() =>
                              arrayHelpers.push({
                                id: uuidv4(),
                                firstName: '',
                                lastName: '',
                                dob: '',
                                DLNumber: '',
                                DLState: '',
                              })
                            }
                          >
                            + Add Another Driver
                          </Button>
                        </div>
                      </div>
                    )
                  })}
                  <hr></hr>
                </div>
              )}
            </FieldArray>
            <h2>Vehicles</h2>
            <FieldArray name="vehicles">
              {(arrayHelpers) => (
                <div>
                  {values.vehicles.map((vehicles, index) => {
                    return (
                      <div key={vehicles.id}>
                        <p> Vehicle Year</p>
                        <Field
                          name={`vehicles.${index}.year`}
                          placeholder="Year"
                          variant="outlined"
                          type="input"
                          as={TextField}
                        />
                        <p> Vehicles Make</p>
                        <Field
                          name={`vehicles.${index}.make`}
                          placeholder="Make"
                          variant="outlined"
                          type="input"
                          as={TextField}
                        />
                        <p> Vehicles Model</p>
                        <Field
                          name={`vehicles.${index}.model`}
                          placeholder="Model"
                          variant="outlined"
                          type="input"
                          as={TextField}
                        />
                        <p> VIN</p>
                        <Field
                          name={`vehicles.${index}.vin`}
                          placeholder="VIN"
                          variant="outlined"
                          type="input"
                          as={TextField}
                        />
                        <p> Vehicle Operation Radius</p>
                        <Field
                          name={`vehicles.${index}.operationRadius`}
                          placeholder="Vehicles Operation Radius"
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
                          Remove Vehicle
                        </Button>
                        <div>
                          <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            onClick={() =>
                              arrayHelpers.push({
                                id: uuidv4(),
                                year: '',
                                make: '',
                                model: '',
                                vin: '',
                                operationRadius: '',
                              })
                            }
                          >
                            + Add Another Vehicle
                          </Button>
                        </div>
                      </div>
                    )
                  })}
                  <hr></hr>
                </div>
              )}
            </FieldArray>
            <h2>Equipment</h2>
            <FieldArray name="equipment">
              {(arrayHelpers) => (
                <div>
                  {values.equipment.map((equipment, index) => {
                    return (
                      <div key={equipment.id}>
                        <p> Equipment Year</p>
                        <Field
                          name={`equipment.${index}.year`}
                          placeholder="Equipment Year"
                          variant="outlined"
                          type="input"
                          as={TextField}
                        />
                        <p> Equipment Make</p>
                        <Field
                          name={`equipment.${index}.make`}
                          placeholder="Equipment Make"
                          variant="outlined"
                          type="input"
                          as={TextField}
                        />
                        <p> Equipment Model</p>
                        <Field
                          name={`equipment.${index}.model`}
                          placeholder="Equipment Model"
                          variant="outlined"
                          type="input"
                          as={TextField}
                        />
                        <p> Equipment Serial Number</p>
                        <Field
                          name={`equipment.${index}.serialNumber`}
                          placeholder="Equipment Serial Number"
                          variant="outlined"
                          type="input"
                          as={TextField}
                        />
                        <p> Equipment Insured Value</p>
                        <Field
                          name={`equipment.${index}.insuredValue`}
                          placeholder="Equipment insured Value"
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
                          Remove Equipment
                        </Button>
                        <div>
                          <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            onClick={() =>
                              arrayHelpers.push({
                                id: uuidv4(),
                                year: '',
                                make: '',
                                model: '',
                                vin: '',
                                operationRadius: '',
                              })
                            }
                          >
                            + Add More Equipment
                          </Button>
                        </div>
                      </div>
                    )
                  })}
                  <hr></hr>
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

export default PageThree
