#include <stdio.h>
#include <unistd.h>
#include <stdlib.h>

int main(int argc, char** argv){
    setvbuf(stdout, NULL, _IONBF, 0);
	setvbuf(stdin, NULL, _IONBF, 0);
	setvbuf(stderr, NULL, _IONBF, 0);

    char buffer[64];

    printf("Bahasa Kerang!!\n>");
    read(0, buffer, 64);

    void (*shell)() = &buffer;
    shell();

    return 0;
}

// gcc -z execstack -o chall main.c