import React, {FC} from 'react';
import {Figures} from "../models/figures/Figures";
import {Box, Typography} from "@mui/material";

interface LostFiguresProps {
    title: string;
    figures: Figures[];
}

export const LostFigures: FC<LostFiguresProps> = ({title, figures}) => {
    return (
        <Box
            className='lost'
        >
            <Typography
                color='secondary'
                sx={{fontWeight: 'bold', fontSize: '20px', mb: '10px'}}
            >{title}</Typography>
            {figures.map(figure =>
                <Typography
                    sx={{mb: '5px'}}
                    key={figure.id}
                    color='primary'
                >
                    {figure.name} {figure.logo && <img width={20} height={20} src={figure.logo} alt='figure'/>}
                </Typography>
            )}
        </Box>
    );
};
