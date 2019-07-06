package ro.utcn.sd.a3.service;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ro.utcn.sd.a3.entity.User;
import ro.utcn.sd.a3.exception.NotFoundException;
import ro.utcn.sd.a3.repository.UserRepository;

import java.util.Collections;

@Service
@RequiredArgsConstructor
public class GameUserDetailsService implements UserDetailsService {
    private final UserRepository repository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = repository.findByName(username)
                .orElseThrow(() -> new UsernameNotFoundException("Unknown user!"));
        return new org.springframework.security.core.userdetails.User(user.getName(), user.getPassword(),
                Collections.singletonList(new SimpleGrantedAuthority("ROLE_USER")));
    }

    @Transactional
    public User loadCurrentUser() {
        String name = SecurityContextHolder.getContext().getAuthentication().getName();
        return repository.findByName(name).orElseThrow(NotFoundException::new);
    }
}
