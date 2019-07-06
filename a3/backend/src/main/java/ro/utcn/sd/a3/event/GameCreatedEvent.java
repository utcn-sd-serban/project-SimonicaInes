package ro.utcn.sd.a3.event;

import lombok.Data;
import lombok.EqualsAndHashCode;
import ro.utcn.sd.a3.dto.GameDTO;

@Data
@EqualsAndHashCode(callSuper = true)
public class GameCreatedEvent extends BaseEvent {
    private final GameDTO game;

    public GameCreatedEvent(GameDTO game) {
        super(EventType.GAME_CREATED);
        this.game = game;
    }
}
