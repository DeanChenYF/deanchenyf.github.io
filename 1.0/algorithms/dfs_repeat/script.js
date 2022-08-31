window.onload = function () {
document.getElementById('io_arrow').innerHTML = "&rarr;";
document.getElementById('level').innerHTML = "&#9733; &#9733; &#9734; ";
document.getElementById('ptitle').innerHTML = "區分連通元件";
document.getElementById('ptitle_en').innerHTML = "Connected Components";
document.getElementById('input_comment').innerHTML = "不一定為連通圖的圖形<ul><li>節點數 N &le; 100,000</li><li>邊數 M &le; 100,000</li></ul>";
document.getElementById('output_comment').innerHTML = "節點皆已上色完成的連通元件";
document.getElementById('motivation').innerHTML = "在無向圖中顯示任意 2 個節點之間是否存在路徑的「連通性」，是圖形應用中最有趣的特性之一。";
document.getElementById('description').innerHTML = "請將圖形中的連通元件區分出來，並將同一連通元件內的節點塗上相同的顏色。不同連通元件的節點需塗上不同的顏色。";
document.getElementById('input_panel').innerHTML = '<img src="../../problems/connected_components/input.svg" width="340"/>';
document.getElementById('output_panel').innerHTML = '<img src="../../problems/connected_components/output.svg" width="340"/>';
document.getElementById('algorithm_icon').innerHTML = '<img src="../../icons/algorithms/dfs_repeat.svg" width="100"/>';
document.getElementById('atitle').innerHTML = "利用深度優先搜尋區分連通元件";
document.getElementById('atitle_en').innerHTML = "DFS for Connected Components";
document.getElementById('abstract').innerHTML = "對每一個連通元件執行深度優先搜尋。";
document.getElementById('explanation').innerHTML = "此演算法將深度優先搜尋的起點放到了檢查各節點顏色的迴圈當中。迴圈內會先檢查各節點是否已上色（是否已拜訪過），若未上色，則以該節點為起點進行深度優先搜尋。換句話說，就是在找到新的連通元件時，更新調色盤的顏色，並以調色盤的顏色替該連通元件內的節點上色（前往拜訪）。<br><br>本節的虛擬碼是以遞迴函式來實作深度優先搜尋。遞迴函式 dfs(u) 雖然是拜訪節點 u 的操作，但在函式中會以 u 的相鄰節點 v 為起點，再次呼叫 dfs。呼叫後會先檢查 v 的顏色，再以此判斷是否需要執行遞迴函式。";
document.getElementById('note').innerHTML = "當遞迴執行深度優先搜尋的演算法結束時，同一個連通元件內的節點顏色會相同，因此只要看顏色就可知道 2 個節點是否位於同一個連通元件內，判斷所需的時間複雜度為O(1)。<br/><br/>區分連通元件的演算法與廣度優先搜尋相同，執行效率都很高。由於本節使用的圖形相當大，因此必須使用相鄰串列來實作。使用相鄰串列時，深度優先搜尋（或廣度優先搜尋）的時間複雜度為 O(N+M)。";
document.getElementById('application').innerHTML = "有許多應用需要任意 2 個節點的連結。例如，將圖形視為人際關係，則連通度就代表 2 個人之間是否有聯絡管道；若將圖形視為網路，則連通度就代表 2 台電腦之間是否可以通訊。此外，由填色的操作也可以想見，它可以做為走訪二維陣列結構或為像素區域上色的演算法。<br/><br/>本節處理的圖形因為形狀在建立之後就不會改變，因此只需要執行 1 次深度優先搜尋，便能回答連通度的問題，但若連通度會動態變化，就需要使用其他資料結構了（可使用第 24 章的並查樹（Union-Find Tree））。";
document.getElementById('structure').innerHTML = '<tr><td style="text-align:center;width:100"><img src="../../icons/structures/GR.svg" /><br/><br/></td><td class="frame">&nbsp;<img height="160" class="frame_svg" valign="middle" src="space_st.svg" />&nbsp;</td></tr><tr><td></td><td class="caption">無向圖</td></tr>';
document.getElementById('variable').innerHTML = '<tr><th class="scene_desc" colspan="3">データ</th></tr><tr><td class="symbol"><img src="variable_color.svg" /></td><td>連通元件的顏色</td><td class="code">color</td></tr><tr><td class="symbol"><img src="variable_palette.svg" /></td><td>調色盤</td><td class="code">palette</td></tr>';
document.getElementById('formula').innerHTML = '<tr><th class="scene_desc" colspan="3">深度優先搜尋</th></tr><tr><td class="symbol"><img src="formula_oi.svg" /></td><td>更新顏色。</td><td class="code">palette &larr; 新顏色</td></tr><tr><td class="symbol"><img src="formula_ui.svg" /></td><td>走訪節點並塗上顏色。</td><td class="code">color[u] &larr; palette</td></tr><tr><td class="symbol"><img src="formula_visited.svg" /></td><td>擴大已走訪過的節點群組。</td><td class="code">color不為 WHITE 的節點</td></tr>';
document.getElementById('scheme').innerHTML = '<tr><td style="text-align:center;width:100"><img src="anim_qr.svg" width="80"/></td><td class="frame"><hr class="separator"/><img height="160" class="frame_svg" src="scheme_update.svg" /><p class="caption">更新顏色。</p><hr class="separator"/><img height="160" class="frame_svg" src="scheme_visit.svg" /><p class="caption">利用深度優先搜尋替節點上色。</p></td></tr>';
document.getElementById('scene').innerHTML = '<div><p><b class="scene_desc">深度優先搜尋</b><br/><img src="scene_0.svg" alt="利用深度優先搜尋區分連通元件 | 深度優先搜尋" title="利用深度優先搜尋區分連通元件 | 深度優先搜尋"/></p></div>';
document.getElementById('complexity').innerHTML = '<img src="../../../icons/complexity/linear.svg" />';
document.getElementById('prerequisites').innerHTML = '<img src="../../icons/algorithms/dfs_stack.svg" width="60"/>';
MathJax.Hub.Queue(["Typeset",MathJax.Hub]);};