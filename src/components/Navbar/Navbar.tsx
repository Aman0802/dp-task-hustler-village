import React from 'react'
import { Link, useHistory } from "react-router-dom"
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import MenuIcon from '@material-ui/icons/Menu';
import Container from '../Container/Container'
import CustomButton from '../CustomButton/CustomButton'
import "./Navbar.styles.css"

const Navbar: React.FC = () => {
  const history = useHistory();
  return (
    <Container>
      <div className="nav">
        <Link to="/"><h3 className="nav__logo">Hustlers Village</h3></Link>
        <div className="nav__links desktop">
          <Link to="/"><span className="nav__link">Home</span></Link>
          <span className="nav__link">How it works?</span>
          <Link to="/roles"><span className="nav__link">Roles</span></Link>
          <CustomButton
            inlineBlock
            title="Log In"
            classes="ml-32"
            type="secondaryInverted"
            onChange={(e) => {
              history.push("/login")
            }}
          />
          <CustomButton
            inlineBlock
            title="Register"
            icon={<ArrowForwardIcon fontSize="small" />}
            classes="ml-32"
            type="secondary"
            onChange={(e) => {
              history.push("/register")
            }}
          />
        </div>
        <div className="mobile">
          <MenuIcon />
        </div>
      </div>
    </Container>
  )
}

export default Navbar
