var variable_content = '<tr><th class="scene_desc" colspan="3">データ</th></tr><tr><td class="symbol"><img src="variable_A.svg" /></td><td>入力の整数の列</td><td class="code">A</td></tr><tr><td class="symbol"><img src="variable_AC.svg" /></td><td>整数の列の累積和</td><td class="code">AC</td></tr><tr><td class="symbol"><img src="variable_sum.svg" /></td><td>区間の和</td><td class="code">sum</td></tr>';
var formula_content = '<tr><th class="scene_desc" colspan="3">入力</th></tr><tr><td class="symbol"><img src="formula_input.svg" /></td><td>整数の列を読み込みます。</td><td class="code"></td></tr><tr><td class="symbol"><img src="formula_init.svg" /></td><td>累積和の先頭を0に初期化します。</td><td class="code">AC[0] &larr; 0</td></tr><tr><th class="scene_desc" colspan="3">累積和の生成</th></tr><tr><td class="symbol"><img src="formula_i.svg" /></td><td>１つ前の要素を加算していきます。</td><td class="code">AC[i] &larr; AC[i-1] + A[i]</td></tr><tr><th class="scene_desc" colspan="3">質問に対する処理</th></tr><tr><td class="symbol"><img src="formula_write.svg" /></td><td>区間の始点と終点から、和を計算します。</td><td class="code">sum &larr; AC[r] - AC[l-1]</td></tr><tr><td class="symbol"><img src="formula_segment.svg" /></td><td>指定された区間。</td><td class="code">区間[l, r]</td></tr><tr><td class="symbol"><img src="formula_lp.svg" /></td><td>区間の始点</td><td class="code">l</td></tr><tr><td class="symbol"><img src="formula_rp.svg" /></td><td>区間の終点。</td><td class="code">r</td></tr>';
