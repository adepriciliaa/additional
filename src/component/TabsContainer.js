import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Autocomplete } from '@mui/material';
import { TextField } from '@mui/material';

export default function TabsContainer() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '91%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 3, bgcolor: 'background.paper', borderRadius: 1.5 }}>
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                sx={{ width: 130 }}
                renderInput={(params) => <TextField {...params} label="ALL TYPES" />}
            />
            <Tabs value={value} onChange={handleChange} centered>
                <Tab label="Popular Products" />
                <Tab label="Low Price" />
                <Tab label="High Price" />
            </Tabs>
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                sx={{ width: 100 }}
                renderInput={(params) => <TextField {...params} label="PRICE" />}
            />


        </Box>
    );
}

