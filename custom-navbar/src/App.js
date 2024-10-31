import Link from './components/Link';
import AccordionPage from './pages/AccordionPage'
import DropdownPage from './pages/DropdownPage';
import Route from './components/Route';

function App() {

  return (
    <div>
      <Link to="/accordion">AccordionPage</Link>
      <Link to="/dropdown">DropdownPage</Link>
      <div>
        <Route path="/accordion">
        <AccordionPage />
        </Route>
        <Route path="/dropdown">
        <DropdownPage />
        </Route>
      </div>
    </div>
  );
}

export default App;
