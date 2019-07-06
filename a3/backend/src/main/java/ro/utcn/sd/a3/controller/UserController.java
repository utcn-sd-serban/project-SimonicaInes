package ro.utcn.sd.a3.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import ro.utcn.sd.a3.entity.User;
import ro.utcn.sd.a3.service.GameUserDetailsService;

@RestController
@RequiredArgsConstructor
public class UserController {
    private final GameUserDetailsService service;

    @GetMapping("/me")
    public User readCurrent() {
        return service.loadCurrentUser();
    }
}
