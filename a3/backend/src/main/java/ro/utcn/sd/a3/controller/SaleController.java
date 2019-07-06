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
import ro.utcn.sd.a3.dto.SaleDTO;
import ro.utcn.sd.a3.event.BaseEvent;

import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
public class SaleController {
    private final SimpMessagingTemplate messagingTemplate;
    private final Command command;
    @GetMapping("/sales")
    public List<SaleDTO> readAll() {
        return command.handleSaleCommands("listAll", null);
    }

    @PostMapping("/sales")
    public SaleDTO create(@RequestBody SaleDTO dto) {
        return command.handleSaleCommands("createSale", dto).get(0);
    }


    @PostMapping("/update-sales")
    public SaleDTO update(@RequestBody SaleDTO dto) {
        return command.handleSaleCommands("updateSale", dto).get(0);
    }


    @EventListener(BaseEvent.class)
    public void handleEvent(BaseEvent event) {
        log.info("Got an event: {}.", event);
        messagingTemplate.convertAndSend("/topic/events", event);
    }
}
