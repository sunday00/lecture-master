package com.example.helloworld.config;

import com.example.helloworld.event.OrderEventStreamListener;
import com.example.helloworld.event.OrderToNotificationEventListener;
import com.example.helloworld.event.PaymentEventStreamListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.connection.stream.Consumer;
import org.springframework.data.redis.connection.stream.MapRecord;
import org.springframework.data.redis.connection.stream.ReadOffset;
import org.springframework.data.redis.connection.stream.StreamOffset;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.data.redis.stream.StreamMessageListenerContainer;
import org.springframework.data.redis.stream.Subscription;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.redis.connection.RedisConnectionFactory;

import java.time.Duration;

@Configuration
public class RedisStreamConfig {
    @Autowired
    StringRedisTemplate redisTemplate;

    @Autowired
    private OrderEventStreamListener orderEventStreamListener;

    @Autowired
    private PaymentEventStreamListener paymentEventStreamListener;

    @Autowired
    private OrderToNotificationEventListener orderToNotificationEventListener;

    @Bean
    public Subscription orderToPaymentSubscription(RedisConnectionFactory factory) {
        StreamMessageListenerContainer.StreamMessageListenerContainerOptions<String, MapRecord<String, String, String>> options = StreamMessageListenerContainer
                .StreamMessageListenerContainerOptions
                .builder()
                .pollTimeout(Duration.ofSeconds(1))
                .build();

        StreamMessageListenerContainer<String, MapRecord<String, String, String>> listenerContainer = StreamMessageListenerContainer.create(factory, options);

        if (Boolean.FALSE.equals(redisTemplate.hasKey("order-event"))) {
            redisTemplate.opsForStream().createGroup("order-event", "payment-service-group");
            redisTemplate.opsForStream().createGroup("order-event", "notification-service-group");
        }

        if (redisTemplate.opsForStream().info("order-event").groupCount() == 0){
            redisTemplate.opsForStream().createGroup("order-event", "payment-service-group");
            redisTemplate.opsForStream().createGroup("order-event", "notification-service-group");
        }

        Subscription subscription = listenerContainer.receiveAutoAck(
                Consumer.from("payment-service-group", "instance-1"),
                StreamOffset.create("order-event", ReadOffset.lastConsumed()),
                orderEventStreamListener
        );

        listenerContainer.start();

        return subscription;
    }

    @Bean
    public Subscription orderToNotificationSubscription(RedisConnectionFactory factory) {
        StreamMessageListenerContainer.StreamMessageListenerContainerOptions<String, MapRecord<String, String, String>> options = StreamMessageListenerContainer
                .StreamMessageListenerContainerOptions
                .builder()
                .pollTimeout(Duration.ofSeconds(1))
                .build();

        StreamMessageListenerContainer<String, MapRecord<String, String, String>> listenerContainer = StreamMessageListenerContainer.create(factory, options);

        if (Boolean.FALSE.equals(redisTemplate.hasKey("order-event"))) {
            redisTemplate.opsForStream().createGroup("order-event", "payment-service-group");
            redisTemplate.opsForStream().createGroup("order-event", "notification-service-group");
        }

        if (redisTemplate.opsForStream().info("order-event").groupCount() == 0){
            redisTemplate.opsForStream().createGroup("order-event", "payment-service-group");
            redisTemplate.opsForStream().createGroup("order-event", "notification-service-group");
        }

        Subscription subscription = listenerContainer.receiveAutoAck(
                Consumer.from("notification-service-group", "instance-1"),
                StreamOffset.create("order-event", ReadOffset.lastConsumed()),
                orderToNotificationEventListener
        );

        listenerContainer.start();

        return subscription;
    }

    @Bean
    public Subscription paymentToNotificationSubscription(RedisConnectionFactory factory) {
        StreamMessageListenerContainer.StreamMessageListenerContainerOptions<String, MapRecord<String, String, String>> options = StreamMessageListenerContainer
                .StreamMessageListenerContainerOptions
                .builder()
                .pollTimeout(Duration.ofSeconds(1))
                .build();

        StreamMessageListenerContainer<String, MapRecord<String, String, String>> listenerContainer = StreamMessageListenerContainer.create(factory, options);

        if (Boolean.FALSE.equals(redisTemplate.hasKey("payment-event"))) {
            redisTemplate.opsForStream().createGroup("payment-event", "notification-service-group");
        }

        if (redisTemplate.opsForStream().info("payment-event").groupCount() == 0){
            redisTemplate.opsForStream().createGroup("payment-event", "notification-service-group");
        }

        Subscription subscription = listenerContainer.receiveAutoAck(
                Consumer.from("notification-service-group", "instance-1"),
                StreamOffset.create("payment-event", ReadOffset.lastConsumed()),
                paymentEventStreamListener
        );

        listenerContainer.start();

        return subscription;
    }
}
