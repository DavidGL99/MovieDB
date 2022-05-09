package com.backend.movieDB.entity;



import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;



@Entity
@Table(name="reviews")
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Lob
    @NotBlank(message = "body is mandatory")
    private String body;

    @NotBlank(message ="score is mandatory")
    private int score;

    @NotBlank(message = "Movie is mandatory")
    private int movieID;

    public Review() {
    }

    public Review(@NotBlank(message = "body is mandatory") String body,
            @NotBlank(message = "score is mandatory") int score,
            @NotBlank(message = "Movie is mandatory") int movieID) {
        this.body = body;
        this.score = score;
        this.movieID = movieID;
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

    public int getMovieID() {
        return movieID;
    }

    public void setMovieID(int movieID) {
        this.movieID = movieID;
    }

    @Override
    public String toString() {
        return "Review [body=" + body + ", movieID=" + movieID + ", score=" + score + "]";
    }

    
    
}
