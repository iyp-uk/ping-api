var express = require('express');
var router = express.Router();
var Kafka = require('node-rdkafka');

var KAFKA_BROKERS = process.env.KAFKA_BROKERS || 'localhost:9092';
var KAFKA_TOPIC = process.env.KAFKA_TOPIC || 'ping';
var producer = new Kafka.Producer({
  'metadata.broker.list': KAFKA_BROKERS
});
producer.connect();

router.get('/', function(req, res, next) {
  res.send('pong')
});

producer.on('ready', function() {
  router.post('/', function (req, res, next) {
    try {
      producer.produce(
        KAFKA_TOPIC,
        null,
        new Buffer(JSON.stringify(req.body))
      );
    } catch (err) {
      console.error('A problem occurred when sending our message');
      console.error(err);
    }
    // Still return to the sender.
    res.json(req.body)
  })
});

producer.on('event.error', function(err) {
  console.error('Error from producer');
  console.error(err);
})

module.exports = router;
