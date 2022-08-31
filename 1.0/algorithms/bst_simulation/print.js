window.onload = function () {
document.getElementById('variable').innerHTML = '<tr><th class="scene_desc" colspan="3">データ</th></tr><tr><td class="symbol"><img src="variable_key.svg" /></td><td>儲存在字典中的鍵</td><td class="code">key</td></tr>';
document.getElementById('formula').innerHTML = '<tr><th class="scene_desc" colspan="3">搜尋與插入資料</th></tr><tr><td class="symbol"><img src="formula_select.svg" /></td><td>與目前位置的鍵做比較，判斷要往左或往右下降。</td><td class="code">if data &lt; x.key:</td></tr><tr><td class="symbol"><img src="formula_selected.svg" /></td><td>指向所選的子節點。</td><td class="code">x</td></tr><tr><td class="symbol"><img src="formula_write.svg" /></td><td>在設定的位置生成節點並將鍵插入其中。</td><td class="code">insert(data): 的下半部</td></tr><tr><th class="scene_desc" colspan="3">輸出鍵</th></tr><tr><td class="symbol"><img src="formula_output.svg" /></td><td>以中序追蹤的方式依序輸出鍵。</td><td class="code">inorder(u):</td></tr>';
document.getElementById('scene').innerHTML = '<div><p><b class="scene_desc">搜尋與插入資料</b><br/><img src="scene_0.svg" alt="二元搜尋樹 | 搜尋與插入資料" title="二元搜尋樹 | 搜尋與插入資料"/></p></div><div><p><b class="scene_desc">輸出鍵</b><br/><img src="scene_1.svg" alt="二元搜尋樹 | 輸出鍵" title="二元搜尋樹 | 輸出鍵"/></p></div>';
};