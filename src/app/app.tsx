import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import Intro from "../intro"
import { OrderProvider } from "../store/provider"

function App() {
 
  return (
    <OrderProvider>
      <Router>
          <Routes>
            <Route path="/" element={<Intro />}/>
          </Routes>
      </Router>
    </OrderProvider>

  )
}

export default App;
