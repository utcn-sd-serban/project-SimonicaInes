package ro.utcn.sd.a3.event;

import lombok.Data;
import lombok.EqualsAndHashCode;
import ro.utcn.sd.a3.dto.ExchangeDTO;
import ro.utcn.sd.a3.dto.SaleDTO;

@Data
@EqualsAndHashCode(callSuper = true)
public class SaleCreatedEvent extends BaseEvent {
    private final SaleDTO sale;

    public SaleCreatedEvent(SaleDTO sale) {
        super(EventType.SALE_CREATED);
        this.sale = sale;
    }
}
