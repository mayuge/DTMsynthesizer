"use client"
import React from "react"
import Header from "@/components/molecules/header/Header"
import Button from "@/components/atoms/buttons/Button"
import SearchInput from "@/components/molecules/forms/SearchInput"
import useHomeSiteMain from "@/components/templates/homeSite/core/useHomeSiteMain"
import LampCard from "@/components/molecules/frames/LampCard"

const HeaderApp: React.FC = () => {
  const { getModeColor, getModeText, getModeIcon, routeToHomeSite } = useHomeSiteMain()

  return (
    <div className="relative items-center bg-back w-full">
      <div className="flex items-center justify-between shadow-black shadow-sm gap-2">
        <Header
          text="Raku-Raku-SynthMusic"
          icon="stat_minus_1"
          size="large"
          variant="header-dark"
          isCircle={false}
          onClick={routeToHomeSite}
        />
      </div>

      <div className="flex items-center justify-between bg-back shadow-black shadow-sm pr-4">
        <div className="flex items-center py-2">
          <LampCard
            text={`${getModeText()}`}
            variant={`${getModeColor()}`}
            icon={`${getModeIcon()}`}
          />
        </div>
        <div className="flex items-center gap-2">
          <Button iconLeft="add" text="新規プロジェクト作成" size="mini" variant="btn-primary" />
          <Button iconLeft="add" text="音源の書き出し" size="mini" variant="btn-success" />
        </div>
      </div>
    </div>
  )
}

export default HeaderApp
