/*
int main() { 
    return 42;
}
*/
//var wasmCode = new Uint8Array([0,97,115,109,1,0,0,0,1,133,128,128,128,0,1,96,0,1,127,3,130,128,128,128,0,1,0,4,132,128,128,128,0,1,112,0,0,5,131,128,128,128,0,1,0,1,6,129,128,128,128,0,0,7,145,128,128,128,0,2,6,109,101,109,111,114,121,2,0,4,109,97,105,110,0,0,10,138,128,128,128,0,1,132,128,128,128,0,0,65,42,11]);

/*
void func(unsigned long* var) { 
  *var = 42;
  return;
}
*/
var wasmCode = new Uint8Array([0,97,115,109,1,0,0,0,1,133,128,128,128,0,1,96,1,127,0,3,130,128,128,128,0,1,0,4,132,128,128,128,0,1,112,0,0,5,131,128,128,128,0,1,0,1,6,129,128,128,128,0,0,7,145,128,128,128,0,2,6,109,101,109,111,114,121,2,0,4,102,117,110,99,0,0,10,143,128,128,128,0,1,137,128,128,128,0,0,32,0,65,42,54,2,0,11]);

/*
void func(unsigned long long* var, unsigned int val) { 
  *var = val;
  *(var + 1) = val+1;
  return;
}
*/
//var wasmCode = new Uint8Array([0,97,115,109,1,0,0,0,1,134,128,128,128,0,1,96,2,127,127,0,3,130,128,128,128,0,1,0,4,132,128,128,128,0,1,112,0,0,5,131,128,128,128,0,1,0,1,6,129,128,128,128,0,0,7,145,128,128,128,0,2,6,109,101,109,111,114,121,2,0,4,102,117,110,99,0,0,10,155,128,128,128,0,1,149,128,128,128,0,0,32,0,32,1,173,55,3,0,32,0,32,1,65,1,106,173,55,3,8,11]);

var wasmModule = new WebAssembly.Module(wasmCode);
var wasmInstance = new WebAssembly.Instance(wasmModule);

var arr = new Uint8Array(wasmInstance.exports.memory.buffer,0,32);

//wasmInstance.exports.func(arr,0);
//console.log(arr);
