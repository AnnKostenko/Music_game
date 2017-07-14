var btnList = document.querySelectorAll(".element"), musicVar = "", btn = "", btnListLen = btnList.length, recordBool = false, recordAr = [], time0 = 0, inColor = "";
window.addEventListener("keypress", function (event) {
	switch (event.keyCode) {
	case 81:
		musicVar = '../Sound/guitar_A2_very-long_forte_normal.mp3';
		btn = "q";
		bgColor("lightpink");
		break;
	case 87:
		musicVar = 'Sound/guitar_A3_very-long_forte_harmonics.mp3';
		btn = "w";
		bgColor("whitesmoke");
		break;
	case 69:
		musicVar = 'Sound/guitar_A3_very-long_piano_normal.mp3';
		btn = "e";
		bgColor("darkviolet");
		break;
	case 82:
		musicVar = 'Sound/guitar_A4_very-long_forte_normal.mp3';
		btn = "r";
		bgColor("red");
		break;
	case 84:
		musicVar = 'Sound/guitar_A4_very-long_piano_normal.mp3';
		btn = "t";
		bgColor("tomato");
		break;
	case 89:
		musicVar = 'Sound/guitar_As2_very-long_forte_normal.mp3';
		btn = "y";
		bgColor("yellow");
		break;
	case 85:
		musicVar = 'Sound/guitar_As3_very-long_forte_normal.mp3';
		btn = "u";
		bgColor("teal");
		break;
	case 73:
		musicVar = 'Sound/guitar_As3_very-long_piano_normal.mp3';
		btn = "i";
		bgColor("oldlace");
		break;
	case 79:
		musicVar = 'Sound/guitar_B2_very-long_forte_normal.mp3';
		btn = "o";
		bgColor("orangered");
		break;
	case 80:
		musicVar = 'Sound/guitar_B3_very-long_forte_normal.mp3';
		btn = "p";
		bgColor("purple");
		break;
	case 65:
		musicVar = 'Sound/guitar_B4_very-long_forte_normal.mp3';
		btn = "a";
		bgColor("aqua");
		break;
	case 83:
		musicVar = 'Sound/guitar_C3_very-long_forte_normal.mp3';
		btn = "s";
		bgColor("slateblue");
		break;
	case 68:
		musicVar = 'Sound/guitar_C4_very-long_forte_normal.mp3';
		btn = "d";
		bgColor("darkmagenta");
		break;
	case 70:
		musicVar = 'Sound/guitar_C6_very-long_piano_normal.mp3';
		btn = "f";
		bgColor("lightsalmon");
		break;
	case 71:
		musicVar = 'Sound/guitar_Cs3_very-long_forte_normal.mp3';
		btn = "g";
		bgColor("green");
		break;
	case 72:
		musicVar = 'Sound/guitar_Cs4_very-long_forte_normal.mp3';
		btn = "h";
		bgColor("hotpink");
		break;
	case 74:
		musicVar = 'Sound/guitar_D4_very-long_forte_normal.mp3';
		btn = "j";
		bgColor("lightgreen");
		break;
	case 75:
		musicVar = 'Sound/guitar_D5_very-long_forte_harmonics.mp3';
		btn = "k";
		bgColor("khaki");
		break;
	case 76:
		musicVar = 'Sound/guitar_Ds3_very-long_forte_normal.mp3';
		btn = "l";
		bgColor("lavender");
		break;
	case 90:
		musicVar = 'Sound/guitar_Ds4_very-long_forte_normal.mp3';
		btn = "z";
		bgColor("orchid");
		break;
	case 88:
		musicVar = 'Sound/guitar_Ds5_very-long_forte_normal.mp3';
		btn = "x";
		bgColor("dodgerblue");
		break;
	case 67:
		musicVar = 'Sound/guitar_E5_very-long_forte_harmonics.mp3';
		btn = "c";
		bgColor("crimson");
		break;
	case 86:
		musicVar = 'Sound/guitar_F4_very-long_forte_normal.mp3';
		btn = "v";
		bgColor("olivedrab");
		break;
	case 66:
		musicVar = 'Sound/guitar_Fs4_very-long_piano_normal.mp3';
		btn = "b";
		bgColor("gold");
		break;
	case 78:
		musicVar = 'Sound/guitar_Gs2_very-long_forte_normal.mp3';
		btn = "n";
		bgColor("sandybrown");
		break;
	case 77:
		musicVar = 'Sound/guitar_Gs4_very-long_forte_normal.mp3';
		btn = "m";
		bgColor("lightsalmon");
		break;
	default:
		{
			musicVar = false;
			alert("Такой клавиши нет. Попробуйте ещё раз, пожалуйста!");
		}
	}
	Play__Highlight(musicVar, btn, inColor);
});

function Play__Highlight(musicVar, elemNew, inCol) {
	if (recordBool) {
		var mus = {}, s = 0;
		mus.url = musicVar;
		mus.btn = elemNew;
		s = new Date();
		mus.timeInt = s.getTime() - time0;
		recordAr.push(mus);
	}
	var musicPlay = new Audio(musicVar);
	musicPlay.play();
	var i = 0;
	for (; i < btnListLen; i++) {
		btnList[i].style.boxShadow = "5px 5px 3px transparent";
	}
	var btn777 = document.getElementById(elemNew);
	btn777.style.boxShadow = "5px 5px 3px grey";
}

function bgColor(inColor) {
	document.body.style.backgroundColor = inColor;
}
document.getElementById("startBtn").addEventListener("click", function () {
	recordBool = true;
	recordAr.length = 0;
	var s2 = new Date();
	time0 = s2.getTime();
});
document.getElementById("stopBtn").addEventListener("click", function () {
	localStorage.recordAr = JSON.stringify(recordAr);
	recordBool = false;
	document.body.classList.add("bgImg");
});
document.getElementById("playBtn").addEventListener("click", function () {
	var i = 0, lenAr = recordAr.length;
	recordAr = localStorage.recordAr ? JSON.parse(localStorage.recordAr) : [];
	for (; i < lenAr; i++) {
		setTimeout(timer, recordAr[i].timeInt, i);
	}
	document.body.classList.add("bgImg");
	console.log(localStorage.recordAr);
});

function timer(i) {
	Play__Highlight(recordAr[i].url, recordAr[i].btn);
}
