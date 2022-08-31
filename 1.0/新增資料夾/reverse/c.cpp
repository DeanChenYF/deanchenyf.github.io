#include<iostream>
using namespace std;
int n;
int A[1000];

void reverse(int l, int r){
  for ( int i = l; i <= l+(r-l)/2-1; i++ ){
    int j = r-(i-l)-1;
    swap(A[i], A[j]);
  }
}
main(){
  int a, b, q;
  cin >> n;
  for ( int i = 0; i < n; i++ ) cin >> A[i];
  cin >> q;
  for ( int i = 0; i < q; i++ ){
    cin >> a >> b;
    reverse(a, b);
  }
  for ( int i = 0; i < n; i++ ){
    if ( i ) cout << " ";
    cout << A[i];
  }
  cout << endl;
}
