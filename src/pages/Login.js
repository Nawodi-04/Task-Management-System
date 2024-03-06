import React from "react";
import "./Login.css";
import logoImage from "../components/logo.jpg";
import fbimage from "../components/facebook.png";
import insimage from "../components/instagram.png";
import twimage from "../components/twitter.png";

function Login(){
    return(
        <body className="bg-image ">
        <div  >

        
            <div className="logo-bar">
                <img className="logo-image rounded " src={logoImage} alt="Logo" />
            </div>

            <div className="form-div">
                <form>
                    <div className="d-flex justify-content-center">
                    <h1>Login</h1>
                    </div>
                    
                    <div className="form-group ep-div">
                        <label for="email">Email</label>
                        <input type="email" className="form-control ep-input" id="email" placeholder="Enter email"/>
                        
                    </div> 
                    <div className="form-group ep-div">
                        <label for="password">Password</label>
                        <input type="password" className="form-control ep-input" id="password" placeholder="Password"/>
                    </div>
                    <div className="form-check d-flex justify-content-center remember-div">
                        <input type="checkbox" className="form-check-input Rem-check" />
                        <label className="form-check-label" for="exampleCheck1">Remember Me</label>
                    </div>
                    <div className="d-grid gap-2 col-6 mx-auto">
                    <button type="submit" className="btn btn-primary login-button">Login</button>
                    </div>
                    <div className="d-flex justify-content-center">
                        <label>Not have an account?</label>
                        <a href="https://www.youtube.com/" >Register</a>
                    </div>
                    <div className="d-flex justify-content-center">
                    <a href="https://www.youtube.com/" >Forgot Password?</a>
                    </div>
                </form>
            </div>

            <div className="d-flex justify-content-center bottom-icon">
            <a href="https://www.facebook.com/VoguetexWeligama/"><img className="soci-image rounded " src={fbimage} alt="Logo" /></a>
            <a href="https://www.instagram.com/vogue_tex/"><img className="soci-image rounded " src={insimage} alt="Logo" /></a>
            <a><img className="soci-image rounded " src={twimage} alt="Logo" /></a>
            </div>
        </div>
        </body>
    )
}
/*
                    
                    
                        

*/ 


export default Login;