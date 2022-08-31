window.onload = function () {
document.getElementById('variable').innerHTML = '<tr><th class="scene_desc" colspan="3">資料</th></tr><tr><td class="symbol"><img src="variable_P.svg" /></td><td>若 P [ i ]  為 1，則表示 i 為質數 的質數表</td><td class="code">P</td></tr>';
document.getElementById('formula').innerHTML = '<tr><th class="scene_desc" colspan="3">初始化</th></tr><tr><td class="symbol"><img src="formula_ini.svg" /></td><td>將2以上的數都初始化為質數的候選數。</td><td class="code"></td></tr><tr><th class="scene_desc" colspan="3">刪除 2 的倍數</th></tr><tr><td class="symbol"><img src="formula_s.svg" /></td><td>將 2 的倍數視為合數 ※。</td><td class="code">P[j] &larr; 0</td></tr><tr><th class="scene_desc" colspan="3">刪除奇數質數的倍數</th></tr><tr><td class="symbol"><img src="formula_decision.svg" /></td><td>保留為質數。</td><td class="code">i</td></tr><tr><td class="symbol"><img src="formula_s.svg" /></td><td>將未被刪除的質數之倍數視為合數。</td><td class="code">P[j] &larr; 0</td></tr><tr><td class="symbol"><img src="formula_valid.svg" /></td><td>完成質數表。</td><td class="code">區間[0, i*i]</td></tr><tr><th class="scene_desc" colspan="3">輸出質數清單</th></tr><tr><td class="symbol"><img src="formula_prime.svg" /></td><td>列出質數。</td><td class="code"></td></tr>';
document.getElementById('scene').innerHTML = '<div><p><b class="scene_desc">初始化</b><br/><img src="scene_0.svg" alt="埃拉托斯特尼篩法 | 初始化" title="埃拉托斯特尼篩法 | 初始化"/></p></div><div><p><b class="scene_desc">刪除 2 的倍數</b><br/><img src="scene_1.svg" alt="埃拉托斯特尼篩法 | 刪除 2 的倍數" title="埃拉托斯特尼篩法 | 刪除 2 的倍數"/></p></div><div><p><b class="scene_desc">刪除奇數質數的倍數</b><br/><img src="scene_2.svg" alt="埃拉托斯特尼篩法 | 刪除奇數質數的倍數" title="埃拉托斯特尼篩法 | 刪除奇數質數的倍數"/></p></div><div><p><b class="scene_desc">輸出質數清單</b><br/><img src="scene_3.svg" alt="埃拉托斯特尼篩法 | 輸出質數清單" title="埃拉托斯特尼篩法 | 輸出質數清單"/></p></div>';
};