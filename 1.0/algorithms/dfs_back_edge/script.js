window.onload = function () {
document.getElementById('io_arrow').innerHTML = "&rarr;";
document.getElementById('level').innerHTML = "&#9733; &#9733; &#9734; ";
document.getElementById('ptitle').innerHTML = "檢測迴路";
document.getElementById('ptitle_en').innerHTML = "Cycle Ditection";
document.getElementById('input_comment').innerHTML = "有向圖<ul><li>節點數 N &le; 100,000</li><li>節點數 N &le; 100,000</li></ul>";
document.getElementById('output_comment').innerHTML = "是否有迴路";
document.getElementById('motivation').innerHTML = "在有向圖中，當我們順著邊的方向去走訪節點時，有時會出現讓我們重回曾經走訪過節點的「迴路」。迴路是否存在，是有向圖的重點之一。";
document.getElementById('description').innerHTML = "請檢查有向圖中是否有迴路。";
document.getElementById('input_panel').innerHTML = '<img src="../../problems/cycle_detection/input.svg" width="340"/>';
document.getElementById('output_panel').innerHTML = '<img src="../../problems/cycle_detection/output.svg" width="340"/>';
document.getElementById('algorithm_icon').innerHTML = '<img src="../../icons/algorithms/dfs_back_edge.svg" width="100"/>';
document.getElementById('atitle').innerHTML = "利用深度優先搜尋檢測迴路";
document.getElementById('atitle_en').innerHTML = "DFS for Cycle Detection";
document.getElementById('abstract').innerHTML = "觀察深度優先搜尋（DFS）走訪節點的情況，即可檢測出圖形中是否存在會構成迴路的後向邊（back edge）。";
document.getElementById('explanation').innerHTML = "進行深度優先搜尋時，節點的拜訪狀態只會有 3 種：未走訪過、已走訪過，和已走訪完成。搜尋過程中，指向已走訪過的節點的邊稱為後向邊 （back edge），後向邊是迴路的一部分。只要以走訪過的節點為起點，搜尋相鄰且未走訪過的節點時，檢視相鄰節點的走訪狀態，即可檢測出後向邊。";
document.getElementById('note').innerHTML = "利用相鄰串列實作時，即使加上檢測後向邊的處理，深度優先搜尋也只需要走訪每條邊各 1 次，因此時間複雜度為 O(N+M)。";
document.getElementById('application').innerHTML = "有些應用範例與我們日常生活息息相關，例如網路系統的迴路檢測等。邊在搜尋過程中的狀態是很重要的資訊（如後向邊），可用來找出圖形中一些更有趣的特性。在需要掌握邊的狀態的演算法中，深度優先搜尋的應用很廣，可以用來解決的問題包括找出圖形中的橋（bridge） ※ 以及區分強連通元件（Strongly Connected Component。指在有向圖中，任意 2 點之間都有路徑可以來回的連通元件） 等。";
document.getElementById('structure').innerHTML = '<tr><td style="text-align:center;width:100"><img src="../../icons/structures/DGR.svg" /><br/><br/></td><td class="frame">&nbsp;<img height="160" class="frame_svg" valign="middle" src="space_g.svg" />&nbsp;</td></tr><tr><td></td><td class="caption">有向圖</td></tr>';
document.getElementById('variable').innerHTML = '<tr><th class="scene_desc" colspan="3">データ</th></tr><tr><td class="symbol"><img src="variable_color.svg" /></td><td>各節點的走訪狀態</td><td class="code">color</td></tr>';
document.getElementById('formula').innerHTML = '<tr><th class="scene_desc" colspan="3">深度優先搜尋</th></tr><tr><td class="symbol"><img src="formula_ui.svg" /></td><td>走訪節點。</td><td class="code">color[u] &larr; GRAY</td></tr><tr><td class="symbol"><img src="formula_fi.svg" /></td><td>將節點標示為已拜訪完成。</td><td class="code">color[u] &larr; BLACK</td></tr><tr><td class="symbol"><img src="formula_bi.svg" /></td><td>檢測後向邊。</td><td class="code"></td></tr><tr><td class="symbol"><img src="formula_backEdge.svg" /></td><td>標示出後向邊。</td><td class="code"></td></tr><tr><td class="symbol"><img src="formula_visited.svg" /></td><td>擴大已走訪過的節點群組。</td><td class="code">color 為 GRAY 的節點</td></tr><tr><td class="symbol"><img src="formula_finished.svg" /></td><td>擴大已走訪完成的節點群組。</td><td class="code">color 為 BLACK的節點</td></tr>';
document.getElementById('scheme').innerHTML = '<tr><td style="text-align:center;width:100"><img src="anim_qr.svg" width="80"/></td><td class="frame"><hr class="separator"/><img height="160" class="frame_svg" src="scheme_visit.svg" /><p class="caption">走訪相鄰的節點。</p><hr class="separator"/><img height="160" class="frame_svg" src="scheme_back.svg" /><p class="caption">檢測後向邊。</p><hr class="separator"/><img height="160" class="frame_svg" src="scheme_finish.svg" /><p class="caption">將所有相鄰的節點標示為已拜訪完成。</p></td></tr>';
document.getElementById('scene').innerHTML = '<div><p><b class="scene_desc">深度優先搜尋</b><br/><img src="scene_0.svg" alt="利用深度優先搜尋檢測迴路 | 深度優先搜尋" title="利用深度優先搜尋檢測迴路 | 深度優先搜尋"/></p></div>';
document.getElementById('complexity').innerHTML = '<img src="../../../icons/complexity/linear.svg" />';
document.getElementById('prerequisites').innerHTML = '<img src="../../icons/algorithms/dfs_repeat.svg" width="60"/>';
MathJax.Hub.Queue(["Typeset",MathJax.Hub]);};