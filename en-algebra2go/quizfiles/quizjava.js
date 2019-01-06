<!--
function chooseQuiz(newChoice) 
	{	document.getElementById('quiz'+quizNumber).className='hide';	quizNumber = newChoice;	document.getElementById('quiz'+quizNumber).className='showQuiz';	}


function inputGlow(questionNum) 
	{	document.getElementById('answer'+questionNum).className='box';	}


function inputLine(questionNum) 
	{	document.getElementById('answer'+questionNum).className='line';	}


function inputExpGlow(questionNum) 
	{	document.getElementById('answer'+questionNum).className='expbox';	}


function inputExpLine(questionNum) 
	{	document.getElementById('answer'+questionNum).className='expline';	}


function buttonValue(radioObj) 
	{
		if(!radioObj)
			return "";
		var radioLength = radioObj.length;
		if(radioLength == undefined)
			if(radioObj.checked)
				return radioObj.value;
			else
				return "";
		for(var i = 0; i < radioLength; i++) {
			if(radioObj[i].checked) {
				return radioObj[i].value;
			}
		}
		return "";
	}



function checkButtons() 
	{
	var score=0;	var minNumber=numberQ*(quizNumber-1)+1;	var maxNumber=minNumber+numberQ-1;	var summation=0;
	var currentValue="";

	for (var i=minNumber; i<=maxNumber; i++) 
		{
		currentValue = buttonValue(document.getElementById('answer'+i));
		if (currentValue == answerArray[i-1]) 
			{			document.getElementById('right'+i).className='correct';			score++			} 
		else 
			{			document.getElementById('wrong'+i).className='incorrect'			}
		}
	summation=(numberQ+1)*(quizNumber-1)+score+1;	document.getElementById('score'+summation).className='summary';	document.getElementById('checking'+quizNumber).className='hide';	document.getElementById('charliebubble'+quizNumber).className='cbubble';	}



function checkAnswers() 
	{	var score=0;	var minNumber=numberQ*(quizNumber-1)+1;	var maxNumber=minNumber+numberQ-1;	var summation=0;
	
	for (var i=minNumber; i<=maxNumber; i++) 
		{		if (document.getElementById('answer'+i).value.replace(/ /g,'') == answerArray[i-1]) 
			{			document.getElementById('right'+i).className='correct';			score++			} 
		else 
			{			document.getElementById('wrong'+i).className='incorrect'			}
		}
	summation=(numberQ+1)*(quizNumber-1)+score+1;	document.getElementById('score'+summation).className='summary';	document.getElementById('checking'+quizNumber).className='hide';	document.getElementById('charliebubble'+quizNumber).className='cbubble';	}



function printAnswer(n)
	{
	document.write("<p class='feedback'>");	document.write("<span id='right"+n+"' class='hide'>Correct. The answer is <u>"+answerArray[n-1]+"<\/u>.<\/span>");	document.write("<span id='wrong"+n+"' class='hide'>Incorrect. The correct answer is <u>"+answerArray[n-1]+"<\/u>.<\/span>&nbsp;<\/p>");
	}



function printTotals(qNum)
	{
	var i=0

	for (i=1; i<=numberQ; i++)
		{
		document.write("<span id='score"+((qNum-1)*(numberQ+1)+i)+"' class='hide'>");
		document.write("You got "+(i-1)+" correct answer");
		if (i!=2)
		{
			document.write("s");
		}
		document.write(" out of "+numberQ+" questions.<br \/>");
		document.write("Try studying some more, then come back and<br \/>");
		document.write("test yourself with a different problem set.<\/span>");
		}
		document.write("<span id='score"+(qNum)*(numberQ+1)+"' class='hide'>");
		document.write("You got "+numberQ+" correct answers out of "+numberQ+" questions.<br \/>");
		document.write("You are a master mathematician!<br \/>");
		document.write("You are ready to move on to the next topic.<\/span>");
		document.write("<img class='brc' src='..\/..\/quizfiles\/brcorner.png' alt='' \/>");		document.write("<img class='trc' src='..\/..\/quizfiles\/trcorner.png' alt='' \/>");		document.write("<img class='tlc' src='..\/..\/quizfiles\/tlcorner.png' alt='' \/>");		document.write("<img class='blc' src='..\/..\/quizfiles\/blcorner.png' alt='' \/>");		document.write("<img class='charlietalk' src='..\/..\/quizfiles\/charlietalk.png' alt='' \/>");
	}

-->