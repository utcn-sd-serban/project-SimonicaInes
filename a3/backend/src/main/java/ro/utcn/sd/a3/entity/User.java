package ro.utcn.sd.a3.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@ToString(of = {"id", "name"})
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String name;
	private String password;
	private String iBan;
	private String email;

	public User(String name, String password, String iBan, String email){
		this.name=name;
		this.password=password;
		this.iBan=iBan;
		this.email=email;
	}


}
