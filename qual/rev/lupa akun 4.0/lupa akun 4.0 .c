#include<stdio.h>
#include<string.h>
int secretf[]={75, 172, 248, 48, 143, 211, 97, 209, 260, 116, 211, 316, 110, 159, 254, 84, 132, 240, 111, 221, 278, 95, 144, 254, 57, 154, 270, 107, 159, 269, 95, 175, 289, 48, 146, 199, 51, 167, 262, 66, 183, 235, 116, 211, 277, 49, 156, 205, 110, 205, 258, 48, 145, 253, 95, 171, 268, 54, 159, 254, 104, 205, 309, 51, 155, 224};
int secrets[]={75, 173, 219, 48, 163, 277, 97, 163, 262, 116, 200, 264, 110, 144, 227, 84, 156, 329, 111, 167, 201, 95, 159, 264, 57, 213, 275, 107, 162, 285, 95, 194, 260, 48, 151, 220, 51, 211, 278, 66, 169, 263, 116, 161, 222, 49, 156, 254, 110, 148, 198, 48, 205, 279, 95, 173, 256, 54, 200, 300, 104, 205, 259, 224, 173, 69};
int secretu[]={39, 35, 56, 37, 46, 29, 41, 39};
char iusername[8],ipassword[66];

int cek1(char pw[66]){
    int res=1;
    for(int i=0;i<66;i++){
        if(i%3!=0) continue;
        int tmpf=pw[i],tmps=pw[i];
        if(i>62) tmps=pw[i]+pw[i+1]+pw[i+2];
        // printf("%d %d %d\n",tmps,secretf[i],secrets[i]);
        if(tmpf!=secretf[i] || tmps!=secrets[i]) res=0;
    }
    return res;
}

int cek2(char pw[66]){
    int res=1;
    for(int i=0;i<66;i++){
        if(i%3!=2) continue;
        int tmpf,tmps;
        if(i<3) {
            tmpf=pw[i]+pw[i-1]+pw[i-2];
            tmps=pw[i]+pw[i+1]+pw[i+2];
        }
        else if(i>62) {
            tmpf=pw[i]+pw[i-1]+pw[i-2];
            tmps=pw[i]+pw[i+1]+pw[i+2];
        }
        else{
            tmpf=pw[i]+pw[i-1]+pw[i-2];
            tmps=pw[i]+pw[i+1]+pw[i+2];
        }

        // printf("%d %d %d   %d %d\n",i,tmpf,secretf[i],tmps,secrets[i]);
        if(tmpf!=secretf[i] || tmps!=secrets[i]) res=0;
    }
    return res;
}

int cekpassword(char pw[66]){
    int res1=1,res2=1,res3=1;
    res1=cek1(pw);
    for(int i=0;i<66;i++){
        if(i%3!=1) continue;
        int tmpf,tmps;
        if(i<3) {
            tmpf=pw[i]+pw[i-1];
            tmps=pw[i]+pw[i+1];
        }
        else if(i>62) {
            tmpf=pw[i]+pw[i-1];
            tmps=pw[i]+pw[i+1];
        }
        else{
            tmpf=pw[i]+pw[i-1];
            tmps=pw[i]+pw[i+1];
        }
        // printf("%d %d %d   %d %d\n",i,tmpf,secretf[i],tmps,secrets[i]);
        if(tmpf!=secretf[i] || tmps!=secrets[i]) res2=0;
    }
    res3=cek2(pw);
    // printf("%d%d%d\n",res1,res2,res3);

    return res1 & res2 & res3;
}

int cekusername(char uname[8]){
    int res=1;
    for(int i=0;i<8;i++){
        int tmp=uname[i]-'A';
        if(i%2==0) tmp+=7;
        else tmp-=3;
        if(tmp!=secretu[i]) res=0;
    }
    return res;
}

int main(){
    printf("===============================================================================\n\n");
    printf("                    Selamat datang di versi 4.0\n");
    printf("              jangan sampe bosen sama templatenya hehehe^_^\n\n");
    printf("===============================================================================\n\n");
    printf("Username: ");
    scanf("%s",iusername);
    printf("Password: ");
    scanf("%s",ipassword);

    if(cekusername(iusername)!=1 || cekpassword(ipassword)!=1){
        // printf("%d %d\n",cekusername(iusername),cekpassword(ipassword));
        printf("Username atau Password salah\n");
    }else{
        printf("Login berhasil!\n");
        printf("ini flag buatmu!\n\n");
        printf("===============================================================================\n\n");
        for(int i=0;i<8;i++){
            printf("%c",iusername[i]);
        }
        printf("{");
        for(int i=0;i<66;i++){
            printf("%c",ipassword[i]);
        }
        printf("}\n\n===============================================================================\n");
    }
}