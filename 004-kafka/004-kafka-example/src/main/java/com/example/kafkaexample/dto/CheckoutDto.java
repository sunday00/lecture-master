package com.example.kafkaexample.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.Date;

@Getter
@Setter
@ToString
public class CheckoutDto {
 private Long checkoutId;
 private Long memberId;
 private Long productId;
 private Long amount;
 private String  shippingAddress;
 private Date createdAt;
}
