package com.example.backend.service.serviceImpl;

import com.example.backend.model.User;
import com.example.backend.repository.UserRepository;
import com.example.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
@Service
public class UserServiceImpl implements UserService {
    @Autowired
    UserRepository userRepository;
    @Override
    public String createUser(User user) {
        boolean emailAlreadyExists = userRepository.existsUserByEmail(user.getEmail());
        boolean mobileAlreadyExists = userRepository.existsUserByMobileNumber(user.getMobileNumber());

        if (emailAlreadyExists) {
            return "Email id already exists";
        }
        if (mobileAlreadyExists) {
            return "Mobile number already exists";
        }
        try {
            userRepository.save(user);
            return "User created succesfully";
        } catch (Exception e) {
            return "User creation failed. Try Again";
        }
    }

    @Override
    public List<User> getUser() {
        return this.userRepository.findAll();
    }

    @Override
    public String deleteUser(long id) {
        List<User> usersList = getUser();
        for (User x : usersList) {
            if (Objects.equals(x.getUserId(), id)) {
                this.userRepository.delete(x);
                return "deleted";
            }
        }
        return "failed";
    }

    @Override
    public User updateUser(User users) {
        List<User> usersList = getUser();
        for (User x : usersList) {
            if (Objects.equals(x.getUserId(), users.getUserId())) {
                this.userRepository.save(users);
            }
        }
        return users;
    }
}
