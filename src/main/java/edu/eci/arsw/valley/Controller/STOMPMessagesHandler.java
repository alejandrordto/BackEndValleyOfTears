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
import edu.eci.arsw.valley.Model.Player;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
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

}
