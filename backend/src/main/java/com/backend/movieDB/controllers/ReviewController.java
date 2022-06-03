package com.backend.movieDB.controllers;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import com.backend.movieDB.entity.Review;
import com.backend.movieDB.repositories.ReviewRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("reviews")
public class ReviewController {
    
    @Autowired
    private ReviewRepository repository;

    @Transactional
    @GetMapping(path = "/{movieID}")
    public List<Review> findByMovieID(@PathVariable("movieID") String movieID) {
        return repository.findByMovieID(movieID);
    }
    @PostMapping(path = "")
    public Review createReview(@RequestBody Review review) {
        return repository.save(review); 
    }
    @GetMapping(path = "")
    public List<Review> findByAll() {
        return  repository.findAll(); 
    }

    @Transactional
    @DeleteMapping(path = "/{movieID}")
    public void deleteByMovieID(@PathVariable("movieID") String movieID) {
        repository.deleteByMovieID(movieID); 
    }

}
