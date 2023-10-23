#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>

const char* cifrado_codificado = "UMTDXDSFXACGIWRNQRIUBGVWVGCC";

void upper(char* src){
    while(*src != '\0'){
        if (islower(*src)){
            *src &= ~0x20;
        }
        src++;
    }
}

char* codificar(char* key, char* plaintext){
    char *cifrado = strdup(plaintext);
    upper(key);
    upper(cifrado);

    int i, slen, klen;

    for (i = 0, slen = 0; cifrado[slen] != '\0'; slen++)
        if (isupper(cifrado[slen]))
            cifrado[i++] = cifrado[slen];

    cifrado[slen=i] ='\0';
    klen = strlen(key);

    for (i=0; i < slen; i++){
        char shift = 'A';
        cifrado[i] = shift + (cifrado[i] - shift + key[i % klen] - shift) % 26;
    }
    
    return cifrado;
}

int main(){
    char elBuffer[100];
    char llave[] = "MaestrosEspanola";

    printf("Cual es el secreto : ");
    scanf("%100s", elBuffer);

    const char* cifrado = codificar(llave, elBuffer);
    if (strcmp(cifrado, cifrado_codificado) == 0){
        printf("felicitaciones!\n");
    } else {
        printf("Lo Siento, respuesta incorrecta\n");
    }
    return 0;
}