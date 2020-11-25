import React, { useEffect, useState } from 'react';
import {useHistory} from "react-router-dom";
import logo from './images/20180911090509731amazon_logo_RGB.jpg';

import "./Login.css";

const Login = (props) => {
    let [pageType, setPageType] = useState(props.pageType);
    const history = useHistory();

    useEffect(() => {
        console.log(pageType);
    }, []);

    useEffect(() => {
        setPageType(props.pageType);
    }, [props.pageType]);

    return <div className="login">
        <div className="login__log_block">
            <img src={logo} />
            <span>.in</span>
        </div>
        <span>
            <div className="loginbox">
                <h2>{pageType == "login" ? "Login" : "Create Account"}</h2>
                {
                    (pageType == "login") && <div className="login__input_field">
                        <span className="login__label">Email or mobile phone number</span>
                        <input className="form-control" autoFocus/>
                    </div>
                }

                {
                    (pageType == "signin") && <span>
                        <div className="login__input_field">
                            <span className="login__label">
                                Your name
                            </span>
                            <input className="form-control" autoFocus/>
                        </div>
                        <div className="login__input_field">
                            <span className="login__label">
                                Mobile number
                            </span>
                            <input type="email" className="form-control" />
                        </div>
                    </span>
                }

                <div className="login__input_field">
                    <span className="login__label">Password</span>
                    <input className="form-control" type="password" />
                </div>
                <button className="btn submit_button">Continue</button>
            </div>
            {
                pageType == "login" && <span>
                    <div className="login__divider">
                        <span>New to Amazon?</span>
                    </div>
                    <button className="btn signin_button" 
                    onClick={() => history.push("/signin")}>
                        Create your Amazon account
                    </button>
                </span>
            }
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
