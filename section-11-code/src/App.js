import Accordion from './components/Accordion';

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

  return <Accordion items={items} />;
}

export default App;
