import './App.css'
import Login from './components/Login'
import UserContextProvider from './context/UserContextProvider'

function App() {
  

  return (
    <UserContextProvider>
      <h1>React with Chai and context</h1>
      <Login />
      <Profile/>
    </UserContextProvider>
  )
}

export default App
