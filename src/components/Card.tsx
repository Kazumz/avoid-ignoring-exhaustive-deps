import React from 'react';

import './Card.scss';

interface ICardProps {
    title: string;
}

const Card: React.FC<React.PropsWithChildren<ICardProps>> = ({title, children}) => {
    return (
        <article className="card">
            <h2>{title}</h2>
            {children}
        </article>
    )
}

export default Card;