var variable_content = '<tr><th class="scene_desc" colspan="3">データ</th></tr><tr><td class="symbol"><img src="variable_nodeId.svg" /></td><td>ノード番号</td><td class="code">nodeId</td></tr>';
var formula_content = '<tr><th class="scene_desc" colspan="3">ソート</th></tr><tr><td class="symbol"><img src="formula_uv.svg" /></td><td>ノードを訪問します。</td><td class="code">color[u] &larr; GRAY</td></tr><tr><td class="symbol"><img src="formula_uf.svg" /></td><td>ノードの訪問を完了し、順序を確定します。</td><td class="code">color[v] &larr; BLACK</td></tr><tr><td class="symbol"><img src="formula_create.svg" /></td><td>順序が確定したノードをリストの先頭に追加します。</td><td class="code">list.insert(u)</td></tr><tr><td class="symbol"><img src="formula_visited.svg" /></td><td>訪問済みのノードのグループを拡張していきます。</td><td class="code">colorがGRAYのノード</td></tr><tr><td class="symbol"><img src="formula_finished.svg" /></td><td>完了済みのノードのグループを拡張していきます。</td><td class="code">colorがBLACKのノード</td></tr>';
