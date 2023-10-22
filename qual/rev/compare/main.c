#include <stdio.h>
#include <stdlib.h>
#include <string.h>

const char* flag = "agrihack{String_Comparation_in_C}";

int main(){
    char buffer[100];
    printf("Flag : ");
    scanf("%100s", buffer);
    printf("%s\n", (strcmp(buffer, flag) == 0) ? "correct" : "wrong");
    return 0;
}