import { BrowserRouter as Router } from 'react-router-dom';
import PublicRoutes from "./routes/PublicRoutes/PublicRoutes.tsx";
import AcceptCookiesPopup from './components/features/cookies/AcceptCookiesPopup.tsx';

function App() {

  return (
    <Router>
      <PublicRoutes />
      <AcceptCookiesPopup />
    </Router>
  )
}

export default App
