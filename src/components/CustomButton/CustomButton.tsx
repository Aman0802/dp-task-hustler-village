import React from 'react'
import classnames from "classnames";
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
  let btnClass = classnames('btn', {
    'btn__primary': type == 'primary',
    'btn__secondary': type == 'secondary',
    'btn__secondaryInverted': type == 'secondaryInverted',
    'btn__google': type == 'google',
    'btn__dribbble': type == 'dribbble',
    'btn__github': type == 'github',
    'block': block,
    'inline-block': inlineBlock,
  })
  return (
    <>
      <button
        onClick={onChange}
        className={`${btnClass} ${classes}`}
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
