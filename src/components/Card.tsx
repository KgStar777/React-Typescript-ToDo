import React, {FC, useState} from 'react';

export enum CardVariant {
    outlined = 'outlined',
    primary = 'primary'
}

interface CardProps {
    width?: string
    height?: string
    children?: React.ReactChild | React.ReactNode
    variant: CardVariant
}

const Card: FC<CardProps> =
    ({
         width,
         height,
         children,
         variant
     }) => {

        const [state, setState] = useState(0)

        return (
            <div style={{
                width, height,
                border: variant === CardVariant.outlined
                    ? '2px solid lightblue' : 'none',
                background: variant === CardVariant.primary ? 'lightblue' : ''
            }}>
                {children}
            </div>
        );
    };

export default Card;