package com.backend.movieDB.services;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import com.backend.movieDB.dto.MovieDto;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.stereotype.Component;

@Component("InTheatresMovieService")
public class InTheatresMovieService {
    public List<MovieDto> retrieveInTheatresMovies() {
        List<MovieDto> inTheatres = new ArrayList<>();

        try {
            Document webPage = Jsoup.connect("https://www.rottentomatoes.com/")
                    .get();
            Element tbody = webPage.getElementById("media-lists"); 
            Element carousel = tbody.children().first().tagName("tiles-carousel-responsive");
            Elements items = carousel.getElementsByTag("tiles-carousel-responsive-item");

            for (int i = 0; i <15; i ++) {
                String title = items.get(i).getElementsByTag("span").first().text();
                inTheatres.add(new MovieDto(title));
            }


            return inTheatres;

        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }

    private Integer toIntOrNull(String replace) {
        try {
            return Integer.parseInt(replace.replace(",", ""));
        } catch (NumberFormatException e) {
            return null;
        }
    }

    private Double toDoubleOrNull(String replace) {
        try {
            return Double.parseDouble(replace);
        } catch (NumberFormatException e) {
            System.out.println("Error ocurred trying to parse the rating of the top movies from IMDB");
            return null;
        }
    }
}