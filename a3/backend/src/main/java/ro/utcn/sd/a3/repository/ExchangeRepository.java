package ro.utcn.sd.a3.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ro.utcn.sd.a3.entity.Exchange;
import ro.utcn.sd.a3.entity.Game;

public interface ExchangeRepository extends JpaRepository<Exchange, Integer> {

}
