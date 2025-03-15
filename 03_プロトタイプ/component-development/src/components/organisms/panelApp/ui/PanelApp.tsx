import React, { useState } from "react"
import useHomeSiteMain from "@/components/templates/homeSite/core/useHomeSiteMain"
import TextLabel from "@/components/atoms/labels/TextLabel"
import WavesurferPlayer from "@wavesurfer/react"

const PanelApp: React.FC = () => {
  const {} = useHomeSiteMain()
  const [wavesurfer, setWavesurfer] = useState<any>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const onReady = (ws: any) => {
    setWavesurfer(ws)
    setIsPlaying(false)
  }

  const onPlayPause = () => {
    if (wavesurfer) {
      wavesurfer.playPause()
    }
  }

  return (
    <div className="w-full px-4 pb-2">
      <div className="w-full h-[400px] bg-back shadow-black shadow-md">
        <div className="p-2">
          <TextLabel text="トラック一覧" size="normal" bold={true} isBlack={false} />
          <WavesurferPlayer
            height={100}
            waveColor="violet"
            url="/music/music.wav"
            onReady={onReady}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />
          <button onClick={onPlayPause}>{isPlaying ? "Pause" : "Play"}</button>
        </div>
      </div>
    </div>
  )
}

export default PanelApp
