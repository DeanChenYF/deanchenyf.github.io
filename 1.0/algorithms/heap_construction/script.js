window.onload = function () {
document.getElementById('io_arrow').innerHTML = "&rarr;";
document.getElementById('level').innerHTML = "&#9733; &#9733; ";
document.getElementById('ptitle').innerHTML = "建立堆積";
document.getElementById('ptitle_en').innerHTML = "Building Heap";
document.getElementById('input_comment').innerHTML = "整數序列<ul><li>元素數N &le; 100,000 </li></ul>";
document.getElementById('output_comment').innerHTML = "建立成最大堆積";
document.getElementById('motivation').innerHTML = "建立堆積有兩種方法，第一種是載入整數序列後，藉由反覆執行 Up Heap 來建立；第二種方法是載入整數序列後，利用 Down Heap 搭配插入（Insertion）來建立，本節將以第二種方法來建立最大堆積。";
document.getElementById('description').innerHTML = "將整數序列建立成最大堆積。";
document.getElementById('input_panel').innerHTML = '<img src="../../problems/heap_construction/input.svg" width="340"/>';
document.getElementById('output_panel').innerHTML = '<img src="../../problems/heap_construction/output.svg" width="340"/>';
document.getElementById('algorithm_icon').innerHTML = '<img src="../../icons/algorithms/heap_construction.svg" width="100"/>';
document.getElementById('atitle').innerHTML = "建立堆積";
document.getElementById('atitle_en').innerHTML = "Build Heap";
document.getElementById('abstract').innerHTML = "建立堆積時，只要由下而上（bottom-up）執行 Down Heap，即可將整數序列建立成最大堆積。本節使用的演算法是從葉節點以外的節點中，按照節點編號的降冪（往根節點前進的方向）依序選擇起點，由下而上進行 Down Heap。";
document.getElementById('explanation').innerHTML = "為了符合最大堆積性質，最大堆積在建立時必須從較深的節點開始進行 Down Heap。Down Heap 的起點只要按照完整二元樹的節點編號反向走訪，即可由深到淺依序選擇。在大小為 N 的完整二元樹中，內部節點最大的編號為 (N/2)-1，Down Heap 可由此節點開始依序進行，直到抵達根節點 0 為止。";
document.getElementById('note').innerHTML = "本節的實作中，Down Heap 操作使用的是插入（insertion）而非之前使用的互換(swap）。Down Heap 1 次的時間複雜度為 O（樹的高度）。建立堆積時，Down Heap 會按照以下方式進行:<br/><br>對高度為 1 的 N/2 個子樹進行 Down Heap<br/>對高度為 2 的 N/4 個子樹進行 Down Heap<br/>...<br/>對高度為 log N 的 1 個子樹（整棵樹）進行 Down Heap<br/><br>假設樹的高度為 h，則將上述過程相加可得 {1(N/2)+2(N/4)+...+h(N/2h)}=N{(1/2)+(2/4)+...(h/2h)}。由於 { } 當中的數字近似於 1，因此建立堆積的時間複雜度為 O(N)。";
document.getElementById('application').innerHTML = "堆積也可以藉由反覆執行 Up Heap 來建立，但時間複雜度會是 O(N log N)，因此相較之下利用 Down Heap 建立堆積會是比較好的方式。堆積排序法中的預處理，就是以 Down Heap 方式建立堆積。";
document.getElementById('structure').innerHTML = '<tr><td style="text-align:center;width:100"><img src="../../icons/structures/ACBT.svg" /><br/><br/></td><td class="frame">&nbsp;<img height="160" class="frame_svg" valign="middle" src="space_t.svg" />&nbsp;</td></tr><tr><td></td><td class="caption">完整二元樹</td></tr>';
document.getElementById('variable').innerHTML = '<tr><th class="scene_desc" colspan="3">資料</th></tr><tr><td class="symbol"><img src="variable_A.svg" /></td><td>最大堆積的元素</td><td class="code">A</td></tr>';
document.getElementById('formula').innerHTML = '<tr><th class="scene_desc" colspan="3">輸入與初始化</th></tr><tr><td class="symbol"><img src="formula_input.svg" /></td><td>載入整數序列（不一定要是堆積）。</td><td class="code"></td></tr><tr><th class="scene_desc" colspan="3">建立最大堆積</th></tr><tr><td class="symbol"><img src="formula_downRotation.svg" /></td><td>對子樹進行 Down  Heap。</td><td class="code">downHeap(A, i)</td></tr><tr><th class="scene_desc" colspan="3">出力</th></tr><tr><td class="symbol"><img src="formula_output.svg" /></td><td>輸出堆積元素。</td><td class="code"></td></tr>';
document.getElementById('scheme').innerHTML = '<tr><td style="text-align:center;width:100"><img src="anim_qr.svg" width="80"/></td><td class="frame"><hr class="separator"/><img height="160" class="frame_svg" src="scheme_step1.svg" /><p class="caption">進行 Down Heap。</p></td></tr>';
document.getElementById('scene').innerHTML = '<div><p><b class="scene_desc">輸入與初始化</b><br/><img src="scene_0.svg" alt="建立堆積 | 輸入與初始化" title="建立堆積 | 輸入與初始化"/></p></div><div><p><b class="scene_desc">建立最大堆積</b><br/><img src="scene_1.svg" alt="建立堆積 | 建立最大堆積" title="建立堆積 | 建立最大堆積"/></p></div><div><p><b class="scene_desc">輸出</b><br/><img src="scene_2.svg" alt="建立堆積 | 輸出" title="建立堆積 | 輸出"/></p></div>';
document.getElementById('complexity').innerHTML = '<img src="../../../icons/complexity/linear.svg" />';
document.getElementById('prerequisites').innerHTML = '<img src="../../icons/algorithms/downheap_simulation.svg" width="60"/><img src="../../icons/algorithms/insertion.svg" width="60"/>';
MathJax.Hub.Queue(["Typeset",MathJax.Hub]);};