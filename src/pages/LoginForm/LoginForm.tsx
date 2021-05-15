import React, { useState } from "react";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import CustomButton from "../../components/CustomButton/CustomButton";
import "./LoginForm.styles.css";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: any): void => {
    e.preventDefault();

    console.log("Email: ", email)
    console.log("Password: ", password)
  }

  return (
    <div className="login__container">
      <h2 className="login__heading">Login into your Account</h2>
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

      <form className="login__form">
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

        <div className="login__cta">
          Don't have an account on Hustler's Village?
          <span className="blueText boldText"> Sign Up</span>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
