# GraphQL in Express

## Dependencies
* express
* graphql
* express-graphql

## Run
```
npm start
```

## Send Query with GraphiQL
1. Open `http://localhost:4000/graphql`
2. Send query
```
{ hello }
```
3. Click on play button

## Send Query with REST API
1. Open Postman
2. Create a new POST request
3. Set request URL to `http://localhost:4000/graphql`
4. Set request body type to raw/json
5. Set body
```
{
    "query": "{ hello }"
}
```
6. Send request