import Link from "next/link";

const buttonStyles = {
  primary: {
    blue: "bg-[#0162EF] text-white hover:bg-[#3486FE]",
    orange: "bg-[#FF7401] text-white hover:bg-[#FF9D4D]",
  },
  secondary: {
    blue: "bg-white text-[#0162EF] border border-[#0162EF] hover:bg-[#DBEAFF] hover:text-[#0053CC] hover:border-[#0053CC]",
    orange: "bg-white text-[#FF7401] border border-[#FF7401] hover:bg-[#FFE9D6] hover:text-[#CC5C00] hover:border-[#CC5C00]",
  },
  tertiary: {
    orange: "bg-[#FFE3CC] text-[#FF7401] hover:bg-[#FFC799] hover:text-[#CC5C00]",
  },
  ghost: {
    blue: "bg-transparent text-[#0162EF] hover:bg-[#DBEAFF] hover:text-[#0053CC] hover:border-[#0053CC]",
    orange: "bg-transparent text-[#FF7401] hover:bg-[#FFE9D6] hover:text-[#CC5C00] hover:border-[#CC5C00]",
    danger: "bg-transparent text-red-500 hover:bg-red-100 hover:text-red-700",
    neutral: "bg-transparent text-gray-900 hover:bg-gray-100 hover:text-gray-700",
  }
}

function ButtonParticle({
  title,
  routeLink,
  onClick,
  iconBefore: IconBefore,
  iconAfter: IconAfter,
  iconCenter: IconCenter,
  target,
  className = "",
  justify = "justify-center",
  variant = "primary", // primary | secondary | tertiary
  color = "",      // blue | orange
}) {

  {
    const baseClasses =
      `group btn flex items-center ${justify} text-center px-4 py-2 rounded-lg font-normal text-base transition-transform duration-250 ease-in-out`;

    const variantClasses = buttonStyles[variant]?.[color] || "";

    const content = (
      <>
        {IconBefore && <IconBefore className="mr-2" />}
        {title}
        {IconCenter && <IconCenter className={`mx-2 ${className}`} />}
        {IconAfter && <IconAfter className="ml-2" />}
      </>
    );

    if (onClick) {
      return (
        <button
          type="button"
          className={`${baseClasses} ${variantClasses} ${className}`}
          onClick={onClick}
        >
          {content}
        </button>
      );
    }

    if (routeLink) {
      return (
        <Link
          href={routeLink}
          className={`${baseClasses} ${variantClasses} ${className}`}
          target={target}
        >
          {content}
        </Link>
      );
    }

    return null;
  }
}

export default ButtonParticle;
