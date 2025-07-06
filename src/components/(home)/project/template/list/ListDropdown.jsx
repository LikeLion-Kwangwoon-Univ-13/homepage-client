import React, { useEffect, useRef, useState } from "react";

const ListDropdown = ({ label, options, onSelect }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(label);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
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
    <div ref={dropdownRef} className="relative min-w-[171px] w-fit whitespace-nowrap" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <button
            onClick={() => setOpen(!open)}
            style={{fontFamily: 'Space Grotesk', fontSize: '24px'}}
            className="w-full h-[70px] flex items-center justify-between px-[40px] border border-white rounded-[40px] text-white font-bold cursor-pointer"
        >
            {selected}
            <img src="/images/dropdown-arrow.png" alt="arrow"
                className={`w-[21px] h-[10px] ml-[10px] ${isHovered || open ? "" : "rotate-180"}`}
            />
        </button>

      {open && (
        <ul style={{fontFamily: 'Space Grotesk', fontSize: '20px', backgroundColor: '#303030'}} className="text-white absolute z-10 mt-2 w-full overflow-hidden shadow-lg rounded-[20px]">
          {options.map((option, idx) => (
            <li
              key={idx}
              onClick={() => handleSelect(option)}
              onMouseEnter={() => setHoveredIndex(idx)} onMouseLeave={() => setHoveredIndex(null)}
              style={{fontFamily: 'Space Grotesk', fontSize: '20px', backgroundColor: hoveredIndex === idx ? "#5E5E5E" : "#303030", fontWeight: hoveredIndex === idx ? 700 : 400, transition: "all 0.2s ease"}}
              className="px-6 py-3 cursor-pointer whitespace-nowrap rounded-[20px]"
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
