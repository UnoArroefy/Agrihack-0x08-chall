section .text
global _start

_start:
    mov eax, 0x3D
    add eax, eax
    shl eax, 4
    mov ebx, 0xB
    add eax, ebx
    shl eax, 4
    sub ebx, 4
    add eax, ebx
    shl eax, 8
    mov ecx, ebx
    add ecx, 2
    shl ecx, 4
    add eax, ecx
    imul ebx, ebx, 2
    add eax, 0xD
    add eax, ebx
    mov edi, eax
    shr edi, 12
    shr ecx, 4
    sub ebx, ecx
    shr ebx, 2
    mov eax, ecx

    ; Exit the program
    mov eax, 60         ; syscall number for exit
    xor edi, edi        ; status 0
    syscall