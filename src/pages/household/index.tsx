import DashboardLayout from '@/components/layout/dashboard-layout'
import Breadcrumbs from '@/components/breadcrumbs'
import Button from '@material-ui/core/Button'
import SearchBar from '@/components/search-bar'
import Link from '@/components/link'

function HouseHoldList() {
  return (
    <DashboardLayout>
      <Breadcrumbs crumbs={[{ name: 'Household' }]} />
      <div className="grid grid-cols-12 gap-4 pb-4">
        <div className="col-span-full md:col-span-4 flex items-center">
          <Link href={'/household/new'}>
            <Button variant="contained" color="primary">
              Create Household
            </Button>
          </Link>
        </div>
        <div className="col-span-full col-start-0 md:col-span-4 md:col-start-9">
          <SearchBar onChange={() => {}} />
        </div>
      </div>
      <div>test</div>
    </DashboardLayout>
  )
}

export default HouseHoldList
