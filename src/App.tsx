import { useState } from 'react'
import './App.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Home } from './Components/Home'
import About from './Components/About'
import RootLayout from './Components/RootLayout'
import { HelpLayout } from './Components/HelpLayout'
import { Notfound } from './Components/Notfound'
import { CareersLayout } from './Components/CareersLayout'

import { Careers, careersLoader } from './Components/Careers'
import Faq from './Components/Faq'




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/"element={<RootLayout/>}>
      <Route path='/' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='help' element={<HelpLayout/>}>
        <Route path='faq'element={<Faq/>}/>
      </Route>
      <Route path='careers' element={<CareersLayout/>}>
        <Route index element={<Careers/>}loader={careersLoader}/>
      </Route>
      <Route path='*' element={<Notfound/>}/>
    </Route>

  )
)
function App() {
  const [count, setCount] = useState(0)



  return (
     <RouterProvider router={router}/>
  )
}

export default App
