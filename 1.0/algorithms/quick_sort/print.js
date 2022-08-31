window.onload = function () {
document.getElementById('variable').innerHTML = '<tr><th class="scene_desc" colspan="3">データ</th></tr><tr><td class="symbol"><img src="variable_A.svg" /></td><td>整數序列</td><td class="code">A</td></tr>';
document.getElementById('formula').innerHTML = '<tr><th class="scene_desc" colspan="3">輸入</th></tr><tr><td class="symbol"><img src="formula_in.svg" /></td><td>載入整數序列。</td><td class="code"></td></tr><tr><th class="scene_desc" colspan="3">クイックソート</th></tr><tr><td class="symbol"><img src="formula_partition.svg" /></td><td>分割區間。</td><td class="code">partition(A, l, r)</td></tr><tr><td class="symbol"><img src="formula_pivp.svg" /></td><td>指向分割的基準值。</td><td class="code">q</td></tr><tr><th class="scene_desc" colspan="3">輸出</th></tr><tr><td class="symbol"><img src="formula_out.svg" /></td><td>輸出排序完成的整數序列。</td><td class="code"></td></tr>';
document.getElementById('scene').innerHTML = '<div><p><b class="scene_desc">輸入</b><br/><img src="scene_0.svg" alt="クイックソート | 入力" title="快速排序法 | 輸入"/></p></div><div><p><b class="scene_desc">快速排序法</b><br/><img src="scene_1.svg" alt="クイックソート | クイックソート" title="快速排序法 | 快速排序法"/></p></div><div><p><b class="scene_desc">輸出</b><br/><img src="scene_2.svg" alt="クイックソート | 出力" title="快速排序法 | 輸出"/></p></div>';
};