import dynamic from "next/dynamic"
import React, { useEffect, useState } from "react"
import useHomeSiteMain from "@/components/templates/homeSite/core/useHomeSiteMain"
import TextLabel from "@/components/atoms/labels/TextLabel"
import p5Types from "p5" // p5の型をインポート

// `dynamic`に渡す関数をあらかじめ定義する
const importFunction = () => import("react-p5").then((mod) => mod.default)

const PanelApp: React.FC = () => {
  const {} = useHomeSiteMain()
  const [Sketch, setSketch] = useState<any>(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const DynamicSketch = dynamic(importFunction, { ssr: false })
      setSketch(() => DynamicSketch)
    }
  }, [])

  // p5.jsのスケッチコンポーネントを定義
  const SketchComponent = () => {
    const preload = (p5: p5Types) => {
      // 画像などのロードを行う
    }

    const setup = (p5: p5Types, canvasParentRef: Element) => {
      p5.createCanvas(400, 400).parent(canvasParentRef)
      // p5でいうsetupの処理を書く
    }

    const draw = (p5: p5Types) => {
      p5.background(200)
      p5.ellipse(p5.width / 2, p5.height / 2, 50, 50)
      // p5でいうdrawの処理を書く
    }

    const windowResized = (p5: p5Types) => {
      // コンポーネントのレスポンシブ化
      p5.resizeCanvas(400, 400)
    }

    return <Sketch preload={preload} setup={setup} draw={draw} windowResized={windowResized} />
  }

  return (
    <div className="w-full px-4 pb-2">
      <div className="w-full h-[400px] bg-back shadow-black shadow-md">
        <div className="p-2">
          <TextLabel text="トラック一覧" size="normal" bold={true} isBlack={false} />
          {Sketch ? <SketchComponent /> : null}
        </div>
      </div>
    </div>
  )
}

export default PanelApp
