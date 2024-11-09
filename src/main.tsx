import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { SidebarProvider } from './context/sidebat.context.tsx'

createRoot(document.getElementById('root')!).render(

  <SidebarProvider>
    <App />

  </SidebarProvider>


)
