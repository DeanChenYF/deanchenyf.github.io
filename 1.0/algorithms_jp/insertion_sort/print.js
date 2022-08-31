window.onload = function () {
document.getElementById('variable').innerHTML = '<tr><th class="scene_desc" colspan="3">データ</th></tr><tr><td class="symbol"><img src="variable_A.svg" /></td><td>整数の列</td><td class="code">A</td></tr>';
document.getElementById('formula').innerHTML = '<tr><th class="scene_desc" colspan="3">入力</th></tr><tr><td class="symbol"><img src="formula_in.svg" /></td><td>整数の列を入力します。</td><td class="code"></td></tr><tr><th class="scene_desc" colspan="3">整列</th></tr><tr><td class="symbol"><img src="formula_insertion.svg" /></td><td>insertionを実行します。</td><td class="code">insertion(0, j)</td></tr><tr><td class="symbol"><img src="formula_sorted.svg" /></td><td>整列済みの範囲を拡張していきます。</td><td class="code">区間[0, i)</td></tr><tr><th class="scene_desc" colspan="3">出力</th></tr><tr><td class="symbol"><img src="formula_out.svg" /></td><td>整列された整数の列を出力します。</td><td class="code"></td></tr>';
document.getElementById('scene').innerHTML = '<div><p><b class="scene_desc">入力</b><br/><img src="scene_0.svg" alt="挿入ソート | 入力" title="挿入ソート | 入力"/></p></div><div><p><b class="scene_desc">整列</b><br/><img src="scene_1.svg" alt="挿入ソート | 整列" title="挿入ソート | 整列"/></p></div><div><p><b class="scene_desc">出力</b><br/><img src="scene_2.svg" alt="挿入ソート | 出力" title="挿入ソート | 出力"/></p></div>';
};