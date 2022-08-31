window.onload = function () {
document.getElementById('variable').innerHTML = '<tr><th class="scene_desc" colspan="3">データ</th></tr><tr><td class="symbol"><img src="variable_A.svg" /></td><td>整数の列</td><td class="code">A</td></tr>';
document.getElementById('formula').innerHTML = '<tr><th class="scene_desc" colspan="3">入力</th></tr><tr><td class="symbol"><img src="formula_in.svg" /></td><td>整数の列を読み込みます。</td><td class="code"></td></tr><tr><th class="scene_desc" colspan="3">クイックソート</th></tr><tr><td class="symbol"><img src="formula_partition.svg" /></td><td>区間を分割します。</td><td class="code">partition(A, l, r)</td></tr><tr><td class="symbol"><img src="formula_pivp.svg" /></td><td>分割の基準値を指します。</td><td class="code">q</td></tr><tr><th class="scene_desc" colspan="3">出力</th></tr><tr><td class="symbol"><img src="formula_out.svg" /></td><td>整列された整数の列を出力します。</td><td class="code"></td></tr>';
document.getElementById('scene').innerHTML = '<div><p><b class="scene_desc">入力</b><br/><img src="scene_0.svg" alt="クイックソート | 入力" title="クイックソート | 入力"/></p></div><div><p><b class="scene_desc">クイックソート</b><br/><img src="scene_1.svg" alt="クイックソート | クイックソート" title="クイックソート | クイックソート"/></p></div><div><p><b class="scene_desc">出力</b><br/><img src="scene_2.svg" alt="クイックソート | 出力" title="クイックソート | 出力"/></p></div>';
};