import React, {FC, useEffect, useRef, useState} from 'react';
import {Player} from "../models/Player";
import {Colors} from "../models/Colors";
import {ThemeMode} from "../ThemeMode";
import {Button, Typography} from "@mui/material";
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import LightModeIcon from "@mui/icons-material/LightMode";

interface TimerProps {
    currentPlayer: Player | null;
    restart: () => void
    handleClick: () => void
    isActiveDarkMode: boolean
}

const Timer: FC<TimerProps> = ({currentPlayer, restart,handleClick, isActiveDarkMode}) => {
    const [blackTime, setBlackTime] = useState(300);
    const [whiteTime, setWhiteTime] = useState(300);
    const timer = useRef<null | ReturnType<typeof setInterval>>(null)

    useEffect(() => {
        startTimer()
    },[currentPlayer])

    useEffect(() => {
        checkTimer()
    }, [blackTime, whiteTime]);

    const startTimer = () => {
        if (timer.current) {
            clearInterval(timer.current)
        }
        const callback = currentPlayer?.color === Colors.WHITE ? decrementWhiteTimer : decrementBlackTimer
        timer.current = setInterval(callback, 1000)
    }

    const checkTimer = () => {
        if (blackTime === 0) {
            if (timer.current) clearInterval(timer.current)
            alert('Time is up, black lost')
        }
        if (whiteTime === 0) {
            if (timer.current) clearInterval(timer.current)
            alert('Time is up, white lost')
        }
    }

    const decrementBlackTimer = () => {
        setBlackTime(prevState => prevState - 1)
    }

    const decrementWhiteTimer = () => {
        setWhiteTime(prevState => prevState - 1)
    }

    const handleRestart = () => {
        setWhiteTime(300)
        setBlackTime(300)
        restart()
    }

    return (
        <Typography
            component='span'
        >
            <ThemeMode
                handleClick={handleClick}
                isActiveDarkMode={isActiveDarkMode}
            />
            <Typography
                className='timer'
                sx={{mb: '15px'}}
                component='span'
            >
                <Button
                    onClick={handleRestart}
                    className='button_restart'
                    variant='contained'
                    startIcon={<RestartAltIcon/>}
                >
                    Restart game
                </Button>
                <Typography
                    color='primary'
                    component='h3'
                    sx={{fontWeight: 'bold', fontSize: '25px'}}
                >Black = {blackTime} sec</Typography>
                <Typography
                    color='primary'
                    component='h3'
                    sx={{fontWeight: 'bold', fontSize: '25px'}}
                >White = {whiteTime} sec</Typography>
            </Typography>
        </Typography>
    );
};

export default Timer;
