import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";

interface Props {
  label: string,
  value: string,
  onChange: (v: string) => void,
  optionList: string[]
}

export default function SimpleRadioField(props: Props) {
  return (
    <FormControl>
      <FormLabel>{props.label}</FormLabel>
      <RadioGroup row value={props.value} onChange={(e,v) => props.onChange(v)}>
        {props.optionList.map((option, i) => (
          <FormControlLabel key={i} value={option} control={<Radio />} label={option} />
        ))}
      </RadioGroup>
    </FormControl>
  )
}
