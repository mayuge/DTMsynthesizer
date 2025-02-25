"use client"
import React from "react"
import useHomeSiteMain from "@/components/organisms/homeSite/core/application/useHomeSiteMain"
import TextLabel from "@/components/atoms/labels/TextLabel"

const RelationApp: React.FC = () => {
  const {} = useHomeSiteMain()
  return (
    <div className="w-full px-4 pb-2">
      <div className="w-full h-[400px] bg-back shadow-black shadow-md">
        <div className="p-2">
          <TextLabel text="トラック一覧" size="normal" bold={true} isBlack={false} />
        </div>
      </div>
    </div>
  )
}

export default RelationApp
