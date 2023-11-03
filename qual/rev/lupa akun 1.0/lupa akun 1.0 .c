#include<stdio.h>
#include<string.h>
int apa[]={160, 166, 177, 168, 167, 160, 162, 170, 186, 169, 115, 173, 120, 160, 173, 158, 139, 180, 175, 160, 170, 115, 173, 158, 143, 150, 158, 171, 160, 120, 168, 188};
int apaan[]={82, 138, 82, 140, 74, 143, 92, 147, 88, 142, 77};
char username[]="Tzursa", iusername[6],ipassword[11];

int cekpw(char pw[11]){
    int res=1, pnjg=strlen(pw);
    for(int i=0;i<pnjg;i++){
        int cek=pw[i];
        if(i%2) cek+=28;
        else cek-=23;
        if(cek!=apaan[i]) res=0;
    }

    return res;
}

int main(){
    printf("================================================\n\n");
    printf("        Selamat datang di versi 1.0\n\n");
    printf("================================================\n\n");
    printf("Username: ");
    scanf("%s",iusername);
    int ceku=strcmp(username,iusername);
    printf("Password: ");
    scanf("%s",ipassword);

    if(ceku!=0){
        printf("Username salah\n");
    }else{
        if(cekpw(ipassword)!=1){
            printf("Password salah\n");
        }else{
            printf("Login berhasil!\n");
            printf("ini flag buatmu!\n");
            printf("================================================\n\n");
            for(int i=0;i<32;i++){
                int temp=apa[i];
                // printf("%d ", temp);
                temp=temp-128;
                temp+='A';
                printf("%c",temp);
            }
            printf("\n\n================================================\n");
        }
    }
}