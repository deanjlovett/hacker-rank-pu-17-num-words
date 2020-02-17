#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>
char* digits[20] ={
    "","One","Two","Three","Four","Five","Six","Seven","Eight","Nine",
    "Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen"
};
char* tens[11] =  {"","","Twenty","Thirty","Forty","Fifty","Sixty","Seventy","Eighty","Ninety"};

void by3seg(int num){
    if(num/100)
        printf("%s Hundred ", digits[num/100]);
    if((num%100) < 20 && (num%100) > 0)
        printf("%s ",digits[num%100]);
    else if((num/10)%10){
        printf("%s ", tens[(num/10)%10]);
        if(num%10)
            printf("%s ", digits[num%10]);
    }
}
typedef struct by3s{
    long long div;
    int modit;
    char* moniker;
} by3s;

by3s sby3s[5] ={
    {1000000000000,  0, "Trillion "},
    {   1000000000,  1, "Billion "},
    {      1000000,  1,  "Million "},
    {         1000,  1, "Thousand "},
    {            1,  1, ""}
};

int main() {
    int t;
    scanf("%d", &t);
    while(t--){
        long long n;
        scanf("%lld", &n);
        if(n == 0 ){
            printf("Zero");
            return 0;            
        } 
        for(int i=0;i<5;++i){
            // int nn = n / sby3s[i].div;
            // if( sby3s[i].modit )
            //     nn = nn % 1000;
            int nn = 0;
            if( sby3s[i].modit )
                nn = (n / sby3s[i].div) % 1000;
            else
                nn =  n / sby3s[i].div;
            if( nn ){
                by3seg(nn);
                printf(sby3s[i].moniker);
            }
        }
        printf("\n"); 
    }
    return 0;
}