// components/particles/ImageInputParticle.jsx
'use client'
import { useRef, useState } from 'react';
import { LuImagePlus } from 'react-icons/lu';

export default function ImageInputParticle({ label, onChange }) {
  const [preview, setPreview] = useState(null);
  const inputRef = useRef();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setPreview(url);
    onChange(file);
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="text-gray-800 text-sm">{label}</label>
      <div
        className="w-full h-40 rounded-lg border border-dashed border-gray-300 flex items-center justify-center cursor-pointer hover:border-blue-400 transition"
        onClick={() => inputRef.current?.click()}
      >
        {preview ? (
          <img src={preview} alt="Preview" className="h-full object-cover rounded-lg" />
        ) : (
          <div className="flex flex-col items-center text-gray-400 gap-2">
            <LuImagePlus className="text-3xl" />
            <span className="text-sm">Ajouter une image</span>
          </div>
        )}
      </div>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  );
}
