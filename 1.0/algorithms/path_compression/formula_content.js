var variable_content = '<tr><th class="scene_desc" colspan="3">データ</th></tr>';
var formula_content = '<tr><th class="scene_desc" colspan="3">路徑壓縮</th></tr><tr><td class="symbol"><img src="formula_parse.svg" /></td><td>搜尋從起點到根節點的路徑。</td><td class="code">compress(x)</td></tr><tr><td class="symbol"><img src="formula_update.svg" /></td><td>更新父節點。</td><td class="code">parent[x] &larr; compress(parent[x])</td></tr><tr><td class="symbol"><img src="formula_path.svg" /></td><td>要壓縮的路徑</td><td class="code"></td></tr>';