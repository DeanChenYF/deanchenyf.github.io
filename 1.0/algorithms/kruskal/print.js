window.onload = function () {
document.getElementById('variable').innerHTML = '<tr><th class="scene_desc" colspan="3">データ</th></tr><tr><td class="symbol"><img src="variable_weight.svg" /></td><td>節點間的距離</td><td class="code">weight</td></tr>';
document.getElementById('formula').innerHTML = '<tr><th class="scene_desc" colspan="3">排序</th></tr><tr><td class="symbol"><img src="formula_sort.svg" /></td><td>將各邊按權重大小以升冪方式排序。</td><td class="code"></td></tr><tr><th class="scene_desc" colspan="3">新增邊</th></tr><tr><td class="symbol"><img src="formula_connect.svg" /></td><td>將邊新增到最小生成樹內。</td><td class="code">將 e 新增至 MST 內</td></tr><tr><td class="symbol"><img src="formula_check_pair.svg" /></td><td>標示出考慮要新增的邊。</td><td class="code">u, v</td></tr><tr><td class="symbol"><img src="formula_edges.svg" /></td><td>標示最小生成樹內的邊。</td><td class="code">已在 MST 內的邊</td></tr><tr><td class="symbol"><img src="formula_mst.svg" /></td><td>擴大已在最小生成樹內的節點範圍。</td><td class="code">已在 MST 內的節點</td></tr>';
document.getElementById('scene').innerHTML = '<div><p><b class="scene_desc">排序</b><br/><img src="scene_0.svg" alt="克魯斯克爾演算法 | 排序" title="克魯斯克爾演算法 | 排序"/></p></div><div><p><b class="scene_desc">新增邊</b><br/><img src="scene_1.svg" alt="克魯斯克爾演算法 | 新增邊" title="克魯斯克爾演算法 | 新增邊"/></p></div>';
};