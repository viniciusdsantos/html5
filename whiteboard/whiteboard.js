var Whiteboard = {}; //Main Class

Whiteboard.Element = new function(){ //Class Element
	this.canvas 	= "whiteboard"; //Set canvas id
}

Whiteboard.Draw = new function() { //Class Draw

	this.obj 		= document.getElementById( Whiteboard.Element.canvas );
	this.context 	= document.getElementById( Whiteboard.Element.canvas ).getContext("2d");	
	
	this.startWhiteboard =  function(){
		Whiteboard.Draw.obj.onmousemove 	= Whiteboard.Draw.setOverEvent;
		Whiteboard.Draw.obj.onmousedown 	= Whiteboard.Draw.activeDraw;
		Whiteboard.Draw.obj.onmouseup 		= Whiteboard.Draw.disableDraw;
		Whiteboard.Draw.obj.onselectstart 	= function () { return false; };
	}
	
	this.setOverEvent = function( e ){
		if(!Whiteboard.Draw.active) return;		
		Whiteboard.Draw.context.beginPath();
		Whiteboard.Draw.context.lineTo( Whiteboard.Draw.x,Whiteboard.Draw.y );
		Whiteboard.Draw.context.lineTo(e.layerX, e.layerY);
		Whiteboard.Draw.context.stroke();
		Whiteboard.Draw.context.closePath();
		Whiteboard.Draw.x = e.layerX;
		Whiteboard.Draw.y = e.layerY;
	}
	
	this.activeDraw = function( e ){
		Whiteboard.Draw.active 	= true;
		Whiteboard.Draw.x 		= e.layerX;
		Whiteboard.Draw.y 		= e.layerY;
	}
	
	this.disableDraw = function(){
		Whiteboard.Draw.active = false;
	}
	
}

Whiteboard.Draw.startWhiteboard();