'use client'

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
    <div className="flex space-x-4 p-4 bg-white bg-opacity-90 rounded-lg shadow-md dark:bg-stone-800 dark:text-white">
      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={filters.red}
          onChange={() => handleCheckboxChange('red')}
          className="text-red-500 focus:ring-red-500 dark:text-red-400 dark:focus:ring-red-300"
        />
        <span>High (75-100%)</span>
      </label>
      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={filters.yellow}
          onChange={() => handleCheckboxChange('yellow')}
          className="text-yellow-500 focus:ring-yellow-500 dark:text-yellow-400 dark:focus:ring-yellow-300"
        />
        <span>Moderate (50-74%)</span>
      </label>
      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={filters.green}
          onChange={() => handleCheckboxChange('green')}
          className="text-green-500 focus:ring-green-500 dark:text-green-400 dark:focus:ring-green-300"
        />
        <span>Low (0-49%)</span>
      </label>
    </div>
  );
};

export default Filter;
