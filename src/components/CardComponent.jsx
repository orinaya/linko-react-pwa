import { useState, useRef, useEffect } from "react";
import { FiMoreVertical, FiEdit, FiTrash2 } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { slugify } from "@/utils/slugify";

function CardComponent({
  id,
  title,
  startDate,
  endDate,
  initials = "AA",
}) {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();

  // click outside to close the menu
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const router = useRouter();
  const handleClick = () => {
    const slug = slugify(title);
    router.push(`/trips/${id}-${slug}`);
  };

  return (
    <li className="flex gap-4 bg-white p-4 rounded-lg relative" onClick={handleClick}>
      <div className="w-12 h-12 rounded-full bg-green-200 flex items-center justify-center">
        <span className="text-green-700 font-bold">{initials}</span>
      </div>
      <div className="flex flex-col">
        <p className="font-bold">{title}</p>
        <div className="flex text-sm gap-1 text-gray-500 flex-wrap">
          <p>{startDate}</p>
          <span>au</span>
          <p>{endDate}</p>
        </div>
      </div>

      <div className="ml-auto flex items-center relative" ref={menuRef}>
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="p-2 rounded-full hover:bg-gray-100 transition"
          aria-label="Options"
        >
          <FiMoreVertical className="text-xl" />
        </button>

        {isMenuOpen && (
          <div className="absolute right-0 top-10 bg-white border border-gray-200 rounded-md shadow-lg w-32 z-10">
            <button
              onClick={() => {
                setIsMenuOpen(false);
                onEdit && onEdit();
              }}
              className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
            >
              <FiEdit /> Modifier
            </button>
            <button
              onClick={() => {
                setIsMenuOpen(false);
                onDelete && onDelete();
              }}
              className="w-full px-4 py-2 text-sm text-red-600 hover:bg-red-100 flex items-center gap-2"
            >
              <FiTrash2 /> Supprimer
            </button>
          </div>
        )}
      </div>
    </li>
  );
}

export default CardComponent;
