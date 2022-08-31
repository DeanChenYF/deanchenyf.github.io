window.onload = function () {
document.getElementById('io_arrow').innerHTML = "&rarr;";
document.getElementById('level').innerHTML = "&#9733; &#9733; ";
document.getElementById('ptitle').innerHTML = "二元樹的追蹤：左子節點、父節點優先";
document.getElementById('ptitle_en').innerHTML = "Traversal on Binary Tree: Left Child-Parent First";
document.getElementById('input_comment').innerHTML = "二元樹<ul><li>節點數 N &le; 100,000</li></ul>";
document.getElementById('output_comment').innerHTML = "先走訪完左子樹，再走訪根節點，最後才走訪右子樹的追蹤方式";
document.getElementById('motivation').innerHTML = "　中序追蹤除了父、子節點的順序之外，也規定了兄弟節點之間的優先順序，這種追蹤方式在節點值具有大小關係的資料結構中，扮演非常重要的角色。";
document.getElementById('description').innerHTML = "請以滿足此條件的方式走訪二元樹的節點：先走訪完左子節點及其子孫節點，再走訪父節點，最後再走訪右子節點及其子孫節點。";
document.getElementById('input_panel').innerHTML = '<img src="../../problems/btree_inorder/input.svg" width="340"/>';
document.getElementById('output_panel').innerHTML = '<img src="../../problems/btree_inorder/output.svg" width="340"/>';
document.getElementById('algorithm_icon').innerHTML = '<img src="../../icons/algorithms/btree_inorder.svg" width="100"/>';
document.getElementById('atitle').innerHTML = "中序追蹤";
document.getElementById('atitle_en').innerHTML = "In-order Traversal";
document.getElementById('abstract').innerHTML = "　中序追蹤 （In-order Traversal）演算法會依左子樹、子樹的根節點、右子樹的順序走訪二元樹的節點。本節會在二元樹的各節點上寫下中序追蹤的走訪順序。";
document.getElementById('explanation').innerHTML = "　若以 inorder(u) 為走訪二元樹 t 的節點 u 的遞迴函式，則中序追蹤會先以 inorder(u　的左子節點 ) 走訪左子樹後，寫下 u 的走訪順序，再以 inorder(u 的右子節點 ) 走訪右子樹的節點。";
document.getElementById('note').innerHTML = "二元樹的追蹤會將每個節點各走訪一次，因此時間複雜度為 O(N)。";
document.getElementById('application').innerHTML = "　在中序追蹤演算法中，父節點的處理順序會在左子節點之後，右子節點之前。這項特點可以應用在依照值升冪排列且資料有大小關係的二元搜尋樹中存取元素的演算法。";
document.getElementById('structure').innerHTML = '<tr><td style="text-align:center;width:100"><img src="../../icons/structures/BT.svg" /><br/><br/></td><td class="frame">&nbsp;<img height="160" class="frame_svg" valign="middle" src="space_t.svg" />&nbsp;</td></tr><tr><td></td><td class="caption">二元樹</td></tr>';
document.getElementById('variable').innerHTML = '<tr><th class="scene_desc" colspan="3">データ</th></tr><tr><td class="symbol"><img src="variable_L.svg" /></td><td>走訪順序</td><td class="code">L</td></tr>';
document.getElementById('formula').innerHTML = '<tr><th class="scene_desc" colspan="3">追蹤二元樹</th></tr><tr><td class="symbol"><img src="formula_visit.svg" /></td><td>走訪節點並寫下走訪順序。</td><td class="code">L[u] &larr; time++</td></tr><tr><td class="symbol"><img src="formula_visited.svg" /></td><td>擴大已走訪的節點範圍。</td><td class="code">已在 L[u] 中寫下順序的節點</td></tr>';
document.getElementById('scheme').innerHTML = '<tr><td style="text-align:center;width:100"><img src="anim_qr.svg" width="80"/></td><td class="frame"><hr class="separator"/><img height="160" class="frame_svg" src="scheme_step1.svg" /><p class="caption">走訪節點。</p></td></tr>';
document.getElementById('scene').innerHTML = '<div><p><b class="scene_desc">追蹤二元樹</b><br/><img src="scene_0.svg" alt="中序追蹤 | 追蹤二元樹" title="中序追蹤 | 追蹤二元樹"/></p></div>';
document.getElementById('complexity').innerHTML = '<img src="../../../icons/complexity/linear.svg" />';
document.getElementById('prerequisites').innerHTML = '';
MathJax.Hub.Queue(["Typeset",MathJax.Hub]);};