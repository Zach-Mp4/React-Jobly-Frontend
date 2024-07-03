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
function Job({user, setUser, job}){

    async function handleApply(){
      let res = await JoblyApi.apply(user.username, job.id);
      setUser(prevUser => ({
        ...prevUser,
        applications: [...prevUser.applications, job.id]
      }))
    }
    let isApplied; 

    if (user && user.token){
        isApplied = user.applications.includes(job.id);
    }


      return(
          <section className="col-md-4">
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
                {user.length !== 0 && (
                    isApplied ? (
                    <p>Applied!</p>
                    ) : (
                    <button onClick={handleApply}>Apply!</button>
                    )
                )}

            </CardBody>
        </Card>
      </section>
      )
  }
  
  export default Job;