#include <stdio.h>
#include <stdlib.h>

struct input{
    char buffer[100];
    long long int target;
};

int main(){

    setvbuf(stdin, NULL, _IONBF, 0);
    setvbuf(stdout, NULL, _IONBF, 0);
    setvbuf(stderr, NULL, _IONBF, 0);

    struct input variable;
    variable.target = 0;

    printf("what bof can do?? ");
    fgets(variable.buffer, 120, stdin);

    if (variable.target == 0xdeadbeef){
        char flag[100];
        FILE *fp = fopen("flag.txt","r");
        if (fp == NULL) {
            printf("please create flag.txt first");
            exit(0);
        }

        fgets(flag,100,fp);
        printf("%s\n", flag);
        fflush(stdout);
    } else {
        printf("Wait what, are u sure??\n");
    }
    return 0;
}