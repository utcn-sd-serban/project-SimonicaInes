package ro.utcn.sd.a3.dto;

import lombok.Data;
import ro.utcn.sd.a3.entity.Game;


@Data
public class GameDTO {
    private String title;
    private String manufacturer;
    private String description;
    private Float price;


    public static GameDTO ofEntity(Game game) {
        GameDTO gameDTO = new GameDTO();
        gameDTO.setTitle(game.getTitle());
        gameDTO.setManufacturer(game.getManufacturer());
        gameDTO.setDescription(game.getDescription());
        gameDTO.setPrice(game.getPrice());


        return gameDTO;
    }
}
