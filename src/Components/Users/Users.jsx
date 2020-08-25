import React from "react";

const Users = ({ users, addUser }) => {
  return (
    <div className="container mt-5">
      <div className="row">
        {users.slice(0, 15).map((user) => (
          <div key={user.id} className="col-md-4 mb-4">
            <div className="card shadow">
              <div className="card-body">
                <div className="d-flex">
                  <div className="text-center">
                    <img
                      src={user.photo}
                      className="card-img-top text-center rounded-circle"
                      alt="..."
                      style={{ width: "80px" }}
                    />
                    <button
                      onClick={() => addUser(user.id)}
                      className="btn btn-success mt-3"
                    >
                      <i className="fa fa-plus mr-2" aria-hidden="true"></i>
                      Add
                    </button>
                  </div>
                  <div className="ml-3">
                    <h5 className="card-title mb-1">
                      {user.first_name} {user.last_name}
                    </h5>
                    <p className="card-text mb-1">{user.email}</p>
                    <p className="card-text m-0">
                      <strong>Salary: </strong> {user.anual_salary}
                    </p>
                    <p className="m-0">
                      <strong>Gender: </strong>
                      {user.gender}
                    </p>
                    <p className="m-0">
                      <strong>Phone: </strong>
                      {user.phone}
                    </p>
                    <p className="m-0">
                      <strong>Address: </strong>
                      {user.address}
                    </p>
                  </div>
                </div>
                <div className="mt-2"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
