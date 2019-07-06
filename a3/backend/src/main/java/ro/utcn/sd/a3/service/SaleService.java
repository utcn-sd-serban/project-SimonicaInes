package ro.utcn.sd.a3.service;

import lombok.RequiredArgsConstructor;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ro.utcn.sd.a3.dto.ExchangeDTO;
import ro.utcn.sd.a3.dto.GameDTO;
import ro.utcn.sd.a3.dto.SaleDTO;
import ro.utcn.sd.a3.entity.Exchange;
import ro.utcn.sd.a3.entity.Game;
import ro.utcn.sd.a3.entity.Sale;
import ro.utcn.sd.a3.repository.ExchangeRepository;
import ro.utcn.sd.a3.repository.GameRepository;
import ro.utcn.sd.a3.repository.SaleRepository;
import ro.utcn.sd.a3.repository.UserRepository;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class SaleService {
    private final SaleRepository saleRepository;
    private final UserRepository userRepository;
    private final GameRepository gameRepository;
    private final ApplicationEventPublisher eventPublisher;

    @Transactional
    public List<SaleDTO> listAll() {
        List<Sale> sales = saleRepository.findAll();
        List<SaleDTO> saleDTO = new ArrayList<>();
        for(Sale e: sales){
            SaleDTO l = new SaleDTO();
            l.setUsername(userRepository.findById(e.getSalerId()).get().getName());
            l.setGame(gameRepository.findById(e.getGameId()).get().getTitle());
            l.setQuantity(String.valueOf(e.getQuantity()));
            l.setPrice(String.valueOf(e.getPrice()));
            saleDTO.add(l);


        }
        return saleDTO;
    }

    @Transactional
    public SaleDTO create(SaleDTO dto) {
        Sale sale = new Sale();

        sale.setSalerId(userRepository.findByName(dto.getUsername()).get().getId());
        sale.setGameId(gameRepository.findByTitle(dto.getGame()).getId());
        sale.setQuantity(Integer.parseInt(dto.getQuantity()));
        sale.setPrice(Float.parseFloat(dto.getPrice()));


        saleRepository.save(sale);
        return dto;

    }

    @Transactional
    public SaleDTO update(SaleDTO dto) {
        for(Game g: gameRepository.findAll()){
            System.out.println(g);
        }
        for(Sale g: saleRepository.findAll()){
            System.out.println(g);
        }
        Sale sale = new Sale();
        System.out.println(dto);
        for(Sale s: saleRepository.findAll()){
            if(s.getSalerId()==userRepository.findByName(dto.getUsername()).get().getId() &&
                    gameRepository.findById(s.getGameId()).get().getTitle().equals(dto.getGame()) &&
                    s.getQuantity() >= Integer.parseInt(dto.getQuantity())){
                System.out.println(s);


                dto.setQuantity(""+(s.getQuantity()-Integer.parseInt(dto.getQuantity())));

                sale.setId(s.getId());
                sale.setSalerId(s.getSalerId());
                sale.setGameId(s.getGameId());
                sale.setQuantity(Integer.parseInt(dto.getQuantity()));
                sale.setPrice(s.getPrice());

                saleRepository.delete(s);
            }
        }
        saleRepository.save(sale);
        return dto;

    }

    //here filter?

}
