var buf  = new Buffer(100);
for (var i=0; i < 100; ++i)
{
    buf[i] = i;
}
console.log(buf.toString());

console.log(buf.slice(40,60).toString());

var targetBuffer = new Buffer(20);
buf.copy(targetBuffer, 0, 40, 60);
console.log(targetBuffer.toString());