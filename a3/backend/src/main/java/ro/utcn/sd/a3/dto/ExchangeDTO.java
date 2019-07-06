package ro.utcn.sd.a3.dto;

import lombok.Data;
import ro.utcn.sd.a3.entity.Exchange;
import ro.utcn.sd.a3.entity.Game;


@Data
public class ExchangeDTO {
    private String username;
    private String game;
    private String offeredGame;
    private String offeredUsername;


    public static ExchangeDTO ofEntity(String username, String game, String offeredGame, String offeredUsername) {
        ExchangeDTO exchangeDTO = new ExchangeDTO();
        exchangeDTO.setUsername(username);
        exchangeDTO.setGame(game);
        exchangeDTO.setOfferedGame(offeredGame);
        exchangeDTO.setOfferedUsername(offeredUsername);

        return exchangeDTO;
    }


}
