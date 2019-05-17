window.__require=function t(o,e,i){function n(s,a){if(!e[s]){if(!o[s]){var r=s.split("/");if(r=r[r.length-1],!o[r]){var l="function"==typeof __require&&__require;if(!a&&l)return l(r,!0);if(c)return c(r,!0);throw new Error("Cannot find module '"+s+"'")}}var d=e[s]={exports:{}};o[s][0].call(d.exports,function(t){return n(o[s][1][t]||t)},d,d.exports,t,o,e,i)}return e[s].exports}for(var c="function"==typeof __require&&__require,s=0;s<i.length;s++)n(i[s]);return n}({Bullet:[function(t,o,e){"use strict";cc._RF.push(o,"6dc4akQnvVCdIeaTtY356Tf","Bullet"),cc.Class({extends:cc.Component,properties:{speed:3e3,posX:0,posY:0,direccion:"up"},onCollisionEnter:function(t,o){this.node.destroy()},update:function(t){"down"==this.direccion?(this.node.x+=this.speed*t*Math.cos(90*Math.PI/180),this.node.y+=this.speed*t*Math.sin(270*Math.PI/180)):"up"==this.direccion?(this.node.x+=this.speed*t*Math.cos(270*Math.PI/180),this.node.y+=this.speed*t*Math.sin(90*Math.PI/180)):"left"==this.direccion?(this.node.x+=this.speed*t*Math.cos(180*Math.PI/180),this.node.y+=this.speed*t*Math.sin(0*Math.PI/180)):(this.node.x+=this.speed*t*Math.cos(0*Math.PI/180),this.node.y+=this.speed*t*Math.sin(180*Math.PI/180))}}),cc._RF.pop()},{}],Maravilla:[function(t,o,e){"use strict";cc._RF.push(o,"b7c7f9eEJdE57iGBQiI5bQa","Maravilla");var i=t("./aaaaa");cc.Class({extends:cc.Component,properties:{pos:0,stompClient:null},onLoad:function(){this.room=cc.find("form").getComponent("Menu").room,this.connectAndSubscribe()},onCollisionEnter:function(t,o){this.node.destroy(),"bullet"==t.node.name&&this.stompClient.send("/app/maravilla/"+this.room,{},JSON.stringify({pos:this.pos})),this.node.destroy()},onCollisionExit:function(t){},connectAndSubscribe:function(){var t=this;(0,i.getStompClient)().then(function(o){t.stompClient=o,(0,i.subscribeTopic)(t.stompClient,"/topic/maravilla-"+t.room,function(t){JSON.parse(t.body)})})},start:function(){}}),cc._RF.pop()},{"./aaaaa":"aaaaa"}],Menu:[function(t,o,e){"use strict";var i;cc._RF.push(o,"86d9c6a06BPCobkgcwgeRLT","Menu");var n=t("./aaaaa"),c=t("./Rest");function s(t,o,e){return o in t?Object.defineProperty(t,o,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[o]=e,t}cc.Class({extends:cc.Component,properties:(i={username:null,inputName:{default:null,type:cc.EditBox},inputRoom:{default:null,type:cc.EditBox},sendButton:{default:null,type:cc.Node}},s(i,"username",null),s(i,"room",null),s(i,"id",null),s(i,"xPos",null),s(i,"yPos",null),s(i,"stompClient",null),s(i,"player",{default:null,type:cc.Node}),i),onLoad:function(){cc.game.addPersistRootNode(this.node),this.id=Math.floor(1e7*Math.random()),this.xPos=Math.floor(1e3*Math.random()),this.yPos=Math.floor(600*Math.random())},start:function(){},EditBoxDidEndEditing:function(t){this.username=this.inputName.string},beginOrWait:function(){var t=this,o={onSuccess:function(o){4==o.data.length?t.stompClient.send("/app/start/"+t.room,{},null):cc.director.loadScene("sala",function(){t.node.active=!1})},onFailed:function(t){console.log(t)}};(0,c.getRoomPlayers)(t.room,o)},loadScene:function(){var t=this,o={onSuccess:function(){t.beginOrWait()},onFailed:function(o){alert("Room "+t.room+" game has already started ")}};(0,c.joinRoom)(t.id,t.room,o)},joinThisRoom:function(){var t=this,o={onSuccess:function(){t.loadScene()},onFailed:function(t){console.log(t)}};(0,c.createRoom)(t.room,o)},createOrJoin:function(){var t=this,o={onSuccess:function(o){t.loadScene()},onFailed:function(o){t.joinThisRoom()}};(0,c.getRoomPlayers)(t.room,o)},buttonClicked:function(){var t=this;null==t.username||""==t.username?alert("Please enter a username"):null==t.room||""==t.room?alert("Please enter a room number"):(0,n.getStompClient)().then(function(o){t.stompClient=o,(0,n.subscribeTopic)(t.stompClient,"/topic/room-start-"+t.room,function(o){cc.director.loadScene("game",function(){t.node.active=!1})}),t.createOrJoin()})},setRoom:function(t,o){this.room=o}});cc._RF.pop()},{"./Rest":"Rest","./aaaaa":"aaaaa"}],Muroscontroler:[function(t,o,e){"use strict";cc._RF.push(o,"70ad34J6wJDF45bXxP0Nvsy","Muroscontroler");var i=t("./aaaaa");cc.Class({extends:cc.Component,properties:{loadedwalls1:{default:[],type:[cc.Node]},loadedwalls2:{default:[],type:[cc.Node]},wall1:{default:null,type:cc.Node},wall2:{default:null,type:cc.Node},stompClient:null},connectAndSubscribe:function(){var t=this;(0,i.getStompClient)().then(function(o){t.stompClient=o,(0,i.subscribeTopic)(t.stompClient,"/topic/walls-"+t.room,function(o){var e=JSON.parse(o.body);1==e.tipo?t.loadedwalls1.forEach(function(t){t.id==e.id&&t.destroy()}):t.loadedwalls2.forEach(function(t){t.id==e.id&&t.destroy()})})})},cargarmuros:function(){for(var t=0;t<20;t++){var o=cc.instantiate(this.wall1);if(this.loadedwalls1.push(o),o.id=t,o.cont=t,t<4)switch(o.y=-50,t){case 0:o.x=-450;break;case 1:o.x=-400;break;case 2:o.x=450;break;case 3:o.x=400}else if(t<8)switch(o.y=50,t){case 4:o.x=-450;break;case 5:o.x=-400;break;case 6:o.x=450;break;case 7:o.x=400}else if(t<12)switch(o.x=-50,t){case 8:o.y=-250;break;case 9:o.y=-300;break;case 10:o.y=250;break;case 11:o.y=300}else if(t<16)switch(o.x=50,t){case 12:o.y=-250;break;case 13:o.y=-300;break;case 14:o.y=250;break;case 15:o.y=300}else if(t<18)switch(o.y=0,t){case 16:o.x=-400;break;case 17:o.x=400}else if(t<20)switch(o.x=0,t){case 18:o.y=-250;break;case 19:o.y=250}cc.find("mapa").addChild(o),o.active=!0}var e=0;for(t=0;t<42;t++){switch((o=cc.instantiate(this.wall2)).cont=t,o.id=e,e+=1,o.tipo=2,o.life=5,!0){case t<3:o.y=200,o.x=350+50*t;break;case t<6:o.y=200,o.x=-350-50*(t-3);break;case t<9:o.x=-200,o.y=-200-50*(t-6);break;case t<12:o.x=-200,o.y=200+50*(t-9);break;case t<15:o.x=200,o.y=-200-50*(t-12);break;case t<18:o.x=200,o.y=200+50*(t-15);break;case t<21:o.y=-200,o.x=350+50*(t-18);break;case t<24:o.y=-200,o.x=-350-50*(t-21);break;case t<27:o.x=-100,o.y=50*(t-24)-50;break;case t<30:o.x=100,o.y=50*(t-27)-50;break;case t<35:o.y=-100,o.x=50*(t-30)-100;break;case t<40:o.y=100,o.x=50*(t-35)-100;break;case 40==t:o.y=0,o.x=250;break;case 41==t:o.y=0,o.x=-250}this.loadedwalls2.push(o),cc.find("mapa").addChild(o),o.active=!0}},onLoad:function(){this.room=cc.find("form").getComponent("Menu").room,this.connectAndSubscribe(),this.cargarmuros()}}),cc._RF.pop()},{"./aaaaa":"aaaaa"}],Restcontroller:[function(t,o,e){"use strict";cc._RF.push(o,"2aa4ezHCtpHrI9Au/WWzDQK","Restcontroller"),Object.defineProperty(e,"__esModule",{value:!0}),e.getRoomPlayers=function(t,o){axios.get("/rooms/"+t+"/players").then(function(t){o.onSuccess(t)}).catch(function(t){o.onFailed(t)})},e.joinRoom=function(t,o,e,i,n,c){axios.put("/rooms/"+n+"/players",{id:t,x:o,y:e,pos:i}).then(function(){c.onSuccess()}).catch(function(t){c.onFailed(t)})},e.createRoom=function(t,o){axios.post("/rooms",{id:t}).then(function(){o.onSuccess()}).catch(function(t){o.onFailed(t)})},e.deleteRoom=function(t,o){axios.delete("/rooms/"+t).then(function(){o.onSuccess()}).catch(function(t){o.onFailed(t)})},cc._RF.pop()},{}],Rest:[function(t,o,e){"use strict";cc._RF.push(o,"d12b5/ARFhLhYYpjru87YS4","Rest"),Object.defineProperty(e,"__esModule",{value:!0}),e.getRoomPlayers=function(t,o){axios.get("/rooms/"+t+"/players").then(function(t){o.onSuccess(t)}).catch(function(t){o.onFailed(t)})},e.joinRoom=function(t,o,e){axios.put("/rooms/"+o+"/players",{id:t}).then(function(){e.onSuccess()}).catch(function(t){e.onFailed(t)})},e.createRoom=function(t,o){axios.post("/rooms",{id:t}).then(function(){o.onSuccess()}).catch(function(t){o.onFailed(t)})},e.deleteRoom=function(t,o){axios.delete("/rooms/"+t).then(function(){o.onSuccess()}).catch(function(t){o.onFailed(t)})},cc._RF.pop()},{}],Room:[function(t,o,e){"use strict";cc._RF.push(o,"bf22aqrH/hFi6iG1Go0J7Nu","Room");var i=t("./aaaaa.js"),n=t("./Rest.js");cc.Class({extends:cc.Component,properties:{item:{default:null,type:cc.Node},label:{default:null,type:cc.Label},content:{default:null,type:cc.Node}},onLoad:function(){this.stompClient=null,this.connectAndSubscribe()},start:function(){this.posY=-51,this.roomNumber=null;var t=this;axios.get("/rooms").then(function(o){var e;for(t.roomNumber=o.data,e=0;e<t.roomNumber;e++)t.showRoomItem(e+1)})},buttonClicked:function(){this.roomNumber<7?this.createRoomItem():alert("Maximun room capacity.")},createRoomItem:function(){var t=this,o={onSuccess:function(){console.log("ROOMMMMMMM--"+(t.roomNumber+1)+"--CREATED SUCCESFULLY"),t.stompClient.send("/topic/menu-newroom",{},JSON.stringify({}))},onFailed:function(o){alert("An error has ocurred creating the room "+(t.roomNumber+1)),console.log(o)}};(0,n.createRoom)(this.roomNumber+1,o)},showRoomItem:function(t){var o=cc.instantiate(this.item);o.y+=this.posY,o.getComponent(cc.Label).string="Room #"+t,o.getChildByName("New Button").getComponent(cc.Button).clickEvents[0].customEventData=t,this.content.addChild(o),this.posY-=51},connectAndSubscribe:function(){var t=this;(0,i.getStompClient)().then(function(o){t.stompClient=o,(0,i.subscribeTopic)(t.stompClient,"/topic/menu-newroom",function(o){t.roomNumber+=1,t.showRoomItem(t.roomNumber)})})}}),cc._RF.pop()},{"./Rest.js":"Rest","./aaaaa.js":"aaaaa"}],Stomphandler:[function(t,o,e){"use strict";cc._RF.push(o,"157f4RWZXJL/rU7UUN+m6oT","Stomphandler"),Object.defineProperty(e,"__esModule",{value:!0}),e.getStompClient=function(){return new Promise(function(t){var o=new SockJS("/stompendpoint"),e=Stomp.over(o);e.connect("yqbofqdf","6CMzc5eiNjOdlv9cP9HpqFmHLK3KxUNS",function(o){t(e)},function(t){console.info("error: "+t)},"yqbofqdf")})},e.subscribeTopic=function(t,o,e){i.push(t.subscribe(o,e))},e.getStompClientsSize=function(){return console.log(i),i.length},e.unsubscribeTopic=function(){};var i=[];cc._RF.pop()},{}],Stomphand:[function(t,o,e){"use strict";cc._RF.push(o,"92a4eHj3ExB3Yb+kVOTQ4+q","Stomphand"),Object.defineProperty(e,"__esModule",{value:!0}),e.getStompClient=function(){return new Promise(function(t){var o=new SockJS("/stompendpoint"),e=Stomp.over(o);e.connect("yqbofqdf","6CMzc5eiNjOdlv9cP9HpqFmHLK3KxUNS",function(o){t(e)},function(t){console.info("error: "+t)},"yqbofqdf")})},e.subscribeTopic=function(t,o,e){i.push(t.subscribe(o,e))},e.getStompClientsSize=function(){return console.log(i),i.length},e.unsubscribeTopic=function(){};var i=[];cc._RF.pop()},{}],aaaaa:[function(t,o,e){"use strict";cc._RF.push(o,"05e60rJyDFEk6BPkM/JK1U/","aaaaa"),Object.defineProperty(e,"__esModule",{value:!0}),e.getStompClient=function(){return new Promise(function(t){var o=new SockJS("/stompendpoint"),e=Stomp.over(o);e.connect({},function(o){t(e)},function(t){console.info("error: "+t)})})},e.subscribeTopic=function(t,o,e){i.push(t.subscribe(o,e))},e.getStompClientsSize=function(){return i.length},e.unsubscribeTopic=function(){};var i=[];cc._RF.pop()},{}],pO:[function(t,o,e){"use strict";cc._RF.push(o,"bdded87CDRBx5CxG9lDLONB","pO"),cc.Class({extends:cc.Component,properties:{id:null,directionx:0,directiony:0}}),cc._RF.pop()},{}],tank:[function(t,o,e){"use strict";cc._RF.push(o,"4420dBIaPxE6rlCexOCy3f1","tank");var i=t("./aaaaa"),n=t("./Rest.js");cc.Class({extends:cc.Component,properties:{pos:null,id:null,stompClient:null,racha:0,kills:0,canracha1:!1,canracha2:!1,canracha3:!1,racha1:!1,racha2:!1,racha3:!1,cronometro:!1,jugadores:0,directionx:0,directiony:0,direction:"up",colicion:!1,collisionleft:!1,collisionrigh:!1,collisionup:!1,collisiondown:!1,bullet:{default:null,type:cc.Node},loadedPlayers:{default:[],type:[cc.Node]},player:{default:null,type:cc.Node},enem:{default:null,type:cc.Node}},setRotate:function(t){var o;return"up"==this.direction?"left"==t?(o=cc.rotateBy(0,90),this.rotationx=180,this.rotationy=0):"down"==t?(o=cc.rotateBy(0,180),this.rotationx=-90,this.rotationy=0):(o=cc.rotateBy(0,270),this.rotationx=0,this.rotationy=270):"down"==this.direction?"right"==t?(o=cc.rotateBy(0,90),this.rotationx=0,this.rotationy=0):"up"==t?(o=cc.rotateBy(0,180),this.rotationx=0,this.rotationy=-90):(o=cc.rotateBy(0,270),this.rotationx=0,this.rotationy=270):"left"==this.direction?"down"==t?(o=cc.rotateBy(0,90),this.rotationx=0,this.rotationy=90):"right"==t?(o=cc.rotateBy(0,180),this.rotationx=0,this.rotationy=180):(o=cc.rotateBy(0,270),this.rotationx=0,this.rotationy=270):"up"==t?(o=cc.rotateBy(0,90),this.rotationx=0,this.rotationy=90):"left"==t?(o=cc.rotateBy(0,180),this.rotationx=0,this.rotationy=180):(o=cc.rotateBy(0,270),this.rotationx=0,this.rotationy=270),o},setRotateEne:function(t,o){return"up"==t.direction?"left"==o?cc.rotateBy(0,90):"down"==o?cc.rotateBy(0,180):cc.rotateBy(0,270):"down"==t.direction?"right"==o?cc.rotateBy(0,90):"up"==o?cc.rotateBy(0,180):cc.rotateBy(0,270):"left"==t.direction?"down"==o?cc.rotateBy(0,90):"right"==o?cc.rotateBy(0,180):cc.rotateBy(0,270):"up"==o?cc.rotateBy(0,90):"left"==o?cc.rotateBy(0,180):cc.rotateBy(0,270)},onKeyEvent:function(t){var o=this.direction,e=!0,i=new Date;if(this.cronometro)(i.getTime()-this.actualTime.getTime())/1e3>4&&(this.cronometro=!1);else{switch(t.keyCode){case cc.macro.KEY.a:this.direction="a",this.movimientoEnemy("left");break;case cc.macro.KEY.left:this.directionx-50>-451&&!this.collisionleft&&(this.directionx-=50,this.direction="left",this.node.runAction(cc.moveBy(.4,-50,0)),this.movimientoEnemy("left"));break;case cc.macro.KEY.d:this.direction="right",this.movimientoEnemy("d");break;case cc.macro.KEY.right:this.directionx+50<451&&!this.collisionrigh&&(this.directionx+=50,this.direction="right",this.node.runAction(cc.moveBy(.4,50,0)),this.movimientoEnemy("right"));break;case cc.macro.KEY.w:this.direction="up",this.movimientoEnemy("w");break;case cc.macro.KEY.up:this.directiony+50<301&&!this.collisionup&&(this.directiony+=50,this.direction="up",this.node.runAction(cc.moveBy(.4,0,50)),this.movimientoEnemy("up"));break;case cc.macro.KEY.s:this.direction="down",this.movimientoEnemy("s");break;case cc.macro.KEY.down:this.directiony-50>-301&&!this.collisiondown&&(this.directiony-=50,this.direction="down",this.node.runAction(cc.moveBy(.4,0,-50)),this.movimientoEnemy("down"));break;case cc.macro.KEY.space:var n=cc.instantiate(this.bullet);n.getComponent("Bullet").direccion=this.direction,n.x=this.node.position.x,n.y=this.node.position.y,n.id=this.id,this.stompClient.send("/app/bullet/"+this.room,{},JSON.stringify({id:n.id,posX:this.node.position.x,posY:this.node.position.y,direccion:this.direction})),cc.find("mapa").addChild(n),n.active=!0;break;case cc.macro.KEY.shift:this.canracha1&&(console.log("---------------------------------------------"),this.racha1=!0);break;case cc.macro.KEY.q:this.canracha2&&(this.racha2=!0,this.stompClient.send("/app/time-"+this.room,{},JSON.stringify({id:this.id})));break;case cc.macro.KEY.e:this.canracha3&&(this.racha3=!0);break;default:e=!1}o!=this.direction&&e&&(this.Dir=this.setRotate(o),this.node.runAction(this.setRotate(o)))}},movimientoEnemy:function(t){this.stompClient.send("/app/movement/"+this.room,{},JSON.stringify({id:this.id,tecla:t}))},winnerchicken:function(){alert("you win")},makeShoot:function(t,o){(o=cc.instantiate(this.bullet)).getComponent("Bullet").direccion=t.direccion,o.x=t.posX,o.y=t.posY,o.id=t.id,cc.find("mapa").addChild(o),o.active=!0},onLoad:function(){this.room=cc.find("form").getComponent("Menu").room,this.username=cc.find("form").getComponent("Menu").username,this.id=cc.find("form").getComponent("Menu").id,this.players=null,this.cronometro=!1,this.kills=0,this.racha=0,this.dead=!1,this.connectAndSubscribe(),cc.audioEngine.stopAll(),cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP,this.onKeyEvent,this),cc.director.getCollisionManager().enabled=!0,cc.director.getCollisionManager().enabledDebugDraw=!1,this.rotationx=0,this.rotationy=90,this.loadAllPlayers()},onEnable:function(){cc.director.getCollisionManager().enabled=!0,cc.director.getCollisionManager().enabledDebugDraw=!1},onDisable:function(){cc.director.getCollisionManager().enabled=!1,cc.director.getCollisionManager().enabledDebugDraw=!1},onCollisionEnter:function(t,o){if("bullet"!=t.node.name||this.racha1){if("Wall1"==t.node.name||"Wall3"==t.node.name||"wall2"==t.node.name||"enem"==t.node.name){var e=t.world.aabb,i=(t.world.preAabb.clone(),o.world.aabb);o.world.preAabb.clone();i.center.x-e.center.x<0&&Math.abs(i.center.y-e.center.y)<50&&(this.collisionrigh=!0,t.touchingX=!1,t.touchingY=!1),Math.abs(i.center.y-e.center.y)<50&&i.center.x-e.center.x>0&&(this.collisionleft=!0,t.touchingX=!0,t.touchingY=!1),i.center.y-e.center.y<0&&Math.abs(i.center.x-e.center.x)<50&&(this.collisionup=!0,t.touchingX=!1,t.touchingY=!0),Math.abs(i.center.x-e.center.x)<50&&i.center.y-e.center.y>0&&(this.collisiondown=!0,t.touchingX=!0,t.touchingY=!0)}}else this.dead=!0,this.muerte(this.dead),this.racha=0,this.stompClient.send("/app/kill-"+this.room,{},JSON.stringify({idK:t.node.id,idM:this.id}));this.racha1&&(this.racha1=!1)},onCollisionExit:function(t){t.touchingX&&t.touchingY?(t.touchingX=null,t.touchingY=null,this.collisiondown=!1):!t.touchingX&&t.touchingY?(t.touchingX=null,t.touchingY=null,this.collisionup=!1):t.touchingX&&!t.touchingY?(t.touchingX=null,t.touchingY=null,this.collisionleft=!1):t.touchingX||t.touchingY||(t.touchingX=null,t.touchingY=null,this.collisionrigh=!1)},shooTank:function(){this.MoveBullet=this.setMove(),Bullet.node.runAction(this.MoveBullet)},start:function(){},connectAndSubscribe:function(){var t=this;(0,i.getStompClient)().then(function(o){t.stompClient=o,(0,i.subscribeTopic)(t.stompClient,"/topic/room-movement-"+t.room,function(o){var e=JSON.parse(o.body);t.loadedPlayers.forEach(function(o){e.id==o.id&&o.id!=t.id&&t.moveEnemi(o,e.tecla)})}),(0,i.subscribeTopic)(t.stompClient,"/topic/bullet-"+t.room,function(o){var e=JSON.parse(o.body);t.makeShoot(e,t.bullet)}),(0,i.subscribeTopic)(t.stompClient,"/topic/maravilla-"+t.room,function(o){var e=JSON.parse(o.body);cc.find("mapa");e.pos==t.pos?(alert("perdiste"),t.node.destroy()):t.loadedPlayers.forEach(function(o){console.log(o),o.pos==e.pos&&(t.jugadores-=1,1==t.jugadores&&t.winnerchicken(),o.destroy())})}),(0,i.subscribeTopic)(t.stompClient,"/topic/kill-"+t.room,function(o){var e=JSON.parse(o.body);e.idK==t.id&&(t.kills+=1,t.racha+=1,1==t.racha&&(t.canracha1=!0),2==t.racha&&(t.canracha2=!0),3==t.racha&&(t.canracha3=!0,t.racha=0)),t.loadedPlayers.forEach(function(o){e.idM==o.id&&t.muerteene(o)})}),(0,i.subscribeTopic)(t.stompClient,"/topic/time-"+t.room,function(o){var e=JSON.parse(o.body);console.log("topico    "+e.id),console.log("mio    "+t.id),console.log("prueba   "+(t.id!=e.id)),t.id!=e.id&&(t.actualTime=new Date,t.cronometro=!0)})})},moveEnemi:function(t,o){var e=t.direction;switch(o){case"a":t.direction="left";break;case"left":t.directionx-50>-451&&(t.directionx-=50,t.direction="left",t.runAction(cc.moveBy(.4,-50,0)));break;case"d":t.direction="right";break;case"right":t.directionx+50<451&&(t.directionx+=50,t.direction="right",t.runAction(cc.moveBy(.4,50,0)));break;case"w":t.direction="up";break;case"up":t.directiony+50<301&&(t.directiony+=50,t.direction="up",t.runAction(cc.moveBy(.4,0,50)));break;case"s":t.direction="down";break;case"down":t.directiony-50>-301&&(t.directiony-=50,t.runAction(cc.moveBy(.4,0,-50)),t.direction="down")}e!=t.direction&&(t.Dir=this.setRotateEne(t,e),t.runAction(this.setRotateEne(t,e)))},setstart:function(){this.pos=this.pos,this.loadedPlayers=this.loadedPlayers,0==this.pos?(this.node.x,this.directionx=100,this.node.y,this.directiony=-300):1==this.pos?(this.node.x,this.directionx=-100,this.node.y,this.directiony=300,this.direction="down",this.Dir=this.setRotate("up"),this.node.runAction(this.setRotate("up"))):2==this.pos?(this.node.x,this.directionx=450,this.node.y,this.directiony=100,this.direction="left",this.Dir=this.setRotate("up"),this.node.runAction(this.setRotate("up"))):3==this.pos&&(this.node.x,this.directionx=-450,this.node.y,this.directiony=-100,this.direction="right",this.Dir=this.setRotate("up"),this.node.runAction(this.setRotate("up")))},setstartene:function(t,o){0==o?t.direction="up":1==o?(t.direction="down",t.Dir=this.setRotateEne(t,"up"),t.runAction(this.setRotateEne(t,"up"))):2==o?(t.direction="left",t.Dir=this.setRotateEne(t,"up"),t.runAction(this.setRotateEne(t,"up"))):3==o&&(t.direction="right",t.Dir=this.setRotateEne(t,"up"),t.runAction(this.setRotateEne(t,"up")))},loadAllPlayers:function(){var t=this;this.jugadores=4;var o={onSuccess:function(o){o.data.forEach(function(o){if(o.id!=t.id){var e=cc.instantiate(t.enem);t.loadedPlayers.push(e),e.id=o.id,e.pos=o.pos,0==o.pos&&(e.x=100,e.y=-300,e.directionx=100,e.directiony=-300),1==o.pos&&(e.x=-100,e.y=300,e.directionx=-100,e.directiony=300),2==o.pos&&(e.x=450,e.y=100,e.directionx=450,e.directiony=100),3==o.pos&&(e.x=-450,e.y=-100,e.directionx=-450,e.directiony=-100),0,cc.find("mapa").addChild(e),e.active=!0,t.setstartene(e,o.pos)}else t.pos=o.pos,0==o.pos&&(t.node.x=100,t.node.y=-300),1==o.pos&&(t.node.x=-100,t.node.y=300),2==o.pos&&(t.node.x=450,t.node.y=100),3==o.pos&&(t.node.x=-450,t.node.y=-100)}),t.setstart()},onFailed:function(t){console.log(t)}};(0,n.getRoomPlayers)(t.room,o)},muerte:function(){0==this.pos&&(this.node.x=100,this.node.y=-300,this.direction="up"),1==this.pos&&(this.node.x=-100,this.node.y=300,this.direction="down"),2==this.pos&&(this.node.x=450,this.node.y=100,this.direction="left"),3==this.pos&&(this.node.x=-450,this.node.y=-100,this.direction="right")},muerteene:function(t){0==t.pos&&(t.x=100,t.y=-300,t.direction="up"),1==t.pos&&(t.x=-100,t.y=300,t.direction="down"),2==t.pos&&(t.x=450,t.y=100,t.direction="left"),3==t.pos&&(t.x=-450,t.y=-100,t.direction="rigth")}}),cc._RF.pop()},{"./Rest.js":"Rest","./aaaaa":"aaaaa"}],walls:[function(t,o,e){"use strict";cc._RF.push(o,"68129qznU5I+bpPsoU4OySA","walls");var i=t("./aaaaa");cc.Class({extends:cc.Component,properties:{tipo:0,life:0,stompClient:null},onLoad:function(){this.room=cc.find("form").getComponent("Menu").room},onCollisionEnter:function(t,o){"bullet"==t.node.name&&(this.life>0&&(this.life-=1),1==this.life&&this.connectAndSubscribe(),0==this.life&&(this.stompClient.send("/app/walls-"+this.room,{},JSON.stringify({id:this.node.id,tipo:this.tipo})),this.node.destroy()))},onCollisionExit:function(t){},connectAndSubscribe:function(){var t=this;(0,i.getStompClient)().then(function(o){t.stompClient=o,(0,i.subscribeTopic)(t.stompClient,"/topic/walls-"+t.room,function(t){JSON.parse(t.body)})})}}),cc._RF.pop()},{"./aaaaa":"aaaaa"}],wonderlandController:[function(t,o,e){"use strict";cc._RF.push(o,"d22feaZTQZA0aLEh5+xwTos","wonderlandController");var i=t("./aaaaa");cc.Class({extends:cc.Component,properties:{loadedwonderland:{default:[],type:[cc.Node],stompClient:null},maravilla1:{default:null,type:cc.Node},maravilla2:{default:null,type:cc.Node},maravilla3:{default:null,type:cc.Node},maravilla4:{default:null,type:cc.Node}},onLoad:function(){this.room=cc.find("form").getComponent("Menu").room,this.connectAndSubscribe(),this.cargamaravillas()},connectAndSubscribe:function(){var t=this;(0,i.getStompClient)().then(function(o){t.stompClient=o,(0,i.subscribeTopic)(t.stompClient,"/topic/maravilla-"+t.room,function(o){var e=JSON.parse(o.body);t.loadedwonderland.forEach(function(t){t.pos==e.pos&&t.destroy()})})})},cargamaravillas:function(){console.log("entra");var t=cc.instantiate(this.maravilla1),o=cc.instantiate(this.maravilla2),e=cc.instantiate(this.maravilla3),i=cc.instantiate(this.maravilla4);this.loadedwonderland.push(t),this.loadedwonderland.push(o),this.loadedwonderland.push(e),this.loadedwonderland.push(i);var n=cc.find("mapa");n.addChild(t),n.addChild(o),n.addChild(e),n.addChild(i),t.active=!0,o.active=!0,e.active=!0,i.active=!0},start:function(){}}),cc._RF.pop()},{"./aaaaa":"aaaaa"}]},{},["Bullet","Maravilla","Menu","Muroscontroler","Rest","Restcontroller","Room","Stomphand","Stomphandler","aaaaa","pO","tank","walls","wonderlandController"]);