window.onload = function () {
document.getElementById('variable').innerHTML = '<tr><th class="scene_desc" colspan="3">データ</th></tr><tr><td class="symbol"><img src="variable_L.svg" /></td><td>訪問した順番</td><td class="code">L</td></tr>';
document.getElementById('formula').innerHTML = '<tr><th class="scene_desc" colspan="3">二分木の巡回</th></tr><tr><td class="symbol"><img src="formula_visit.svg" /></td><td>ノードを訪問して順番のラベルをつけます。</td><td class="code">L[u] &larr; time++</td></tr><tr><td class="symbol"><img src="formula_visited.svg" /></td><td>訪問済みのノードを拡張していきます。</td><td class="code">L[u]が設定されたノード</td></tr>';
document.getElementById('scene').innerHTML = '<div><p><b class="scene_desc">二分木の巡回</b><br/><img src="scene_0.svg" alt="中間順巡回 | 二分木の巡回" title="中間順巡回 | 二分木の巡回"/></p></div>';
};