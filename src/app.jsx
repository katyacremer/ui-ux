import { Route, Routes } from 'react-router-dom'
import style from './style'
import counter from './pages/counter'
import GtAvt from './pages/GtAvt'

const app = () => {
  return (
    <Layout>
      <Routes>
        <Route path={"/"} element={<counter/>}/>
        <Route path={"/index"} element={<counter/>}/>
        <Route path={"/counter"} element={<counter/>}/>
        <Route path={"/gt_avt"} element={<GtAvt/>}/>
      </Routes>
    </style>
  )
}

export default app
