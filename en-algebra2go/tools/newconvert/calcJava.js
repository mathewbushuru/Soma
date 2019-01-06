<!--

var the_timeout;
var currentPosition = new Array(0,0,0,0,0,0,0,0);
var numSpace = 20;
var vOffset = 11;
var numBase = 10;
var numDigits = 6;
var rate = 4;
var numMovie = 0;
var maxDigits = 8;

if (document.images)
{
	pic0= new Image(26,37);
	pic0.src="digit0.png";

	pic1= new Image(26,37); 
	pic1.src="digit1.png"; 

	pic2= new Image(26,37); 
	pic2.src="digit2.png"; 

	pic3= new Image(26,37); 
	pic3.src="digit3.png"; 

	pic4= new Image(26,37); 
	pic4.src="digit4.png"; 

	pic5= new Image(26,37); 
	pic5.src="digit5.png";
  
	pic6= new Image(26,37); 
	pic6.src="digit6.png"; 

	pic7= new Image(26,37); 
	pic7.src="digit7.png"; 

	pic8= new Image(26,37); 
	pic8.src="digit8.png"; 

	pic9= new Image(26,37); 
	pic9.src="digit9.png"; 

	pic10= new Image(26,37); 
	pic10.src="digit10.png"; 

	pic11= new Image(26,37); 
	pic11.src="digit11.png"; 

	pic12= new Image(26,37); 
	pic12.src="digit12.png"; 

	pic13= new Image(26,37); 
	pic13.src="digit13.png"; 

	pic14= new Image(26,37); 
	pic14.src="digit14.png"; 

	pic15= new Image(26,37); 
	pic15.src="digit15.png"; 

	pic16= new Image(26,37); 
	pic16.src="digit16.png"; 

	pic17= new Image(6,37); 
	pic17.src="comma.png"; 

}

dojo.require("dojo.dnd.Mover");
dojo.require("dojo.dnd.Moveable");
dojo.require("dojo.dnd.move");
var m3;
var initDND3 = function(){
	m3 = new dojo.dnd.Moveable("calculator", {handle: "calchandle"});
	dojo.subscribe("/dnd/move/start", function(mover){
	console.debug("Start move", mover);
	});
	dojo.subscribe("/dnd/move/stop", function(mover){
	console.debug("Stop move", mover);
	});
	dojo.connect(m3, "onMoveStart", function(mover){
	console.debug("Start moving m1", mover);
	});
	dojo.connect(m3, "onMoveStop", function(mover){
	console.debug("Stop moving m1", mover);
	});
};
dojo.addOnLoad(initDND3);





function updateDigits()
{
	var firstNonZero = maxDigits-1;
	
	while ((currentPosition[firstNonZero] == 0) && (firstNonZero > 0))
	{
		document.getElementById('display'+firstNonZero).style.background="url(digit16.png)";
		firstNonZero--;
	}
	if (firstNonZero > 2)
	{
		document.getElementById('firstcomma').style.background="url(comma.png)";
	}
	else
	{
		document.getElementById('firstcomma').style.background="url(blankcomma.png)";
	}
	if (firstNonZero > 5)
	{
		document.getElementById('secondcomma').style.background="url(comma.png)";
	}
	else
	{
		document.getElementById('secondcomma').style.background="url(blankcomma.png)";
	}
	for (var i=firstNonZero;i>0;i--)
		{
			document.getElementById('display'+i).style.background="url(digit"+currentPosition[i]+".png)";
		}
	document.getElementById('display0').style.background="url(digit"+currentPosition[0]+".png)";
	
	return true;
}

function updateDigitsUp()
{
	var firstNonZero = maxDigits-1;
	
	while ((currentPosition[firstNonZero] == 0) && (firstNonZero > 0))
	{
		firstNonZero--;
	}
	if (firstNonZero > 2)
	{
		document.getElementById('firstcomma').style.background="url(comma.png)";
	}
	if (firstNonZero > 5)
	{
		document.getElementById('secondcomma').style.background="url(comma.png)";
	}
	for (var i=firstNonZero;i>0;i--)
		{
			document.getElementById('display'+i).style.background="url(digit"+currentPosition[i]+".png)";
		}
	document.getElementById('display0').style.background="url(digit"+currentPosition[0]+".png)";
	
	return true;
}

function upOff(placeValue)
{
	document.getElementById('upButton'+placeValue).style.background="url(upbuttonoff.png)";

	return true;
}

function downOff(placeValue)
{
	document.getElementById('downButton'+placeValue).style.background="url(downbuttonoff.png)";

	return true;
}

