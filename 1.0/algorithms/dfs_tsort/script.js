window.onload = function () {
document.getElementById('io_arrow').innerHTML = "&rarr;";
document.getElementById('level').innerHTML = "&#9733; &#9733; &#9734; ";
document.getElementById('ptitle').innerHTML = "拓撲排序";
document.getElementById('ptitle_en').innerHTML = "Topological Sort";
document.getElementById('input_comment').innerHTML = "有向圖<ul><li>節點數 N &le; 100,000</li><li>邊數 M &le; 100,000</li></ul>";
document.getElementById('output_comment').innerHTML = "各節點的執行順序";
document.getElementById('motivation').innerHTML = "在處理具有依賴關係的多個任務時，必須先找出任務之間的處理順序，才能確保執行任務時，所有必須在該任務執行前先完成的任務皆已完成。";
document.getElementById('description').innerHTML = "請從表示任務及其依賴關係的有向圖中，找出處理任務的順序。處理任務時，必須先完成該任務所依賴的所有任務。有向圖的邊 (u, v) 表示 v 依賴於 u。";
document.getElementById('input_panel').innerHTML = '<img src="../../problems/topological_sort/input.svg" width="340"/>';
document.getElementById('output_panel').innerHTML = '<img src="../../problems/topological_sort/output.svg" width="340"/>';
document.getElementById('algorithm_icon').innerHTML = '<img src="../../icons/algorithms/dfs_tsort.svg" width="100"/>';
document.getElementById('atitle').innerHTML = "Tarjan 演算法 ";
document.getElementById('atitle_en').innerHTML = "Tarjan's Algorithm";
document.getElementById('abstract').innerHTML = "依照深度優先搜尋中走訪完成的順序進行拓撲排序，並將排序完成的節點新增到鏈結串列中的演算法，稱為 Tarjan 演算法。";
document.getElementById('explanation').innerHTML = "各節點將依照在深度優先搜尋中走訪完成的順序，新增到串列中。若在新增時將節點置於串列最前端，之後就能以拓撲排序的順序追蹤節點。由深度優先搜尋的特性可知，當走訪完成的節點 u 要新增到串列中時，所有依賴於 u 的節點一定都已存在串列中。";
document.getElementById('note').innerHTML = "深度優先搜尋的時間複雜度為 O(N+M)。";
document.getElementById('application').innerHTML = "如前所述，拓撲排序的應用領域很多。實作上，雖然深度優先搜尋（DFS）的做法較簡潔，但它在遇到大型圖形時會有遞迴過深的問題，因此在某些情況，廣度優先搜尋（BFS）會是較適合的選擇。";
document.getElementById('structure').innerHTML = '<tr><td style="text-align:center;width:100"><img src="../../icons/structures/DGR.svg" /><br/><br/><img src="../../icons/structures/DA1D.svg" /><br/><br/></td><td class="frame">&nbsp;<img height="160" class="frame_svg" valign="middle" src="space_st.svg" />&nbsp;</td></tr><tr><td></td><td class="caption">有向圖與串列</td></tr>';
document.getElementById('variable').innerHTML = '<tr><th class="scene_desc" colspan="3">データ</th></tr><tr><td class="symbol"><img src="variable_nodeId.svg" /></td><td>節點編號</td><td class="code">nodeId</td></tr>';
document.getElementById('formula').innerHTML = '<tr><th class="scene_desc" colspan="3">排序</th></tr><tr><td class="symbol"><img src="formula_uv.svg" /></td><td>走訪節點。</td><td class="code">color[u] &larr; GRAY</td></tr><tr><td class="symbol"><img src="formula_uf.svg" /></td><td>將節點標示為已走訪完成，並決定其排序。</td><td class="code">color[v] &larr; BLACK</td></tr><tr><td class="symbol"><img src="formula_create.svg" /></td><td>將已決定排序的節點新增到串列最前端。</td><td class="code">list.insert(u)</td></tr><tr><td class="symbol"><img src="formula_visited.svg" /></td><td>擴大已走訪過的節點群組。</td><td class="code">color 為 GRAY 的節點</td></tr><tr><td class="symbol"><img src="formula_finished.svg" /></td><td>擴大已走訪完成的節點群組。</td><td class="code">color 為 BLACK 的節點</td></tr>';
document.getElementById('scheme').innerHTML = '<tr><td style="text-align:center;width:100"><img src="anim_qr.svg" width="80"/></td><td class="frame"><hr class="separator"/><img height="160" class="frame_svg" src="scheme_step1.svg" /><p class="caption">走訪節點。</p><hr class="separator"/><img height="160" class="frame_svg" src="scheme_step2.svg" /><p class="caption">將節點標示為已走訪完成，並決定其排序。</p></td></tr>';
document.getElementById('scene').innerHTML = '<div><p><b class="scene_desc">排序</b><br/><img src="scene_0.svg" alt="Tarjan 演算法 | 排序" title="Tarjan 演算法 | 排序"/></p></div>';
document.getElementById('complexity').innerHTML = '<img src="../../../icons/complexity/linear.svg" />';
document.getElementById('prerequisites').innerHTML = '<img src="../../icons/algorithms/dfs_stack.svg" width="60"/>';
MathJax.Hub.Queue(["Typeset",MathJax.Hub]);};