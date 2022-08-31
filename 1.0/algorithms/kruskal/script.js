window.onload = function () {
document.getElementById('io_arrow').innerHTML = "&rarr;";
document.getElementById('level').innerHTML = "&#9733; &#9733; &#9733; ";
document.getElementById('ptitle').innerHTML = "最小生成樹";
document.getElementById('ptitle_en').innerHTML = "Minimum Spanning Tree";
document.getElementById('input_comment').innerHTML = "加權無向圖<ul><li>節點數 N &le; 100,000</li><li>邊數 M &le; 100,000</li></ul>";
document.getElementById('output_comment').innerHTML = "最小生成樹";
document.getElementById('motivation').innerHTML = "給定一個較大的圖形，求出最小生成樹。";
document.getElementById('description').innerHTML = "請從加權無向圖中找出最小生成樹。";
document.getElementById('input_panel').innerHTML = '<img src="../../problems/minimum_spanning_tree/input.svg" width="340"/>';
document.getElementById('output_panel').innerHTML = '<img src="../../problems/minimum_spanning_tree/output.svg" width="340"/>';
document.getElementById('algorithm_icon').innerHTML = '<img src="../../icons/algorithms/kruskal.svg" width="100"/>';
document.getElementById('atitle').innerHTML = "克魯斯克爾演算法";
document.getElementById('atitle_en').innerHTML = "Kruskal's Algorithm";
document.getElementById('abstract').innerHTML = "克魯斯克爾演算法（Kruskal's Algorithm）是藉由管理互不相交集合的概念，一次挑選一條邊新增到生成樹當中。";
document.getElementById('explanation').innerHTML = "克魯斯克爾演算法（Kruskal's Algorithm）的第一步是將圖形中所有邊按照權重大小以升冪方式排序。接著再根據權重大小，由小而大依序選擇邊 (u, v)。若 u 與 v 分屬不同集合，則將兩者所屬集合合併，並新增 (u, v) 到最小生成樹內。若 u 與 v 同屬一個集合，則表示新增此邊會造成圖形中出現迴路，因此必須捨棄此邊，並按照排序結果選擇下一條邊。克魯斯克爾演算法會在新增邊數達到 N-1 時結束。";
document.getElementById('note').innerHTML = "克魯斯克爾演算法的時間複雜度會受到對邊使用的排序演算法影響。若使用速度較快的快速排序法或合併排序法等，則時間複雜度為 O(M log M)。";
document.getElementById('application').innerHTML = "不同於實作時間複雜度為 O(N<sup>2</sup>) 的普林演算法，克魯斯克爾演算法適用於從大型圖形中尋找最小生成樹的問題上。";
document.getElementById('structure').innerHTML = '<tr><td style="text-align:center;width:100"><img src="../../icons/structures/GR.svg" /><br/><br/></td><td class="frame">&nbsp;<img height="160" class="frame_svg" valign="middle" src="space_st.svg" />&nbsp;</td></tr><tr><td></td><td class="caption">加權無向圖</td></tr>';
document.getElementById('variable').innerHTML = '<tr><th class="scene_desc" colspan="3">データ</th></tr><tr><td class="symbol"><img src="variable_weight.svg" /></td><td>節點間的距離</td><td class="code">weight</td></tr>';
document.getElementById('formula').innerHTML = '<tr><th class="scene_desc" colspan="3">排序</th></tr><tr><td class="symbol"><img src="formula_sort.svg" /></td><td>將各邊按權重大小以升冪方式排序。</td><td class="code"></td></tr><tr><th class="scene_desc" colspan="3">新增邊</th></tr><tr><td class="symbol"><img src="formula_connect.svg" /></td><td>將邊新增到最小生成樹內。</td><td class="code">將 e 新增至 MST 內</td></tr><tr><td class="symbol"><img src="formula_check_pair.svg" /></td><td>標示出考慮要新增的邊。</td><td class="code">u, v</td></tr><tr><td class="symbol"><img src="formula_edges.svg" /></td><td>標示最小生成樹內的邊。</td><td class="code">已在 MST 內的邊</td></tr><tr><td class="symbol"><img src="formula_mst.svg" /></td><td>擴大已在最小生成樹內的節點範圍。</td><td class="code">已在 MST 內的節點</td></tr>';
document.getElementById('scheme').innerHTML = '<tr><td style="text-align:center;width:100"><img src="anim_qr.svg" width="80"/></td><td class="frame"><hr class="separator"/><img height="160" class="frame_svg" src="scheme_step1.svg" /><p class="caption">檢查是否可以新增此邊。</p><hr class="separator"/><img height="160" class="frame_svg" src="scheme_step2.svg" /><p class="caption">新增邊並合併集合。</p></td></tr>';
document.getElementById('scene').innerHTML = '<div><p><b class="scene_desc">排序</b><br/><img src="scene_0.svg" alt="克魯斯克爾演算法 | 排序" title="克魯斯克爾演算法 | 排序"/></p></div><div><p><b class="scene_desc">新增邊</b><br/><img src="scene_1.svg" alt="克魯斯克爾演算法 | 新增邊" title="克魯斯克爾演算法 | 新增邊"/></p></div>';
document.getElementById('complexity').innerHTML = '<img src="../../../icons/complexity/linear_log.svg" />';
document.getElementById('prerequisites').innerHTML = '<img src="../../icons/algorithms/disjoint_set_simulation.svg" width="60"/><img src="../../icons/algorithms/quick_sort.svg" width="60"/>';
MathJax.Hub.Queue(["Typeset",MathJax.Hub]);};