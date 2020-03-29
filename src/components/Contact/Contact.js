import React from "react";
import "./Contact.css";
import Avatar from "@material-ui/core/Avatar";

const Contact = ({ firstName, lastName, phone, gender, telRef }) => (
  <li className="user-single">
    <div className="user-icon">
      <Avatar src="/broken-image.jpg" />
    </div>
    <div className="user-data">
      <p>
        {firstName} {lastName}
      </p>
      <p>
        <a className="user-phone" href={telRef}>
          {phone}
        </a>
      </p>
    </div>
  </li>
);

export default Contact;
