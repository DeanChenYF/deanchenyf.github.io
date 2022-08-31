window.onload = function () {
document.getElementById('variable').innerHTML = '<tr><th class="scene_desc" colspan="3">データ</th></tr><tr><td class="symbol"><img src="variable_A.svg" /></td><td>整数の列</td><td class="code">A</td></tr><tr><td class="symbol"><img src="variable_t.svg" /></td><td>一時的に保存された挿入する値</td><td class="code">t</td></tr>';
document.getElementById('formula').innerHTML = '<tr><th class="scene_desc" colspan="3">入力</th></tr><tr><td class="symbol"><img src="formula_in.svg" /></td><td>整数の列を入力します。</td><td class="code"></td></tr><tr><td class="symbol"><img src="formula_b.svg" /></td><td>挿入する値を一時的に退避します。</td><td class="code"></td></tr><tr><th class="scene_desc" colspan="3">挿入</th></tr><tr><td class="symbol"><img src="formula_select.svg" /></td><td>現在の値と挿入する値を比べます。</td><td class="code">if A[j] > t:</td></tr><tr><td class="symbol"><img src="formula_cp.svg" /></td><td>挿入する値より大きく、後方へ移動する要素を指します。</td><td class="code">j</td></tr><tr><td class="symbol"><img src="formula_jp.svg" /></td><td>前方の値で上書きします。</td><td class="code">A[j+1] &larr; A[j]</td></tr><tr><td class="symbol"><img src="formula_sorted.svg" /></td><td>整列済みの範囲を拡張していきます。</td><td class="code">区間[j+1, N)</td></tr><tr><th class="scene_desc" colspan="3">出力</th></tr><tr><td class="symbol"><img src="formula_out.svg" /></td><td>数列を出力します。</td><td class="code"></td></tr>';
document.getElementById('scene').innerHTML = '<div><p><b class="scene_desc">入力</b><br/><img src="scene_0.svg" alt="挿入 | 入力" title="挿入 | 入力"/></p></div><div><p><b class="scene_desc">挿入</b><br/><img src="scene_1.svg" alt="挿入 | 挿入" title="挿入 | 挿入"/></p></div><div><p><b class="scene_desc">出力</b><br/><img src="scene_2.svg" alt="挿入 | 出力" title="挿入 | 出力"/></p></div>';
};