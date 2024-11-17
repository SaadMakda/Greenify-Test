// src/components/Filter.tsx

import React, { useState } from 'react';

interface FilterProps {
  onFilterChange: (filter: { red: boolean; yellow: boolean; green: boolean }) => void;
}

const Filter: React.FC<FilterProps> = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({ red: true, yellow: true, green: true });

  const handleCheckboxChange = (color: 'red' | 'yellow' | 'green') => {
    const updatedFilters = { ...filters, [color]: !filters[color] };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  return (
    <div className="flex space-x-4 p-4 bg-white bg-opacity-90 rounded-lg shadow-md">
      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={filters.red}
          onChange={() => handleCheckboxChange('red')}
        />
        <span>High (75-100%)</span>
      </label>
      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={filters.yellow}
          onChange={() => handleCheckboxChange('yellow')}
        />
        <span>Moderate (50-74%)</span>
      </label>
      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={filters.green}
          onChange={() => handleCheckboxChange('green')}
        />
        <span>Low (0-49%)</span>
      </label>
    </div>
  );
};

export default Filter;