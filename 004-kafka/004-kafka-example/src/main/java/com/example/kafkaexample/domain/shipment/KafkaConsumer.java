package com.example.kafkaexample.domain.shipment;

import com.example.kafkaexample.config.InternalConfig;
import com.example.kafkaexample.dto.CheckoutDto;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
@Slf4j
public class KafkaConsumer {
    private final SaveShipmentService saveService;

    private final ObjectMapper objectMapper = new ObjectMapper()
            .configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);

    @KafkaListener(topics = InternalConfig.topicname, groupId = InternalConfig.groupId)
    public void recordListener(String jsonMessage) {
        try{
            CheckoutDto checkoutDto = objectMapper.readValue(jsonMessage, CheckoutDto.class);
            log.info(checkoutDto.toString());
            Long shipmentId = saveService.saveCheckoutData(checkoutDto);

            System.out.println("saved: " + shipmentId);
        }catch (Exception e) {
            log.error("record listener E: = {}", jsonMessage, e);
        }
    }
}
