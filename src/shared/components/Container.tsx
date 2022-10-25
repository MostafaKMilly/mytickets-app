import { ContainerProps } from '@mui/material';
import React from 'react';

function Container({ children, ...props }: TProps) {
    return (
        <Container maxWidth={false} sx={{ px: "50px !important", py: "7px" }} {...props}>
            {children}
        </Container>
    );
}

type TProps = ContainerProps & {
    children?: React.ReactNode
}

export default Container;