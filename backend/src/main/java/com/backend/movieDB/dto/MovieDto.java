package com.backend.movieDB.dto;

public class MovieDto {

    
    public String poster;
    public String title;
    public Double rating;
    public Integer releaseYear; 
    public MovieDto() {
    }
    
    public MovieDto(String poster, String title, Double rating, Integer releaseYear) { 
        this.poster = poster;
        this.title = title;
        this.rating = rating;
        this.releaseYear = releaseYear;
    }

}