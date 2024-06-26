import React from "react";

function Home({totalJobs}) {
  return (
    <section className="col-md-8">
      <h1>WELCOME TO JOBLY</h1>
      <h2>Total Jobs Available Right now: {totalJobs}</h2>
    </section>
  );
}

export default Home;
