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
            Document webPage = Jsoup.connect("https://www.imdb.com/showtimes/location?ref_=inth_ov_sh_sm")
                    .header("Accept-Language", "en")
                    .get();
            Element tbody = webPage.getElementsByClass("lister list detail sub-list").first();

            Elements items = tbody.children().get(1).getElementsByClass("lister-item mode-grid");

            for (Element item : items) {
                String id = item.getElementsByAttribute("data-tconst").first().getElementsByClass("title").first()
                        .select("a").attr("href").split("/")[3];

                String poster = item.getElementsByAttribute("data-tconst").first().getElementsByAttribute("loadlate")
                        .attr("loadlate");

                inTheatres.add(new MovieDto(poster, id));
            }

            return inTheatres;

        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }
}