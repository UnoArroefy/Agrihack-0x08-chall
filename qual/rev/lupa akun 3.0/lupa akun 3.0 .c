#include<stdio.h>
#include<string.h>
int secret[]={99, 124, 112, 126, 106, 118, 97, 128};
int verysecret[]={28, 636, 24, -127, 69, 564, 83, -124, 15, 756, 96, -80, 29, 588, 31, -124, 78, 564, 105, -126, 59, 792, 116, -104, 69, 564, 103, -58, 74, 48};
char iusername[8],ipassword[30];

int cekpw(char pw[30]){
    int res1=1,res2=1,res3=1,res4=1;
    for(int i=0;i<30;i+=4){
        int tmp=pw[i]-'0';
        tmp+=10;
        if(tmp!=verysecret[i]) res1=0;
    }

    for(int i=1;i<30;i+=4){
        int tmp=pw[i]-'0';
        tmp*=12;
        if(tmp!=verysecret[i]) res2=0;
    }

    for(int i=2;i<30;i+=4){
        int tmp=pw[i]-'0';
        tmp^=91;
        if(tmp!=verysecret[i]) res3=0;
    }

    for(int i=3;i<30;i+=4){
        int tmp=pw[i]-'0';
        tmp-=127;
        if(tmp!=verysecret[i]) res4=0;
    }

    return res1 & res2 & res3 & res4;
}

int cekusername(char uname[8]){
    int res=1;
    for(int i=0;i<8;i++){
        int tmp=uname[i];
        if(i%2==0) tmp^=2;
        else tmp+=21;
        if(tmp!=secret[i]) res=0;
    }
    return res;
}

int main(){
    printf("===================================================\n\n");
    printf("          Selamat datang di versi 3.0\n");
    printf("      jangan sampe bosen sama templatenya ya ^_^\n\n");
    printf("===================================================\n\n");
    printf("Username: ");
    scanf("%s",iusername);
    printf("Password: ");
    scanf("%s",ipassword);

    if(cekusername(iusername)!=1 || cekpw(ipassword)!=1){
        printf("Username atau Password salah\n");
    }else{
        printf("Login berhasil!\n");
        printf("ini flag buatmu!\n");
        printf("===================================================\n\n");
        for(int i=0;i<8;i++){
            printf("%c",iusername[i]);
        }
        printf("{");
        for(int i=0;i<30;i++){
            printf("%c",ipassword[i]);
        }
        printf("}\n\n===================================================\n");
    }
}