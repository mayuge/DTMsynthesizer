"use client"
import React from "react"
import useHomeSiteMain from "@/components/templates/homeSite/core/useHomeSiteMain"
import TextLabel from "@/components/atoms/labels/TextLabel"
import Button from "@/components/atoms/buttons/Button"

const ProfileApp: React.FC = () => {
  const { routeToHomeSite } = useHomeSiteMain()
  return (
    <div className="w-full px-4 pb-2">
      <div className="w-full h-[400px] bg-back shadow-black shadow-md">
        <div className="flex items-center mx-auto gap-4 p-2 max-w-[300px]">
          <Button iconLeft="skip_previous" size="normal" variant="btn-primary" />
          <Button iconLeft="play_arrow" size="normal" variant="btn-success" isStretch={true} />
          <Button iconLeft="skip_next" size="normal" variant="btn-primary" />
        </div>
      </div>
    </div>
  )
}

export default ProfileApp
