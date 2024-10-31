import { useState } from 'react';
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';

export default function AccordionPage({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (nextIndex) => {
    setExpandedIndex(prevIndex => (prevIndex === nextIndex ? -1 : nextIndex));
  };

  return (
    <div>
        <h1>
            Accordion!
        </h1>
      {items.map((item, index) => {
        const isExpanded = index === expandedIndex;
        const icon = isExpanded ? <GoChevronDown /> : <GoChevronLeft />;

        return (
          <div>
            <div className='headerLabel'>
              <span onClick={() => handleClick(index)}>
                {item.label}
                {icon}
              </span>
            </div>
            {isExpanded && <div>{item.content}</div>}
          </div>
        );
      })}
    </div>
  );
}