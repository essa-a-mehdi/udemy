import { useState, useEffect } from 'react';
import Dropdown from '../components/Dropdown';

function DropdownPage() {
  const [selection, setSelection] = useState(null);

  const handleSelect = (option) => {
    setSelection(option);
  };

  const options = [
    { label: 'Red', value: 'red' },
    { label: 'Green', value: 'green' },
    { label: 'Blue', value: 'blue' },
  ];

  useEffect(() => {
    if (selection) {
      document.body.style.backgroundColor = selection.value;
    } else {
      document.body.style.backgroundColor = '';
    }
  }, [selection]);

  return (
    <div>
      <h2>Select a colour:</h2>
      <Dropdown options={options} value={selection} onChange={handleSelect} />
    </div>
  );
}

export default DropdownPage;
