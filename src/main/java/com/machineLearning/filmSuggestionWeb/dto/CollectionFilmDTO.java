package com.machineLearning.filmSuggestionWeb.dto.response;

import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CollectionFilmDTO {
    private Long id;
    private Long film_id;
    private Long collection_id;
    private Date Date_add;
}
