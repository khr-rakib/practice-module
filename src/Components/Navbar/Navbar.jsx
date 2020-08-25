import React from "react";
import logo from "../../assets/logo.png";

const Navbar = ({ cart, setKeyword }) => {
  const totalSalary = cart.reduce(
    (total, prd) => total + parseInt(prd.anual_salary),
    0
  );

  const searchUser = (e) => setKeyword(e.target.value);

  return (
    <nav className="navbar shadow navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <input
            type="text"
            className="form-control w-50 ml-auto"
            placeholder="Search User"
            onChange={searchUser}
          />

          <ul className="navbar-nav ml-auto">
            <li className="nav-item active dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Users
                <span className="badge badge-secondary ml-1">
                  {cart.length}
                </span>
              </a>
              <div
                className="dropdown-menu w-50"
                aria-labelledby="navbarDropdown"
              >
                {cart.map((item) => (
                  <span key={item.id} className="d-block mb-2">
                    <div className="d-flex justify-content-between px-4">
                      <div>
                        <img
                          src={item.photo}
                          className="img-fluid mr-2 rounded-circle"
                          style={{ width: "30px" }}
                          alt=""
                        />
                      </div>
                      <div>$ {item.anual_salary}</div>
                    </div>
                  </span>
                ))}

                <hr />

                {totalSalary !== 0 ? (
                  <div className="d-flex px-4 justify-content-between">
                    <div>Total:</div>
                    <div>$ {totalSalary}</div>
                  </div>
                ) : (
                  <p className="px-4">no data</p>
                )}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
