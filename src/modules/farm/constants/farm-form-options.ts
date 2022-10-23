export const ownershipTypeOptions = [
  'Registered Owner',
  'Tenant',
  'Lessee',
].map((e) => ({ value: e, label: e }))

export const ownershipDocumentOptions = [
  'Certificate of Land Transfer',
  'Emancipation Patent',
  'Individual Certificate of Land Ownership Award (CLOA)',
  'Collective CLOA',
  'Co-ownership CLOA',
  'Agricultural sales patent',
  'Homestead patent',
  'Free Patent',
  'Certificate of Title or Regular Title',
  'Certificate of Ancestral Domain Title',
  'Certificate of Ancestral Land Title',
  'Tax Declaration',
  'Others',
].map((e) => ({ label: e, value: e }))

export const farmTypeOptions = [
  'Irrigated',
  'Rainfed Upland',
  'Rainfed Lowland',
].map((e) => ({ label: e, value: e }))
