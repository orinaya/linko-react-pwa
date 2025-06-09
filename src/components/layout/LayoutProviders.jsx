'use client';

import { AuthProvider } from "@/contexts/AuthContext";
import { ProfileProvider } from "@/contexts/ProfileContext";
import { usePathname } from "next/navigation";

function LayoutProviders({ children }) {
  const pathname = usePathname();

  const isAuthPage = pathname === "/auth/login" || pathname === "/auth/signup" || pathname === "/create-profile";

  const wrapperClass = isAuthPage
    ? "p-6 h-dvh bg-[#0162EF]"
    : pathname !== "/" && pathname !== "/locate"
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
