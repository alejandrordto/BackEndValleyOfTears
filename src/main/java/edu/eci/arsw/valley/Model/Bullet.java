/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.eci.arsw.valley.Model;

/**
 *
 * @author Guzman
 */
public class Bullet {
    public int id; //tank, de quien es la bala
    public int posX,posY;
	public String direccion; 

    public Bullet() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
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
	
	public String getDireccion(){
		return  direccion;
	}
	
	public void setDireccion(String direccion){
		this.direccion = direccion;
	}
    
    
}
