import React from "react";

function Contacts() {
  return (
    <div>
      <div className="container content mt-4">
        <div className="row mt-2">
          <div className="col-md-12">
            <div id="contentHeader">
              <h2>Contact</h2>
            </div>
          </div>
        </div>
        <form id="frmContact" action="/my-handling-form-page" method="post">
          <div>
            <label for="name">Name:</label>
            <br />
            <input className="usrInput form-control" type="text" id="name" />
          </div>
          <div>
            <label for="mail">Email:</label>
            <br />
            <input className="usrInput form-control" type="email" id="mail" />
          </div>
          <div>
            <label for="msg">Message:</label>
            <br />
            <textarea
              className="usrInput form-control"
              id="msg"
              rows="10"
            ></textarea>
          </div>
          <button id="btnSubmit" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contacts;
