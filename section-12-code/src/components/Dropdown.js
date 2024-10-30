import { useState } from 'react';
import { GoChevronDown } from 'react-icons/go';

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setIsOpen(false);
    onChange(option);
  };

  const renderedOptions = options.map((option) => (
    <div
      onClick={() => handleOptionClick(option)}
      key={option.value}
    >
      {option.label}
    </div>
  ));

  return (
    <div className="dropdownmenu" onClick={handleClick}>
      {value?.label || 'Select...'}
      <GoChevronDown/>
      {isOpen && <div>{renderedOptions}</div>}
    </div>
  );
}

export default Dropdown;
