package ro.utcn.sd.a3.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.event.EventListener;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import ro.utcn.sd.a3.command.Command;
import ro.utcn.sd.a3.dto.GameDTO;
import ro.utcn.sd.a3.event.BaseEvent;

import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
public class GameController {
    private final SimpMessagingTemplate messagingTemplate;
    private final Command command;
    @GetMapping("/games")
    public List<GameDTO> readAll() {
        return command.handleCommands("listAll", null);
    }

    @PostMapping("/games")
    public GameDTO create(@RequestBody GameDTO dto) {
        return command.handleCommands("createGame", dto).get(0);
    }

    @GetMapping("/showGames")
    public List<GameDTO> showAllGames(@RequestBody String user){
        return command.handleCommands("showAllGames", user);
    }

    @EventListener(BaseEvent.class)
    public void handleEvent(BaseEvent event) {
        log.info("Got an event: {}.", event);
        messagingTemplate.convertAndSend("/topic/events", event);
    }
}
