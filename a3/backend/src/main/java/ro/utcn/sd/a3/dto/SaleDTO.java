package ro.utcn.sd.a3.dto;

import lombok.Data;
import ro.utcn.sd.a3.entity.Game;
import ro.utcn.sd.a3.entity.Sale;


@Data
public class SaleDTO {
    private String username;
    private String game;
    private String quantity;
    private String price;


    public static SaleDTO ofEntity(String username,String game, String quantity, String price) {
        SaleDTO saleDTO = new SaleDTO();
        saleDTO.setUsername(username);
        saleDTO.setGame(game);
        saleDTO.setQuantity(quantity);
        saleDTO.setPrice(price);


        return saleDTO;
    }
}
