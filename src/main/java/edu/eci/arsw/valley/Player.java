/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.eci.arsw.valley;

/**
 *
 * @author user
 */
public class Player {
    float positiony,positionx;
    String rotation;

    public Player(float positionx, String rotation) {
        this.positionx = positionx;
        this.rotation = rotation;
    }

    public Player(float positiony, float positionx) {
        this.positiony = positiony;
        this.positionx = positionx;
    }

    public Player(float positionx) {
        this.positionx = positionx;
    }

    public Player(float positiony, float positionx, String rotation) {
        this.positiony = positiony;
        this.positionx = positionx;
        this.rotation = rotation;
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
    
}
