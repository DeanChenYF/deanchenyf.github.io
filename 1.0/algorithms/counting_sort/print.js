window.onload = function () {
document.getElementById('variable').innerHTML = '<tr><th class="scene_desc" colspan="3">データ</th></tr><tr><td class="symbol"><img src="variable_A.svg" /></td><td>欲輸入的整數序列</td><td class="code">A</td></tr><tr><td class="symbol"><img src="variable_C.svg" /></td><td>各整數出現次數的累積和</td><td class="code">C</td></tr><tr><td class="symbol"><img src="variable_B.svg" /></td><td>排序完成的整數序列</td><td class="code">B</td></tr>';
document.getElementById('formula').innerHTML = '<tr><th class="scene_desc" colspan="3">輸入</th></tr><tr><td class="symbol"><img src="formula_in.svg" /></td><td>輸入整數序列。</td><td class="code"></td></tr><tr><th class="scene_desc" colspan="3">計算次數</th></tr><tr><td class="symbol"><img src="formula_inc.svg" /></td><td>將整數的出現次數加 1。</td><td class="code">C[A[i]]++</td></tr><tr><th class="scene_desc" colspan="3">計算出現次數的累積和</th></tr><tr><td class="symbol"><img src="formula_acc.svg" /></td><td>計算累積和。</td><td class="code">C[i] &larr; C[i] + C[i-1]</td></tr><tr><th class="scene_desc" colspan="3">移動到輸出陣列</th></tr><tr><td class="symbol"><img src="formula_dec.svg" /></td><td>將使用到的整數出現次數減 1。</td><td class="code">C[A[i]]--</td></tr><tr><td class="symbol"><img src="formula_cp.svg" /></td><td>以出現次數做為輸出陣列的索引，將輸入元素複製到對應位置。</td><td class="code">B[C[A[i]]] &larr; A[i]</td></tr><tr><th class="scene_desc" colspan="3">輸出</th></tr><tr><td class="symbol"><img src="formula_out.svg" /></td><td>輸出排序完成的整數序列。</td><td class="code"></td></tr>';
document.getElementById('scene').innerHTML = '<div><p><b class="scene_desc">輸入</b><br/><img src="scene_0.svg" alt="計數排序法 | 輸入" title="計數排序法 | 輸入"/></p></div><div><p><b class="scene_desc">計算次數</b><br/><img src="scene_1.svg" alt="計數排序法 | 計算次數" title="計數排序法 | 計算次數"/></p></div><div><p><b class="scene_desc">計算出現次數的累積和</b><br/><img src="scene_2.svg" alt="計數排序法 | 計算出現次數的累積和" title="計數排序法 | 計算出現次數的累積和"/></p></div><div><p><b class="scene_desc">移動到輸出陣列</b><br/><img src="scene_3.svg" alt="計數排序法 | 移動到輸出陣列" title="計數排序法 | 移動到輸出陣列"/></p></div><div><p><b class="scene_desc">輸出</b><br/><img src="scene_4.svg" alt="計數排序法 | 輸出" title="計數排序法 | 輸出"/></p></div>';
};