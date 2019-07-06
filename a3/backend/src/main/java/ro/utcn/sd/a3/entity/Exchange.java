package ro.utcn.sd.a3.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Exchange {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int salerId;
    private int customerId;
    private int gameId;
    private int gameOfferId;

    public Exchange( int salerId, int customerId, int gameId, int gameOfferId) {
        this.salerId = salerId;
        this.customerId = customerId;
        this.gameId = gameId;
        this.gameOfferId = gameOfferId;
    }
}


