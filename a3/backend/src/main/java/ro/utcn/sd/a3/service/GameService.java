package ro.utcn.sd.a3.service;

import lombok.RequiredArgsConstructor;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ro.utcn.sd.a3.dto.GameDTO;
import ro.utcn.sd.a3.entity.Game;
import ro.utcn.sd.a3.event.GameCreatedEvent;
import ro.utcn.sd.a3.repository.GameRepository;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class GameService {
    private final GameRepository gameRepository;
    private final ApplicationEventPublisher eventPublisher;

    @Transactional
    public List<GameDTO> listAll() {
        List<Game> games = gameRepository.findAll();
        List<GameDTO> gamesDTO = new ArrayList<>();
        for(Game g: games){
            gamesDTO.add(GameDTO.ofEntity(g));
        }
        return gamesDTO;
    }

    @Transactional
    public GameDTO create(GameDTO dto) { //add to repo: question, tags, questiontags
        Game game = new Game();

        game.setTitle(dto.getTitle());
        game.setManufacturer(dto.getManufacturer());
        game.setDescription(dto.getDescription());
        game.setPrice(dto.getPrice());

        gameRepository.save(game);

//        for(String tag: dto.getTags().split(";")){
//            if(tagRepository.findByText(tag)== null){
//                tagRepository.save(new Tag(tag));
//            }
//            questionTagRepository.save(new QuestionTag(question.getId(),tagRepository.findByText(tag).getId()));
//        }

        GameDTO output = GameDTO.ofEntity(game);
        eventPublisher.publishEvent(new GameCreatedEvent(output));
        return output;
    }

    //here filter?

}
