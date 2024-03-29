window.onload = function () {
document.getElementById('io_arrow').innerHTML = "&rarr;";
document.getElementById('level').innerHTML = "&#9733; &#9734; ";
document.getElementById('ptitle').innerHTML = "當最大堆積的節點因更新而「使值變大」，要如何調整堆積？";
document.getElementById('ptitle_en').innerHTML = "Increasing Value of Heap Node";
document.getElementById('input_comment').innerHTML = "變更最大堆積的其中1個節點值<ul><li>堆積的節點數N &le; 100,000</li></ul>";
document.getElementById('output_comment').innerHTML = "調整後的最大堆積";
document.getElementById('motivation').innerHTML = "最大堆積（Max Heap）的特性是「所有父節點的值都大於（或等於）子節點的值」，因此當堆積中的某個節點值有變更時，必須與該節點的父節點及其他祖先節點做比較，重新調整堆積以符合最大堆積特性。";
document.getElementById('description').innerHTML = "變更最大堆積其中 1 個節點的值（值變大），並依最大堆積的特性，重新調整堆積。";
document.getElementById('input_panel').innerHTML = '<img src="../../problems/heap_increase/input.svg" width="340"/>';
document.getElementById('output_panel').innerHTML = '<img src="../../problems/heap_increase/output.svg" width="340"/>';
document.getElementById('algorithm_icon').innerHTML = '<img src="../../icons/algorithms/upheap_simulation.svg" width="100"/>';
document.getElementById('atitle').innerHTML = "Up Heap";
document.getElementById('atitle_en').innerHTML = "Up Heap";
document.getElementById('abstract').innerHTML = "本節將使用 1 個陣列變數來表示最大堆積。當最大堆積的節點值因更新而「變大」時，必須將該元素往根節點的方向移動，以確保堆積能夠繼續滿足最大堆積特性（max-heap property）。此操作就稱為 Up Heap。本節將以「互換」來移動元素。";
document.getElementById('explanation').innerHTML = "當最大堆積（Max Heap）的節點值因更新而變成較大值時（例如從 1 變成 25），應以該節點為起點，比較起點與父節點的值，若父節點的值小於起點的值，則進行互換。互換節點後，再以原本的父節點位置為新的起點，反覆進行以上操作。此處理會在父節點滿足最大堆積性質，或是根節點被設定為起點時結束。";
document.getElementById('note').innerHTML = "本節的作法是先比較父節點與子節點的值大小，再以 swap 函式進行互換。另一種作法是先將變更值的節點暫存在臨時變數中，讓值較小的祖先節點往下降，再以insertion 將暫存的節點插入適當位置。不論是使用swap還是insertion，各節點的移動範圍都會被限縮在完整二元樹的高度內，因此Up Heap的時間複雜度為 O(log N)。";
document.getElementById('application').innerHTML = "本節所進行的處理是用來實作優先佇列（Priority Queue）的一個零件。";
document.getElementById('structure').innerHTML = '<tr><td style="text-align:center;width:100"><img src="../../icons/structures/ACBT.svg" /><br/><br/></td><td class="frame">&nbsp;<img height="160" class="frame_svg" valign="middle" src="space_t.svg" />&nbsp;</td></tr><tr><td></td><td class="caption">此圖為最大堆積（所有父節點皆大於子節點）</td></tr>';
document.getElementById('variable').innerHTML = '<tr><th class="scene_desc" colspan="3">資料</th></tr><tr><td class="symbol"><img src="variable_A.svg" /></td><td>最大堆積的元素</td><td class="code">A</td></tr>';
document.getElementById('formula').innerHTML = '<tr><th class="scene_desc" colspan="3">輸入與初始化</th></tr><tr><td class="symbol"><img src="formula_input.svg" /></td><td>載入滿足最大堆積性質的整數序列。</td><td class="code"></td></tr><tr><th class="scene_desc" colspan="3">更新元素與 Up Heap</th></tr><tr><td class="symbol"><img src="formula_write.svg" /></td><td>將元素更新成較大的值。</td><td class="code">A[i] &larr; value</td></tr><tr><td class="symbol"><img src="formula_select.svg" /></td><td>檢查是否滿足最大堆積性質（子節點小於等於父節點）。</td><td class="code">if A[i] &le; A[parent(i)]:</td></tr><tr><td class="symbol"><img src="formula_pair.svg" /></td><td>將父、子節點的值互換。</td><td class="code">swap(A[i], A[parent(i)])</td></tr><tr><td class="symbol"><img src="formula_trace.svg" /></td><td>將更新後的節點往根節點的方向移動。</td><td class="code">i 的軌跡</td></tr>';
document.getElementById('scheme').innerHTML = '<tr><td style="text-align:center;width:100"><img src="anim_qr.svg" width="80"/></td><td class="frame"><hr class="separator"/><img height="160" class="frame_svg" src="scheme_step1.svg" /><p class="caption">比較父節點與子節點的值。</p><hr class="separator"/><img height="160" class="frame_svg" src="scheme_step2.svg" /><p class="caption">將父節點與子節點的值互換。</p></td></tr>';
document.getElementById('scene').innerHTML = '<div><p><b class="scene_desc">輸入與初始化</b><br/><img src="scene_0.svg" alt="Up Heap | 輸入與初始化" title="Up Heap | 輸入與初始化"/></p></div><div><p><b class="scene_desc">更新元素與 Up Heap</b><br/><img src="scene_1.svg" alt="Up Heap | 更新元素與 Up Heap" title="Up Heap | 更新元素與 Up Heap"/></p></div>';
document.getElementById('complexity').innerHTML = '<img src="../../../icons/complexity/log.svg" />';
document.getElementById('prerequisites').innerHTML = '<img src="../../icons/algorithms/swap.svg" width="60"/>';
MathJax.Hub.Queue(["Typeset",MathJax.Hub]);};