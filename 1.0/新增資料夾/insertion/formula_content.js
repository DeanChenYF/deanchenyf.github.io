var variable_content = '<tr><th class="scene_desc" colspan="3">資料</th></tr><tr><td class="symbol"><img src="variable_A.svg" /></td><td>整數序列</td><td class="code">A</td></tr><tr><td class="symbol"><img src="variable_t.svg" /></td><td>暫時存放要插入的值</td><td class="code">t</td></tr>';
var formula_content = '<tr><th class="scene_desc" colspan="3">輸入</th></tr><tr><td class="symbol"><img src="formula_in.svg" /></td><td>輸入整數序列。</td><td class="code"></td></tr><tr><td class="symbol"><img src="formula_b.svg" /></td><td>暫時存放插入值。</td><td class="code"></td></tr><tr><th class="scene_desc" colspan="3">插入</th></tr><tr><td class="symbol"><img src="formula_select.svg" /></td><td>比較目前位置的值與插入值</td><td class="code">if A[j] > t:</td></tr><tr><td class="symbol"><img src="formula_cp.svg" /></td><td>表示目前位置的值比插入值大，因此要將該值往後方移動。</td><td class="code">j</td></tr><tr><td class="symbol"><img src="formula_jp.svg" /></td><td>用前 1 個元素的值覆蓋掉原本的值。</td><td class="code">A[j+1] &larr; A[j]</td></tr><tr><td class="symbol"><img src="formula_sorted.svg" /></td><td>擴大已排序完成的範圍。</td><td class="code">區間[j+1, N)</td></tr><tr><th class="scene_desc" colspan="3">輸出</th></tr><tr><td class="symbol"><img src="formula_out.svg" /></td><td>輸出排序完成的序列。</td><td class="code"></td></tr>';
