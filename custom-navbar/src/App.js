import { useState } from 'react';
import Link from './components/Link';
import AccordionPage from './components/AccordionPage'
import DropdownPage from './pages/DropdownPage';
import Route from './components/Route';

function App() {
  const [selection, setSelection] = useState(null);

  const handleSelect = (option) => {
    setSelection(option);
  };

  const options = [
    { label: 'Red', value: 'red' },
    { label: 'Green', value: 'green' },
    { label: 'Blue', value: 'blue' },
  ];

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
