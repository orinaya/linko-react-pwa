'use client';

function FormInputParticle({
  label,
  value,
  onChange,
  type = 'text',
  id,
  name,
  className = '',
  ...props
}) {

  return (
    <div className={`relative w-full ${className}`}>
      <label
        htmlFor={id}
        className="text-gray-800 text-sm transition-all duration-200 pointer-events-none"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className={`
          w-full border border-gray-300 rounded-md px-3 p-3 text-sm items-center focus:outline-none focus:border-blue-500 ${type === 'date' ? 'appearance-none' : ''}
        `}
        placeholder={label}
        {...props}
      />

    </div>
  );
}

export default FormInputParticle