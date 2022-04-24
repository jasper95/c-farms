import Breadcrumbs from '@/components/breadcrumbs'
import DashboardLayout from '@/components/layout/dashboard-layout'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Stepper from '@material-ui/core/Stepper'
import { useState } from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/styles'
import grey from '@material-ui/core/colors/grey'
import {
  PersonalInformation,
  OtherDetails,
  FarmProfile,
} from '@/modules/household/components'
import {
  CREATE_HOUSEHOLD_STEPS,
  PERSONAL_INFORMATION_SCHEMA,
  OTHER_DETAILS_SCHEMA,
  FARM_PROFILE_SCHEMA,
} from '@/modules/household/constants'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

const useStyles = makeStyles(() => ({
  toolbar: {
    backgroundColor: grey[100],
  },
}))
export function NewHouseholdView() {
  const [activeStep, setActiveStep] = useState(0)
  const classes = useStyles()
  const personalInformationFormProps = useForm({
    defaultValues: PERSONAL_INFORMATION_SCHEMA.cast({}),
    resolver: yupResolver(PERSONAL_INFORMATION_SCHEMA, { abortEarly: false }),
  })
  const otherDetailsFormProps = useForm({
    defaultValues: OTHER_DETAILS_SCHEMA.cast({}),
    resolver: yupResolver(OTHER_DETAILS_SCHEMA, { abortEarly: false }),
  })
  const farmProfileFormProps = useForm({
    defaultValues: FARM_PROFILE_SCHEMA.cast({}),
    resolver: yupResolver(FARM_PROFILE_SCHEMA, { abortEarly: false }),
  })
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
    </DashboardLayout>
  )

  function onBack() {
    setActiveStep((prev) => prev - 1)
  }

  function onNext() {
    setActiveStep((prev) => prev + 1)
  }

  function validateAndNext() {
    switch (activeStep) {
      case 0: {
        personalInformationFormProps.handleSubmit(onNext)()
        break
      }
      case 1: {
        otherDetailsFormProps.handleSubmit(onNext)()
        break
      }
      case 2: {
        farmProfileFormProps.handleSubmit(onNext)()
        break
      }
      default: {
      }
    }
  }
}
