"use client"
import { FC, ReactNode, useState } from "react";
import { Container, Tab, Tabs, Typography } from "@mui/material";
import ThemePalette from "./ThemePalette";
import ThemeTypography from "./ThemeTypography";
import UiLayoutPractice from "./UiLayoutPractice";

export default function Demo002Page() {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Container>
      <Typography variant="h3">Demo002:佈景主題</Typography>

      <Tabs value={tabIndex} onChange={(_, v) => setTabIndex(v)}>
        <Tab label="調色盤" />
        <Tab label="文字排版" />
        <Tab label="使用介面部局" />
      </Tabs>

      <TabPanel index={0} value={tabIndex}>
        <ThemePalette />
      </TabPanel>

      <TabPanel index={1} value={tabIndex}>
        <ThemeTypography />        
      </TabPanel>

      <TabPanel index={2} value={tabIndex}>
        <UiLayoutPractice />
      </TabPanel>
    </Container>
  )
}

//-----------------------------------------------------------------------------
const TabPanel: FC<{ 
  index: number, 
  value: number, 
  children: ReactNode 
}> = (props) => {
  return (
    <div role="tabpanel" hidden={props.value !== props.index}>
      {props.children}
    </div>
  )
}