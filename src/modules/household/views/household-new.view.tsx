import Breadcrumbs from '@/components/breadcrumbs'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Stepper from '@mui/material/Stepper'
import {
  PersonalInformation,
  OtherDetails,
  FarmProfile,
} from '@/modules/household/components'
import { CREATE_HOUSEHOLD_STEPS } from '@/modules/household/constants'
import { useHouseholdNew } from '@/modules/household/hooks/use-household-new.hook'
import getDashboardLayout from '@/components/layout/dashboard.layout'
import { FormToolbar } from '@/components/form-toolbar'

export function HouseholdNewView() {
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
    <>
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

      <FormToolbar
        cancelVisible={activeStep !== 0}
        onCancel={onBack}
        onConfirm={validateAndNext}
        cancelLabel="Back"
        confirmLabel="Next"
      />
    </>
  )
}

HouseholdNewView.getLayout = getDashboardLayout
