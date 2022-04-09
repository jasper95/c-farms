import Breadcrumbs from '@/components/breadcrumbs'
import NewHouseholdStep1 from '@/components/household/newhousehold/step-1'
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
import NewHouseholdStep3 from '@/components/household/newhousehold/step-3'
import NewHouseholdStep2 from '@/components/household/newhousehold/step-2'

const steps = ['Personal Information', 'Other Personal Details', 'Farm Profile']
const useStyles = makeStyles(() => ({
  toolbar: {
    backgroundColor: grey[100],
  },
}))
function NewHouseHoldPage() {
  const [activeStep, setActiveStep] = useState(0)
  const classes = useStyles()
  return (
    <DashboardLayout>
      <Breadcrumbs
        crumbs={[{ name: 'Household' }, { name: 'New Household' }]}
      />
      <Stepper activeStep={activeStep}>
        {steps.map((label) => {
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
          {activeStep === 0 && <NewHouseholdStep1 />}
          {activeStep === 1 && <NewHouseholdStep2 />}
          {activeStep === 2 && <NewHouseholdStep3 />}
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

export default NewHouseHoldPage
