import Breadcrumbs from '@/components/breadcrumbs'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Stepper from '@mui/material/Stepper'
import {
  PersonalInformationForm,
  OtherDetailsForm,
  AnnualInfoForm,
} from '@/modules/household/components'
import { createHouseholdSteps } from '@/modules/household/constants'
import { useHouseholdNew } from '@/modules/household/hooks'
import { Dashboard } from '@/components/layout/dashboard.layout'
import { FormToolbar } from '@/components/form-toolbar'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

export function HouseholdNewView() {
  const {
    activeStep,
    topRef,
    personalInformationFormProps,
    otherDetailsFormProps,
    annualInfoFormProps,
    onBack,
    validateAndNext,
    isLoading,
  } = useHouseholdNew()
  return (
    <Dashboard>
      <Breadcrumbs
        crumbs={[{ name: 'Household' }, { name: 'New Household' }]}
      />
      <Card>
        <CardContent sx={{ p: 3 }}>
          <div ref={topRef} />
          <Stepper
            sx={{ mb: 3 }}
            alternativeLabel
            nonLinear
            activeStep={activeStep}
          >
            {createHouseholdSteps.map((label) => {
              const stepProps = {}
              const labelProps = {}
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              )
            })}
          </Stepper>
          {activeStep === 0 && (
            <PersonalInformationForm formProps={personalInformationFormProps} />
          )}
          {activeStep === 1 && (
            <OtherDetailsForm formProps={otherDetailsFormProps} />
          )}
          {activeStep === 2 && (
            <AnnualInfoForm formProps={annualInfoFormProps} />
          )}

          <FormToolbar
            cancelVisible={activeStep !== 0}
            onCancel={onBack}
            onConfirm={validateAndNext}
            cancelLabel="Back"
            confirmLabel="Next"
            loading={isLoading}
          />
        </CardContent>
      </Card>
    </Dashboard>
  )
}
