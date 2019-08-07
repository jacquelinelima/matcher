# Matcher

API to connect developers with a GitHub username, inspired on Tinder's model.

## Requirements
NodeJS
Yarn/NPM

## SetUp
Use yarn for manager dependencies:
```sh
$ yarn install
```

Keeping server up using nodemon
```sh
$ yarn dev-server
```

## Resources
Create a new developer:
```sh
$ curl --request POST \
  --url http://localhost:8080/developer \
  --header 'content-type: application/json' \
  --data '{
	"username": "jacquelinelima"
}'
```

Like a developer:
```sh
$ curl --request POST \
  --url http://localhost:8080/developer/:targetDeveloperId/like \
  --header 'content-type: application/json' \
  --header 'user: loggedDeveloperId'
  ```
  
Dislike a developer:
```sh
$ curl --request POST \
  --url http://localhost:8080/developer/:targetDeveloperId/dislike \
  --header 'content-type: application/json' \
  --header 'user: loggerDeveloperId'
  ```
  
List all available developers (not yet related by like or dislike):
```sh
$ curl --request GET \
  --url http://localhost:8080/developer \
  --header 'user: loggerDeveloperId'
  ```
