import React from 'react'
import "./RoleCard.styles.css"

interface Props {
    imagePath: string
    title: string
}

const RoleCard: React.FC<Props> = ({ imagePath, title }) => {
    return (
        <div className="roleCard">
            <img src={imagePath} />
            <h4 className="roleCard__title">{title}</h4>
        </div>
    )
}

export default RoleCard
