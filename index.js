// run `node index.js` in the terminal
//The
console.log('shayan');
process.nextTick(() => {
  console.log('------nextTick');
});
setImmediate(() => {
  console.log('setImmediate,');
});

setTimeout(() => {
  console.log('------interval');
}, 0);

setImmediate(() => {
  console.log('setImmediate,');
});

setImmediate(() => {
  console.log('setImmediate,');
});
setImmediate(() => {
  console.log('setImmediate,');
});
setImmediate(() => {
  console.log('setImmediate,');
});
setImmediate(() => {
  console.log('setImmediate,');
});
setImmediate(() => {
  console.log('setImmediate,');
});
setImmediate(() => {
  console.log('setImmediate,');
});
setImmediate(() => {
  console.log('setImmediate,');
});
setImmediate(() => {
  console.log('setImmediate,');
});
setImmediate(() => {
  console.log('setImmediate,');
});
process.nextTick(() => {
  console.log('------nextTick');
});

console.log('[aul');
