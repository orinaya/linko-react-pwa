'use client';

function RegisterFormParticle({
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
        className="text-white text-md font-medium transition-all duration-200 pointer-events-none mb-2"
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
          w-full border text-gray-800 bg-white border-gray-300 rounded-md px-3 p-3 text-sm items-center focus:outline-none focus:border-blue-500 ${type === 'date' ? 'appearance-none' : ''}
        `}
        placeholder={label}
        {...props}
      >
      </input>

    </div>
  );
}

export default RegisterFormParticle