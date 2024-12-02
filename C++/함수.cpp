#include <bits/stdc++.h>

using namespace std;

void greet() {
	cout << "안녕하세요! C++ 함수 예시입니다." << endl;
}

int add(int a, int b) {
	return a+b;
}

int main() {
	int a,b;
	
	cout << "두 숫자를 입력하세요: ";
	
	cin >>  a >> b;
	greet();
	int result = add(a,b);
	
	cout << "a와 b를 더한 값은: " << result << endl;
	return 0;
}
