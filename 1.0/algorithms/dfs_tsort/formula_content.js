var variable_content = '<tr><th class="scene_desc" colspan="3">データ</th></tr><tr><td class="symbol"><img src="variable_nodeId.svg" /></td><td>節點編號</td><td class="code">nodeId</td></tr>';
var formula_content = '<tr><th class="scene_desc" colspan="3">排序</th></tr><tr><td class="symbol"><img src="formula_uv.svg" /></td><td>走訪節點。</td><td class="code">color[u] &larr; GRAY</td></tr><tr><td class="symbol"><img src="formula_uf.svg" /></td><td>將節點標示為已走訪完成，並決定其排序。</td><td class="code">color[v] &larr; BLACK</td></tr><tr><td class="symbol"><img src="formula_create.svg" /></td><td>將已決定排序的節點新增到串列最前端。</td><td class="code">list.insert(u)</td></tr><tr><td class="symbol"><img src="formula_visited.svg" /></td><td>擴大已走訪過的節點群組。</td><td class="code">color 為 GRAY 的節點</td></tr><tr><td class="symbol"><img src="formula_finished.svg" /></td><td>擴大已走訪完成的節點群組。</td><td class="code">color 為 BLACK 的節點</td></tr>';
