window.onload = function () {
document.getElementById('variable').innerHTML = '<tr><th class="scene_desc" colspan="3">データ</th></tr><tr><td class="symbol"><img src="variable_key.svg" /></td><td>字典的鍵</td><td class="code">key</td></tr><tr><td class="symbol"><img src="variable_pri.svg" /></td><td>優先權</td><td class="code">pri</td></tr>';
document.getElementById('formula').innerHTML = '<tr><th class="scene_desc" colspan="3">搜尋、插入與刪除資料</th></tr><tr><td class="symbol"><img src="formula_inp.svg" /></td><td>插入元素。</td><td class="code"></td></tr><tr><td class="symbol"><img src="formula_inpMarker.svg" /></td><td>指向要插入的節點。</td><td class="code"></td></tr><tr><td class="symbol"><img src="formula_del.svg" /></td><td>刪除元素。</td><td class="code"></td></tr><tr><td class="symbol"><img src="formula_delMarker.svg" /></td><td>指向要刪除的節點。</td><td class="code"></td></tr><tr><td class="symbol"><img src="formula_rotate.svg" /></td><td>進行旋轉。</td><td class="code"></td></tr>';
document.getElementById('scene').innerHTML = '<div><p><b class="scene_desc">搜尋、插入與刪除資料</b><br/><img src="scene_0.svg" alt="樹堆(Treap) | 搜尋、插入與刪除資料" title="樹堆(Treap) | 搜尋、插入與刪除資料"/></p></div>';
};