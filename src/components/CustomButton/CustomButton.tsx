import React from 'react'
import "./CustomButton.styles.css"

interface Props {
  title: string
  block?: boolean
  inlineBlock?: boolean
  icon?: any
  classes?: string
  type: string
  onChange: React.MouseEventHandler<HTMLButtonElement>
}

const CustomButton: React.FC<Props> = ({
  title,
  classes,
  block,
  inlineBlock,
  icon,
  type,
  onChange
}) => {
  return (
    <>
      <button
        onClick={onChange}
        className={`
          btn btn__${type} 
          ${block ? 'btn__block' : inlineBlock ? 'inline-block' : ""}
          ${classes}
        `}
      >
        <div className="content__container">
          <span className={`${icon && "btn__title"}`}>{title}</span>
          {icon && icon}
        </div>
      </button>
    </>
  )
}

export default CustomButton
