window.onload = function () {
document.getElementById('io_arrow').innerHTML = "&rarr;";
document.getElementById('level').innerHTML = "&#9733; &#9733; &#9734; ";
document.getElementById('ptitle').innerHTML = "最短距離";
document.getElementById('ptitle_en').innerHTML = "Shortest Distance";
document.getElementById('input_comment').innerHTML = "圖形與起點<ul><li>節點數 N  &le; 100,000</li><li>邊數 M &le; 100,000</li></ul>";
document.getElementById('output_comment').innerHTML = "起點到各節點的最短距離";
document.getElementById('motivation').innerHTML = "圖形中最令人感興趣的就是各節點之間的距離。在無權重的圖形中，從一個節點抵達另一個節點所需要的最少邊數，是該圖形的一個重要特色。";
document.getElementById('description').innerHTML = "請找出從起點到各個節點的最短距離。此處的距離指的是走過的邊數。";
document.getElementById('input_panel').innerHTML = '<img src="../../problems/shortest_step/input.svg" width="340"/>';
document.getElementById('output_panel').innerHTML = '<img src="../../problems/shortest_step/output.svg" width="340"/>';
document.getElementById('algorithm_icon').innerHTML = '<img src="../../icons/algorithms/bfs_dp.svg" width="100"/>';
document.getElementById('atitle').innerHTML = "利用廣度優先搜尋計算距離";
document.getElementById('atitle_en').innerHTML = "BFS for Shortest Distance";
document.getElementById('abstract').innerHTML = "由於廣度優先搜尋會由近而遠依序確認從起點到各個節點的距離，因此我們可利用已先確定距離的節點資訊，使其餘節點的距離計算更有效率。";
document.getElementById('explanation').innerHTML = "假設包含起點節點的層為層 0、包含與起點距離為 1 的節點的層為層 1、......，以此類推，則廣度優先搜尋會在走訪層 k+1 之前，先走訪完層 k 的所有節點。由於廣度優先搜尋會從與起點最近的節點開始，依序從佇列中取出節點，因此若從佇列中取出的節點u 有相鄰且未走訪過的節點 v，則節點 v 的距離可以由起點到 u 的距離，加上 u 到 v 的距離（連接兩者的邊數） 1 來求出。";
document.getElementById('note').innerHTML = "若圖形是以相鄰串列建立而成，則利用廣度優先搜尋求取距離的時間複雜度為O(N+M)。";
document.getElementById('application').innerHTML = "圖形中的最短距離問題，是最多應用程式會碰到的問題。由於廣度優先搜尋的時間複雜度與節點數及邊數成正比，是效率較佳的演算法，因此應用範圍很廣。此外，當圖形的邊上有權重時，只要將此演算法稍做修改，將佇列換成優先佇列，並在計算距離時將權重考慮在內，即可求出帶有權重的最短路徑（shortest path）。我們會在第 26 章詳細解說這個演算法。";
document.getElementById('structure').innerHTML = '<tr><td style="text-align:center;width:100"><img src="../../icons/structures/GR.svg" /><br/><br/></td><td class="frame">&nbsp;<img height="160" class="frame_svg" valign="middle" src="space_g.svg" />&nbsp;</td></tr><tr><td></td><td class="caption">無向圖</td></tr>';
document.getElementById('variable').innerHTML = '<tr><th class="scene_desc" colspan="3">データ</th></tr><tr><td class="symbol"><img src="variable_dist.svg" /></td><td>從起點出發的最短距離</td><td class="code">dist</td></tr>';
document.getElementById('formula').innerHTML = '<tr><th class="scene_desc" colspan="3">初始化起點</th></tr><tr><td class="symbol"><img src="formula_si.svg" /></td><td>將起點的最短距離初始化為 0。</td><td class="code">dist[s] &larr; 0</td></tr><tr><th class="scene_desc" colspan="3">廣度優先搜尋</th></tr><tr><td class="symbol"><img src="formula_vi.svg" /></td><td>更新最短距離。</td><td class="code">dist[v] &larr; dist[u] + 1</td></tr>';
document.getElementById('scheme').innerHTML = '<tr><td style="text-align:center;width:100"><img src="anim_qr.svg" width="80"/></td><td class="frame"><hr class="separator"/><img height="160" class="frame_svg" src="scheme_dp.svg" /><p class="caption">更新最短距離。</p></td></tr>';
document.getElementById('scene').innerHTML = '<div><p><b class="scene_desc">初始化起點</b><br/><img src="scene_0.svg" alt="利用廣度優先搜尋計算距離 | 初始化起點" title="利用廣度優先搜尋計算距離 | 初始化起點"/></p></div><div><p><b class="scene_desc">廣度優先搜尋</b><br/><img src="scene_1.svg" alt="利用廣度優先搜尋計算距離 | 廣度優先搜尋" title="利用廣度優先搜尋計算距離 | 廣度優先搜尋"/></p></div>';
document.getElementById('complexity').innerHTML = '<img src="../../../icons/complexity/linear.svg" />';
document.getElementById('prerequisites').innerHTML = '<img src="../../icons/algorithms/bfs_queue.svg" width="60"/>';
MathJax.Hub.Queue(["Typeset",MathJax.Hub]);};