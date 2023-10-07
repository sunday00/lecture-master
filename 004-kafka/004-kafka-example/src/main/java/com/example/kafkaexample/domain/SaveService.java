package com.example.kafkaexample.domain;

import com.example.kafkaexample.dto.CheckoutDto;
import com.example.kafkaexample.entity.CheckoutEntity;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

@Service
@Slf4j
@RequiredArgsConstructor
public class SaveService {
    private final String CHECKOUT_COMPLETE_TOPIC_NAME = "checkout.complete.v1";

    private final KafkaTemplate<String,  String> kafkaTemplate;
    private final ObjectMapper objectMapper = new ObjectMapper().configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);

    private final ModelMapper modelMapper = new ModelMapper();

    private final CheckoutRepository checkoutRepository;

    public Long saveCheckoutDto(CheckoutDto checkoutDto) {
        CheckoutEntity entity = saveDatabase(checkoutDto);
        checkoutDto.setCheckoutId(entity.getCheckoutId());
        checkoutDto.setCreatedAt(entity.getCreatedAt());
        sendToKafka(checkoutDto);

        return entity.getCheckoutId();
    }

    private CheckoutEntity saveDatabase(CheckoutDto checkoutDto) {
        CheckoutEntity entity = modelMapper.map(checkoutDto, CheckoutEntity.class);
        return checkoutRepository.save(entity);
    }

    private void sendToKafka(CheckoutDto checkoutDto) {
        try {
            String jsonInString = objectMapper.writeValueAsString(checkoutDto);
            kafkaTemplate.send(CHECKOUT_COMPLETE_TOPIC_NAME, jsonInString);
            log.info("success sendToKafka");
        } catch (Exception e) {
            log.error("sendToKafka", e);
        }
    }
}
