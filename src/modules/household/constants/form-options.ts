export const BOOLEAN_OPTION = [
  {
    label: 'Yes',
    value: true,
  },
  {
    label: 'No',
    value: false,
  },
]

export const GENDER_OPTIONS = [
  {
    label: 'Male',
    value: 'M',
  },
  {
    label: 'Female',
    value: 'F',
  },
]

export const CIVIL_STATUS_OPTIONS = [
  {
    label: 'Single',
    value: 'Single',
  },
  {
    label: 'Married',
    value: 'Married',
  },
  {
    label: 'Widow',
    value: 'Widow',
  },
]

export const LIVELIHOOD_OPTIONS = [
  {
    label: 'Farmer',
    value: 'Farmer',
  },
  {
    label: 'Farmworker/Laborer',
    value: 'Farmworker/Laborer',
  },
  {
    label: 'Fisherfolk',
    value: 'Fisherfolk',
  },
]

export const BARANGAY_OPTIONS = [
  'ABIHILAN',
  'ANOLING',
  'BOYOAN',
  'CADAPDAPAN',
  'CAMBANE',
  'CANAWA',
  'CAN-OLIN',
  'COGTONG',
  'LA UNION',
  'LUAN',
  'LUNGSODAAN',
  'MAHANGIN',
  'PAGAHAT',
  'PANADTARAN',
  'PANAS',
  'POBLACION',
  'SAN ISIDRO',
  'TAMBONGAN',
  'TAWID',
  'TUBOD',
  'TUGAS',
].map((e) => ({ label: e, value: e }))

export const EDUCATION_BACKGROUND_OPTIONS = [
  'Elementary Level',
  'Elementary Graduate',
  'High School Level',
  'High School Graduate',
  'College Level',
  'College Graduate',
  'Postgraduate',
].map((e) => ({ label: e, value: e }))
