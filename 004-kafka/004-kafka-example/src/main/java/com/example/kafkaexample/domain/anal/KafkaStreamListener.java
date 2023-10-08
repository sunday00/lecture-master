package com.example.kafkaexample.domain.anal;

import com.example.kafkaexample.config.InternalConfig;
import org.apache.kafka.common.serialization.Serdes;
import org.apache.kafka.streams.KeyValue;
import org.apache.kafka.streams.StreamsBuilder;
import org.apache.kafka.streams.kstream.Grouped;
import org.apache.kafka.streams.kstream.KStream;
import org.apache.kafka.streams.kstream.Produced;
import org.apache.kafka.streams.kstream.TimeWindows;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

import java.time.Duration;

@Component
public class KafkaStreamListener {
    @Bean
    public KStream<String, String> kStream(StreamsBuilder kStreamBuilder) {
        final String inputTopic = InternalConfig.topicname;
        final String outputTopic = "checkout.productId.aggregated.v1";

        KStream<String, String> inputStream = kStreamBuilder.stream(inputTopic);
        inputStream.map((k, v) -> new KeyValue<>(JsonUtils.getProductId(v), JsonUtils.getAmount(v)))
                .groupByKey(Grouped.with(Serdes.Long(), Serdes.Long()))
                .windowedBy(TimeWindows.ofSizeWithNoGrace(Duration.ofMinutes(1)))
                .reduce(Long::sum)
                .toStream((key, value) -> key.key())
                .mapValues(JsonUtils::getSendingJson)
                .selectKey((key, value) -> null)
                .to(outputTopic, Produced.with(null, Serdes.String()));

        return inputStream;
    }
}
