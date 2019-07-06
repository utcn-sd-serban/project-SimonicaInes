package ro.utcn.sd.a3.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Game {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String title;
    private String manufacturer;
    private String description;
    private Float price;

    public Game(String title, String manufacturer, String description, Float price){
        this.title=title;
        this.manufacturer=manufacturer;
        this.description=description;
        this.price=price;
    }

}


