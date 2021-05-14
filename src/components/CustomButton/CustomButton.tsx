import React from 'react'
import "./CustomButton.styles.css"

interface Props {
  title: string
  block?: boolean
  inlineBlock?: boolean
  icon?: any
  classes?: string
  type: string
}

const CustomButton: React.FC<Props> = ({
  title,
  classes,
  block,
  inlineBlock,
  icon,
  type
}) => {
  return (
    <>
      <div
        className={`
          btn btn__${type} 
          ${block ? 'block' : inlineBlock ? 'inline-block' : ""}
          ${classes}
        `}
      >
        <div className="content__container">
          <span className={`${icon && "btn__title"}`}>{title}</span>
          {icon && icon}
        </div>
      </div>
    </>
  )
}

export default CustomButton
