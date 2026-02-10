import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Laws from './pages/Laws';
import LawDetail from './pages/LawDetail';
import Roleplay from './pages/Roleplay';
import ScenarioDetail from './pages/ScenarioDetail';
import Credits from './pages/Credits';
import NotFound from './pages/NotFound';

function App() {
    return (
        <Router basename="/Rules-Reborn-Thai-Army">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/laws" element={<Laws />} />
                <Route path="/laws/:id" element={<LawDetail />} />
                <Route path="/roleplay" element={<Roleplay />} />
                <Route path="/roleplay/:id" element={<ScenarioDetail />} />
                <Route path="/credits" element={<Credits />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;
