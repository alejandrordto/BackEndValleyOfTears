/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.eci.arsw.valley.repos;

import edu.eci.arsw.valley.entities.player;
import java.util.List;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 *
 * @author w guzman
 */
public interface PlayerRepository extends MongoRepository <player,String> {
    public List <player> findByUsuario(String usuario);
}
