import React from 'react';
import { useHistory } from "react-router-dom"
import CustomButton from '../CustomButton/CustomButton';
import "./Hero.styles.css"

const Hero: React.FC = () => {
  const history = useHistory();
  return (
    <div className="hero">
      <h2 className="hero__heading">let your <span className="blueText">hustle</span> speak for itself.</h2>
      <div className="hero__details">
        <div className="hero__secText"><span className="boldText">hustlersvillage.com/</span>your-name</div>
        <CustomButton
          title="Start Hustling"
          inlineBlock
          type="primary"
          onChange={() => { history.push("/roles") }}
        />
      </div>
      <span className="hero__subHeading">Its free and it takes a minute</span>
    </div>
  )
}

export default Hero
