import React, { useState } from 'react';

export default function SelectSeatButton({
  disabled = false,
  defaultSelected = false,
  onToggle,
}) {
  const [selected, setSelected] = useState(defaultSelected);

  const handleClick = () => {
    if (disabled) return;
    const next = !selected;
    setSelected(next);
    onToggle?.(next);
  };

  const base =
    'inline-flex items-center justify-center gap-1 min-w-[110px] px-3 py-1 text-sm font-semibold rounded-md shadow-sm select-none transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-green-500';

  const states = disabled
    ? 'bg-gray-200 text-gray-400 cursor-not-allowed shadow-none'
    : selected
    ? 'bg-white border border-green-600 text-green-600 hover:bg-green-50 active:scale-95'
    : 'bg-green-600 text-white hover:bg-green-700 hover:scale-105 active:scale-95 cursor-pointer';

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={handleClick}
      className={`${base} ${states}`}
    >
      {selected ? (
        <>
          <svg className="w-3.5 h-3.5 text-green-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          Selected
        </>
      ) : (
        'Select Seat'
      )}
    </button>
  );
}
