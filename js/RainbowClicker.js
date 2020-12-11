


var rainbowCounter = 0;
var rainbowGeneratorCounter = 0;
var essenceCounter = [0,0,0,0,0,0,0];
var generatorCounter = [0,0,0,0,0,0,0];
var allGeneratorCounter = 0;

const colorIndex =
["red",
 "orange",
 "yellow",
 "green",
 "blue",
 "indigo",
 "purple"];

function singleEssenceMakeButtonClick(index)
{
	essenceCounter[index]++;
}

function singleGeneratorMakeButtonClick(index)
{
	if(essenceCounter[index] >= 10)
	{
		essenceCounter[index] -= 10;
		generatorCounter[index]++;
	}
}

function allGeneratorMakeButtonClick(index)
{
	rainbowCounter--;
	allGeneratorCounter++;
}

// 虹購入
// 全部のエッセンスが存在するか確認して購入する
function singleRainbowMakeButtonClick(count) {
	var value = count;
	for(var index=0; index < 7; index++)
	{
		if(essenceCounter[index] < count && value > essenceCounter[index])
		{
			value = essenceCounter[index];
		}
	}

	rainbowCounter += value;
	for(var index=0; index < 7; index++)
	{
		essenceCounter[index] -= value;
	}
}

// ゲーム更新関数
function update()
{
	// オート加算

	// 絵の具カウンタ反映
	var plusCount = 0;
	for(index = 0; index < 7; index++)
	{
		essenceCounter[index] += (generatorCounter[index] + allGeneratorCounter) / 200;

		document.getElementById(colorIndex[index] + "EssenceCounter").innerHTML = "" + essenceCounter[index].toFixed(2);
		if(essenceCounter[index] >= 1)
		{
			plusCount++;
		}

		document.getElementById(colorIndex[index] + "GeneratorButton").disabled = (essenceCounter[index] < 10);

		// ジェネレーターの数値反映
		document.getElementById(colorIndex[index] + "GeneratorCounter").innerHTML = "" + generatorCounter[index].toFixed(2);
	}

	// 虹購入ボタンの可否更新
	document.getElementById("rainbowMakeButton").disabled = (plusCount != 7);

	// 虹のカウンタ反映
	document.getElementById("rainbowCounter").innerHTML = "" + rainbowCounter.toFixed(2);

	if(rainbowCounter > 0)
	{
		document.getElementById("allGeneratorButton").disabled = false;
	}
	else {
		document.getElementById("allGeneratorButton").disabled = true;
	}
	
	// ジェネレーターの数値反映
	document.getElementById("allGeneratorCounter").innerHTML = "" + allGeneratorCounter.toFixed(2);
}

// ゲームスタート関数
function startApp()
{
	//TODO データ読み込み
	
	//更新開始(setIntervalはID指定で止めない限り永遠に間隔を守って繰り返されるので、)
	setInterval(update,50);
}