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
import "./CompaniesList.css"

function JobsList({jobs}){
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
                    <Card>
                        <CardBody>
                            <CardTitle className="font-weight-bold">
                                {job.title}
                            </CardTitle>
                            <CardText>
                                <p>Company: <Link to={`/companies/${job.companyHandle}`}>{job.companyHandle}</Link></p>
                                <p>Salary: {job.salary}</p>
                                <p>Equity: {job.equity}</p>
                            </CardText>
                            <button>Apply!</button>
                        </CardBody>
                    </Card>
                </ListGroupItem>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </section>
    )
}

export default JobsList;