class Heap{


  void shrink(){
    heapSize--;
  }

  void buildHeap(){
    for ( int i = heapSize/2 - 1; i >= 0; i-- ){
      downHeapLoop(i);
    }
  }

  void insert(TYPE x){
    increase(heapSize, x);
    heapSize++;
  }

  void insert(TYPE x, TYPE v){
    increase(heapSize, x, v);
    heapSize++;
  }

  void increase(int i, TYPE x){
    key[i] = x;
  }
  
  void increase(int i, TYPE x, TYPE v){
    key[i] = x;
    val[i] = v;
  }

  void decrease(int p, TYPE x){
    key[p] = x;
  }

  void swapElement(int u, int v){
    swap(key[u], key[v]);
    swap(val[u], val[v]);
  }

  void copyElement(int from, int to){
    if ( from == to ) return;
    key[to] = key[from];
    val[to] = val[from];
  }

  TYPE top(){
    return key[0];
  }
  
  TYPE topVal(){
    return val[0];
  }
  
  pair<TYPE, TYPE> topPair(){
    return make_pair(key[0], val[0]);
  }

  void upHeap(int i){
    while(1){
      if ( i <= 0 ) break;
      assert(parent(i) != EOI);
      if ( key[parent(i)] >= key[i]) break;

      swap(key[i], key[parent(i)]);
      swap(val[i], val[parent(i)]);

      i = parent(i);
    }
  }

  void downHeap(int i){
    _downHeap(i);
  }
  
  void _downHeap(int i){
    int l = left(i);
    int r = right(i);
    int largest;

    if (l < heapSize && key[l] > key[i]) largest = l;
    else largest = i;
    
    if (r < heapSize && key[r] > key[largest] ) largest = r;

    if ( largest != i ){
      swap(key[i], key[largest]);
      swap(val[i], val[largest]);
      _downHeap(largest);
    }
  }

  void upHeapLoop(int i){
    int r = i;
    TYPE kt = key[i];
    TYPE vt = val[i];
    while(1){
      if ( i <= 0 ) break;
      assert(parent(i) != EOI);
      p = parent(i);
      if ( key[parent(i)] >= kt) break;
      key[i] = key[parent(i)];
      val[i] = val[parent(i)];
      i = parent(i);
    }
    key[i] = kt;
    val[i] = vt;
  }

  void downHeapLoop(int i){
    int largest = i;
    int cur = i;
    TYPE kt = key[i];
    TYPE vt = val[i];
    while(1){
      if (left(cur) < heapSize && right(cur) < heapSize ){
	if ( key[left(cur)] > key[right(cur)] ) largest = left(cur);
	else largest = right(cur);
      } else if ( left(cur) < heapSize ){
	largest = left(cur);
      } else if ( right(cur) < heapSize ){
	largest = right(cur);
      } else {
	largest = -1;
      }

      if ( largest == -1 ) break;
      if ( key[largest] <= kt ) break;
      
      key[cur] = key[largest];
      val[cur] = val[largest];
      cur = largest;
    }
    key[cur] = kt;
    val[cur] = vt;
  }

  bool empty(){
    return heapSize == 0;
  }

  int parent(int i){ return (i-1)/2;}
  int left(int i){ return 2*i+1; }
  int right(int i){ return 2*i+2; }
