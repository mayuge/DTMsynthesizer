"use client"
import React from "react"
import useHomeSiteMain from "@/components/organisms/homeSite/core/application/useHomeSiteMain"
import TextLabel from "@/components/atoms/labels/TextLabel"

const ProfileApp: React.FC = () => {
  const { routeToHomeSite } = useHomeSiteMain()
  return (
    <div className="w-full flex px-4 py-2 gap-4">
      <div className="w-full h-[250px] bg-back shadow-black shadow-md">
        <div className="p-2">
          <TextLabel text="よく見る資料" size="normal" bold={true} isBlack={false} />
        </div>
      </div>
      <div className="w-full h-[250px] bg-back shadow-black shadow-md">
        <div className="p-2">
          <TextLabel text="所属プロジェクト" size="normal" bold={true} isBlack={false} />
        </div>
      </div>
    </div>
  )
}

export default ProfileApp
