package com.example.backend.controller;

import com.example.backend.model.Login;
import com.example.backend.model.User;
import com.example.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
    @Autowired
    UserService userService;
    //user creation
    @PostMapping("/signup")
    public String createUser(@RequestBody User user) {
        return this.userService.createUser(user);

    }
    @GetMapping("/allUser")
    public List<User> getUser() {
        return this.userService.getUser();
    }

    // login
    @PostMapping("/login")
    public User userLogin(@RequestBody Login login) {
        List<User> user = getUser();
        for (User u : user) {
            if (login.getEmail().equals(u.getEmail()) && login.getPassword().equals(u.getPassword())) {
                return u;
            }
        }
        return null;
    }

    // update user
    @PutMapping("/updateUser")

    public User updateUser(@RequestBody User user) {
        return this.userService.updateUser(user);
    }

    // delete user
    @DeleteMapping("/deleteUser/{id}")
    public String deleteUser(@PathVariable String id) {
        return this.userService.deleteUser(Long.parseLong(id));
    }
}
