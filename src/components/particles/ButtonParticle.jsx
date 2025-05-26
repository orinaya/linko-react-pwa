import Link from "next/link";

function ButtonParticle({
  title,
  colorBg,
  colorText,
  routeLink,
  iconBefore: IconBefore,
  iconAfter: IconAfter,
  iconCenter: IconCenter,
  target,
  onClick,
  className,
  colorBgHover,
  colorTextHover,
}) {
  return (
    <>
      {onClick ? (
        <button
          type="button"
          className={`group btn ${colorBg} ${colorText} ${className} flex items-center justify-center text-center px-4 py-2 rounded-lg font-semibold text-base transition-transform duration-250 ease-in-out
          ${colorBgHover} ${colorTextHover}`}
          onClick={onClick}
        >
          {IconBefore && <IconBefore className="mr-2" />}
          {title}
          {IconCenter && <IconCenter className={`mx-2 ${className}`} />}
          {IconAfter && <IconAfter className="ml-2" />}
        </button>
      ) : routeLink ? (
        <Link
          href={routeLink}
          className={`group btn ${colorBg} ${colorText} ${className} flex items-center justify-center text-center px-4 py-2 rounded-lg font-semibold text-base transition-transform duration-250 ease-in-out
          ${colorBgHover} ${colorTextHover}`}
          target={target}
        >
          {IconBefore && <IconBefore className="mr-2" />}
          {title}
          {IconCenter && <IconCenter className={`mx-2 ${className}`} />}
          {IconAfter && <IconAfter className="ml-2" />}
        </Link>
      ) : null}
    </>
  );
}

export default ButtonParticle;
