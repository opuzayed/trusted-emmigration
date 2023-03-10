import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css";
import "./Header.scss";
const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <div className="w-10 flex items-center">
            <img
              className="rounded-full"
              src="https://thumbs.dreamstime.com/b/world-travel-logo-vector-drawing-represents-design-40702766.jpg"
              alt=" "
              style={{ marginRight: "1rem" }}
            />
            Trusted-Emmigration
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="menu menu-horizontal">
            <Link to="/">Home</Link>
            <Link to="/services">Our Services</Link>
            <Link to="/about">About Us</Link>
            <Link to="/blog">Blog</Link>
            {/* <Link to='/login'>Login</Link>
          <Link to='/signup'>SignUp</Link> */}
            <>
              {user?.uid ? (
                <>
                  {/* <span className="me-4 text-dark pe-none text-decoration-none">
                   {user?.displayName}
                 </span> */}
                  <Link to="/review">My Reviews</Link>
                  <Link to="/addservice">Add Service</Link>

                  <button
                    className="ml-8 btn btn-success text-white"
                    onClick={handleLogOut}
                  >
                    Log out
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login">Login</Link>
                  <Link to="/signup">Sign Up</Link>
                </>
              )}
            </>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    // <div className="navbar bg-info">
    //   <div className="navbar-start">
    //     <div className="w-10">
    //<img
    //         className="rounded-full"
    //         src="https://thumbs.dreamstime.com/b/world-travel-logo-vector-drawing-represents-design-40702766.jpg"
    //         alt=" "
    //       />
    //     </div>
    //     <h2 className="btn btn-ghost normal-case text-3xl text-amber-500">
    //       Trusted-Emmigration
    //     </h2>
    //   </div>
    //   <div className="navbar-center hidden lg:flex">
    //     <ul className="menu menu-horizontal">
    //       <Link to="/">Home</Link>
    //       <Link to="/services">Our Services</Link>
    //       <Link to="/about">About Us</Link>
    //       <Link to="/blog">Blog</Link>
    //       {/* <Link to='/login'>Login</Link>
    //        <Link to='/signup'>SignUp</Link> */}
    //       <>
    //         {user?.uid ? (
    //           <>
    //             {/* <span className="me-4 text-dark pe-none text-decoration-none">
    //                 {user?.displayName}
    //               </span> */}
    //             <Link to="/review">My Reviews</Link>
    //             <Link to="/addservice">Add Service</Link>

    //             <button
    //               className="ml-8 btn btn-success text-white"
    //               onClick={handleLogOut}
    //             >
    //               Log out
    //             </button>
    //           </>
    //         ) : (
    //           <>
    //             <Link to="/login">Login</Link>
    //             <Link to="/signup">Sign Up</Link>
    //           </>
    //         )}
    //       </>
    //     </ul>
    //   </div>
    // </div>
  );
};

export default Header;
