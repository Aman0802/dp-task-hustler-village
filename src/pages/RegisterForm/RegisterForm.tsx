import React, { useState } from "react";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import CustomButton from "../../components/CustomButton/CustomButton";
import "./RegisterForm.styles.css";

const RegisterForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");

  const handleSubmit = (e: any): void => {
    e.preventDefault();

    console.log("First Name: ", firstName)
    console.log("Last Name: ", lastName)
    console.log("Email: ", email)
    console.log("Password: ", password)
  }

  return (
    <div className="register__container">
      <h2 className="register__heading">Register to HustersVillage</h2>
      <div className="button__container">
        <CustomButton
          title="Google"
          inlineBlock
          type="google"
          onChange={(e) => e.preventDefault()}
        />
        <CustomButton
          title="Github"
          inlineBlock
          type="github"
          onChange={(e) => e.preventDefault()}
        />
        <CustomButton
          title="Dribble"
          inlineBlock
          type="dribbble"
          onChange={(e) => e.preventDefault()}
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
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div>
            <h4 className="form__label">Last Name</h4>
            <input
              className="form__input"
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>

        <h4 className="form__label">Email</h4>
        <input
          className="form__input"
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="password_labels">
          <h4 className="form__label">Password</h4>
          <span style={{ fontSize: "16px" }} className="blueText boldText">Forgot Password?</span>
        </div>
        <input
          className="form__input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <CustomButton
          classes="mt-16 mb-16"
          title="Take me to the Village"
          block
          icon={<ArrowForwardIcon fontSize="small" />}
          type="secondary"
          onChange={(e) => handleSubmit(e)}
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
