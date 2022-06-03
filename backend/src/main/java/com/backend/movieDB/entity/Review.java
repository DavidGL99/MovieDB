package com.backend.movieDB.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name = "reviews")
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Lob
    @NotBlank(message = "body is mandatory")
    private String body;

    private int score;

    @NotBlank(message = "Movie is mandatory")
    private String movieID;

    @NotBlank(message = "headline is mandatory")
    private String headline;
    public Review() {
    }

    public Review(String body, int score, String movieID, String headline) {
        this.body = body;
        this.score = score;
        this.movieID = movieID;
        this.headline = headline;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }

    public String getMovieID() {
        return movieID;
    }

    public void setMovieID(String movieID) {
        this.movieID = movieID;
    }

    public String getHeadline() {
        return headline;
    }

    public void setHeadline(String headline) {
        this.headline = headline;
    }

    @Override
    public String toString() {
        return "Review [body=" + body + ", headline=" + headline + ", id=" + id + ", movieID=" + movieID + ", score="
                + score + "]";
    }

   

}
