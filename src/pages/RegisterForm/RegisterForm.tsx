import React, { useState } from "react";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import CustomButton from "../../components/CustomButton/CustomButton";
import "./RegisterForm.styles.css";

const RegisterForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");

  return (
    <div className="register__container">
      <h2 className="register__heading">Register to HustersVillage</h2>
      <div className="button__container">
        <CustomButton
          title="Google"
          inlineBlock
          type="google"
        />
        <CustomButton
          title="Github"
          inlineBlock
          type="github"
        />
        <CustomButton
          title="Dribble"
          inlineBlock
          type="dribbble"
        />
      </div>
      <div className="divider_label">or login with email</div>

      <form className="register__form">
        <div className="register__name">
          <div>
            <h4 className="form__label">First Name</h4>
            <input
              className="form__input"
              type="text"
              placeholder="First Name"
              value={firstName}
            />
          </div>

          <div>
            <h4 className="form__label">Last Name</h4>
            <input
              className="form__input"
              type="text"
              placeholder="Last Name"
              value={lastName}
            />
          </div>
        </div>

        <h4 className="form__label">Email</h4>
        <input
          className="form__input"
          type="text"
          placeholder="Email"
          value={email}
        />
        <div className="password_labels">
          <h4 className="form__label">Password</h4>
          <span className="blueText boldText">Forgot Password?</span>
        </div>
        <input
          className="form__input"
          type="password"
          placeholder="Password"
          value={password}
        />

        <CustomButton
          classes="mt-16 mb-16"
          title="Take me to the Village"
          block
          icon={<ArrowForwardIcon fontSize="small" />}
          type="secondary"
        />

        <div className="register__cta">
          Already have an Account?
          <span className="blueText boldText"> Log in</span>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
