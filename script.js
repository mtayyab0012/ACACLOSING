
var _0x4a2b=["Greeting","Pitch 1","Hang on","Real Personn","Is that ok","Just stay on line","No","Ok No Problem","Qualify New Plan","Yes","Real Person","Thats Great","Yeah Sure","Already have Agent","Can you hear mee","No Cost","Not asking 4 Money","Long Quee","Long que 2","Hello 1","Can u hear me","R you there","Can u repeat","Medicare Short","Marketplace Short","Stay on the line","Reconnect","Pitch 2","Age","Eliminate calls","Medicare Medicaid","Thank4asking","How many calls you get","Transfer 1","Transfer 2"];
var _s={},_ca=null,_cs=null;
(function(_l){_l.forEach(function(_n){var _a=new Audio("sounds/"+_n+".mp3");_a.preload="auto";_s[_n]=_a;})})(_0x4a2b);
function playSound(_x){var _a=_s[_x];if(!_a)return;if(_ca&&_cs===_x&&!_ca.paused)return;if(_ca){_ca.pause();_ca.currentTime=0;}_ca=_a;_cs=_x;_ca.currentTime=0;_ca.play().catch(function(_e){});_ca.onended=function(){_ca=null;_cs=null;};}
function stopSound(){if(_ca){_ca.pause();_ca.currentTime=0;_ca=null;_cs=null;}}
