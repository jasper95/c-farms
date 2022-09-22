import Breadcrumbs from '@/components/breadcrumbs'
import Dashboard from '@/components/layout/dashboard.layout'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Stepper from '@material-ui/core/Stepper'
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
import { useHouseholdNew } from '@/modules/household/hooks/use-household-new.hook'

const useStyles = makeStyles(() => ({
  toolbar: {
    backgroundColor: grey[100],
  },
}))
export function HouseholdNewView() {
  const classes = useStyles()
  const {
    activeStep,
    topRef,
    personalInformationFormProps,
    otherDetailsFormProps,
    farmProfileFormProps,
    onBack,
    validateAndNext,
  } = useHouseholdNew()
  return (
    <Dashboard>
      <Breadcrumbs
        crumbs={[{ name: 'Household' }, { name: 'New Household' }]}
      />
      <div ref={topRef} />
      <Stepper alternativeLabel nonLinear activeStep={activeStep}>
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
        {activeStep === 0 && (
          <PersonalInformation formProps={personalInformationFormProps} />
        )}
        {activeStep === 1 && <OtherDetails formProps={otherDetailsFormProps} />}
        {activeStep === 2 && <FarmProfile formProps={farmProfileFormProps} />}
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
          <Button variant="contained" color="primary" onClick={validateAndNext}>
            Next
          </Button>
        </div>
      </Toolbar>
    </Dashboard>
  )
}
