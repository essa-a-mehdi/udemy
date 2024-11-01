import { useState } from 'react';

function SortableTable() {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  const handleClick = (label) => {
    if (sortBy === label) {
      if (sortOrder === 'asc') {
        setSortOrder('desc');
      } else {
        setSortOrder(null);
      }
    } else {
      setSortBy(label);
      setSortOrder('asc');
    }
  };

  return (
    <div>
      {/* redner table rows */}
    </div>
  );
}

