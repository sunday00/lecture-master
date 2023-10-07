package com.example.hellokafka;

import org.apache.kafka.clients.producer.KafkaProducer;
import org.apache.kafka.clients.producer.ProducerConfig;
import org.apache.kafka.clients.producer.ProducerRecord;
import org.apache.kafka.clients.producer.RecordMetadata;
import org.apache.kafka.common.KafkaException;
import org.apache.kafka.common.serialization.StringSerializer;

import java.util.Properties;
import java.util.concurrent.ExecutionException;

public class Producer {
    private final static String BOOTSTRAP_SERVER = "localhost:9092";
    private final static String TOPIC_NAME = "topic6";

    public static void main(String[] args) {
        Properties configs =  new Properties();
        configs.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, BOOTSTRAP_SERVER);
        configs.put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class.getName());
        configs.put(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, StringSerializer.class.getName());

        configs.put(ProducerConfig.ACKS_CONFIG, "all");
        configs.put(ProducerConfig.RETRIES_CONFIG, "100");

        try (KafkaProducer<String, String> producer = new KafkaProducer<>(configs)) {
            String message = "produced message" + (Math.random() * 10);

            ProducerRecord<String, String> record = new ProducerRecord<>(TOPIC_NAME, message);
            RecordMetadata metadata = producer.send(record).get();

            System.out.printf("\n\n\n >>> %s, %d, %d, \n\n\n", message, metadata.partition(), metadata.offset());

            producer.flush();

        } catch (KafkaException e) {
            System.err.println(e.getMessage());
        } catch (ExecutionException | InterruptedException e) {
            throw new RuntimeException(e);
        }
    }
}
