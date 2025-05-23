import Link from "next/link";

function ButtonParticle({
  title,
  colorBg,
  colorText,
  routeLink,
  iconBefore,
  iconAfter,
  iconCenter,
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
          {iconBefore && <i className={`link-icon-before icomoon mr-2 icon-${iconBefore}`} />}
          {title}
          {iconCenter && (
            <i className={`link-icon-before icomoon icon-${iconCenter} ${className}`} />
          )}
          {iconAfter && <i className={`link-icon-after icomoon ml-2 icon-${iconAfter}`} />}
        </button>
      ) : routeLink ? (
        <Link
          href={routeLink}
          className={`group btn ${colorBg} ${colorText} ${className} flex items-center justify-center text-center px-4 py-2 rounded-lg font-semibold text-base transition-transform duration-250 ease-in-out
          ${colorBgHover} ${colorTextHover}`}
          target={target}
        >
          {iconBefore && <i className={`link-icon-before icomoon mr-2 icon-${iconBefore}`} />}
          {title}
          {iconCenter && (
            <i className={`link-icon-before icomoon icon-${iconCenter} ${className}`} />
          )}
          {iconAfter && <i className={`link-icon-after icomoon ml-2 icon-${iconAfter}`} />}
        </Link>
      ) : null}
    </>
  );
}

export default ButtonParticle;
