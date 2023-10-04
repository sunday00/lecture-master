package com.example.helloworld.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CacheDto {
    @JsonProperty
    private String name;

    @JsonProperty
    private int age;

    public CacheDto (String name, int age) {
        this.name = name;
        this. age = age;
    }
}
