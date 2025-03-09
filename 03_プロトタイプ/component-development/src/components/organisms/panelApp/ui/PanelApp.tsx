import React, { useEffect, useRef } from "react"
import useHomeSiteMain from "@/components/templates/homeSite/core/useHomeSiteMain"
import TextLabel from "@/components/atoms/labels/TextLabel"
import WaveSurfer from "wavesurfer.js"

const PanelApp: React.FC = () => {
  const {} = useHomeSiteMain()
  const waveformRef = useRef<HTMLDivElement>(null)
  const wavesurferRef = useRef<WaveSurfer | null>(null)

  useEffect(() => {
    if (waveformRef.current) {
      wavesurferRef.current = WaveSurfer.create({
        container: waveformRef.current,
        waveColor: "violet",
        progressColor: "purple",
        backend: "WebAudio",
        height: 100,
      })

      // 音源ファイルをロード
      wavesurferRef.current.load("music/music.wav")
    }

    return () => {
      if (wavesurferRef.current) {
        wavesurferRef.current.destroy()
      }
    }
  }, [])

  return (
    <div className="w-full px-4 pb-2">
      <div className="w-full h-[400px] bg-back shadow-black shadow-md">
        <div className="p-2">
          <TextLabel text="トラック一覧" size="normal" bold={true} isBlack={false} />
          <div ref={waveformRef} className="waveform"></div>
        </div>
      </div>
    </div>
  )
}

export default PanelApp
