'use client'
import { GroupProvider } from "@/contexts/GroupContext"
import { UserProvider } from "@/contexts/UserContext"
import { usePathname } from "next/navigation";


function LayoutProviders({ children }) {
  const pathname = usePathname();
  return (
    <div className={pathname !== '/' ? 'm-6' : 'm-0'}>
      <UserProvider>
        <GroupProvider>
          {children}
        </GroupProvider>
      </UserProvider>
    </div>
  )
}

export default LayoutProviders