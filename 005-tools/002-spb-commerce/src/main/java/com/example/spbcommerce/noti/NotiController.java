package com.example.spbcommerce.noti;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/noti")
public class NotiController {
    @Value("${notification.slack.webhook.url}")
    private String slackWebHook;

    @GetMapping("/send")
    public String helloError() throws URISyntaxException {
        RestTemplate restTemplate = new RestTemplate();
        URI uri = new URI(slackWebHook);

        Map<String, String> msg = new HashMap<>();
        msg.put("text", "fast campus java bulk data process. Now you can see in slack!");
        ResponseEntity<String> result = restTemplate.postForEntity(uri, msg, String.class);


        return "MSG SENT" + result.getStatusCodeValue();
    }
}
