package com.example.helloworld.event;

import org.springframework.data.redis.connection.stream.MapRecord;
import org.springframework.data.redis.stream.StreamListener;
import org.springframework.stereotype.Component;

import java.util.Map;

@Component
public class PaymentEventStreamListener implements StreamListener<String, MapRecord<String,  String, String>> {
    @Override
    public void onMessage(MapRecord<String, String, String> message) {
        Map<String, String> map = message.getValue();

        String userId = map.get("userId");
        String paymentProcessId = map.get("paymentProcessId");

        // 결제 완료 건에 대해 SMS 발송 처리
        System.out.println("[Payment consumed] usrId: " + userId + "   paymentProcessId: " + paymentProcessId);
    }
}
