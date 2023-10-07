package com.example.springkafka;

import com.example.springkafka.dto.MyMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProducerController {
    @Autowired
    private KafkaProduceService kafkaProduceService;

    @RequestMapping("/publish")
    public String publish(String message) {
        this.kafkaProduceService.send(message);
        return "published : " + message;
    }

    @RequestMapping("/publish-cb")
    public String publishWithCallback(String message) {
        this.kafkaProduceService.sendWithCallback(message);
        return "published : " + message;
    }

    @RequestMapping("/publish-json")
    public String publishWithJson(MyMessage message) {
        this.kafkaProduceService.sendJson(message);
        return "published : " + message.getName() + " : " + message.getMessage();
    }
}
