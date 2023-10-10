package com.example.spbcommerce.hello;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/hello-param")
public class HelloWithParamController {
    @PostMapping("")
    public String helloParamPost(@RequestBody CustomerDto customerDto) {
        return customerDto.getName();
    }
}
