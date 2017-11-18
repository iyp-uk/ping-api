# Ping API

Simply returns "pong" on `/ping` for GET requests and the request body on POST requests.

## Docker

Build
```console
$ docker build -t ping-api .
```

Run
```console
$ docker run -d --name ping-api -p 3000:3000 ping-api
```