function setBottom(the_style,new_bottom)
{
	if (document.layers) 
	{
		the_style.bottom = new_bottom;
	}
	else 
	{  
		the_style.bottom = new_bottom + "px";
	}
	return true;
}

function startUp(placeValue)
{

	document.getElementById('upButton'+placeValue).style.background="url(upbuttonon.png)";

	var the_style = getStyleObject("disk" + placeValue);
	
	if (the_style)
	{
		var smallFlag = false;
		for (var i=placeValue; i<numDigits; i++)
		{
			if (currentPosition[i] < numBase - 1)
			{
				smallFlag = true;
			}
		}
		if (smallFlag)
		{
			currentPosition[placeValue]++;
			if (currentPosition[placeValue] == numBase)
			{
				currentPosition[placeValue] = 0;
				updateDigits();
				the_timeout = setTimeout('startUp2('+(placeValue + 1)+');',500);
				the_timeout = setTimeout('carry('+placeValue+');',500);
				document.getElementById('display'+placeValue).style.background="url(digit0.png)";
			}
			else
			{
				moveUp(placeValue);
				updateDigits();
				document.getElementById('display'+placeValue).style.background="url(digit"+currentPosition[placeValue]+".png)";
			}
		}
	}
	the_timeout = setTimeout('upOff('+placeValue+');',100);
	return true;
}

function moveUp(placeValue)
{
	var the_style = getStyleObject("disk"+placeValue);

	if (the_style)
	{
		var current_bottom = parseInt(the_style.bottom);
		var new_bottom = current_bottom + rate;
		var lastPosition = numSpace*currentPosition[placeValue] + vOffset;

		setBottom(the_style,new_bottom);
   
		if (new_bottom < lastPosition)
		{
			the_timeout = setTimeout('moveUp('+placeValue+');',10);
		}
		else
		{
			setBottom(the_style,lastPosition);
		}
	}
	return true;
}

function startUp2(placeValue)
{

	var the_style = getStyleObject("disk" + placeValue);
	
	if (the_style)
	{
		var smallFlag = false;
		for (var i=placeValue; i<numDigits; i++)
		{
			if (currentPosition[i] < numBase - 1)
			{
				smallFlag = true;
			}
		}
		if (smallFlag)
		{
			currentPosition[placeValue]++;
			if (currentPosition[placeValue] == numBase)
			{
				currentPosition[placeValue] = 0;
				updateDigitsUp();
				the_timeout = setTimeout('startUp2('+(placeValue + 1)+');',500);
				the_timeout = setTimeout('carry('+placeValue+');',500);
				document.getElementById('display'+placeValue).style.background="url(digit0.png)";
			}
			else
			{
				moveUp(placeValue);
				updateDigitsUp();
				document.getElementById('display'+placeValue).style.background="url(digit"+currentPosition[placeValue]+".png)";
			}
		}
	}
	the_timeout = setTimeout('upOff('+placeValue+');',100);
	return true;
}

function carry(placeValue)
{
	var the_style = getStyleObject("disk" + placeValue);

	if (the_style)
	{
		var current_bottom = parseInt(the_style.bottom);
		var new_bottom = current_bottom - 15;
		var lastPosition = numSpace*currentPosition[placeValue] + vOffset;

		setBottom(the_style,new_bottom);

		if (new_bottom > lastPosition)
		{
			the_timeout = setTimeout('carry('+placeValue+');',10);
		}
		else
		{
			setBottom(the_style,lastPosition);
		}
	}
	return true;
}

function startDown(placeValue)
{
	document.getElementById('downButton'+placeValue).style.background="url(downbuttonon.png)";

	var the_style = getStyleObject("disk" + placeValue);
	
	if (the_style)
	{
		if (currentPosition[placeValue] > 0)
		{
			currentPosition[placeValue]--;
			moveDown(placeValue);
			updateDigits();
		}
		else
		{
			var smallFlag = false;
			for (var i=placeValue; i<numDigits; i++)
			{
				if (currentPosition[i] > 0)
				{
					smallFlag = true;
				}
			}
			
			if (smallFlag)
			{
				var firstValue = placeValue;
				while (currentPosition[firstValue] == 0)
				{
					firstValue++;
				}
				currentPosition[firstValue]--;
				moveDown(firstValue);
				newBorrow(firstValue,placeValue);
			}
		}
	}
	the_timeout = setTimeout('downOff('+placeValue+');',100);
	updateDigits();
	return true;
}

