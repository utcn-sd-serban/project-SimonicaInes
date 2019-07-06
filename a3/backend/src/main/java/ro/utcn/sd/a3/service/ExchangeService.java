package ro.utcn.sd.a3.service;

import lombok.RequiredArgsConstructor;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ro.utcn.sd.a3.dto.ExchangeDTO;
import ro.utcn.sd.a3.dto.GameDTO;
import ro.utcn.sd.a3.entity.Exchange;
import ro.utcn.sd.a3.entity.Game;
import ro.utcn.sd.a3.event.ExchangeCreatedEvent;
import ro.utcn.sd.a3.event.GameCreatedEvent;
import ro.utcn.sd.a3.repository.ExchangeRepository;
import ro.utcn.sd.a3.repository.GameRepository;
import ro.utcn.sd.a3.repository.UserRepository;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ExchangeService {
    private final ExchangeRepository exchangeRepository;
    private final UserRepository userRepository;
    private final GameRepository gameRepository;
    private final ApplicationEventPublisher eventPublisher;

    @Transactional
    public List<ExchangeDTO> listAll() {
        List<Exchange> exchanges = exchangeRepository.findAll();
        List<ExchangeDTO> exchangeDTO = new ArrayList<>();
        for(Exchange e: exchanges){
            ExchangeDTO dto = new ExchangeDTO();
            dto.setUsername(userRepository.findById(e.getSalerId()).get().getName());
            dto.setGame(gameRepository.findById(e.getGameId()).get().getTitle());
            if(e.getCustomerId()==-1){
                dto.setOfferedUsername("");
                dto.setOfferedGame("");
            }
            else{
            dto.setOfferedUsername(userRepository.findById(e.getCustomerId()).get().getName());
            dto.setOfferedGame(gameRepository.findById(e.getGameId()).get().getTitle());}

            exchangeDTO.add(dto);
        }
        return exchangeDTO;
    }

    @Transactional
    public ExchangeDTO create(ExchangeDTO dto) {
        Exchange exchange = new Exchange();

        exchange.setSalerId(userRepository.findByName(dto.getUsername()).get().getId());
        exchange.setGameId(gameRepository.findByTitle(dto.getGame()).getId());

        if(dto.getOfferedUsername()==""){
            exchange.setGameOfferId(-1);
            exchange.setCustomerId(-1);
        }
        else{
            exchange.setGameOfferId(gameRepository.findByTitle(dto.getGame()).getId());
            exchange.setCustomerId(userRepository.findByName(dto.getOfferedUsername()).get().getId());

        }
        for(Exchange e : exchangeRepository.findAll()){
            if(e.getSalerId()==exchange.getSalerId() && e.getGameId()==exchange.getGameId() && e.getCustomerId()<0 && e.getGameOfferId()<0 ){
                exchangeRepository.delete(e);
            }
        }
        exchangeRepository.save(exchange);
        return dto;

    }

    //here filter?

}
