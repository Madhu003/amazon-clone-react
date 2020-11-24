import React, { useEffect, useState } from 'react';
import logo from './images/20180911090509731amazon_logo_RGB.jpg';

import "./Login.css";

const Login = () => {
    return <div className="login">
        <div className="login__log_block">
            <img src={logo} />
            <span>.in</span>
        </div>
        <span>
            <div className="loginbox">
                <h2>Login</h2>

                <div className="login__input_field">
                    <span className="login__label">Email or mobile phone number</span>
                    <input className="form-control" />
                </div>

                <div className="login__input_field">
                    <span className="login__label">Password</span>
                    <input className="form-control" type="password" />
                </div>
                <button className="btn submit_button">Continue</button>
            </div>
            <div className="login__divider">
                <span>New to Amazon?</span>
            </div>
            <button className="btn signin_button">
                Create your Amazon account
        </button>
        </span>
        <div className="auth-footer">
            <hr></hr>
            <div className="a-section a-spacing-small a-text-center a-size-mini">
                <span className="auth-footer-seperator"></span>
                <a className="a-link-normal" target="_blank" href="/gp/help/customer/display.html/ref=ap_desktop_footer_cou?ie=UTF8&amp;nodeId=200545940">
                    Conditions of Use
                </a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a className="a-link-normal" target="_blank" href="/gp/help/customer/display.html/ref=ap_desktop_footer_privacy_notice?ie=UTF8&amp;nodeId=200534380">
                    Privacy Notice
                </a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a className="a-link-normal" target="_blank" href="/help">
                    Help
                </a>
                <span className="auth-footer-seperator"></span>
            </div>
            <br></br>
            <div className="a-section a-spacing-none a-text-center">
                <span className="a-size-mini a-color-secondary">
                    © 1996-2020, Amazon.com, Inc. or its affiliates
                </span>
            </div>
        </div>
    </div>
}

export default Login;
