import { Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Counter from './pages/Counter'
import GitAvatar from './pages/GitAvatar'

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path={"/"} element={<Counter/>}/>
        <Route path={"/index"} element={<Counter/>}/>
        <Route path={"/counter"} element={<Counter/>}/>
        <Route path={"/git_avatar"} element={<GitAvatar/>}/>
      </Routes>
    </Layout>
  )
}

export default App
