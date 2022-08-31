window.onload = function () {
document.getElementById('variable').innerHTML = '<tr><th class="scene_desc" colspan="3">データ</th></tr><tr><td class="symbol"><img src="variable_L.svg" /></td><td>走訪順序</td><td class="code">L</td></tr>';
document.getElementById('formula').innerHTML = '<tr><th class="scene_desc" colspan="3">追蹤二元樹</th></tr><tr><td class="symbol"><img src="formula_visit.svg" /></td><td>走訪節點並寫下走訪順序。</td><td class="code">L[u] &larr; time++</td></tr><tr><td class="symbol"><img src="formula_visited.svg" /></td><td>擴大已走訪的節點範圍。</td><td class="code">已在 L[u] 中寫下順序的節點</td></tr>';
document.getElementById('scene').innerHTML = '<div><p><b class="scene_desc">追蹤二元樹</b><br/><img src="scene_0.svg" alt="後序追蹤 | 追蹤二元樹" title="後序追蹤 | 追蹤二元樹"/></p></div>';
};