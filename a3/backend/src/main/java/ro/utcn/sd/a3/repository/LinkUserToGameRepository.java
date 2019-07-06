package ro.utcn.sd.a3.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ro.utcn.sd.a3.entity.LinkUserToGame;

public interface LinkUserToGameRepository extends JpaRepository<LinkUserToGame, Integer> {
}
