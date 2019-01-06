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

	pic17= new Image(66,25); 
	pic17.src="upbuttonon.png"; 

	pic18= new Image(66,26); 
	pic18.src="downbuttonon.png"; 

	pic19= new Image(16,37); 
	pic19.src="sub16.png"; 

	pic20= new Image(16,37); 
	pic20.src="sub10.png"; 

	pic21= new Image(16,37); 
	pic21.src="sub8.png"; 

	pic22= new Image(16,37); 
	pic22.src="sub4.png"; 

	pic23= new Image(16,37); 
	pic23.src="sub2.png"; 

	pic24= new Image(6,37); 
	pic24.src="comma.png"; 

	pic25= new Image(580,16); 
	pic25.src="powers16.png"; 

	pic26= new Image(580,16); 
	pic26.src="powers10.png"; 

	pic27= new Image(580,16); 
	pic27.src="powers8.png"; 

	pic28= new Image(580,16); 
	pic28.src="powers4.png"; 

	pic29= new Image(580,16); 
	pic29.src="powers2.png"; 

	pic30= new Image(580,16); 
	pic30.src="values2.png"; 

	pic31= new Image(580,16); 
	pic31.src="values4.png"; 

	pic32= new Image(580,16); 
	pic32.src="values8.png"; 

	pic33= new Image(580,16); 
	pic33.src="values10.png"; 

	pic34= new Image(580,16); 
	pic34.src="values16.png"; 

	pic35= new Image(90,347); 
	pic35.src="base16.png"; 

	pic35= new Image(90,347); 
	pic35.src="base10.png"; 

	pic35= new Image(90,347); 
	pic35.src="base8.png"; 

	pic35= new Image(90,347); 
	pic35.src="base4.png"; 

	pic35= new Image(90,347); 
	pic35.src="base2.png"; 
}

dojo.require("dojo.dnd.Mover");
dojo.require("dojo.dnd.Moveable");
dojo.require("dojo.dnd.move");
var m1;
var initDND = function(){
	m1 = new dojo.dnd.Moveable("abacus", {handle: "abacushandle"});
	dojo.subscribe("/dnd/move/start", function(mover){
	console.debug("Start move", mover);
	});
	dojo.subscribe("/dnd/move/stop", function(mover){
	console.debug("Stop move", mover);
	});
	dojo.connect(m1, "onMoveStart", function(mover){
	console.debug("Start moving m1", mover);
	});
	dojo.connect(m1, "onMoveStop", function(mover){
	console.debug("Stop moving m1", mover);
	});
};
dojo.addOnLoad(initDND);

var m2;
var initDND2 = function(){
	m2 = new dojo.dnd.Moveable("viewer", {handle: "viewerhandle"});
	dojo.subscribe("/dnd/move/start", function(mover){
	console.debug("Start move", mover);
	});
	dojo.subscribe("/dnd/move/stop", function(mover){
	console.debug("Stop move", mover);
	});
	dojo.connect(m2, "onMoveStart", function(mover){
	console.debug("Start moving m2", mover);
	});
	dojo.connect(m2, "onMoveStop", function(mover){
	console.debug("Stop moving m2", mover);
	});
};
dojo.addOnLoad(initDND2);

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

function chooseMovie()
{
	numMovie = document.getElementById('movieList').value;

	if (numMovie != 0)
	{
		return playVideo("selectDemo"+numMovie,"videoPlayback")
	}
	else
	{
		document.getElementById("videoPlayback").innerHTML=""; return false
	}
	return true;
}

function playVideo(sourceId, targetId) {
   if (typeof(sourceId)=='string') {sourceId=document.getElementById(sourceId);}
   if (typeof(targetId)=='string') {targetId=document.getElementById(targetId);}
   targetId.innerHTML=sourceId.innerHTML;
   return false;
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