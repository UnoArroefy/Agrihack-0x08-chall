#include<stdio.h>
#include<string.h>
int apa[]={50, 57, 74, 58, 58, 57, 52, 61, 83, 29, 71, 72, 18, 49, 12, 60, 71, 70, 48, 7, 11, 63, 54, 65, 67, 3, 55, 26, 70, 77, 48, 36, 9, 51, 5, 76, 78};
int apaan[]={114, 61, 81, 56, 104, 75, 115, 104, 87, 96, 60, 86, 96};
int apalagi[]={212, 250, 245, 242, 243, 225};
char iusername[6],ipassword[13];

int cekuser(char uname[6]){
    int res=128;
    for(int i=0;i<6;i++){
        int tes=uname[i];
        tes^=128;
        if(tes!=apalagi[i]) res=-128;
    }

    return res;
}

int cekpw(char pw[13]){
    int res=1, len=strlen(pw);
    for(int i=0;i<len;i++){
        int tmp=pw[i];
        if(i%3==0) tmp^=1;
        else if(i%3==1) tmp^=9;
        else tmp^=63;
        if(tmp!=apaan[i]) res=0;
    }

    return res;
}

int main(){
    printf("================================================\n\n");
    printf("        Selamat datang di versi 2.0\n");
    printf("      jangan bosen sama templatenya ya ^_^\n\n");
    printf("================================================\n\n");
    printf("Username: ");
    scanf("%s",iusername);
    printf("Password: ");
    scanf("%s",ipassword);

    if(cekpw(ipassword)!=1 || cekuser(iusername)!=128){
        printf("Username atau Password salah\n");
    }else{
        printf("Login berhasil!\n");
        printf("ini flag buatmu!\n");
        printf("================================================\n\n");
        for(int i=0;i<37;i++){
            int tmp=apa[i]+'0';
            if(i%3==0) tmp-=1;
            else if(i%3==1) tmp-=2;
            else tmp-=8;
            printf("%c",tmp);
        }
        printf("\n\n================================================\n");
    }
    return 0;
}