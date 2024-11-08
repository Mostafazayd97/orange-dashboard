import './App.css'
import { Content } from './layout/content/content'
import { Sidebar } from './layout/sidebar/sidebar'

function App() {

  return (
    <>
      <div className="flex min-h-[100vh] w-full">
        <Sidebar  />
        <Content />
      </div>
    </>
  )
}

export default App
