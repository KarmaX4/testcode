import React from 'react';
import Image from 'next/image'
import { Box } from '@mui/material';

const CopyRight = () => {
    return (
        <Box
            backgroundColor="#000"
            margin='0'
            display="flex"
            alignItems="center"
            justifyContent="center"
            color="#fff"
            padding="1rem 0"
            fontSize='10px'
        >
            <Image
                height={30}
                width={30}
                src="/images/favicon.ico"
                alt="Skywave Info Solution"
            />
            &copy; 2023 Skywave Info Solutions Pvt. Ltd. All rights reserved
        </Box>
    )
};

export default CopyRight;