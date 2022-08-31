window.onload = function () {
document.getElementById('variable').innerHTML = '<tr><th class="scene_desc" colspan="3">データ</th></tr><tr><td class="symbol"><img src="variable_A.svg" /></td><td>整数の列</td><td class="code">A</td></tr>';
document.getElementById('formula').innerHTML = '<tr><th class="scene_desc" colspan="3">入力</th></tr><tr><td class="symbol"><img src="formula_in.svg" /></td><td>整数の列を読み込みます。</td><td class="code"></td></tr><tr><th class="scene_desc" colspan="3">分割</th></tr><tr><td class="symbol"><img src="formula_select.svg" /></td><td>基準値と比較します。</td><td class="code">if A[j] < A[r]:</td></tr><tr><td class="symbol"><img src="formula_swap.svg" /></td><td>大きいグループの先頭とスワップします。</td><td class="code">swap(A[i], A[j])</td></tr><tr><td class="symbol"><img src="formula_smallGroup.svg" /></td><td>基準より小さい要素を含むグループを拡張していきます。</td><td class="code">区間[l, i]</td></tr><tr><td class="symbol"><img src="formula_largeGroup.svg" /></td><td>基準より大きい要素を含むグループを拡張していきます。</td><td class="code">区間[i+1, j]</td></tr><tr><td class="symbol"><img src="formula_pi.svg" /></td><td>基準より小さい要素を含むグループの右端を指します。</td><td class="code">i</td></tr><tr><td class="symbol"><img src="formula_pj.svg" /></td><td>基準より大きい要素を含むグループの右端を指します。</td><td class="code">j</td></tr><tr><th class="scene_desc" colspan="3">出力</th></tr><tr><td class="symbol"><img src="formula_out.svg" /></td><td>グループ分けされた整数の列を出力します。</td><td class="code"></td></tr>';
document.getElementById('scene').innerHTML = '<div><p><b class="scene_desc">入力</b><br/><img src="scene_0.svg" alt="分割 | 入力" title="分割 | 入力"/></p></div><div><p><b class="scene_desc">分割</b><br/><img src="scene_1.svg" alt="分割 | 分割" title="分割 | 分割"/></p></div><div><p><b class="scene_desc">出力</b><br/><img src="scene_2.svg" alt="分割 | 出力" title="分割 | 出力"/></p></div>';
};