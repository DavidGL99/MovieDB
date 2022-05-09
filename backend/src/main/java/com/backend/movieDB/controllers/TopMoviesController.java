package com.backend.movieDB.controllers;

import java.util.List;

import com.backend.movieDB.dto.MovieDto;
import com.backend.movieDB.services.TopMovieService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/top")
public class TopMoviesController {

    @Autowired
    private TopMovieService topMovieService;

    @GetMapping("")
    public ResponseEntity<List<MovieDto>> getTopMovies() {
        return new ResponseEntity<List<MovieDto>>(topMovieService.retrieveTopMovies(),
                HttpStatus.OK);
    }
}
