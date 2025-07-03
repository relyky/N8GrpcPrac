"use client"
import { ChangeEvent, useRef } from "react"
import { IconButton } from "@mui/material"
import CameraIcon from '@mui/icons-material/CameraAlt';

export default function PhotographIconButton(props: {
  onTakePhoto: (imageUri: string) => void
}) {
  const takePhotoRef = useRef<HTMLInputElement>(null)

  return (
    <>
      <IconButton size="large" onClick={() => takePhotoRef?.current?.click()}>
        <CameraIcon color='primary' />
      </IconButton>
      <input type='file' accept='image/*' capture='environment'
        ref={takePhotoRef}
        onChange={handleSelectFile}
        style={{
          /* hiddenInput */
          visibility: 'hidden',
          position: 'fixed',
          top: '-200vh',
        }} />
    </>
  )

  /**
   * 照像或選取圖片
   */
  function handleSelectFile(e: ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) return;
    const file = e.target.files[0]
    if (!file) return

    const reader = new FileReader()
    reader.addEventListener('load', () => {
      const imageUri = reader.result!.toString()
      props.onTakePhoto(imageUri)
    })

    reader.readAsDataURL(file)
  }
}
