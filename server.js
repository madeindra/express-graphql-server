// import
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

// read env
const port = process.env.PORT || 4000;

// initiate express
const app = express();

// create schema
// hello return string
// random return non-nullable float, ! means non-nullable
// rollThreeDice return array of integer, [] means array
const schema = buildSchema(`
  type Query {
    hello: String,
    random: Float!
    rollThreeDice: [Int]
  }
`);

// root provider for function resolver
const root = {
  hello: () => {
    return 1;
  },
  random: () => {
    return Math.random();
  },
  rollThreeDice: () => {
    return [1, 2, 3].map(_ => 1 + Math.floor(Math.random() * 6));
  }
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