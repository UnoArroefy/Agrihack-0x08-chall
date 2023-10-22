#include <stdio.h>
#include <unistd.h>
#include <stdlib.h>
#include <seccomp.h>

void init(){
    setvbuf(stdout, NULL, _IONBF, 0);
	setvbuf(stdin, NULL, _IONBF, 0);
	setvbuf(stderr, NULL, _IONBF, 0);

    scmp_filter_ctx ctx;
    ctx = seccomp_init(SCMP_ACT_KILL);
    seccomp_rule_add(ctx, SCMP_ACT_ALLOW, SCMP_SYS(open), 0);
    seccomp_rule_add(ctx, SCMP_ACT_ALLOW, SCMP_SYS(read), 0);
    seccomp_rule_add(ctx, SCMP_ACT_ALLOW, SCMP_SYS(write), 0);
    seccomp_load(ctx);

}

int main(int argc, char** argv){
    init();
    char buffer[0x64];

    printf("Bahasa Kerang!!\n>");
    read(0, buffer, 0x64);

    void (*shell)() = &buffer;
    shell();

    return 0;
}

// gcc -z execstack -o chall main.c