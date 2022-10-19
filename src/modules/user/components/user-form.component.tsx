import SelectField from '@/components/select-field'
import SwitchField from '@/components/switch-field'
import TextField from '@/components/text-field'
import Grid from '@mui/material/Grid'
import { UseFormReturn } from 'react-hook-form'
import { roleTypeOptions } from '../constants/form-options'
import { IUserSchema } from '../constants/user-schema'

interface UserFormProps {
  formProps: UseFormReturn<IUserSchema>
}

export default function UserForm(props: UserFormProps) {
  const { control } = props.formProps
  return (
    <Grid container spacing={2}>
      <Grid item md={6} xs={12}>
        <TextField control={control} name="username" label="Username" />
      </Grid>
      <Grid item md={6} xs={12}>
        <SelectField
          control={control}
          name="role"
          label="Role"
          options={roleTypeOptions}
        />
      </Grid>
      <Grid item md={6} xs={12}>
        <TextField control={control} name="firstName" label="Firstname" />
      </Grid>
      <Grid item md={6} xs={12}>
        <TextField control={control} name="lastName" label="Lastname" />
      </Grid>
      <Grid item md={6} xs={12}>
        <SwitchField control={control} name="active" label="Active" />
      </Grid>
    </Grid>
  )
}
