'use client'
import { AuthProvider } from "@/contexts/AuthContext";
import { GroupProvider } from "@/contexts/GroupContext"
import { MemberProvider } from "@/contexts/MemberContext"
import { ProfileProvider } from "@/contexts/ProfileContext";
import { usePathname } from "next/navigation";


function LayoutProviders({ children }) {
  const pathname = usePathname();
  return (
    <div className={pathname !== '/' && pathname !== '/locate' ? 'm-6 pb-28' : 'm-0 relative'}>
      <AuthProvider>
        <ProfileProvider>
          <MemberProvider>
            <GroupProvider>
              {children}
            </GroupProvider>
          </MemberProvider>
        </ProfileProvider>
      </AuthProvider>
    </div>
  )
}

export default LayoutProviders