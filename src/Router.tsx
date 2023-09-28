import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Orders } from './pages/Orders'
import { Success } from './pages/Success'
import { DefaultLayout } from './layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/success" element={<Success />} />
      </Route>
    </Routes>
  )
}
