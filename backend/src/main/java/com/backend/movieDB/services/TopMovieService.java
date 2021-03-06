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

@Component("topMovieService")
public class TopMovieService {
    public List<MovieDto> retrieveTopMovies() {
        List<MovieDto> topMovies = new ArrayList<>();

        try {
            Document webPage = Jsoup.connect("https://www.imdb.com/chart/top/").header("Accept-Language", "en")
                    .get();
            Element tbody = webPage.getElementsByClass("chart full-width").first()
                    .getElementsByTag("tbody").get(0);

            List<Element> rows = tbody.children();

            for (int i = 0; i <40; i ++) {

                Elements tds = rows.get(i).getElementsByTag("td");

                String[] aux = tds.get(0).getElementsByAttribute("src").first().absUrl("src").split("@");

                String poster = aux.length == 2 ? aux[0] + "@" : aux[0] + "@@";
                
                String id = tds.get(0).getElementsByAttribute("href").first().absUrl("href").split("/")[4];

                if (tds.size() < 5)
                    continue;

                String title = tds.get(1).getElementsByAttribute("href").text();
                Integer releaseYear = toIntOrNull(
                        tds.get(1).getElementsByClass("secondaryInfo").text().replace("(", "").replace(")", ""));
                Double rating = toDoubleOrNull(tds.get(2).getElementsByAttribute("title").text());

                topMovies.add(new MovieDto(poster, title, rating, releaseYear, id));
            }

            return topMovies;

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