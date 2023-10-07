package com.example.kafkaexample.config;

import lombok.Getter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.context.properties.ConstructorBinding;

@ConstructorBinding
@ConfigurationProperties(prefix = "internal")
@Getter
public class InternalConfig {
    public static final String topicname = "checkout.complete.v1";
    public static final String groupId = "shipment.group.v1";
}
