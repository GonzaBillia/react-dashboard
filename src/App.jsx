import { ColorModeContext, useMode } from './theme'
import {CssBaseline, ThemeProvider} from '@mui/material'
import {Routes, Route} from 'react-router-dom'
import Topbar from './scenes/global/Topbar'
import Sidebar from './scenes/global/Sidebar'
import Dashboard from './scenes/dashboard/Dashboard'
import Team from './scenes/team/Team'
import Contacts from './scenes/contacts/Contacts'
import Invoices from './scenes/invoices/Invoices'
import Bar from './scenes/bar/Bar'
import Form from './scenes/form/Form'
import Pie from './scenes/pie/Pie'
import Line from './scenes/line/Line'
import FAQ from './scenes/faq/FAQ'
import MyCalendar from './scenes/calendar/MyCalendar'
import Geography from './scenes/geography/Geography'



function app() {
  const [theme, colorMode] = useMode()

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className='app'>
          <Sidebar />
          <main className='content'>
            <Topbar />
            <Routes>
              <Route path='/react-dashboard' element={<Dashboard />} />
              <Route path='/react-dashboard/team' element={<Team />} />
              <Route path='/react-dashboard/contacts' element={<Contacts />} />
              <Route path='/react-dashboard/invoices' element={<Invoices />} />
              <Route path='/react-dashboard/form' element={<Form />} />
              <Route path='/react-dashboard/calendar' element={<MyCalendar />} />
              <Route path='/react-dashboard/faq' element={<FAQ />} />
              <Route path='/react-dashboard/bar' element={<Bar />} />
              <Route path='/react-dashboard/pie' element={<Pie />} />
              <Route path='/react-dashboard/line' element={<Line />} />
              <Route path='/react-dashboard/geography' element={<Geography />} />
            </Routes> 
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default app
