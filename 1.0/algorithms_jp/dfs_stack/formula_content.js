var variable_content = '<tr><th class="scene_desc" colspan="3">データ</th></tr><tr><td class="symbol"><img src="variable_color.svg" /></td><td>ノードの訪問状態</td><td class="code">color</td></tr>';
var formula_content = '<tr><th class="scene_desc" colspan="3">始点の決定</th></tr><tr><td class="symbol"><img src="formula_push.svg" /></td><td>始点をスタックに積みます。</td><td class="code">st.push(s)</td></tr><tr><th class="scene_desc" colspan="3">探索</th></tr><tr><td class="symbol"><img src="formula_vi.svg" /></td><td>ノードを訪問します。</td><td class="code">color[v] &larr; GRAY</td></tr><tr><td class="symbol"><img src="formula_push.svg" /></td><td>ノードをスタックに積みます。</td><td class="code">st.push(v)</td></tr><tr><td class="symbol"><img src="formula_ci.svg" /></td><td>ノードの訪問を完了します。</td><td class="code">color[u] &larr; BLACK</td></tr><tr><td class="symbol"><img src="formula_visited.svg" /></td><td>訪問したノードのグループを拡張していきます。</td><td class="code">colorがGRAYのノード</td></tr><tr><td class="symbol"><img src="formula_finished.svg" /></td><td>訪問が完了したノードのグループを拡張していきます。</td><td class="code">colorがBLACKのノード</td></tr>';
