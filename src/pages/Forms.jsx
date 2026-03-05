import "../assets/Forms.css";

const Forms = () => {
  return (
    <div className="form-container">

      <h3 className="mb-4">User Registration Form</h3>

      <div className="card form-card">
        <div className="card-body">

          <form>

            <div className="row">

              <div className="col-md-6 mb-3">
                <label>First Name</label>
                <input type="text" className="form-control" placeholder="Enter first name"/>
              </div>

              <div className="col-md-6 mb-3">
                <label>Last Name</label>
                <input type="text" className="form-control" placeholder="Enter last name"/>
              </div>

              <div className="col-md-6 mb-3">
                <label>Email</label>
                <input type="email" className="form-control" placeholder="Enter email"/>
              </div>

              <div className="col-md-6 mb-3">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password"/>
              </div>

              <div className="col-md-6 mb-3">
                <label>Phone</label>
                <input type="tel" className="form-control" placeholder="Enter phone number"/>
              </div>

              <div className="col-md-6 mb-3">
                <label>Date of Birth</label>
                <input type="date" className="form-control"/>
              </div>

              <div className="col-md-6 mb-3">
                <label>Gender</label>
                <select className="form-control">
                  <option>Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="col-md-6 mb-3">
                <label>Role</label>
                <select className="form-control">
                  <option>Admin</option>
                  <option>User</option>
                </select>
              </div>

              <div className="col-md-12 mb-3">
                <label>Address</label>
                <textarea className="form-control" rows="3"></textarea>
              </div>

              <div className="col-md-6 mb-3">
                <label>Upload Profile</label>
                <input type="file" className="form-control"/>
              </div>

              <div className="col-md-6 mb-3 d-flex align-items-center">
                <div className="form-check mt-4">
                  <input className="form-check-input" type="checkbox"/>
                  <label className="form-check-label">
                    Accept Terms & Conditions
                  </label>
                </div>
              </div>

            </div>

            <div className="mt-3">
              <button className="btn btn-primary me-2">
                Submit
              </button>

              <button type="reset" className="btn btn-secondary">
                Reset
              </button>
            </div>

          </form>

        </div>
      </div>

    </div>
  );
};

export default Forms;