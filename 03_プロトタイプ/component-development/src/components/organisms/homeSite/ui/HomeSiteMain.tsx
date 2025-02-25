"use client"
import React from "react"
import RelationApp from "@/components/organisms/homeSite/ui/RelationApp"
import SwitchApp from "@/components/organisms/homeSite/ui/SwitchApp"
import HeaderApp from "@/components/organisms/homeSite/ui/HeaderApp"
import useHomeSiteMain from "@/components/organisms/homeSite/core/application/useHomeSiteMain"
import ModeDialogApp from "@/components/organisms/homeSite/ui/ProjectListApp"
import ProfileApp from "@/components/organisms/homeSite/ui/ProfileApp"

const ViewSiteMain: React.FC = () => {
  const {} = useHomeSiteMain()

  return (
    <div className="relative w-full h-screen">
      <HeaderApp />
      <div className="flex bg-gray-20 h-calc-100vh">
        <SwitchApp />
        <div className="w-full overflow-y-auto no-scrollbar">
          <RelationApp />
          <div className="flex flex-wrap justify-center">
            <ProfileApp />
          </div>
        </div>
        <ModeDialogApp />
      </div>
    </div>
  )
}

export default ViewSiteMain
