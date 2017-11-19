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

## Environment variables

* `KAFKA_BROKERS`: Defaults to `localhost:9092`
* `KAFKA_TOPIC`: Defaults to `ping`

```console
$ docker run -d --name ping-api -p 3000:3000 -e KAFKA_BROKERS=192.168.0.6:9092 ping-api
```
