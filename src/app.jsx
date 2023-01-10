import { Route, Routes } from 'react-router-dom'
import design from './design'
import counter from './pages/counter'
import GtAvt from './pages/GtAvt'

const app = () => {
  return (
    <design>
      <Routes>
        <Route path={"/"} element={<counter/>}/>
        <Route path={"/index"} element={<counter/>}/>
        <Route path={"/counter"} element={<counter/>}/>
        <Route path={"/gt_avt"} element={<GtAvt/>}/>
      </Routes>
    </design>
  )
}

export default app
