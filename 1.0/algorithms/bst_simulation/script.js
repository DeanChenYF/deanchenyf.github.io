window.onload = function () {
document.getElementById('io_arrow').innerHTML = "&rarr;";
document.getElementById('level').innerHTML = "&#9733; &#9733; &#9733; &#9733; &#9734; ";
document.getElementById('ptitle').innerHTML = "有序字典";
document.getElementById('ptitle_en').innerHTML = "Sorted Dictionary";
document.getElementById('input_comment').innerHTML = "對有序字典進行搜尋、新增與刪除的操作<ul><li>操作或提問的次數 Q &le; 100,000</li><li>0 &le; 鍵 &le; 1,000,000,000</li></ul>";
document.getElementById('output_comment').innerHTML = "回應查詢並輸出排序後的元素";
document.getElementById('motivation').innerHTML = "字典內容若能經常保持已排序且管理良好的狀態，便能靈活地回應各種查詢。";
document.getElementById('description').innerHTML = "請實作一個可以搜尋、新增及刪除資料，並能管理與提供已排序元素的「字典」資料結構。本節將不會討論鍵（key）與值（value）關係，且處理資料時只以鍵為代表。";
document.getElementById('input_panel').innerHTML = '<img src="../../problems/sorted_dictionary/input.svg" width="340"/>';
document.getElementById('output_panel').innerHTML = '<img src="../../problems/sorted_dictionary/output.svg" width="340"/>';
document.getElementById('algorithm_icon').innerHTML = '<img src="../../icons/algorithms/bst_simulation.svg" width="100"/>';
document.getElementById('atitle').innerHTML = "二元搜尋樹";
document.getElementById('atitle_en').innerHTML = "Binary Search Tree";
document.getElementById('abstract').innerHTML = "　二元搜尋樹是一種以各節點儲存鍵（key），並永遠滿足以下「二元搜尋樹條件」的搜尋樹。：<br><br>　若 x 為二元搜尋樹中的節點，而 y 為 x 左子樹中的節點，z 為 x 右子樹中的節點，則 y 的鍵 &le; x 的鍵 &le; z 的鍵<br/><br/>　本節主要講解的是將鍵新增到二元搜尋樹的演算法。";
document.getElementById('explanation').innerHTML = "　將鍵（key）新增到二元搜尋樹的操作，必須要先生成節點，再將節點插入正確位置，以滿足二元搜尋樹的條件。含有給定鍵的新節點，會成為現有二元搜尋樹中其中一個葉節點的子節點。新增節點的位置應從根節點開始進行搜尋，做法則是比較目前節點的鍵與給定鍵的大小，若給定鍵較小就下降到左子樹，反之則下降到右子樹。待下降到葉節點（已經沒有子節點）時，再根據鍵的大小關係，判斷應成為其左子節點還是右子節點，之後設定鍵，並新增節點。<br><br>　這套插入演算法也可以用來搜尋給定鍵。<br><br>　由於節點內所儲存的鍵皆已排序，因此二元搜尋樹的優點之一就是可以利用中序追蹤，按照鍵的升冪取得鍵的序列。此外，由於指定元素的位置可以明確地定位出來，因此可執行的操作種類也比較廣。尋找最小值與最大值也非常容易。";
document.getElementById('note').innerHTML = "　將鍵（節點）新增到二元搜尋樹的演算法，時間複雜度取決於樹的高度 h，為 O(h)。假設二元搜尋樹的節點數為 N，若新增操作不會造成樹（鍵的序列）往一邊傾斜，則新增鍵的時間複雜度為 O(log N)。但實際上，新增的鍵與新增的順序經常會導致二元搜尋樹失去平衡，使樹的高度逐漸增加。最差的情況就是變得像串列結構一般，使單次新增與搜尋的時間複雜度變成 O(N)。";
document.getElementById('application').innerHTML = "二元搜尋樹可用來實作鍵已排序的字典，但一定要將樹的平衡也考慮在內才有實用性。此外，二元搜尋樹的特性也很適合當成優先佇列來使用，但同樣必須在維持樹的平衡上多花點心思設計。";
document.getElementById('structure').innerHTML = '<tr><td style="text-align:center;width:100"><img src="../../icons/structures/DBT.svg" /><br/><br/></td><td class="frame">&nbsp;<img height="160" class="frame_svg" valign="middle" src="space_st.svg" />&nbsp;</td></tr><tr><td></td><td class="caption">動態二元樹</td></tr>';
document.getElementById('variable').innerHTML = '<tr><th class="scene_desc" colspan="3">データ</th></tr><tr><td class="symbol"><img src="variable_key.svg" /></td><td>儲存在字典中的鍵</td><td class="code">key</td></tr>';
document.getElementById('formula').innerHTML = '<tr><th class="scene_desc" colspan="3">搜尋與插入資料</th></tr><tr><td class="symbol"><img src="formula_select.svg" /></td><td>與目前位置的鍵做比較，判斷要往左或往右下降。</td><td class="code">if data &lt; x.key:</td></tr><tr><td class="symbol"><img src="formula_selected.svg" /></td><td>指向所選的子節點。</td><td class="code">x</td></tr><tr><td class="symbol"><img src="formula_write.svg" /></td><td>在設定的位置生成節點並將鍵插入其中。</td><td class="code">insert(data): 的下半部</td></tr><tr><th class="scene_desc" colspan="3">輸出鍵</th></tr><tr><td class="symbol"><img src="formula_output.svg" /></td><td>以中序追蹤的方式依序輸出鍵。</td><td class="code">inorder(u):</td></tr>';
document.getElementById('scheme').innerHTML = '<tr><td style="text-align:center;width:100"><img src="anim_qr.svg" width="80"/></td><td class="frame"><hr class="separator"/><img height="160" class="frame_svg" src="scheme_step1.svg" /><p class="caption">搜尋要新增的鍵的插入位置。</p><hr class="separator"/><img height="160" class="frame_svg" src="scheme_step2.svg" /><p class="caption">結束搜尋，並將鍵插入設定的節點位置。</p></td></tr>';
document.getElementById('scene').innerHTML = '<div><p><b class="scene_desc">搜尋與插入資料</b><br/><img src="scene_0.svg" alt="二元搜尋樹 | 搜尋與插入資料" title="二元搜尋樹 | 搜尋與插入資料"/></p></div><div><p><b class="scene_desc">輸出鍵</b><br/><img src="scene_1.svg" alt="二元搜尋樹 | 輸出鍵" title="二元搜尋樹 | 輸出鍵"/></p></div>';
document.getElementById('complexity').innerHTML = '<img src="../../../icons/complexity/linear.svg" />';
document.getElementById('prerequisites').innerHTML = '<img src="../../icons/algorithms/btree_inorder.svg" width="60"/>';
MathJax.Hub.Queue(["Typeset",MathJax.Hub]);};