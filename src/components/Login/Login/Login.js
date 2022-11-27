import React, { useContext, useState } from "react";
// import Form from "react-bootstrap/Form";
//import toast from "react-hot-toast";
// import Button from "react-bootstrap/Button";
// import ButtonGroup from "react-bootstrap/ButtonGroup";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const [error, setError] = useState("");
  const { providerLogin, signIn, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { to: "/" }, { replace: true });
      })
      .catch((error) => console.error(error));
  };

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError("");
        navigate(from, { to: "/" }, { replace: true });
        /* if (user.emailVerified) {
          navigate(from, { replace: true });
        } else {
          toast.error(
            "Your email is not verified. Please verify your email address."
          ); 
        } */
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="hero w-full my-20">
      <div className="hero-content grid gap-20 flex-col lg:flex-row">
        {/* <div className="text-center lg:text-left">
            <img className='w-3/4' src={img} alt="" />
        </div> */}
        <div className="card flex-shrink-0 w-full max-w-sm bg-base-100 py-20">
          <h1 className="text-5xl text-center font-bold mb-4">Login</h1>
          <form
            onSubmit={handleSubmit}
            className="card-body mb-4"
            style={{ borderRadius: "0", backgroundColor: "#181818" }}
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
          </form>
          <p className="text-center mb-4">
            Don't have an account{" "}
            <Link className="text-orange-600 font-bold" to="/signup">
              Sign Up
            </Link>{" "}
          </p>
          <hr />
          <p
            style={{
              fontWeight: "bold",
              marginTop: "10px",
              textAlign: "center",
            }}
          >
            Or Login With
          </p>
          <button
            onClick={handleGoogleSignIn}
            className="w-full btn btn-wide btn-warning mt-4"
          >
            {/* {" "} */}
            <FaGoogle className="text-green-600 font-bold mr-3"></FaGoogle>{" "}
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
