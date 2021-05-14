import React, { useState } from 'react';
import RoleCard from '../../components/RoleCard/RoleCard';
import "./Roles.styles.css";

interface State {
    roles: {
        title: string
        imagePath: string
    }[]
}

const Roles: React.FC = () => {
    const [roles, setRoles] = useState<State["roles"]>([{
        title: "Designer",
        imagePath: "/assets/Designer.svg"
    }, {
        title: "Developer",
        imagePath: "/assets/Developer.svg"
    }, {
        title: "Recruiter",
        imagePath: "/assets/Recruiter.svg"
    }, {
        title: "Other",
        imagePath: "/assets/other.svg"
    }])

    const renderRolePaths = (): JSX.Element[] => {
        return roles.map(role => (
            <RoleCard imagePath={role.imagePath} title={role.title} />
        ))
    }

    return (
        <div className="roles__container">
            <h2 className="roles__heading">Are you a designer, developer or recruiter?</h2>
            <div className="roleCards__container">
                {renderRolePaths()}
            </div>
            {/* <RoleCard imagePath="/assets/Designer.svg" title="Designer" /> */}
        </div>
    )
}

export default Roles
