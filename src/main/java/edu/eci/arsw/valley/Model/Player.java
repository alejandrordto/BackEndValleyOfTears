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
    float positiony,positionx;
    String rotation;
    int id,pos;

    public int getPos() {
        return pos;
    }

    public void setPos(int pos) {
        this.pos = pos;
    }

    public Player(float positiony, float positionx, String rotation, int id, int pos) {
        this.positiony = positiony;
        this.positionx = positionx;
        this.rotation = rotation;
        this.id = id;
        this.pos = pos;
    }
    

   
    public Player() {
    }

    public float getPositiony() {
        return positiony;
    }

    public void setPositiony(float positiony) {
        this.positiony = positiony;
    }

    public float getPositionx() {
        return positionx;
    }

    public void setPositionx(float positionx) {
        this.positionx = positionx;
    }

    public String getRotation() {
        return rotation;
    }

    public void setRotation(String rotation) {
        this.rotation = rotation;
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

    public Player(float positiony, float positionx, String rotation, int id) {
        this.positiony = positiony;
        this.positionx = positionx;
        this.rotation = rotation;
        this.id = id;
    }

   
    
}
