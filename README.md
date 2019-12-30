# Rest Server

A generic way to interface with database models.

## Installing

This is how to install the project.

```
git clone https://github.com/JacobRichardson/rest-server.git
```

```
npm install
```

## Usage

This is how the project is used.

This command will startup the server.

```
node server.js
```

## Helpful information

- The server can be tested using the http command utility via the following:

```
http GET localhost:8000/transactions
http POST localhost:8000/transactions amount=10
http GET localhost:8000/transactions amount=10
http GET localhost:8000/transactions/122jasd9l30asdl (_id)
http PATCH localhost:8000/transactions/122jasd9l30asdl amount=20
http DELETE localhost:8000/transactions/122jasd9l30asdl
```

## Running the tests

Here is how to run the tests:

```

npm run test

```

## Deployment

This is how to deploy:

```bash
npm version <upgrade_type>
```

```bash
git add package.json
```

```bash
git commit
```

```bash
git push && git push --tags
```

## Built With

- [Node.js](https://nodejs.org/en/) - The language used.
- [Express.js](https://www.npmjs.com/package/express) - The package for the server.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/JacobRichardson/rest-server/tags).

## Authors

- **Jacob Richardson** - _Initial work_ - [Jacob Richardson](https://github.com/JacobRichardson)
