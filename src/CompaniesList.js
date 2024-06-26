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


function CompaniesList({companies}){
    return(
        <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            Companies
          </CardTitle>
          <CardText>
            All Companies
          </CardText>
          <ListGroup>
            {companies.map(company => (
              <Link to={`/companies/${company.handle}`} key={company.handle}>
                <ListGroupItem>{company.name}</ListGroupItem>
              </Link>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </section>
    )
}

export default CompaniesList;