import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register as registerService } from "../Admin/Auth/auth";
import '../Admin/Assests/css/sb-admin-2.min.css';
// import '../Admin/Assests/vendor/fontawesome-free/css/all.min.css';

function Register() {
    const [inputs, setInputs] = useState([]);
    const navigate = useNavigate();

    let handleRegister = async (inputs) => {
        await registerService(inputs);
        navigate("/login");
    };

    const onFileChange = (e) => {
        let files = e.target.files;
        let fileReader = new FileReader();
        fileReader.readAsDataURL(files[0]);

        fileReader.onload = (event) => {
            const name = "image";
            const value = event.target.result;
            setInputs((values) => ({ ...values, [name]: value }));
        };
    };

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values) => ({ ...values, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        handleRegister(inputs);
        // console.log(inputs);
    };

    return (
        <div className="container">
            <div className="card o-hidden border-0 shadow-lg my-5">
                <div className="card-body p-0">
                    {/* Nested Row within Card Body */}
                    <div className="row">
                        <div className="col-lg-5 d-none d-lg-block bg-register-image"></div>
                        <div className="col-lg-7">
                            <div className="p-5">
                                <div className="text-center">
                                    <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                                </div>
                                <form onSubmit={handleSubmit} className="user">
                                    <div className="form-group row">
                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <input
                                                type="text"
                                                className="form-control form-control-user"
                                                id="exampleFirstName"
                                                placeholder="First Name"
                                                name="f_name"
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="col-sm-6">
                                            <input
                                                type="text"
                                                className="form-control form-control-user"
                                                id="exampleLastName"
                                                placeholder="Last Name"
                                                name="l_name"
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="file"
                                            className="form-control form-control-user"
                                            id="exampleInputImage"
                                            placeholder="Your Image"
                                            name="image"
                                            onChange={onFileChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="email"
                                            className="form-control form-control-user"
                                            id="exampleInputEmail"
                                            placeholder="Email Address"
                                            name="email"
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <input
                                                type="password"
                                                className="form-control form-control-user"
                                                id="exampleInputPassword"
                                                placeholder="Password"
                                                name="password"
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="col-sm-6">
                                            <input
                                                type="password"
                                                className="form-control form-control-user"
                                                id="exampleRepeatPassword"
                                                placeholder="Repeat Password"
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-user btn-block">
                                        Register
                                    </button>
                                    <hr />
                                    <a href="index.html" className="btn btn-google btn-user btn-block">
                                        <i className="fab fa-google fa-fw"></i> Register with Google
                                    </a>
                                    <a href="index.html" className="btn btn-facebook btn-user btn-block">
                                        <i className="fab fa-facebook-f fa-fw"></i> Register with Facebook
                                    </a>
                                </form>
                                <hr />
                                <div className="text-center">
                                    <a className="small" href="forgot-password.html">Forgot Password?</a>
                                </div>
                                <div className="text-center">
                                    <a className="small" href="./login">Already have an account? Login!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
