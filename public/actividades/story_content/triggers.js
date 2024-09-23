function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5d26xuMam8i":
        Script1();
        break;
      case "5tTqs4LlMh9":
        Script2();
        break;
      case "5dEpicTKu69":
        Script3();
        break;
      case "5V7OeBsLn0b":
        Script4();
        break;
      case "5saySBJ8Elk":
        Script5();
        break;
      case "6Zzk8Uzuiue":
        Script6();
        break;
      case "5mpYIGmWGRH":
        Script7();
        break;
      case "6W6w8t20wkM":
        Script8();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  const target = object('61vrMf05ee3');
const duration = 750;
const easing = 'ease-out';
const id = '668wu7q9hk8';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  const target = object('6q0CXtAFdau');
const duration = 750;
const easing = 'ease-out';
const id = '5uFBxgsGjeH';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  const target = object('6q0CXtAFdau');
const duration = 750;
const easing = 'ease-out';
const id = '5uFBxgsGjeH';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script4 = function()
{
  const target = object('6q0CXtAFdau');
const duration = 750;
const easing = 'ease-out';
const id = '5uFBxgsGjeH';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script5 = function()
{
  const target = object('6q0CXtAFdau');
const duration = 750;
const easing = 'ease-out';
const id = '5uFBxgsGjeH';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script6 = function()
{
  const target = object('6q0CXtAFdau');
const duration = 750;
const easing = 'ease-out';
const id = '5uFBxgsGjeH';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script7 = function()
{
  const target = object('6q0CXtAFdau');
const duration = 750;
const easing = 'ease-out';
const id = '5uFBxgsGjeH';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

};
