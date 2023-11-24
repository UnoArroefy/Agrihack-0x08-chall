#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <string.h>

void readRandom(char *buf, int n) {
    FILE *fd = fopen("/dev/urandom", "r");
    if (fd == 0) {
        printf("failed reading /dev/urandom\n");
        exit(-1);
    }
    fgets(buf, n, fd);
    fclose(fd);
}

void win() {
    char buf[100];
    FILE *fd = fopen("flag.txt", "r");
    if (fd == 0) {
        printf("flag.txt not found\n");
        exit(-1);
    }
    fgets(buf, sizeof(buf), fd);
    fclose(fd);
    printf("%s\n", buf);
}

int main() {
    char guess[8];
    char random[8];
    readRandom(random, 8);
    printf("sekarang udah paham bof belom? ");
    read(0, guess, 8);
    printf("%s\n", guess);
    printf("sekarang coba tebak 8 byte randomku\n");
    read(0, guess, 8);
    if (!strncmp(guess, random, 8)) {
        printf("iyak, benar sekali\n");
        win();
    } else {
        printf("salah bro\n");
    }
}

__attribute__((constructor))
void setup(void) {
    setvbuf(stdin, NULL, _IONBF, 0);
    setvbuf(stdout, NULL, _IONBF, 0);
    setvbuf(stderr, NULL, _IONBF, 0);
}
