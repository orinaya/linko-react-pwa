'use client';

import { AuthProvider } from "@/contexts/AuthContext";
import { ProfileProvider } from "@/contexts/ProfileContext";
import { usePathname } from "next/navigation";

function LayoutProviders({ children }) {
  const pathname = usePathname();

  const isAuthPage = pathname === "/auth/login" || pathname === "/auth/signup" || pathname === "/create-profile";
  const noPaddingRoutes = ['/locate', '/', '/foire-aux-questions', '/mentions-legales', '/politique-de-confidentialite', '/conditions-generales-d-utilisation', '/conditions-generales-de-vente'];
  const isNoPaddingRoute = !noPaddingRoutes.includes(pathname);

  const wrapperClass = isAuthPage
    ? "p-6 h-dvh bg-[#0162EF]"
    : isNoPaddingRoute
      ? "m-6 pb-28"
      : "m-0 h-dvh relative";

  return (
    <div className={wrapperClass}>
      <AuthProvider>
        <ProfileProvider>
          {children}
        </ProfileProvider>
      </AuthProvider>
    </div>
  );
}

export default LayoutProviders;
