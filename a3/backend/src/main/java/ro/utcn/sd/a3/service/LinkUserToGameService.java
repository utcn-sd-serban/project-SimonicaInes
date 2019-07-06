package ro.utcn.sd.a3.service;

import lombok.RequiredArgsConstructor;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ro.utcn.sd.a3.dto.GameDTO;
import ro.utcn.sd.a3.entity.*;
import ro.utcn.sd.a3.repository.GameRepository;
import ro.utcn.sd.a3.repository.LinkUserToGameRepository;
import ro.utcn.sd.a3.repository.UserRepository;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class LinkUserToGameService {
    private final LinkUserToGameRepository linkUserToGameRepository;
    private final GameRepository gameRepository;
    private final UserRepository userRepository;
    private final ApplicationEventPublisher eventPublisher;

    @Transactional
    public void addUserGameLink(Game game, User user){
        LinkUserToGame linkUserToGame = new LinkUserToGame(game.getId(), user.getId());
        linkUserToGameRepository.save(linkUserToGame);
    }

    @Transactional
    public List<GameDTO> listAllGamesFromUser(String user){
        List<Game> games = gameRepository.findAll();
        List<LinkUserToGame> linkUserToGame = linkUserToGameRepository.findAll();
        List<GameDTO> output = new ArrayList<>();
        for(Game g: games){
            for(LinkUserToGame link : linkUserToGame){
                if(userRepository.findByName(user).get().getId()==link.getUserId()){
                    if(g.getId()==link.getGameId()){
                        output.add(GameDTO.ofEntity(g));
                    }
                }
            }
        }
        return output;
    }




}
