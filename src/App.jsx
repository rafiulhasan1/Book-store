import './App.css'
import { Route, Routes } from 'react-router-dom'
import Root from './components/Root/Root'
import ErrorPage from './components/Root/ErrorPage/ErrorPage'
import Home from './components/Root/Home/Home'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Root></Root>}>
        <Route index element={<Home />} />
      </Route>
      <Route path='*' element={<ErrorPage></ErrorPage>} />
    </Routes>
  )
}

export default App
