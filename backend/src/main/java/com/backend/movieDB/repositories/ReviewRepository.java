package com.backend.movieDB.repositories;

import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

import com.backend.movieDB.entity.Review;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
@CrossOrigin(origins = "*", allowedHeaders ="*")
@RepositoryRestResource 
public interface ReviewRepository extends  CrudRepository<Review, Long> {

    List<Review> findByMovieID(@Param("movieID")String movieID);
    
}
