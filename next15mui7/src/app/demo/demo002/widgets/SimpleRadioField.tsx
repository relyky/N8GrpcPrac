import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";

interface Props<T> {
  label: string,
  value: T,
  onChange: (v: T) => void,
  optionList: string[]
}

export default function SimpleRadioField<T>(props: Props<T>) {
  return (
    <FormControl>
      <FormLabel>{props.label}</FormLabel>
      <RadioGroup row value={props.value} onChange={(e,v) => props.onChange(v as T)}>
        {props.optionList.map((option, i) => (
          <FormControlLabel key={i} value={option} control={<Radio />} label={option} />
        ))}
      </RadioGroup>
    </FormControl>
  )
}
