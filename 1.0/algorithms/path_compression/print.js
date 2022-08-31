window.onload = function () {
document.getElementById('variable').innerHTML = '<tr><th class="scene_desc" colspan="3">データ</th></tr>';
document.getElementById('formula').innerHTML = '<tr><th class="scene_desc" colspan="3">路徑壓縮</th></tr><tr><td class="symbol"><img src="formula_parse.svg" /></td><td>搜尋從起點到根節點的路徑。</td><td class="code">compress(x)</td></tr><tr><td class="symbol"><img src="formula_update.svg" /></td><td>更新父節點。</td><td class="code">parent[x] &larr; compress(parent[x])</td></tr><tr><td class="symbol"><img src="formula_path.svg" /></td><td>要壓縮的路徑</td><td class="code"></td></tr>';
document.getElementById('scene').innerHTML = '<div><p><b class="scene_desc">路徑壓縮</b><br/><img src="scene_0.svg" alt="路徑壓縮 | 路徑壓縮" title="路徑壓縮 | 路徑壓縮"/></p></div>';
};