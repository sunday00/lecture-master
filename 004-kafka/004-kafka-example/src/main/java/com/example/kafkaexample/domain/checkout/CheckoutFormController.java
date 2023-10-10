package com.example.kafkaexample.domain.checkout;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Slf4j
@Controller
public class CheckoutFormController {
    @GetMapping("checkout-form")
    public String checkoutForm(Model model) {
        log.info("checkout....");
        return "checkoutForm";
    }
}