var variable_content = '<tr><th class="scene_desc" colspan="3">資料</th></tr><tr><td class="symbol"><img src="variable_A.svg" /></td><td>重疊的線段數</td><td class="code">A</td></tr>';
var formula_content = '<tr><th class="scene_desc" colspan="3">新增線段</th></tr><tr><td class="symbol"><img src="formula_bw.svg" /></td><td>線段放進來時， 起點座標陣列值加 1。</td><td class="code">A[b]++</td></tr><tr><td class="symbol"><img src="formula_ew.svg" /></td><td>線段放進來時， 終點座標陣列值減 1。</td><td class="code">A[e]--</td></tr><tr><th class="scene_desc" colspan="3">計算累積和</th></tr><tr><td class="symbol"><img src="formula_cur.svg" /></td><td>由陣列前端開始，逐一累加元素。</td><td class="code">A[i] &larr; A[i] + A[i-1]</td></tr>';
