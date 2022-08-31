window.onload = function () {
document.getElementById('variable').innerHTML = '<tr><th class="scene_desc" colspan="3">データ</th></tr>';
document.getElementById('formula').innerHTML = '<tr><th class="scene_desc" colspan="3">將各點排序</th></tr><tr><td class="symbol"><img src="formula_all.svg" /></td><td>將各點按 x 的大小以升冪方式排序。</td><td class="code"></td></tr><tr><th class="scene_desc" colspan="3">建立凸包</th></tr><tr><td class="symbol"><img src="formula_select.svg" /></td><td>檢查 3 個點的走向是否為順時針。</td><td class="code"></td></tr><tr><td class="symbol"><img src="formula_head.svg" /></td><td>將點的編號新增到堆疊當中。</td><td class="code">st.push(head)</td></tr><tr><td class="symbol"><img src="formula_trace.svg" /></td><td>逐步決定凸包的點。</td><td class="code"></td></tr>';
document.getElementById('scene').innerHTML = '<div><p><b class="scene_desc">將各點排序</b><br/><img src="scene_0.svg" alt="安德魯演算法 | 將各點排序" title="安德魯演算法 | 將各點排序"/></p></div><div><p><b class="scene_desc">建立凸包</b><br/><img src="scene_1.svg" alt="安德魯演算法 | 建立凸包" title="安德魯演算法 | 建立凸包"/></p></div>';
};