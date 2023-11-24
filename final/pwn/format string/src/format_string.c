#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <string.h>

void win() {
    char buf[100];
    FILE *fd = fopen("flag.txt", "r");
    if (fd == 0) {
        printf("flag.txt not found\n");
        exit(-1);
    }
    fgets(buf, sizeof(buf), fd);
    fclose(fd);
    printf("Here's the flag:\n%s\n", buf);
}

int main() {
    char name[16];
    char guess[9] = {'\0'};
    char random[9];
    FILE *fd = fopen("/dev/urandom", "r");
    if (fd == 0) {
        printf("failed reading /dev/urandom\n");
        exit(-1);
    }
    fgets(random, sizeof(random), fd);
    fclose(fd);
    printf("What's your name?\n> ");
    fgets(name, sizeof(name), stdin);
    printf("Oh, hello there ");
    printf(name);
    printf("\nCan you guess my random 8 bytes?\n> ");
    fgets(guess, sizeof(guess), stdin);
    if (*(long *)guess == *(long *)random) {
        printf("Congrats! You are correct!\n");
        win();
    } else {
        printf("Wrong!\n");
    }
}

__attribute__((constructor))
void setup(void) {
    setvbuf(stdin, NULL, _IONBF, 0);
    setvbuf(stdout, NULL, _IONBF, 0);
    setvbuf(stderr, NULL, _IONBF, 0);
}
