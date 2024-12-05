// {1,2,3} 에서 그대로 뽑는다면 조합
// {1,2,3} 에서 1,2,3 1,3,2 3,1,2 등 순서와 상관 없이 뽑는다면 순열이다. 
// 3개중에서 2개를 뽑는다면 1,2 1,3 2,3 등 조합이다.
// 순열은 1,2, 2,1, 1,3 등 6개가 나온다.

// next_permutation 에 들어가는 매개변수는 시작 지점, 끝 지점이 들어간다. 1,2,3 이면 첫번째 1을 넣고 to는 포함되지 않는다이기 때문에 다음 숫자를 넣어준다.

// prev_permutation 은 오름차순이 아닌 내림차순이다.

#include<bits/stdc++.h>
using namespace std;

int main() {
	int a[] = {1,2,3};
	do {
		for(int i : a) cout << i << " ";
		cout << '\n';
	} while (next_permutation(a, a + 3));
} 
