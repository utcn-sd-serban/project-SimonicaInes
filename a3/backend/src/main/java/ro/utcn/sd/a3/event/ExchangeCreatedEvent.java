package ro.utcn.sd.a3.event;

import lombok.Data;
import lombok.EqualsAndHashCode;
import ro.utcn.sd.a3.dto.ExchangeDTO;
import ro.utcn.sd.a3.dto.GameDTO;
import ro.utcn.sd.a3.entity.Exchange;

@Data
@EqualsAndHashCode(callSuper = true)
public class ExchangeCreatedEvent extends BaseEvent {
    private final ExchangeDTO exchange;

    public ExchangeCreatedEvent(ExchangeDTO exchange) {
        super(EventType.EXCHANGE_CREATED);
        this.exchange = exchange;
    }
}
