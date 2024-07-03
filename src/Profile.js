import React, {useState, useEffect} from "react";
import JoblyApi from "./JoblyApi";
import { useNavigate, Link } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

function Profile({user}){
    const navigate = useNavigate();
    
    useEffect(() => {
      if (user.length === 0) navigate("/register");
    }, [user, navigate]);

    return (
        <section>
          <Card>
            <CardBody>
              <CardTitle tag="h5">Profile</CardTitle>
              <CardText>
                <strong>Username:</strong> {user.username}
              </CardText>
              <CardText>
                <strong>First Name:</strong> {user.firstName}
              </CardText>
              <CardText>
                <strong>Last Name:</strong> {user.lastName}
              </CardText>
              <CardText>
                <strong>Email:</strong> {user.email}
              </CardText>
              <Link to="edit">Edit Your profile</Link>
            </CardBody>
          </Card>
        </section>
      );
}

export default Profile;