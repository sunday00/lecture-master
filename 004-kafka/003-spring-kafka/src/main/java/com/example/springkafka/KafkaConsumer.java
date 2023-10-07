package com.example.springkafka;

import com.example.springkafka.dto.MyMessage;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Component;

@Component
public class KafkaConsumer {
    private static final String TOPIC_NAME = "topics";

    ObjectMapper objectMapper = new ObjectMapper();

    @KafkaListener(topics = TOPIC_NAME)
    public void listenMessage(String jsonMapper) {
        try {
            MyMessage message = objectMapper.readValue(jsonMapper, MyMessage.class);
            System.out.println("\n\n\n >>> " + message.getName() + " : " + message.getMessage());
        } catch (Exception e) {
            System.err.println(e.getMessage());
        }
    }
}
