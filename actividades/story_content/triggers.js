function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5Vces8Zd35f":
        Script1();
        break;
      case "6XRZPSYxOlv":
        Script2();
        break;
      case "6PmHSFFM2s1":
        Script3();
        break;
      case "6foMqirWkfB":
        Script4();
        break;
      case "5kdH4BZ3Kdh":
        Script5();
        break;
      case "61BCSkdVvIx":
        Script6();
        break;
      case "6eotqY0ksUs":
        Script7();
        break;
      case "6BxlxfNZZcE":
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
