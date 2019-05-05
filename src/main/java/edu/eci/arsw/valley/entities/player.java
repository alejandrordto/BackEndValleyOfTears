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
public class player {
    @Id
    private String usuario;
    private int sala;
    private tanque tanque;
    private int puntaje;

    public player() {}
    
    public player(String usuario, int sala, tanque tanque, int puntaje) {
        this.usuario = usuario;
        this.sala = sala;
        this.tanque = tanque;
        this.puntaje = puntaje;
    }
    
    

    public String getUsuario() {
        return usuario;
    }

    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }

    public int getSala() {
        return sala;
    }

    public void setSala(int sala) {
        this.sala = sala;
    }

    public tanque getTanque() {
        return tanque;
    }

    public void setTanque(tanque tanque) {
        this.tanque = tanque;
    }

    public int getPuntaje() {
        return puntaje;
    }

    public void setPuntaje(int puntaje) {
        this.puntaje = puntaje;
    }
    
    
    
}
