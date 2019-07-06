package ro.utcn.sd.a3.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ro.utcn.sd.a3.entity.Sale;

public interface SaleRepository extends JpaRepository<Sale, Integer> {

}
