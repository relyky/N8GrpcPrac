import { Box, FormControlLabel, Grid, MenuItem, Paper, Select, Switch, Toolbar, Typography } from "@mui/material";
import { FC, useState } from "react";

export default function ThemeTypography() {
  const [variant, setVariant] = useState<'elevation' | 'outlined'>('elevation');
  const [elevation, setElevation] = useState(1);
  const [square, setSquare] = useState(false)

  return (
    <div>
      <Toolbar sx={{ gap: 1 }}>
        <Typography variant="h6">顯示參數 Paper</Typography>
        <Select size='small' value={variant} onChange={(e) => setVariant(e.target.value)}>
          <MenuItem value={'elevation'}>elevation</MenuItem>
          <MenuItem value={'outlined'}>outlined</MenuItem>
        </Select>
        <Select size='small' value={elevation} onChange={(e) => setElevation(e.target.value)}>
          {[0, 1, 3, 5, 7, 9].map((v, i) => (
            <MenuItem key={i} value={v}>{v}</MenuItem>
          ))}
        </Select>
        <FormControlLabel
          control={<Switch checked={square} onChange={(e) => setSquare(e.target.checked)} />}
          label="square"
        />
      </Toolbar>

      <Paper sx={{ p: 2, mb: 2 }} variant={variant} elevation={elevation} square={square}>
        <Typography variant="overline">模擬上方標題</Typography>
        <Typography variant="h3" gutterBottom>模擬文章標題</Typography>
        <Box component="p" typography='body1' sx={{ textIndent: '2em' }}>
          這是一段模擬文字，用於展示排版效果與視覺風格。文字內容無特定意義，僅供測試使用。若有任何格式錯誤，請及時修正以確保整體一致性。您可以自由替換這段內容，來滿足實際需求或版面設計規劃。
        </Box>
        <Typography variant="h5" gutterBottom>模擬段落標題</Typography>
        <Box component="p" typography='body1' sx={{ textIndent: '2em' }}>
          這是一段中文假文，用來模擬段落排列與字型樣式的呈現效果。請忽略文字本身的意義，專注於版面整體的平衡與可讀性。
        </Box>
        <Box component="p" typography='body1' sx={{ textIndent: '2em' }}>
          為了測試不同裝置或平台的相容性，我們可能會重複使用這類內容作為填充文字。當正式內容尚未完成時，這些模擬資料將有助於介面設計、排版驗證與使用者體驗的前期評估。
        </Box>
        <Box component="p" typography='body1' sx={{ textIndent: '2em' }}>
          如需實際內容，請替換本段文字，或與相關人員確認最終資訊版本。
        </Box>
      </Paper>

      <Grid container spacing={2} sx={{ mb: 2 }}>
        <Grid size={6}>
          <TypoHant />
        </Grid>
        <Grid size={6}>
          <TypoEng />
        </Grid>
      </Grid>
    </div>
  );
}

//-----------------------------------------------------------------------------
const TypoEng: FC = () => (
  <Box>
    <Typography variant="h1" gutterBottom>
      h1. Logo
    </Typography>
    <Typography variant="h2" gutterBottom>
      h2. Logo 123
    </Typography>
    <Typography variant="h3" gutterBottom>
      h3. Title 123
    </Typography>
    <Typography variant="h4" gutterBottom>
      h4. Title 123
    </Typography>
    <Typography variant="h5" gutterBottom>
      h5. Heading 123
    </Typography>
    <Typography variant="h6" gutterBottom>
      h6. Heading 123
    </Typography>
    <Typography variant="subtitle1" gutterBottom>
      subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
      blanditiis tenetur
    </Typography>
    <Typography variant="subtitle2" gutterBottom>
      subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
      blanditiis tenetur
    </Typography>
    <Typography variant="body1" gutterBottom>
      body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
      blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
      neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
      quasi quidem quibusdam.
    </Typography>
    <Typography variant="body2" gutterBottom>
      body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
      blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
      neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
      quasi quidem quibusdam.
    </Typography>
    <Typography variant="button" gutterBottom sx={{ display: 'block' }}>
      button text
    </Typography>
    <Typography variant="caption" gutterBottom sx={{ display: 'block' }}>
      caption text
    </Typography>
    <Typography variant="overline" gutterBottom sx={{ display: 'block' }}>
      overline text
    </Typography>
  </Box>
);

//-----------------------------------------------------------------------------
const TypoHant: FC = () => (
  <Box>
    <Typography variant="h1" gutterBottom>
      h1. 標誌
    </Typography>
    <Typography variant="h2" gutterBottom>
      h2. 標誌
    </Typography>
    <Typography variant="h3" gutterBottom>
      h3. 文章抬頭
    </Typography>
    <Typography variant="h4" gutterBottom>
      h4. 文章抬頭
    </Typography>
    <Typography variant="h5" gutterBottom>
      h5. 段落標題
    </Typography>
    <Typography variant="h6" gutterBottom>
      h6. 段落標題
    </Typography>
    <Typography variant="subtitle1" gutterBottom>
      subtitle1. 痛苦本身是愛的本質，專注於極致的享樂。那些被強加的責任是難以逃避的。
    </Typography>
    <Typography variant="subtitle2" gutterBottom>
      subtitle2. 痛苦本身是愛的本質，專注於極致的享樂。那些被強加的責任是難以逃避的。
    </Typography>
    <Typography variant="body1" gutterBottom>
      body1. 我們專注於卓越的細節與結構美學，那些令人滿意的結果來自於創造力與堅持。即使困難重重，我們仍堅持品質與完整性。某些幾近完美的成果，也正是我們努力的證明。
    </Typography>
    <Typography variant="body2" gutterBottom>
      body2. 我們專注於卓越的細節與結構美學，那些令人滿意的結果來自於創造力與堅持。即使困難重重，我們仍堅持品質與完整性。某些幾近完美的成果，也正是我們努力的證明。
    </Typography>
    <Typography variant="button" gutterBottom sx={{ display: 'block' }}>
      按鈕文字
    </Typography>
    <Typography variant="caption" gutterBottom sx={{ display: 'block' }}>
      說明文字：表格或圖形下方的文字說明。
    </Typography>
    <Typography variant="overline" gutterBottom sx={{ display: 'block' }}>
      上方標題：標題上方加註。
    </Typography>
  </Box>
);
