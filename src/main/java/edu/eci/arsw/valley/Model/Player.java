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
public class Player implements Comparable<Player> {
    
    String tecla;
    int id,pos;

    public int getPos() {
        return pos;
    }

    public void setPos(int pos) {
        this.pos = pos;
    }

   

   


    public Player() {
    }

    public String getTecla() {
        return tecla;
    }

    public void setTecla(String tecla) {
        this.tecla = tecla;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
    

  
    @Override
    public int compareTo(Player t) {
        return t.getId() - this.getId();
    }

   

   
    
}
