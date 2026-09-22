import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Invite from './screens/Invite.tsx'
import Gifts from './screens/Gifts.tsx'
import DogDonate from './screens/DogDonate.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path='/'         element={ <Invite/> }/>
      <Route path='DogDonate' element={ <DogDonate/> }/>
      <Route path='Gifts'     element={ <Gifts/>  }/>
    </Routes>
  </BrowserRouter>
)
