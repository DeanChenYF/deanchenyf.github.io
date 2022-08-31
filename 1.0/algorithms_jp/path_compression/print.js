window.onload = function () {
document.getElementById('variable').innerHTML = '<tr><th class="scene_desc" colspan="3">データ</th></tr>';
document.getElementById('formula').innerHTML = '<tr><th class="scene_desc" colspan="3">経路圧縮</th></tr><tr><td class="symbol"><img src="formula_parse.svg" /></td><td>根までの経路を探索します。</td><td class="code">compress(x)</td></tr><tr><td class="symbol"><img src="formula_update.svg" /></td><td>親を更新します。</td><td class="code">parent[x] &larr; compress(parent[x])</td></tr><tr><td class="symbol"><img src="formula_path.svg" /></td><td>圧縮する経路</td><td class="code"></td></tr>';
document.getElementById('scene').innerHTML = '<div><p><b class="scene_desc">経路圧縮</b><br/><img src="scene_0.svg" alt="経路圧縮 | 経路圧縮" title="経路圧縮 | 経路圧縮"/></p></div>';
};