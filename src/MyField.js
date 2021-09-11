import { TextField } from '@material-ui/core';
import React from 'react'

function MyField({ placeholder, field}) {
    return <TextField
        style={{width:'50%', margin: 5, maxWidth: 700}}
        variant="outlined"
        required
        placeholder={placeholder} {...field}
    />;
}

export default MyField
