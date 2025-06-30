import { Box, Paper, Slider, Stack, styled, Typography } from "@mui/material";
import SimpleRadioField from "./widgets/SimpleRadioField";
import { FC, useMemo, useState } from "react";
import { Grid } from '@mui/system';

export default function UiLayoutPractice() {
  return (
    <div>
      <Typography variant="h3" gutterBottom>使用介面部局</Typography>

      <Box component='p' typography='body1'>
        參考：Border、Stack、Grid。<br/>
        [Stack](https://mui.com/system/react-stack/)<br />
        [Grid](https://mui.com/material-ui/react-grid/)<br />
        [Border](https://mui.com/system/borders/)
      </Box>

      <StackLab />

    </div>
  )
}

//-----------------------------------------------------------------------------

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  ...theme.typography.body1,
  textAlign: 'center',
}));

//-----------------------------------------------------------------------------

function StackLab() {
  //const [direction, setDirection] = useState<ResponsiveStyleValue<'row' | 'row-reverse' | 'column' | 'column-reverse'>>('column');
  const [direction, setDirection] = useState<string>('column');
  const [flexWrap, setFlexWrap] = useState<string>('nowrap');
  const [justifyContent, setJustifyContent] = useState<string>('flex-start');
  const [alignContent, setAlignContent] = useState<string>('flex-start');
  const [alignItems, setAlignItems] = useState<string>('flex-start');
  const [spacing, setSpacing] = useState<string>('0')
  const [gap, setGap] = useState<string>('0')
  const [count, setCount] = useState<number>(3)

  const countList = useMemo(() =>
    Array.from({ length: count })
      .map((_, i) => i + 1)
    , [count]);

  return (
    <div>
      <Typography variant="h6">Stack Lab</Typography>
      <Box typography='body1'>其 CSS display 皆是 'flex'。</Box>
      <Grid container>
        <Grid size={{ xs: 12 }}>
          <CountSlider count={count} onChange={setCount} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <SimpleRadioField label='direction' value={direction} onChange={setDirection}
            optionList={['row', 'row-reverse', 'column', 'column-reverse']} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <SimpleRadioField label='flexWrap' value={flexWrap} onChange={setFlexWrap}
            optionList={['nowrap', 'wrap', 'wrap-reverse']} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <SimpleRadioField label='spacing' value={spacing} onChange={setSpacing}
            optionList={['0', '0.5', '1', '2', '3', '4', '8', '12']} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <SimpleRadioField label='gap' value={gap} onChange={setGap}
            optionList={['0', '0.5', '1', '2', '3', '4', '8', '12']} />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <SimpleRadioField label='justifyContent' value={justifyContent} onChange={setJustifyContent}
            optionList={['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly']} />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <SimpleRadioField label='alignContent' value={alignContent} onChange={setAlignContent}
            optionList={['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'stretch']} />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <SimpleRadioField label='alignItems' value={alignItems} onChange={setAlignItems}
            optionList={['flex-start', 'center', 'flex-end', 'stretch', 'baseline']} />
        </Grid>
      </Grid>

      <Stack direction={direction as any}
        flexWrap={flexWrap as any}
        justifyContent={justifyContent as any}
        alignContent={alignContent}
        alignItems={alignItems as any}
        spacing={Number(spacing)}
        gap={Number(gap)}
        sx={{
          p: 1,
          border: 1, borderColor: 'grey.A700', borderRadius: 1,
          minHeight: 400,
        }}>

        {countList.map((v, i) => (
          <Item key={v}>
            <Box sx={{ py: `${v * 4}px`, textAlign: 'center' }}>
              {`Item ${v}`}
            </Box>
          </Item>
        ))}

        {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((v, i) => (
          <Item key={v}>
            <Box sx={{ py: `${v * 4}px`, textAlign: 'center' }}>
              {`Item ${v}`}
            </Box>
          </Item>
        ))} */}
      </Stack>
    </div>

  )
}

//-----------------------------------------------------------------------------

const CountSlider: FC<{
  count: number,
  onChange: (newCount: number) => void
}> = (props) => {
  //const [count, setCount] = useState<number>(3);

  const handleChange = (event: Event, newValue: number) => {
    props.onChange(newValue);
    //setCount(newValue);
  };

  return (
    <Box sx={{ width: 250 }}>
      <Typography gutterBottom>
        排列項目數量: {props.count}
      </Typography>
      <Slider
        value={props.count}
        min={3}
        step={1}
        max={20}
        marks={marks}
        onChange={handleChange}
        valueLabelDisplay="auto"
      />
    </Box>
  );
}

const marks = [
  {
    value: 3,
    label: '3',
  },
  {
    value: 7,
    label: '7',
  },
  {
    value: 13,
    label: '13',
  },
  {
    value: 20,
    label: '20',
  },
];