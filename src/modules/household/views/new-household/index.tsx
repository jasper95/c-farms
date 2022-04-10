import Breadcrumbs from '@/components/breadcrumbs'
import DashboardLayout from '@/components/layout/dashboard-layout'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Stepper from '@material-ui/core/Stepper'
import { useState } from 'react'
import MuiPickersUtilsProvider from '@material-ui/pickers/MuiPickersUtilsProvider'
import DateFnsUtils from '@date-io/date-fns'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/styles'
import grey from '@material-ui/core/colors/grey'
import {
  PersonalInformation,
  OtherDetails,
  FarmProfile,
} from '@/modules/household/components'
import { CREATE_HOUSEHOLD_STEPS } from '@/modules/household/constants'

const useStyles = makeStyles(() => ({
  toolbar: {
    backgroundColor: grey[100],
  },
}))
export function NewHouseholdView() {
  const [activeStep, setActiveStep] = useState(0)
  const classes = useStyles()
  return (
    <DashboardLayout>
      <Breadcrumbs
        crumbs={[{ name: 'Household' }, { name: 'New Household' }]}
      />
      <Stepper activeStep={activeStep}>
        {CREATE_HOUSEHOLD_STEPS.map((label) => {
          const stepProps = {}
          const labelProps = {}
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          )
        })}
      </Stepper>
      <div className="p-4">
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          {activeStep === 0 && <PersonalInformation />}
          {activeStep === 1 && <OtherDetails />}
          {activeStep === 2 && <FarmProfile />}
        </MuiPickersUtilsProvider>
      </div>

      <Toolbar
        className={`${classes.toolbar} grid grid-cols-2 justify-items-stretch`}
      >
        <div className="justify-self-start">
          {activeStep !== 0 && (
            <Button variant="contained" color="primary" onClick={onBack}>
              Back
            </Button>
          )}
        </div>
        <div className="justify-self-end">
          <Button variant="contained" color="primary" onClick={onNext}>
            Next
          </Button>
        </div>
      </Toolbar>
    </DashboardLayout>
  )

  function onBack() {
    setActiveStep((prev) => prev - 1)
  }
  function onNext() {
    setActiveStep((prev) => prev + 1)
  }
}
