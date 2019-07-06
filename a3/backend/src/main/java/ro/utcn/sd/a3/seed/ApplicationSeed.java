package ro.utcn.sd.a3.seed;

import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import ro.utcn.sd.a3.entity.*;
import ro.utcn.sd.a3.repository.*;

import java.text.ParseException;

@Component
@RequiredArgsConstructor
public class ApplicationSeed implements CommandLineRunner {
    private final UserRepository userRepository;
    private final LinkUserToGameRepository linkUserToGameRepository;
    private final GameRepository gameRepository;
    private final ExchangeRepository exchangeRepository;
    private final SaleRepository saleRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    @Transactional
    public void run(String... args) throws ParseException {
        User serban = new User("serban", passwordEncoder.encode("123"), "1234567", "serban@ceva.com");
        User ines = new User("ines", passwordEncoder.encode("123"), "01234", "ines@ceva.com");
        userRepository.save(serban);
        userRepository.save(ines);

        //Date date= new SimpleDateFormat("dd/MM/yyyy").parse("11/07/2015");
        Game g1 = new Game(
                "Mario",
                "Nintendo",
                "Bounces on mushrooms.",
                50f
                );

        Game g2 = new Game(
                "Space Invaders",
                "Arcade",
                "Pew pew",
                15f
        );

        gameRepository.save(g1);
         gameRepository.save(g2);

         LinkUserToGame l1 = new LinkUserToGame(0, 1);
         LinkUserToGame l2 = new LinkUserToGame(1, 2);
         linkUserToGameRepository.save(l1);
         linkUserToGameRepository.save(l2);


         Exchange e1 = new Exchange(ines.getId(),-1,g1.getId(),-1);
         exchangeRepository.save(e1);


         Sale s1 = new Sale(1,20,20f,g2.getId());
         saleRepository.save(s1);

    }

    @Transactional
    public void clear() {

        gameRepository.deleteAll();
        userRepository.deleteAll();
        saleRepository.deleteAll();
    }
}
