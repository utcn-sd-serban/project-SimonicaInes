package ro.utcn.sd.a3.command;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;
import ro.utcn.sd.a3.dto.ExchangeDTO;
import ro.utcn.sd.a3.dto.GameDTO;
import ro.utcn.sd.a3.dto.SaleDTO;
import ro.utcn.sd.a3.service.ExchangeService;
import ro.utcn.sd.a3.service.GameService;
import ro.utcn.sd.a3.service.LinkUserToGameService;
import ro.utcn.sd.a3.service.SaleService;

import java.util.ArrayList;
import java.util.List;

@Component
@AllArgsConstructor
public class Command {
    private final GameService gameService;
    private final SaleService saleService;
    private final ExchangeService exchangeService;
    private final LinkUserToGameService linkUserToGameService;

    public List<GameDTO> handleCommands(String command, Object o){
        if(command.equals("listAll")){
            return gameService.listAll();
        }
        else if(command.equals("createGame")){
            List<GameDTO> l = new ArrayList<>();
            l.add(gameService.create((GameDTO)o));
            return l;
        }
        else if(command.equals("showAllGames")){
            List<GameDTO> l= new ArrayList<>();
            l= linkUserToGameService.listAllGamesFromUser((String)o);
            return l;
        }
        else{
            return new ArrayList<>();
        }
    }

    public List<ExchangeDTO> handleExchangeCommands(String command, Object o){
        if(command.equals("listAll")){
            return exchangeService.listAll();
        }
        else if(command.equals("createExchange")){
            List<ExchangeDTO> l = new ArrayList<>();
            l.add(exchangeService.create((ExchangeDTO)o));
            return l;
        }
        else{
            return new ArrayList<>();
        }
    }

    public List<SaleDTO> handleSaleCommands(String command, Object o){
        if(command.equals("listAll")){
            return saleService.listAll();
        }
        else if(command.equals("createSale")){
            List<SaleDTO> l = new ArrayList<>();
            l.add(saleService.create((SaleDTO)o));
            System.out.println(l.get(0));
            return l;
        }
        else if(command.equals("updateSale")){
            List<SaleDTO> l = new ArrayList<>();
            l.add(saleService.update((SaleDTO)o));
            System.out.println(l.get(0));
            return l;
        }
        else{
            return new ArrayList<>();
        }
    }
}
