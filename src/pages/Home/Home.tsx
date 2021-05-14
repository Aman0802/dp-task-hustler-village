import React from 'react'
import Hero from '../../components/Hero/Hero'
import "./Home.styles.css"

const Home: React.FC = () => {
    return (
        <div className="homePage">
            <Hero />
            <div style={{ marginBottom: "100vh" }} />
            <div style={{ paddingTop: "50vh", backgroundColor: "#F7FAFC" }} />
            <div style={{ paddingTop: "50vh" }} />
            {/* <div style={{ marginBottom: "100vh" }} /> */}
        </div>
    )
}

export default Home
