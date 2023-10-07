package com.example.kafkaexample.domain;

import com.example.kafkaexample.dto.CheckoutDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;

@Slf4j
@Controller
@RequiredArgsConstructor
public class CheckoutSubmitController {
    private final SaveService saveService;

    @PostMapping("/submit-checkout")
    public String submitCheckout(CheckoutDto checkoutDto, Model model) {
        log.info(checkoutDto.toString());
        Long checkoutId = saveService.saveCheckoutDto(checkoutDto);
        model.addAttribute("checkoutId", checkoutId);
        return "submitComplete";
    }
}
