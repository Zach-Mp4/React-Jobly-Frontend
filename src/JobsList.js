import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap";
import JoblyApi from "./JoblyApi";
import Job from "./Job";
import "./CompaniesList.css"

function JobsList({user, setUser, jobs}){
    return(
        <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            Jobs
          </CardTitle>
          <CardText>
            All Jobs
          </CardText>
          <ListGroup>
            {jobs.map(job => (
                <ListGroupItem key={job.id}>
                    <Job user={user} setUser={setUser} job={job} />
                </ListGroupItem>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </section>
    )
}

export default JobsList;