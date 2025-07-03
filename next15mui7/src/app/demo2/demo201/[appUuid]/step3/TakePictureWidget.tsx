"use client"

import { ChangeEvent, useState } from "react"

export default function TakePictureWidget(props: {
  onTakePicture: (imageUrl: string) => void
}) {
  const [imgSrc, setImgSrc] = useState('')
  const [imgFileName, setImgFileName] = useState('')

  return (
    <div>
      <input type='file' accept='image/*' capture='environment'
        onChange={handleSelectFile} />
    </div>
  )

  /**
   * 照像或選取圖片
   */
  function handleSelectFile(e: ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) return;
    const file = e.target.files[0]
    if (!file) return

    // for debug
    //console.trace('handleSelectFile', file)

    const reader = new FileReader()
    reader.addEventListener('load', () => {
      const imageUrl = reader.result!.toString()
      setImgSrc(imageUrl)
      setImgFileName(file.name)
      //setCroping(true) // 載入照片後開始裁剪

      props.onTakePicture(imageUrl)
    })

    reader.readAsDataURL(file)
  }
}