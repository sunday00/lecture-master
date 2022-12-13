import {Box} from '@chakra-ui/react'
import {ElementStyle} from './Rectangle'
import React from 'react';

type RectangleContainerProps = {
    position: ElementStyle['position']
    size: ElementStyle['size']
    onSelect: () => void
}

export const RectangleContainer: React.FC<RectangleContainerProps> = ({children, size, position, onSelect}) => {
    return (
        <Box
            position="absolute"
            style={{...size, ...position}}
            onMouseDown={() => onSelect()}
            onClick={(e) => e.stopPropagation()}
        >
            {children}
        </Box>
    )
}
