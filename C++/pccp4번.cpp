#include <string>
#include <vector>
#include <iostream>

using namespace std;

vector<int> solution(string route) {
    int east = 0;
    int north = 0;
    vector<int> answer(2);
    for(int i=0; i<route.length(); i++){
        switch(route[i]){
            case 'N':
                north++;
                break;
            case 'S':                
                north--;
                break;
            case 'E':
                east++;
                break;
            case 'W':
                east--;
                break;
        }
    }
    answer[0] = east;
    answer[1] = north;
    return answer;
}

int main() {
    // C++98 스타일로 vector 초기화
    vector<string> test_cases;
    test_cases.push_back("NSEW");     // 예상 결과: [0, 0]
    test_cases.push_back("NNEES");    // 예상 결과: [2, 1]
    test_cases.push_back("WWWW");     // 예상 결과: [-4, 0]
    
    // 각 테스트 케이스 실행
    for(size_t i = 0; i < test_cases.size(); i++) {
        vector<int> result = solution(test_cases[i]);
        cout << "입력: " << test_cases[i] << " -> 결과: [" << result[0] << ", " << result[1] << "]" << endl;
    }
    
    return 0;
}
