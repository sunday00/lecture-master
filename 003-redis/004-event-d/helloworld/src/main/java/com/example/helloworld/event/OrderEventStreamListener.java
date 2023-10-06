package com.example.helloworld.event;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.connection.stream.MapRecord;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.data.redis.stream.StreamListener;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;

@Component
public class OrderEventStreamListener implements StreamListener<String, MapRecord<String, String, String>> {
    int paymentProcessId = 0;

    @Autowired
    StringRedisTemplate redisTemplate;

    @Override
    public void onMessage(MapRecord<String, String, String> message) {
        String paymentIdStr = Integer.toString(paymentProcessId++);

        Map<String, String> fieldMap = new HashMap<>();
        message.forEach(m -> fieldMap.put(m.getKey(), m.getValue()));
        fieldMap.put("paymentProcessId", paymentIdStr);

        redisTemplate.opsForStream().add("payment-event", fieldMap);
    }
}
