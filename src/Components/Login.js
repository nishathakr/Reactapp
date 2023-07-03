import React from "react";
import { Menu } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import './Login.css';
import { Link} from "react-router-dom";




function Login() {
  return (
    <div >
        <Menu style={{ fontSize: "1.2rem" }}>
        <img
          src="//media.foundit.in/trex/public/theme_3/src/assets/images/header/companyLogo.svg"
          alt="foundit logo"
        />
      </Menu>
    <div class="container">
	<div class="loginPageLeft"><img src="https://www.foundit.in/rio/public/images/login-illustration.png" alt="login illustration" class="illustration"/> <p class="leftText">
            Create your profile now and be visible to the top recruiters in the
            world
            </p>
	</div>
	<div class="screen">
		<div class="screen__content">
			<p>New to foundit?
			<div>
            <Link to="/Register">Register</Link>
            </div>
			</p>
			<form class="login">
				<div class="login__field">
					<i class="login__icon fas fa-user"></i>
					<input type="text" class="login__input" placeholder="PhoneNumber/Email"/>
				</div>
				<div class="login__field">
					<i class="login__icon fas fa-lock"></i>
					<input type="password" class="login__input" placeholder="Password"/>
				</div>
				<button class="button login__submit">
					<span class="button__text">Log In Now</span>
					<i class="button__icon fas fa-chevron-right" ></i>
				</button>	
						
			</form>
			<div class="social-login">
				<h3>log in via</h3>
				<div class="social-icons">
					<a href="#" class="social-login__icon fab fa-instagram"></a>
					<a href="#" class="social-login__icon fab fa-facebook"></a>
					<a href="#" class="social-login__icon fab fa-twitter"></a>
					<a herf = "#"  class= "social-login__icon fab fa-twitter"></a>
				</div>
			</div>
		</div>
		<div class="screen__background">
			<span class="screen__background__shape screen__background__shape4"></span>
			<span class="screen__background__shape screen__background__shape3"></span>		
			<span class="screen__background__shape screen__background__shape2"></span>
			<span class="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
</div>
</div>
  );
}

export default Login;
