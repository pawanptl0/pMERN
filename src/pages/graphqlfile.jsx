const Graphqlfile = () => {
  return (
    <div class="col">

      <div>
        <h6>Installation</h6>
        <p>npm i graphql apollo-boost react-apollo graphql-tag</p>
        <p><small> <mark> express-graphql </mark></small>: Act as an middleware. Allows us to point Schema, resolvers and automatically connect them. Handles the routes with respect to schema. <br />
          <small> <mark> graphql </mark></small> : Allows us to define schema and parse.</p>
      </div>
      <div>
        <h6>REST API</h6>
        <p>RESTful APIs follow clear and well-structured resource-oriented approach. However, when the data gets more complex, the routes get longer. Sometimes it is not possible to fetch data with a single request. Unnecessary data is fetched by the RESTful service. Retrieve data from multiple associated business objects, REST API loads it from multiple URLs.</p>
      </div>

      <div>
        <h6>GraphQL</h6>
        <p>GraphQL is a query language for API, and a server-side runtime for executing queries using a type system define for data. GraphQL structures data in the form of a graph with its powerful query syntax for traversing, retrieving, and modifying data. Applications using GraphQL are fast and stable. Send a GraphQL query to API and get exactly what you need. GraphQL queries help to smoothly retrieve multiple associated business objects in a single request. GraphQL is strongly typed and the queries are based on fields and their associated data types. GraphQL provides rich developer tools for documentation and testing queries. GraphiQL is an excellent tool which generates documentation of the query and its schema. </p>
      </div>

      <div>
        <h6>Fields</h6>
        <p>At its simplest, GraphQL is about asking for specific fields on objects. Fields can also refer to Objects. GraphQL has ability to pass arguments to every field and nested object. arguments are not only static but also variables. GraphQL includes reusable units called 'fragments'. <small>query MyHero &#123;hero &#123; name &#125; &#125;</small>. here, 'query' is <i>Opertion type</i> and 'MyHero' is <i>Operation Name</i>. </p>
      </div>

      <div>
        <h6>Shema</h6>
        <p>It's useful to have an exact description of the data we can ask for - what fields can we select? What kinds of objects might they return? What fields are available on those sub-objects? That's where the schema comes in.</p>
      </div>

      <div>
        <h6>Operation Types</h6>
        <p>
          <small>
            <mark>Query</mark>
          </small> : To retrieve data("GET").<br />
          <small>
            <mark>Mutation</mark>
          </small> : Manipulate data("POST", "PUT", "PATCH", "DELETE").<br />
          <small>
            <mark>Subscription</mark>
          </small> : Setup real-time connection via WebSockets.
        </p>
      </div>

      <div>
        <h6>Architecture</h6>
        <p>The request made by a client to the GraphQL server is called a Query. GraphQL Server can be deployed by using any of the three methods.<br />
          <strong>GraphQL Server with Connected Database: </strong>The client communicates with GraphQL server over HTTP. On the receipt of a Query, the server reads the request payload and fetches data from the database. This is called resolving the query. The response returned to the client adheres to the format specified in the official GraphQL specification. <br /><strong>GraphQL Server Integrating Existing Systems: </strong>GraphQL can be used to unify existing systems like microservices, legacy infrastructure and third-party APIs. GraphQL API acts as an interface between the client and the existing systems.<br /><strong> Hybrid Approach: </strong>combine the above two approaches and build a GraphQL server. It will either retrieve data from connected database or from the integrated API’s.</p>
      </div>

      <div>
        <h6>GraphQL Client-side Components</h6>
        <p><strong>GraphiQL Tool: </strong>Browser based interface for editing and testing GraphQL queries and mutations. <br /><strong> ApolloClient: </strong> Best tool to build GraphQL client applications. Integrates well with all javascript front-end.</p>
      </div>

      <div>
        <h6>GraphQL Server-side Components</h6>
        <p><strong>Schema:  </strong>A GraphQL schema is at the center of any GraphQL server implementation and describes the functionality available to the clients which connect to it. <br /> <strong> Query: </strong>A GraphQL query is the client application request to retrieve data from database or legacy API's. <br /> <strong> Resolver: </strong>It containe server-side logic. Resolvers provide the instructions for turning a GraphQL operation into data. They resolve the query to data by defining resolver functions. <br /> Apollo Server, Node OR Express Js</p>
      </div>

      <div>
        <h6>Installation Packages</h6>
        <p>express, body-parser, cors, graphql, graphql-tools, apollo-server-express</p> OR
        <p>npm i graphql express-graphql express axios cors, npm i -D nodemon, npm i concurrently and client side means react app install 'npm install apollo-boost @apollo/client graphql moment react-moment classnames react-router-dom'</p>
      </div>

      <div>
        <h6>How are the schemas and resolvers connected.</h6>
        <p>The "express-graphql" package does that.</p>
      </div>

    </div>
  )
}

export default Graphqlfile
