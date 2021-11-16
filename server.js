// import
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

// read env
const port = process.env.PORT || 4000;

// initiate express
const app = express();

// create schema
const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// root provider for function resolver
const root = {
  hello: () => {
    return 'Hello world!';
  },
}

// use graphql in this express app
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(port, () => {
  console.log('App running in port ', port);
});