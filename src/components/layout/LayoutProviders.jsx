'use client'
import { GroupProvider } from "@/contexts/GroupContext"
import { MemberProvider } from "@/contexts/MemberContext"
import { usePathname } from "next/navigation";


function LayoutProviders({ children }) {
  const pathname = usePathname();
  return (
    <div className={pathname !== '/' && pathname !== '/locate' ? 'm-6 pb-28' : 'm-0'}>
      <MemberProvider>
        <GroupProvider>
          {children}
        </GroupProvider>
      </MemberProvider>
    </div>
  )
}

export default LayoutProviders