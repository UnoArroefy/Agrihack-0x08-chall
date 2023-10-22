#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int enc[60];
int key[60];

void init1(void) __attribute__((constructor));
void init2(void) __attribute__((constructor));

void init1(){
    int FirstMem[60] = {6, 35, 29, 97, 103, 80, 228, 224, 171, 205, 5, 100, 245, 136, 176, 145, 201, 188, 37, 44, 96, 135, 216, 64, 244, 155, 209, 211, 136, 230, 39, 152, 149, 138, 112, 29, 118, 43, 170, 1, 200, 193, 196, 196, 240, 53, 162, 45, 225, 65, 209, 221, 192, 3, 54, 142, 33, 232, 158, 22};
    memcpy(enc, FirstMem, sizeof(enc));
}
 
void init2(){
    int SecondMem[60] = {103, 68, 111, 8, 15, 49, 135, 139, 208, 181, 106, 22, 171, 240, 223, 227, 151, 196, 74, 94, 63, 240, 176, 37, 154, 196, 166, 186, 228, 138, 120, 236, 253, 239, 47, 101, 25, 89, 245, 68, 166, 165, 155, 138, 192, 66, 253, 68, 149, 102, 162, 130, 175, 109, 105, 205, 0, 201, 191, 107};
    memcpy(key, SecondMem, sizeof(key));
}

int main(int argc, char** argv){
    setvbuf(stdin, NULL, _IONBF, 0);
    setvbuf(stdout, NULL, _IONBF, 0);
    setvbuf(stderr, NULL, _IONBF, 0);

    if (argc != 2){
        printf("Usage : <program> <flag>\n");
        _Exit(1);
    }

    size_t len = strlen(argv[1]);

    for (int i = 0; i < sizeof(enc)/sizeof(enc[0]); i++){
        char test = enc[i] ^ key[i];
        if (argv[1][i] != test){
            printf("Wrong\n");
            _Exit(0);
        }
    }

    printf("Correct\n");
    return 0;
}