
var rainbowCounter = 0;
var rowCounter = [0,0,0,0,0,0,0];

const tubeBase = 
["redTubeBase",
 "orangeTubeBase",
 "yellowTubeBase",
 "greenTubeBase",
 "blueTubeBase",
 "indigoTubeBase",
 "purpleTubeBase"];

const tubeCounter = 
["redTubeCounter",
 "orangeTubeCounter",
 "yellowTubeCounter",
 "greenTubeCounter",
 "blueTubeCounter",
 "indigoTubeCounter",
 "purpleTubeCounter"];

function singleRainbowMakeButtonClick(index) {
	var result = false;
	for(var index=0; index < 7; index++)
	{
		if(rowCounter[index] < 1)
		{
			this.disabled = true;
			return;
		}
	}
	rainbowCounter++;
	for(var index=0; index < 7; index++)
	{
		rowCounter[index]--;
	}
}


function singleColorMakeButtonClick(index) {
	rowCounter[index]++;
}

function update()
{
	// オート加算

	// 絵の具カウンタ反映
	var element;
	var plusCount = 0;
	for(index = 0; index < 7; index++)
	{
		element = document.getElementById(tubeCounter[index]);
		element.innerHTML = "" + rowCounter[index];
		if(rowCounter[index] > 0)
		{
			plusCount++;
		}
	}

	// 虹購入ボタンの可否更新
	element = document.getElementById("rainbowMakeButton");
	element.disabled = (plusCount != 7);

	// 虹のカウンタ反映
	element = document.getElementById("rainbowCounter");
	element.innerHTML = "" + rainbowCounter;


	setInterval(update,100);
}

function startApp()
{
	update();
}