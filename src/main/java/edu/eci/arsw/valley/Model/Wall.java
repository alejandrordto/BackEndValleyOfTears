/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.eci.arsw.valley.Model;

/**
 *
 * @author user
 */
public class Wall {
    int life,id;

    public int getLife() {
        return life;
    }

    public void setLife(int life) {
        this.life = life;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Wall() {
    }

    public Wall(int life, int id) {
        this.life = life;
        this.id = id;
    }
}
