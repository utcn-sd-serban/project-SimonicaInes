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
public class Sale {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int salerId;
    private int gameId;
    private int quantity;
    private Float price;


    public Sale(int salerId, int quantity, Float price, int gameId) {
        this.salerId = salerId;
        this.quantity = quantity;
        this.price = price;
        this.gameId = gameId;
    }
}


