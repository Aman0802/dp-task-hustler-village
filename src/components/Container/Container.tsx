import React from 'react'
import "./Container.styles.css"

const Container: React.FC = ({ children }: any) => {
    return (
        <div className="container">
            {children}
        </div>
    )
}

export default Container
