package com.example.kafkaexample.domain.shipment;

import com.example.kafkaexample.dto.CheckoutDto;
import com.example.kafkaexample.entity.ShipmentEntity;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
@Slf4j
@RequiredArgsConstructor
public class SaveShipmentService {
    private final ModelMapper modelMapper = new ModelMapper();

    private final ShipmentRepository shipmentRepository;

    public Long saveCheckoutData(CheckoutDto checkoutDto) {
        ShipmentEntity entity = modelMapper.map(checkoutDto, ShipmentEntity.class);
        ShipmentEntity saveEntity = shipmentRepository.save(entity);

        return saveEntity.getShipmentId();
    }
}
