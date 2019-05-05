/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.eci.arsw.valley;

import edu.eci.arsw.valley.entities.player;
import edu.eci.arsw.valley.entities.tanque;
import edu.eci.arsw.valley.repos.PlayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.data.mongo.MongoDataAutoConfiguration;
import org.springframework.boot.autoconfigure.mongo.MongoAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;

/**
 *
 * @author cristian
 */
@SpringBootApplication
@ComponentScan(basePackages = {"edu.eci.arsw.valley"})
public class CinemaAPIApplication implements CommandLineRunner {
    
    @Autowired
    private PlayerRepository repository;

    public static void main(String[] args) {
        SpringApplication.run(CinemaAPIApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        //se debe matener la coexcion abierta o solo cuando un jugador entre o finalece ?
        repository.deleteAll();
        System.out.println("Connected    ");
        System.out.println("save Players");
        repository.save(new player("Mateo",1,new tanque(0,0,"rojo","norte"),100));
        repository.save(new player("Alejandro",1,new tanque(10,10,"azul","sur"),100));
        repository.save(new player("Mono",1,new tanque(50,50,"verde","oeste"),100));
        
        System.out.println("findAll");
        
        System.out.println("--------------");
        
        for(player jugador: repository.findAll()){
            System.out.println(jugador);
        }
        
    }
}
