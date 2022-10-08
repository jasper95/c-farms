export const genderOptions = [
  {
    label: 'Male',
    value: 1,
  },
  {
    label: 'Female',
    value: 2,
  },
]

export const civilStatusOptions = [
  {
    label: 'Single',
    value: 1,
  },
  {
    label: 'Married',
    value: 2,
  },
  {
    label: 'Widow',
    value: 3,
  },
]

export const livelihoodOptions = [
  'Farmer',
  'Farmworker/Laborer',
  'Fisherfolk',
].map((e) => ({ label: e, value: e }))

export const barangayOptions = [
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

export const educationBackgroundOptions = [
  'Elementary Level',
  'Elementary Graduate',
  'High School Level',
  'High School Graduate',
  'College Level',
  'College Graduate',
  'Postgraduate',
].map((e) => ({ label: e, value: e }))
