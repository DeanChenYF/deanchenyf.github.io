window.onload = function () {
document.getElementById('variable').innerHTML = '<tr><th class="scene_desc" colspan="3">データ</th></tr><tr><td class="symbol"><img src="variable_deg.svg" /></td><td>ノードの入次数</td><td class="code">deg</td></tr><tr><td class="symbol"><img src="variable_order.svg" /></td><td>ソート済みの順番</td><td class="code">order</td></tr>';
document.getElementById('formula').innerHTML = '<tr><th class="scene_desc" colspan="3">入次数の初期化</th></tr><tr><td class="symbol"><img src="formula_all.svg" /></td><td>入次数を求めます。</td><td class="code"></td></tr><tr><th class="scene_desc" colspan="3">ソート</th></tr><tr><td class="symbol"><img src="formula_tail.svg" /></td><td>入次数が0のノードをキューに挿入します。</td><td class="code">que.enqueue(v)</td></tr><tr><td class="symbol"><img src="formula_ui.svg" /></td><td>入次数が0のノードをキューから取り出し、順番を確定します。</td><td class="code">u &larr; que.dequeue()<br/>order[u] &larr; t++</td></tr><tr><td class="symbol"><img src="formula_vi.svg" /></td><td>隣接するノードの入次数を１減らします。</td><td class="code">deg[v]--</td></tr><tr><td class="symbol"><img src="formula_finished.svg" /></td><td>順番が確定しているノードのグループを拡張していきます。</td><td class="code">orderが決定しているノード</td></tr><tr><th class="scene_desc" colspan="3">順番の出力</th></tr><tr><td class="symbol"><img src="formula_all_out.svg" /></td><td>順番を出力します。</td><td class="code"></td></tr>';
document.getElementById('scene').innerHTML = '<div><p><b class="scene_desc">入次数の初期化</b><br/><img src="scene_0.svg" alt="Kahnのアルゴリズム | 入次数の初期化" title="Kahnのアルゴリズム | 入次数の初期化"/></p></div><div><p><b class="scene_desc">ソート</b><br/><img src="scene_1.svg" alt="Kahnのアルゴリズム | ソート" title="Kahnのアルゴリズム | ソート"/></p></div><div><p><b class="scene_desc">順番の出力</b><br/><img src="scene_2.svg" alt="Kahnのアルゴリズム | 順番の出力" title="Kahnのアルゴリズム | 順番の出力"/></p></div>';
};