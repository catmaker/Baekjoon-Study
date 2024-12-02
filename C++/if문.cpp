#include<bits/stdc++.h> // 입출력 라이브러리 포함 

using namespace std; // 표준 네임스페이스 사용 
int main(){
	int number;
	cout << "숫자를 입력하세요: ";
	cin >> number; // 사용자로부터 입력받기
	
	if (number > 0) {
		cout << "입력한 숫자는 양수입니다." << endl;
	} else if (number < 0) {
		cout << "입력한 숫자는 음수입니다." << endl;
	} else {
		cout << "입력한 숫자는 0입니다." << endl;
	}
	
	return 0;
}
