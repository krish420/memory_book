package com.example.backend.service;

import com.example.backend.model.User;
import org.springframework.stereotype.Service;

import java.util.List;
public interface UserService {
    public String createUser(User user);

    public List<User> getUser();

    public String deleteUser(long id);

    public User updateUser(User users);
}
