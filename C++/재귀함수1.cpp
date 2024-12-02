#include <bits/stdc++.h>

using namespace std;

int sum(int n){ // 계산 결과를 반환해야 하므로 int로 선언해야함 void는 반환 값이 없다. 
	if(n == 1) {
		return 1;
	}
	return n + sum(n - 1);
}

// 1부터 N까지의 합을 구하는 재귀 함수를 작성하세요. 
int main() {
	int N;
	
	cout << "1부터 N까지의 합을 구할건데 N을 입력해주세요." << endl;
	
	cin >> N;
	
	cout << "1부터 " << N << "까지의 합은 " << sum(N) << "입니다." << endl; 
	
	
	return 0; 
}
