window.onload = function () {
document.getElementById('io_arrow').innerHTML = "&rarr;";
document.getElementById('level').innerHTML = "&#9733; &#9733; &#9733; ";
document.getElementById('ptitle').innerHTML = "各點間的最短路徑";
document.getElementById('ptitle_en').innerHTML = "All Pairs Shortest Path";
document.getElementById('input_comment').innerHTML = "加權有向圖<ul><li>節點數 N &le; 100</li></ul>";
document.getElementById('output_comment').innerHTML = "各點間最短路徑的距離";
document.getElementById('motivation').innerHTML = "";
document.getElementById('description').innerHTML = "請利用加權有向圖的相鄰矩陣，建立一個可表示所有節點之間最短距離的矩陣。";
document.getElementById('input_panel').innerHTML = '<img src="../../problems/apsp/input.svg" width="340"/>';
document.getElementById('output_panel').innerHTML = '<img src="../../problems/apsp/output.svg" width="340"/>';
document.getElementById('algorithm_icon').innerHTML = '<img src="../../icons/algorithms/warshall_floyd.svg" width="100"/>';
document.getElementById('atitle').innerHTML = "弗洛伊德演算法";
document.getElementById('atitle_en').innerHTML = "Warshall Floyd's Algorithm";
document.getElementById('abstract').innerHTML = "弗洛伊德演算法會將圖形的相鄰矩陣轉換成記錄任意 2 個節點 (i, j) 之間最短距離的矩陣。";
document.getElementById('explanation').innerHTML = "　弗洛伊德演算法會建立一個 N × N 的矩陣，使二維陣列 dist 可利用元素 dist[i][j] 表示由節點 i 到節點 j 的最短距離。dist 一開始會與給定圖形的相鄰矩陣相同。<br/><br/>　弗洛伊德演算法是利用中繼點 k (k=0, 1, ..., N-1) 來更新節點 i 到節點 j 的最短距離。更新時會依照節點的編號順序，假設目前是以節點 k 來更新最短距離，則表示以節點 0、1、2、...、k-1 為中繼點的距離皆已計算完畢。對每一組起點與終點 (i, j) 來說，若 i 到 j 的最短路徑不包含 k，則 dist[i][j] 的值在更新時會保持不變。反過來說，若 i 到 j 的最短路徑包含 k，則 dist[i][k] + dist[k][j] 應會小於 dist[i][j]，必須將 dist[i][j] 更新 為 dist[i][k] + dist[k][j]。<br><br>　弗洛伊德演算法與貝爾曼 - 福特演算法同樣能應用在有負權重的圖形，而且也能檢測 出負迴路。若演算法結束時，有任何一個節點通往自身的最短距離為負值，即可判定該 圖形內有負迴路的存在。";
document.getElementById('note').innerHTML = "由於所有的節點組合（N × N）都有可能需要透過 N 個中繼點來進行距離的更新，因此弗洛伊德演算法的時間複雜度為 O(N<sup>3</sup>)。";
document.getElementById('application').innerHTML = "　弗洛伊德演算法的實作雖然簡單，卻是一種很強大的演算法。其應用範圍包含尋 找各點間最短路徑的問題、含有負權重的圖形問題等，但缺點是對於圖形的大小有限制。";
document.getElementById('structure').innerHTML = '<tr><td style="text-align:center;width:100"><img src="../../icons/structures/DGR.svg" /><br/><br/><img src="../../icons/structures/A2D.svg" /><br/><br/></td><td class="frame">&nbsp;<img height="160" class="frame_svg" valign="middle" src="space_st.svg" />&nbsp;</td></tr><tr><td></td><td class="caption">有向圖與二維陣列</td></tr>';
document.getElementById('variable').innerHTML = '<tr><th class="scene_desc" colspan="3">データ</th></tr><tr><td class="symbol"><img src="variable_dist.svg" /></td><td>節點間的距離</td><td class="code">dist</td></tr>';
document.getElementById('formula').innerHTML = '<tr><th class="scene_desc" colspan="3">初始化相鄰陣列</th></tr><tr><td class="symbol"><img src="formula_input.svg" /></td><td>建立矩陣。</td><td class="code"></td></tr><tr><th class="scene_desc" colspan="3">更新矩陣</th></tr><tr><td class="symbol"><img src="formula_ij.svg" /></td><td>更新距離。</td><td class="code">dist[i][j] &larr; dist[i][k] + dist[k][j]</td></tr><tr><td class="symbol"><img src="formula_inter.svg" /></td><td>標示出中繼點。</td><td class="code">k</td></tr><tr><th class="scene_desc" colspan="3">輸出</th></tr><tr><td class="symbol"><img src="formula_output.svg" /></td><td>輸出矩陣。</td><td class="code"></td></tr>';
document.getElementById('scheme').innerHTML = '<tr><td style="text-align:center;width:100"><img src="anim_qr.svg" width="80"/></td><td class="frame"><hr class="separator"/><img height="160" class="frame_svg" src="scheme_step1.svg" /><p class="caption">利用各中繼點更新距離。</p></td></tr>';
document.getElementById('scene').innerHTML = '<div><p><b class="scene_desc">初始化相鄰矩陣</b><br/><img src="scene_0.svg" alt="弗洛伊德演算法 | 初始化相鄰矩陣" title="弗洛伊德演算法 | 初始化相鄰矩陣"/></p></div><div><p><b class="scene_desc">更新矩陣</b><br/><img src="scene_1.svg" alt="弗洛伊德演算法 | 更新矩陣" title="弗洛伊德演算法 | 更新矩陣"/></p></div><div><p><b class="scene_desc">輸出</b><br/><img src="scene_2.svg" alt="弗洛伊德演算法 | 輸出" title="弗洛伊德演算法 | 輸出"/></p></div>';
document.getElementById('complexity').innerHTML = '<img src="../../../icons/complexity/cube.svg" />';
document.getElementById('prerequisites').innerHTML = '';
MathJax.Hub.Queue(["Typeset",MathJax.Hub]);};