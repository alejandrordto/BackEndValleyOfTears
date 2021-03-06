package edu.eci.arsw.valley.Controller;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 *
 * @author AsusPC
 */

import edu.eci.arsw.valley.Model.*;


import java.util.List;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

@Controller
public class STOMPMessagesHandler {

    @Autowired
    SimpMessagingTemplate msgt;

    private ConcurrentMap<String, List> players = new ConcurrentHashMap<>();
    
    @MessageMapping("/start/{roomId}")
    @SendTo("/topic/room-start-{roomId}")
    public String handleStartEvent(@DestinationVariable("roomId") String roomId) throws Exception {
        return "Nothing";
    }

    @MessageMapping("/movement/{roomId}")
    @SendTo("/topic/room-movement-{roomId}")
    public Player handleMoveEvent(Player player, @DestinationVariable("roomId") String roomId) throws Exception {
        return player;
    }
    
    @MessageMapping("/walls-{roomId}")
    @SendTo("/topic/walls-{roomId}")
    public Wall handleWall(Wall wall, @DestinationVariable("roomId") String roomId) throws Exception {
        return wall;
    }
    
    @MessageMapping("/bullet/{roomId}")
    @SendTo("/topic/bullet-{roomId}")
    public Bullet handleShoot(Bullet shoot, @DestinationVariable("roomId") String roomId) throws Exception {
        System.out.println("El servidor recibio un disparo: " + shoot.getId());
        return shoot;
    }

    @MessageMapping("/maravilla/{roomId}")
    @SendTo("/topic/maravilla-{roomId}")
    public Maravilla handleMaravilla(Maravilla maravilla, @DestinationVariable("roomId") String roomId) throws Exception{
        return maravilla;
    }


    
    @MessageMapping("/kill-{roomId}")
    @SendTo("/topic/kill-{roomId}")
    public Kill handleKill(Kill kill, @DestinationVariable("roomId") String roomId) throws Exception {        
        return kill;
    }
    
    @MessageMapping("/time-{roomId}")
    @SendTo("/topic/time-{roomId}")
    public Time handleTime(Time time, @DestinationVariable("roomId") String roomId) throws Exception {        
        return time;

    }
}