function moveDown(placeValue,stepSize)
{
	var the_style = getStyleObject("disk"+placeValue);

	if (the_style)
	{
		var current_bottom = parseInt(the_style.bottom);
		var new_bottom = current_bottom - rate;
		var lastPosition = numSpace*currentPosition[placeValue] + vOffset;

		setBottom(the_style,new_bottom);

		if (new_bottom > lastPosition)
		{
			the_timeout = setTimeout('moveDown('+placeValue+');',10);
		}
		else
		{
			setBottom(the_style,lastPosition);
		}
	}
	return true;
}

function newBorrow(firstValue,placeValue)
{

	firstValue--;
	
	if (firstValue >= placeValue)
	{
		borrow(firstValue);
	}
	
	if (firstValue >= placeValue)
	{
		the_timeout = setTimeout('newBorrow('+firstValue+','+placeValue+');',500);
	}
	updateDigits();
	return true;
}

function borrow(placeValue)
{
	var the_style = getStyleObject("disk" + placeValue);

	if (the_style)
	{
		currentPosition[placeValue] = numBase-1;
		var current_bottom = parseInt(the_style.bottom);
		var new_bottom = current_bottom + 15;
		var lastPosition = numSpace*currentPosition[placeValue] + vOffset;

		setBottom(the_style,new_bottom);
		
		if (new_bottom < lastPosition)
		{
			the_timeout = setTimeout('borrow('+placeValue+');',10);
		}
		else
		{
			setBottom(the_style,lastPosition);
		}
	}
	return true;
}

function getStyleObject(objectId) {
	if(document.getElementById && document.getElementById(objectId)) 
	{
	return document.getElementById(objectId).style;
	} 
	else if (document.all && document.all(objectId)) 
	{
	return document.all(objectId).style;
	} 
	else if (document.layers && document.layers[objectId]) 
	{
	return document.layers[objectId];
	} 
	else 
	{
	return false;
	}
}

function chooseBase()
{
	var maxHeight=0;
	
	for (var i=0; i<maxDigits; i++)
	{
		if (currentPosition[i] > maxHeight)
		{
			maxHeight = currentPosition[i];
		}
		currentPosition[i]=0;
		moveDown(i);
	}
	updateDigits();
	the_timeout = setTimeout('changeBase();',(90*maxHeight+90));

	return true;
}

function changeBase()
{
	numBase = document.getElementById('baseList').value;
	
	document.getElementById('sub').style.background="url(sub"+numBase+".png)";
	document.getElementById('powers').style.background="url(powers"+numBase+".png) top right no-repeat";
	document.getElementById('values').style.background="url(values"+numBase+".png) top right no-repeat";

	var baseHeight = 20*numBase+17;
	if (numBase <= 10)
	{
		baseHeight=217;
	}
	document.getElementById('diskwrapper').style.background="url(base"+numBase+".png) bottom left repeat-x";
	document.getElementById('diskwrapper').style.height=baseHeight+"px";

	return true;
}

function chooseDigits()
{
	var maxHeight=0;
	
	for (var i=0; i<maxDigits; i++)
	{
		if (currentPosition[i] > maxHeight)
		{
			maxHeight = currentPosition[i];
		}
		currentPosition[i]=0;
		moveDown(i);
	}
	updateDigits();	
	the_timeout = setTimeout('changeDigits();',(90*maxHeight+90));

	return true;
}

function changeDigits()
{
	numDigits = document.getElementById('digitsList').value;
	
	var wrapperLength=90*numDigits;
	
	document.getElementById('controlswrapper').style.width=(40+wrapperLength)+"px";
	document.getElementById('powers').style.width=wrapperLength+"px";
	document.getElementById('values').style.width=wrapperLength+"px";
	document.getElementById('diskwrapper').style.width=wrapperLength+"px";
	document.getElementById('upbuttonwrapper').style.width=wrapperLength+"px";
	document.getElementById('downbuttonwrapper').style.width=wrapperLength+"px";

	for (i=0;i<maxDigits;i++)
	{
		if (i < numDigits)
		{
			document.getElementById('disk'+i).style.display="block";
			document.getElementById('upButton'+i).style.display="block";
			document.getElementById('downButton'+i).style.display="block";
		}
		else
		{
			document.getElementById('disk'+i).style.display="none";
			document.getElementById('upButton'+i).style.display="none";
			document.getElementById('downButton'+i).style.display="none";
		}
	}
	return true;
}

function resetDisks()
{
	for (var i=0; i<maxDigits; i++)
	{
		currentPosition[i]=0;
		moveDown(i);
	}
	updateDigits();
	return true;
}

-->