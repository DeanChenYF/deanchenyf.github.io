window.onload = function () {
document.getElementById('variable').innerHTML = '<tr><th class="scene_desc" colspan="3">データ</th></tr><tr><td class="symbol"><img src="variable_color.svg" /></td><td>ノードの訪問状態</td><td class="code">color</td></tr>';
document.getElementById('formula').innerHTML = '<tr><th class="scene_desc" colspan="3">深さ優先探索</th></tr><tr><td class="symbol"><img src="formula_ui.svg" /></td><td>ノードを訪問します。</td><td class="code">color[u] &larr; GRAY</td></tr><tr><td class="symbol"><img src="formula_fi.svg" /></td><td>ノードの訪問を完了します。</td><td class="code">color[u] &larr; BLACK</td></tr><tr><td class="symbol"><img src="formula_bi.svg" /></td><td>バックエッジを検出します。</td><td class="code"></td></tr><tr><td class="symbol"><img src="formula_backEdge.svg" /></td><td>バックエッジを表します。</td><td class="code"></td></tr><tr><td class="symbol"><img src="formula_visited.svg" /></td><td>訪問したノードのグループを拡張していきます。</td><td class="code">colorがGRAYのノード</td></tr><tr><td class="symbol"><img src="formula_finished.svg" /></td><td>訪問が完了したノードのグループを拡張していきます。</td><td class="code">colorがBLACKのノード</td></tr>';
document.getElementById('scene').innerHTML = '<div><p><b class="scene_desc">深さ優先探索</b><br/><img src="scene_0.svg" alt="DFSによる閉路検知 | 深さ優先探索" title="DFSによる閉路検知 | 深さ優先探索"/></p></div>';
};