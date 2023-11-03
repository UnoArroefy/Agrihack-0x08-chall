#include<stdio.h>
#include<string.h>
int apaini[]={94, 84, 111, 86, 85, 94, 88, 80, 96, 56, 45, 83, 43, 111, 41, 105, 104, 92, 62, 80, 85, 86, 111, 83, 102, 41, 92, 62, 80, 106, 83, 83, 102, 94, 92, 95, 94, 81, 46, 80, 92, 81, 94, 38, 46, 98};    
char username[]="Tzursa", pw[]="janganpikun", iusername[6],ipassword[11];;

int main(){
    printf("================================================\n\n");
    printf("        Selamat datang di versi 0.0\n\n");
    printf("================================================\n\n");
    printf("Username: ");
    scanf("%s",iusername);
    int ceku=strcmp(username,iusername);
    printf("Password: ");
    scanf("%s",ipassword);
    int cekp=strcmp(pw,ipassword);
    if(ceku!=0){
        printf("Username salah\n");
    }else{
        if(cekp!=0){
            printf("Password salah\n");
        }else{
            printf("Login berhasil!\n");
            printf("ini flag buatmu!\n");
            printf("================================================\n\n");
            for(int i=0;i<46;i++){
                int temp=apaini[i];
                // printf("%d ", temp);
                temp=temp^12;
                temp+=15;
                printf("%c",(char)temp);
            }
            printf("\n\n================================================\n");
        }
    }
}