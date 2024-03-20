import { Box, IconButton, InputAdornment, TextField } from '@mui/material';

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import PropTypes from 'prop-types';
import { useState } from 'react';

const InputField = ({ type, placeholder, label, name, value, onChange, onBlur, error, helperText, style, variant, styleBox }) => {
    const [showPassword, setShowPassword] = useState(false);

    const handlePasswordToggle = () => setShowPassword(show => !show);

    const inputProps = name === 'password' ? {
        endAdornment: (<InputAdornment position="end">
            <IconButton onClick={handlePasswordToggle}>
                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </IconButton>
        </InputAdornment>)
    } : {};

    return <Box sx={{ width: '100%' }} style={styleBox} >
        <TextField
            type={name === 'password' ? (showPassword ? 'text' : 'password') : type}
            placeholder={placeholder}
            label={label}
            name={name}
            value={value}
            onChange={onChange}
            InputProps={inputProps}
            onBlur={onBlur}
            error={error}
            helperText={helperText}
            margin='dense'
            size="small"
            variant={variant}
            fullWidth
            style={style}
        />
    </Box>
}

InputField.defaultProps = {
    type: 'text',
    placeholder: 'Enter Something',
    label: 'Enter Something',
    name: '',
    value: '',
    onChange: ()=>{},
    onBlur: ()=>{},
    error: false,
    helperText: '',
    style: {},
    styleBox: {},
    variant: 'standard',
}

InputField.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.any,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    error: PropTypes.bool,
    helperText: PropTypes.string,
    style: PropTypes.object,
    styleBox: PropTypes.object,
    variant: PropTypes.string,
};

export default InputField;