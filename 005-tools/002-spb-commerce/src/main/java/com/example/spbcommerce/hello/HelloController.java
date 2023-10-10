package com.example.spbcommerce.hello;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("hello")
public class HelloController {
    @GetMapping("")
    public String hello () {
        return "world?";
    }

    @GetMapping(path = "/html", produces = "text/html")
    public String helloHtml () {
        return "<html><body><h1>Hello!</h1></body></html>";
    }

    @PostMapping("")
    public String helloPost () {
        return "world? post";
    }

    @PutMapping("")
    public String helloPut () {
        return "world? put";
    }

    @DeleteMapping("")
    public String helloDelete () {
        return "world? delete";
    }
}
