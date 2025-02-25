import React from "react"

import HomeSiteMain from "@/components/templates/homeSite/ui/HomeSiteMain"
type MainLayoutProps = {
  children: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div>
      <main>
        {children}
        <HomeSiteMain />
      </main>
    </div>
  )
}

export default MainLayout
