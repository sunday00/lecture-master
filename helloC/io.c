#include <stdio.h>

void main(void) {
	FILE *fp = stdin;
	getchar();
	getchar();
	getchar();
	getchar();
	getchar();
	int age;
	scanf_s("%d%*c", &age);
	// 이렇게 하면 %*c 부분에 넣을 변수가 없으므로 바로 %d 받자마자 버퍼에 남은 null문자나 \n 문자를 trim 하게 됨



}