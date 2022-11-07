import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  ResponsiveContainer,
  Label,
} from 'recharts'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import Grid from '@mui/material/Grid'
import { Dashboard as DashboardLayout } from '@/components/layout/dashboard.layout'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { useDashboardHook } from '../hooks/use-dashboard-hook'
import SelectField from '@/components/select-field'
import DownloadIcon from '@mui/icons-material/Download'
import IconButton from '@mui/material/IconButton'

export function DashboardView() {
  const {
    stats,
    averageAnnualIncomeRows,
    registeredHousehold,
    filteredCrop,
    filteredLiveStock,
    uniqueLivestocks,
    uniqueCrops,
    dashboardFormProps,
    filteredCropYield,
    uniqueFish,
    filteredFish,
  } = useDashboardHook()

  return (
    <DashboardLayout>
      <Grid sx={{ mb: 2 }} container spacing={2}>
        {stats.map((stat) => (
          <Grid key={stat.label} item xs={12} md={3}>
            <Card
              sx={{
                p: 2,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Box>
                <Typography sx={{ color: 'text.secondary' }} variant="overline">
                  {stat.label}
                </Typography>
                <Typography variant="h5">{stat.value}</Typography>
              </Box>
              <Box>
                <Avatar sx={{ bgcolor: stat.color }}>{<stat.icon />}</Avatar>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 2 }}>
            <Box sx={{ mb: 2, textAlign: 'center' }}>
              <Typography variant="h5">
                Average Annual Income (in thousand pesos)
              </Typography>
            </Box>
            <Box sx={{ height: 400 }}>
              <ResponsiveContainer height="100%">
                <LineChart
                  width={500}
                  height={300}
                  data={averageAnnualIncomeRows}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year">
                    <Label value="year" position="insideBottom" offset={0} />
                  </XAxis>
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    name="Income Nonfarming"
                    type="monotone"
                    dataKey="incomeNonfarming"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                  />
                  <Line
                    type="monotone"
                    name="Income Farming"
                    dataKey="incomeFarming"
                    stroke="#82ca9d"
                    activeDot={{ r: 8 }}
                  />
                  <Line
                    name="Total Annual Income"
                    type="monotone"
                    dataKey="totalIncome"
                    stroke="#ff7300"
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 2 }}>
            <Box sx={{ mb: 2, textAlign: 'center' }}>
              <Typography variant="h5">Registered Household</Typography>
            </Box>
            <Box sx={{ height: 400 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  width={500}
                  height={300}
                  data={registeredHousehold}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" interval={0} allowDecimals={false} />
                  <YAxis scale={'linear'} interval={0} allowDecimals={true} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="count" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 2 }}>
            <Box sx={{ mb: 2, textAlign: 'center' }}>
              <Typography variant="h5">Crop Yield (metric tons/ha)</Typography>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Grid container alignItems="center">
                <Grid item xs={10}>
                  <SelectField
                    sx={{ mb: 2 }}
                    name="cropYield"
                    control={dashboardFormProps.control}
                    options={uniqueCrops}
                    label="Crop"
                  />
                </Grid>
                <Grid item xs={2}>
                  <IconButton sx={{ ml: 2 }}>
                    <DownloadIcon />
                  </IconButton>
                </Grid>
              </Grid>
              <Grid container alignItems="right"></Grid>
            </Box>
            <Box sx={{ mt: 2, height: 400 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  width={500}
                  height={300}
                  data={filteredCropYield}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" allowDecimals={false} />
                  <YAxis interval={0} allowDecimals={true} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="yield" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 2 }}>
            <Box sx={{ mb: 2, textAlign: 'center' }}>
              <Typography variant="h5">
                Volume of Crop Production (in metric tons)
              </Typography>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Grid container alignItems="center">
                <Grid item xs={10}>
                  <SelectField
                    sx={{ mb: 2 }}
                    name="crop"
                    control={dashboardFormProps.control}
                    options={uniqueCrops}
                    label="Crop Commodity"
                  />
                </Grid>
                <Grid item xs={2}>
                  <IconButton sx={{ ml: 2 }}>
                    <DownloadIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Box>
            <Box sx={{ mt: 2, height: 400 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  width={500}
                  height={300}
                  data={filteredCrop}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" allowDecimals={false} />
                  <YAxis interval={0} allowDecimals={true} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="volume" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 2 }}>
            <Box sx={{ mb: 2, textAlign: 'center' }}>
              <Typography variant="h5">
                Inventory of Livestock/Poultry (heads)
              </Typography>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Grid container alignItems="center">
                <Grid item xs={12} md={12}>
                  <SelectField
                    sx={{ mb: 2 }}
                    name="livestock"
                    control={dashboardFormProps.control}
                    options={uniqueLivestocks}
                    label="Livestock"
                  />
                </Grid>
              </Grid>
            </Box>
            <Box sx={{ mt: 2, height: 400 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  width={500}
                  height={300}
                  data={filteredLiveStock}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" allowDecimals={false} />
                  <YAxis interval={0} allowDecimals={true} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="heads" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 2 }}>
            <Box sx={{ mb: 2, textAlign: 'center' }}>
              <Typography variant="h5">
                Volume of Fishery Production (in metric tons)
              </Typography>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Grid container alignItems="center">
                <Grid item xs={12} md={12}>
                  <SelectField
                    sx={{ mb: 2 }}
                    name="fishery"
                    control={dashboardFormProps.control}
                    options={uniqueFish}
                    label="Fishery Commodity"
                  />
                </Grid>
              </Grid>
            </Box>
            <Box sx={{ mt: 2, height: 400 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  width={500}
                  height={300}
                  data={filteredFish}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" allowDecimals={false} />
                  <YAxis interval={0} allowDecimals={true} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="volume" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </DashboardLayout>
  )
}
