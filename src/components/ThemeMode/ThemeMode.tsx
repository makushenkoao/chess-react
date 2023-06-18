import React, {FC} from 'react';
import {Button,Typography} from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

interface ThemeModeProps {
    handleClick: () => void
    isActiveDarkMode: boolean
}

export const ThemeMode: FC<ThemeModeProps> = ({handleClick, isActiveDarkMode}) => {
    return (
        <Typography
            sx={{
            marginBottom: '50px',
            display: 'flex',
            flexDirection: 'row',
            gap: '20px',
            justifyContent: 'center'
        }}>
            <Button
                onClick={handleClick}
                variant='contained'
                startIcon={!isActiveDarkMode ? <LightModeIcon/> : <DarkModeIcon/>}
            >
                {!isActiveDarkMode ? 'light' : 'dark'}
            </Button>
        </Typography>
    );
};