package com.example.helloworld;

import org.springframework.http.HttpHeaders;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import java.io.IOException;

@RestController
@RequestMapping("/user")
public class UserController {
    public UserController(){}

    @GetMapping("/")
    public String login(HttpSession session) {
        if(session.getAttribute("user") == null) {
            session.setAttribute("user", "user1");
        }

        return session.getId();
    }

    @GetMapping("/check")
    public String check(HttpSession session, HttpServletResponse response) throws IOException {
        System.out.println("session value: " + session.getAttribute("user"));

        if(session.getAttribute("user") == null) {
            response.sendRedirect("/user/");
            return "";
        }

        return session.getAttribute("user").toString();
    }
}
