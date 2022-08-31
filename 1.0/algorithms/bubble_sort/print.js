window.onload = function () {
document.getElementById('variable').innerHTML = '<tr><th class="scene_desc" colspan="3">資料</th></tr><tr><td class="symbol"><img src="variable_A.svg" /></td><td>整數序列</td><td class="code">A</td></tr>';
document.getElementById('formula').innerHTML = '<tr><th class="scene_desc" colspan="3">輸入</th></tr><tr><td class="symbol"><img src="formula_in.svg" /></td><td>輸入整數序列。</td><td class="code"></td></tr><tr><th class="scene_desc" colspan="3">排序</th></tr><tr><td class="symbol"><img src="formula_comp.svg" /></td><td>比較相鄰元素的大小。</td><td class="code">if A[j-1] &gt; A[j]:</td></tr><tr><td class="symbol"><img src="formula_swap.svg" /></td><td>將 2 個元素互換。</td><td class="code">swap(A[j-1], A[j])</td></tr><tr><td class="symbol"><img src="formula_sorted.svg" /></td><td>擴大已排序完成的範圍。</td><td class="code">区間[0, i)</td></tr><tr><td class="symbol"><img src="formula_unsorted.svg" /></td><td>由後往前擴大已和相鄰元素比較過的元素範圍。</td><td class="code">区間[j-1, N)</td></tr><tr><th class="scene_desc" colspan="3">輸出</th></tr><tr><td class="symbol"><img src="formula_out.svg" /></td><td>輸出排序完成的整數序列。</td><td class="code"></td></tr>';
document.getElementById('scene').innerHTML = '<div><p><b class="scene_desc">輸入</b><br/><img src="scene_0.svg" alt="氣泡排序法 | 輸入" title="氣泡排序法 | 輸入"/></p></div><div><p><b class="scene_desc">排序</b><br/><img src="scene_1.svg" alt="氣泡排序法 | 排序" title="氣泡排序法 | 排序"/></p></div><div><p><b class="scene_desc">輸出</b><br/><img src="scene_2.svg" alt="氣泡排序法 | 輸出" title="氣泡排序法 | 輸出"/></p></div>';
};