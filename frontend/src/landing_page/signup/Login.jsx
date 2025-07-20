import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import './Login.css'

const Login = () => {

    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState({
        email: "",
        password: "",
    });

    const { email, password } = inputValue;

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setInputValue({
            ...inputValue,
            [name]: value,
        });
    };

    const handleSuccess = (msg) => {
        toast.success(msg, {
            position: "bottom-left",
        })
    }

    const handleError = (err) => {
        toast.error(err, {
            position: "bottom-left",
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post("https://dhansetu-backend.onrender.com/login", {
                ...inputValue,
            }, {
                withCredentials: true
            })

            console.log(data);
            const { success, message } = data
            if (success) {
                handleSuccess(message);
                // setTimeout(() => {
                //     navigate("/dashboard");
                // }, 1000);
                navigate("/dashboard");
            } else {
                handleError(message);
            }
        } catch (error) {
            console.log(error);
        }

        setInputValue({
            ...inputValue,
            email: "",
            password: "",
        });
    }

    return (
        <div className="login-simple-container">
            <h2>Login Account</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" value={email} placeholder="Enter Your Email" onChange={handleOnChange} />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={password} placeholder="Enter Your Password" onChange={handleOnChange} />
                </div>

                <button type="submit">Submit</button>
                <span>
                    Don't Have an Account? <Link to={"/signup"}>SignUp</Link>
                </span>
            </form>
            <ToastContainer />
        </div>
    )
}

export default Login;
