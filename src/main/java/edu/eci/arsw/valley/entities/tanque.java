/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.eci.arsw.valley.entities;

import org.springframework.data.annotation.Id;

/**
 *
 * @author w guzman
 */
public class tanque {
    @Id
    private int posX;
    private int posY;
    private String color;
    private String direction;

    public tanque(int posX, int posY, String color, String direction) {
        this.posX = posX;
        this.posY = posY;
        this.color = color;
        this.direction = direction;
    }

    public int getPosX() {
        return posX;
    }

    public void setPosX(int posX) {
        this.posX = posX;
    }

    public int getPosY() {
        return posY;
    }

    public void setPosY(int posY) {
        this.posY = posY;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getDirection() {
        return direction;
    }

    public void setDirection(String direction) {
        this.direction = direction;
    }
    
    
}
