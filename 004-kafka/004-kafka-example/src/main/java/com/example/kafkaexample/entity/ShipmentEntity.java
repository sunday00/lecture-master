package com.example.kafkaexample.entity;

import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.sql.Timestamp;

@Data
@Table(name = "SHIPMENT_TABLE")
@Entity
public class ShipmentEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long shipmentId;

    @Column(name = "checkout_id")
    private Long checkoutId;

    @Column(name = "member_id")
    private Long memberId;

    @Column(name = "product_id")
    private Long productId;

    @Column(name = "amount")
    private Long amount;

    @Column(name = "shipping_address")
    private String shippingAddress;

    @CreationTimestamp
    @Column(name = "created_at")
    private Timestamp createdAt;
}
