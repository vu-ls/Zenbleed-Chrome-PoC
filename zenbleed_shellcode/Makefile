all: shellcode

shellcode.o: shellcode.asm
	nasm -O0 -felf64 -o shellcode.o shellcode.asm

shellcode: shellcode.o
	ld -o shellcode shellcode.o

.PHONY: clean
clean:
	rm shellcode.o
	rm shellcode
.PHONY: raw
raw:
	printf '0x' && objdump -d shellcode | grep "^ " | cut -f2 | tr -d ' ' | tr -d '\n' | sed 's/.\{2\}/&,0x /g'| head -c-3 | tr -d ' ' && echo ' '
#	objdump -d shellcode | grep "^ " | cut -f2 | tr -d ' ' | tr -d '\n' | sed 's/.\{2\}/& /g'| head -c-3 | tr -d ' ' && echo ' '