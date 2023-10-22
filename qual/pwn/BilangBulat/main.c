#include <stdio.h>
#include <stdlib.h>

int main(){

    setvbuf(stdout, NULL, _IONBF, 0);
	setvbuf(stdin, NULL, _IONBF, 0);
	setvbuf(stderr, NULL, _IONBF, 0);

    int a,b,c;

    printf("masukkan angka sehingga n + 1 < n\n> ");
    scanf("%d", &a);

    b = a + 1;

    if (b < a){
        system("cat flag.txt");
    } else {
        printf("Coba liat\" lagi tipe datanya bang!\n");
    }

}