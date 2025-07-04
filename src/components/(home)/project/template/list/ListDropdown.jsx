import React, { useEffect, useRef, useState } from "react";

const ListDropdown = ({ label, options, onSelect }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(label);
  const dropdownRef = useRef(null);

  useEffect(()=> {
    const handleClickOutside = (event) => {
        if(dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setOpen(false);
        }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    setSelected(option);
    setOpen(false);
    onSelect?.(option); // 선택 시 콜백 호출
  };

  return (
    <div ref={dropdownRef} className="relative min-w-[171px] w-fit whitespace-nowrap">
        <button
            onClick={() => setOpen(!open)}
            style={{fontFamily: 'Space-Grotesk', fontSize: '24px'}}
            className="w-full h-[70px] flex items-center justify-between px-[40px] border border-white rounded-[40px] text-white font-bold"
        >
            {selected}
            <img src="https://www.svgrepo.com/show/80156/down-arrow.svg" alt="arrow"
                className="w-[21px] h-[10px] ml-[10px] invert"
            />
        </button>

      {open && (
        <ul style={{fontFamily: 'Space-Grotesk', fontSize: '20px'}}className="text-white absolute z-10 mt-2 w-full bg-black border border-white rounded-[32px] overflow-hidden shadow-lg">
          {options.map((option, idx) => (
            <li
              key={idx}
              onClick={() => handleSelect(option)}
              style={{fontFamily: 'Space-Grotesk', fontSize: '20px'}}
              className="px-6 py-3 hover:bg-white hover:text-black cursor-pointer whitespace-nowrap"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ListDropdown;
