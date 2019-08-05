import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import {
    LoadingSpinnerContainer,
    DarkLoadingSpinner,
} from './primitives';

export const LoadingPage = () => {
    const [loadingDots, setLoadingDots] = useState('.');
    const [loaderInterval, setLoaderInterval] = useState(null);
    
    const changeLoaderDots = () => {
        if (loadingDots.length === 3) {
            setLoadingDots('.');
        } else {
            const dots = `${loadingDots}.`;
            setLoadingDots(dots);
        }
    };

    const createInterval = () => {
        const interval = setInterval(() => {
            changeLoaderDots();
        }, 300);

        setLoaderInterval(interval);
    };

    useEffect(() => {
        createInterval();

        return () => {
            clearInterval(loaderInterval);
            setLoaderInterval(null);
        };
    }, [loadingDots]);

    return (
        <>
            <Typography 
                style={{
                    color: '#4f3529', 
                    fontWeight: 800, 
                    fontSize: '125%',
                    display: 'block',
                    position: 'relative',
                    margin: '0 auto',
                    textAlign: 'center',
                    marginTop: '1.5%'
                }} 
                component="p"
            >
                Loading{loadingDots}
            </Typography>
            <LoadingSpinnerContainer pt={6} m={'0 auto'} pb={6}>
                <DarkLoadingSpinner fontSize={'75%'}/>
            </LoadingSpinnerContainer>
        </>
    )
}