window.onload = function () {
document.getElementById('variable').innerHTML = '<tr><th class="scene_desc" colspan="3">データ</th></tr><tr><td class="symbol"><img src="variable_a.svg" /></td><td>第 1 個變數</td><td class="code">a</td></tr><tr><td class="symbol"><img src="variable_b.svg" /></td><td>輸入 2 個變數值</td><td class="code">b</td></tr><tr><td class="symbol"><img src="variable_t.svg" /></td><td>暫存用的變數</td><td class="code">t</td></tr>';
document.getElementById('formula').innerHTML = '<tr><th class="scene_desc" colspan="3">入力</th></tr><tr><td class="symbol"><img src="formula_ina.svg" /></td><td>載入 2 個變數值。</td><td class="code"></td></tr><tr><th class="scene_desc" colspan="3">互換</th></tr><tr><td class="symbol"><img src="formula_ai.svg" /></td><td>在變數中寫入另一個變數值。</td><td class="code">t &larr; a<br/>a &larr; b<br/>b &larr; t</td></tr><tr><th class="scene_desc" colspan="3">輸出</th></tr><tr><td class="symbol"><img src="formula_outa.svg" /></td><td>輸出互換後的變數值。</td><td class="code"></td></tr>';
document.getElementById('scene').innerHTML = '<div><p><b class="scene_desc">輸入</b><br/><img src="scene_0.svg" alt="互換 | 輸入" title="スワップ | 入力"/></p></div><div><p><b class="scene_desc">スワップ</b><br/><img src="scene_1.svg" alt="互換 | 互換" title="互換 | 互換"/></p></div><div><p><b class="scene_desc">輸出</b><br/><img src="scene_2.svg" alt="互換 | 輸出" title="互換 | 輸出"/></p></div>';
};