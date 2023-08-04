import { HomePage } from "./pages/HomePage"
import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { OverviewPage } from './pages/OverviewPage'
import { AuthorsPage } from './pages/AuthorsPage'
import { JobAnalyticsPage } from './pages/JobAnalyticsPage'
import { GetStartedPage } from './pages/GetStartedPage'
import { JobAnalyticsGeoPage } from "./pages/JobAnalyticsGeoPage"
import { JobAnalyticsPiePage } from "./pages/JobAnalyticsPiePage"
import { JobAnalyticsBarPage } from "./pages/JobAnalyticsBarPage"
import { GetStartedGeoPage } from "./pages/GetStartedGeoPage"
import { GetStartedPiePage } from "./pages/GetStartedPiePage"
import { GetStartedBarPage } from "./pages/GetStartedBarPage"
import { ContactUsPage } from "./pages/ContactUsPage"


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/overview" element={<OverviewPage/>} />
      <Route path="/authors" element={<AuthorsPage/>} />
      <Route path="/jobanalytics" element={<JobAnalyticsPage/>} />
      <Route path='/jobanalyticsgeo' element={<JobAnalyticsGeoPage/>} />
      <Route path='/jobanalyticspie' element={<JobAnalyticsPiePage/>} />
      <Route path='/jobanalyticsbar' element={<JobAnalyticsBarPage/>} />
      <Route path="/getstarted" element={<GetStartedPage/>} />
      <Route path="/getstartedgeo" element={<GetStartedGeoPage/>} />
      <Route path="/getstartedpie" element={<GetStartedPiePage/>} />
      <Route path="/getstartedbar" element={<GetStartedBarPage/>} />
      <Route path="/contactus" element={<ContactUsPage/>} />
    </Routes>        
    </BrowserRouter>
  )
}

export default App