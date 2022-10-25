import { ContainerProps, Container as MuiContainer } from '@mui/material';
import React from 'react';

function Container({ children, ...props }: TProps) {
    return (
        <MuiContainer maxWidth={false} sx={{ px: "50px !important", py: "7px" }} {...props}>
            {children}
        </MuiContainer>
    );
}

type TProps = ContainerProps & {
    children?: React.ReactNode
}

export default Container;