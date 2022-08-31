var variable_content = '<tr><th class="scene_desc" colspan="3">データ</th></tr><tr><td class="symbol"><img src="variable_deg.svg" /></td><td>節點的入分支度</td><td class="code">deg</td></tr><tr><td class="symbol"><img src="variable_order.svg" /></td><td>排序完成的順序</td><td class="code">order</td></tr>';
var formula_content = '<tr><th class="scene_desc" colspan="3">初始化入分支度</th></tr><tr><td class="symbol"><img src="formula_all.svg" /></td><td>計算入分支度。</td><td class="code"></td></tr><tr><th class="scene_desc" colspan="3">排序</th></tr><tr><td class="symbol"><img src="formula_tail.svg" /></td><td>將入分支度為 0 的節點插入佇列。</td><td class="code">que.enqueue(v)</td></tr><tr><td class="symbol"><img src="formula_ui.svg" /></td><td>從佇列中取出入分支度為 0 的節點，並固定其順序。</td><td class="code">u &larr; que.dequeue()<br/>order[u] &larr; t++</td></tr><tr><td class="symbol"><img src="formula_vi.svg" /></td><td>將相鄰節點的入分支度減 1。</td><td class="code">deg[v]--</td></tr><tr><td class="symbol"><img src="formula_finished.svg" /></td><td>擴大已排序完成的節點群組。</td><td class="code">orderが決定しているノード</td></tr><tr><th class="scene_desc" colspan="3">輸出排序結果</th></tr><tr><td class="symbol"><img src="formula_all_out.svg" /></td><td>輸出節點的順序。</td><td class="code"></td></tr>';