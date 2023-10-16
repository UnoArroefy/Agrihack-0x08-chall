#include <stdio.h>
#include <signal.h>
#include <stdlib.h>

void sigsegv_handler(int sig) {
    win();
}

void win(){
    char flag[100];
    FILE *f = fopen("flag.txt","r");
    if (f == NULL) {
        printf("please create flag.txt first");
        exit(0);
    }

    fgets(flag,100,f);
    printf("%s\n", flag);
    fflush(stdout);
    exit(0);
}

int main(int argc, char** argv){

    signal(SIGSEGV, sigsegv_handler);

    char buffer[100];

    printf("what is bof? ");
    gets(buffer);
    printf("Wrong!!\n");
    return 0;
}