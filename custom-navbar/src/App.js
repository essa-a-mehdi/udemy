import Link from './components/Link';
import AccordionPage from './pages/AccordionPage'
import DropdownPage from './pages/DropdownPage';
import Route from './components/Route';

function App() {

  const items = [
    {
      id: 'test1',
      label: 'What is your favourite movie',
      content:
        'Good question.',
    },
    {
      id: 'test2',
      label: 'Can you build a snowman?',
      content:
        'Yes you can.',
    },
    {
      id: 'test3',
      label: 'Can I use CSS on a react project?',
      content:
        'On anything you want CSSSS 1 1 % SSS.',
    },
  ];

  return (
    <div>
      <Link to="/accordion">AccordionPage</Link>
      <Link to="/dropdown">DropdownPage</Link>
      <div>
        <Route path="/accordion">
        <AccordionPage items={items}/>
        </Route>
        <Route path="/dropdown">
        <DropdownPage />
        </Route>
      </div>
    </div>
  );
}

export default App;
