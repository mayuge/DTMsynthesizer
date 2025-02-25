"use client"
import React from "react"
import PanelApp from "@/components/organisms/panelApp/ui/PanelApp"
import SwitchApp from "@/components/organisms/switchApp/ui/SwitchApp"
import HeaderApp from "@/components/organisms/headerApp/ui/HeaderApp"
import useHomeSiteMain from "@/components/templates/homeSite/core/useHomeSiteMain"
import ModeDialogApp from "@/components/organisms/assetListApp/ui/AssetListApp"
import ProfileApp from "@/components/organisms/manageApp/ui/ManageApp"

const HomeSiteMain: React.FC = () => {
  const {} = useHomeSiteMain()

  return (
    <div className="relative w-full h-screen">
      <HeaderApp />
      <div className="flex bg-gray-20 h-calc-100vh">
        <SwitchApp />
        <div className="w-full overflow-y-auto no-scrollbar">
          <PanelApp />
          <div className="flex flex-wrap justify-center">
            <ProfileApp />
          </div>
        </div>
        <ModeDialogApp />
      </div>
    </div>
  )
}

export default HomeSiteMain
