/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.eci.arsw.valley.Services;



import edu.eci.arsw.valley.Model.Player;
import java.util.Set;

/**
 *
 * @author user
 */
public interface GameServices {

    public void registerPlayerToRoom(int roomId, Player pl) throws ServicesException;

    public void removePlayerFromRoom(int roomId, Player pl) throws ServicesException;

    public Set<Player> getRegisteredPlayers(int roomId) throws ServicesException;

    public void createRoom(int roomId) throws ServicesException;

    public void removeRoom(int roomId) throws ServicesException;
    //public void registerWinner(int racenum,RaceParticipant rp) throws ServicesException;
    //public RaceParticipant getRegisteredWinner(int racenum) throws ServicesException;

    public int getTotalRooms() throws ServicesException;

}
