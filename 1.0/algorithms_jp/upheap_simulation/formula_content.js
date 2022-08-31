var variable_content = '<tr><th class="scene_desc" colspan="3">データ</th></tr><tr><td class="symbol"><img src="variable_A.svg" /></td><td>最大ヒープの要素</td><td class="code">A</td></tr>';
var formula_content = '<tr><th class="scene_desc" colspan="3">入力・初期化</th></tr><tr><td class="symbol"><img src="formula_input.svg" /></td><td>最大ヒープ条件を満たす整数の列を読み込みます。</td><td class="code"></td></tr><tr><th class="scene_desc" colspan="3">要素の更新とアップヒープ</th></tr><tr><td class="symbol"><img src="formula_write.svg" /></td><td>要素をより大きい値に更新します。</td><td class="code">A[i] &larr; value</td></tr><tr><td class="symbol"><img src="formula_select.svg" /></td><td>ヒープ条件を満たすかどうかをチェックします。</td><td class="code">if A[i] &le; A[parent(i)]:</td></tr><tr><td class="symbol"><img src="formula_pair.svg" /></td><td>親子の値をスワップします。</td><td class="code">swap(A[i], A[parent(i)])</td></tr><tr><td class="symbol"><img src="formula_trace.svg" /></td><td>更新された要素が根に向かって移動していきます。</td><td class="code">iの軌跡</td></tr>';
