import React, {useState, useEffect} from "react";
import JoblyApi from "./JoblyApi";
import { useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

function Company(){
    const [isLoading, setIsLoading] = useState(true);
    const [company, setCompany] = useState([]);
    let { handle } = useParams();

    useEffect(() => {
      async function getData() {
        let company = await JoblyApi.getCompany(handle);
        setCompany(company);
        setIsLoading(false);
      }
      getData();
    }, []);
  
  
    if (isLoading) {
      return <p>Loading &hellip;</p>;
    }

    console.log(company);
    return (
        <section>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {company.name}
          </CardTitle>
          <CardText className="font-italic">{company.description}</CardText>
          <p>
            <b>Total Employees:</b> {company.numEmployees}
          </p>
        </CardBody>
      </Card>
    </section>
    )

}

export default Company;