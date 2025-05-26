// components/MultiSelectInput.jsx
"use client";

import { useEffect, useRef, useState } from "react";

function MultiselectParticle({ label, options = [], selected = [], onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const containerRef = useRef(null);

  // dropdown open/close state
  const toggleSelect = () => setIsOpen((prev) => !prev);

  // option selection 
  const handleSelect = (option) => {
    const alreadySelected = selected.find((item) => item.id === option.id);
    if (alreadySelected) {
      onChange(selected.filter((item) => item.id !== option.id));
    } else {
      onChange([...selected, option]);
    }
  };

  // remove selected option
  const handleRemove = (id) => {
    onChange(selected.filter((s) => s.id !== id));
  };

  // close dropdown when clicking outside
  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // search input filter
  const filteredOptions = options.filter((option) =>
    option.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="relative w-full" ref={containerRef}>
      <label className="text-gray-800 text-sm transition-all duration-200 pointer-events-none">{label}</label>

      <div
        className="w-full min-h-[44px] border border-gray-300 rounded-md p-2 cursor-pointer bg-white flex flex-wrap items-center gap-2"
        onClick={toggleSelect}
      >
        {selected.length === 0 && <span>Sélectionner...</span>}
        {selected.map((s) => (
          <span
            key={s.id}
            className="bg-blue-100 text-blue-700 text-sm px-2 py-1 rounded-md flex items-center gap-1"
          >
            {s.name}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleRemove(s.id);
              }}
              className="text-blue-500 hover:text-blue-700"
            >
              &times;
            </button>
          </span>
        ))}
      </div>

      {
        isOpen && (
          <div className="absolute z-20 mt-1 w-full border-gray-300 bg-white border rounded-md shadow-md max-h-60 overflow-y-auto">
            <input
              type="text"
              placeholder="Rechercher..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full boder-b border-b-gray-600 p-2 text-sm outline-none"
            />
            <ul className="p-2">
              {filteredOptions.length === 0 && (
                <li className="text-sm text-gray-400">Aucun résultat</li>
              )}
              {filteredOptions.map((option) => (
                <li
                  key={option.id}
                  className={`p-2 rounded hover:bg-blue-50 cursor-pointer text-sm ${selected.find((s) => s.id === option.id)
                    ? "bg-blue-100 text-blue-700"
                    : ""
                    }`}
                  onClick={() => handleSelect(option)}
                >
                  {option.name}
                </li>
              ))}
            </ul>
          </div>
        )
      }
    </div >
  );
}

export default MultiselectParticle;