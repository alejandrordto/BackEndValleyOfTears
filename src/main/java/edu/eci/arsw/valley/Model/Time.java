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
public class Time {
    boolean cronometro;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
    int id;
    public Time() {
    }

    public boolean isCronometro() {
        return cronometro;
    }

    public void setCronometro(boolean cronometro) {
        this.cronometro = cronometro;
    }
            
}
