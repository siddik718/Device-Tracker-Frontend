import ProptTypes from 'prop-types';
import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material';

const SelectField = ({ text, options, error, value, onChange,onBlur, name }) => {
    
    return <FormControl fullWidth variant="filled" error={error}>
        <InputLabel id="select-field-label">Select {text}</InputLabel>
        <Select
            labelId="select-field-label"
            id="select-field"
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            variant="filled"
            name={name}
            size='small'
            style={{
                marginRight: '7px',
                marginTop: '5px'
            }}
        >
            {options.map((option) => (
                <MenuItem key={option.name} value={option.name}>
                    {option.name}
                </MenuItem>
            ))}
        </Select>
        {error && (
            <FormHelperText error>{error}</FormHelperText>
        )}
    </FormControl>
};

SelectField.propTypes = {
    options: ProptTypes.array,
    error: ProptTypes.any,
    value: ProptTypes.string,
    name: ProptTypes.string,
    text: ProptTypes.string,
    onChange: ProptTypes.func,
    onBlur: ProptTypes.func,
}


export default SelectField;
