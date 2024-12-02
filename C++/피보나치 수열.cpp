#include <bits/stdc++.h>

using namespace std;

// 피보나치 수열의 N번째 수를 구하는 재귀함수를 작성하세요.
// 피보나치 수열 1,1,2,3,5,8,13 ...
// F(N) = F(N-1) + F(N-2)
// C++ 은 함수가 호출되면 스택 메모리 공간에 쌓이고 함수가 return되면 스택에서 하나씩 빠져나오면서 값을 위로 전달한다. 
int fibonacci(int n) {
	if (n == 1 || n == 2) {
		return 1;
	}
	    return fibonacci(n-1) + fibonacci(n-2);
	
} 

int main() {
	int N;
	cout << "피보나치 수열의 N번째 수를 구한건데 N을 입력해주세요: ";
	cin >> N;
	
	cout << N << "번째 피보나치 수는 " << fibonacci(N) << " 입니다." << endl;
	
	return 0;
}
