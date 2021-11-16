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
// rollDice take one non-nullable integer and one nullable integer as parameter
// rollDice return array of integer, [] means array
const schema = buildSchema(`
  type Query {
    hello: String,
    random: Float!
    rollDice(numDice: Int!, numSides: Int): [Int]
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
  rollDice: ({numDice, numSides}) => {
    const output = [];

    for (let i = 0; i < numDice; i ++) {
      output.push(1 + Math.floor(Math.random() * (numSides || 6)));
    }

    return output;
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