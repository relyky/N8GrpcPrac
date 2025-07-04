"use client"
import { Step, StepLabel, Stepper, useMediaQuery, useTheme } from "@mui/material"

export default function ApplySteper(props: {
  activeStep: number
}) {
  const { breakpoints } = useTheme();
  const sm = useMediaQuery(breakpoints.down('sm'));

  return (
    <Stepper activeStep={props.activeStep} sx={{ py: 3 }} alternativeLabel={sm}>
      <Step>
        <StepLabel>基本資訊</StepLabel>
      </Step>
      <Step>
        <StepLabel>申請內容</StepLabel>
      </Step>
      <Step>
        <StepLabel>上傳附件</StepLabel>
      </Step>
      <Step>
        <StepLabel>申請確認</StepLabel>
      </Step>
    </Stepper>
  )
}