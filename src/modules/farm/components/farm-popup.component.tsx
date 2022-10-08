import { FarmListQuery } from '../api/queries'

interface IFarmPopupProps {
  data: FarmListQuery['list'][0]
}
export function FarmPopup(props: IFarmPopupProps) {
  const { data } = props
  return <div>{data.name}</div>
}
