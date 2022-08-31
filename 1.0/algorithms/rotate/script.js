window.onload = function () {
document.getElementById('io_arrow').innerHTML = "&rarr;";
document.getElementById('level').innerHTML = "&#9733; &#9733; ";
document.getElementById('ptitle').innerHTML = "子樹的變換";
document.getElementById('ptitle_en').innerHTML = "Transformation of Sub-tree";
document.getElementById('input_comment').innerHTML = "根節點已固定的子樹";
document.getElementById('output_comment').innerHTML = "在滿足二元搜尋樹的條件下，變換完成的子樹";
document.getElementById('motivation').innerHTML = "若能在滿足二元搜尋樹條件的同時，有效地改變樹的形狀，就能使二元搜尋樹保持在良好的平衡狀態。";
document.getElementById('description').innerHTML = "請變換子樹。但請確保變換前、後，由中序追蹤走訪節點的順序不會改變。";
document.getElementById('input_panel').innerHTML = '<img src="../../problems/rotation/input.svg" width="340"/>';
document.getElementById('output_panel').innerHTML = '<img src="../../problems/rotation/output.svg" width="340"/>';
document.getElementById('algorithm_icon').innerHTML = '<img src="../../icons/algorithms/rotate.svg" width="100"/>';
document.getElementById('atitle').innerHTML = "旋轉";
document.getElementById('atitle_en').innerHTML = "Rotate";
document.getElementById('abstract').innerHTML = "　如上圖所示，旋轉子樹是在滿足二元搜尋樹的條件下，改變節點父子關係的操作。";
document.getElementById('explanation').innerHTML = "　旋轉操作雖然會改變樹的形狀，但仍會符合二元搜尋樹的條件。也就是說，以中序追蹤走訪子樹所得到的鍵的順序並不會改變。旋轉分為右旋轉與左旋轉。右旋轉是將根節點的左子節點當成新的根節點往上提，使原本的根節點成為新根節點的右子節點。而新根節點原本的右子節點，則成為原本的根節點（新根節點的右子節點）的左子節點。左旋轉的原理相同，只是換個方向，將根節點的右子節點當成新的根節點往上提，使原本的根節點成為新根節點的左子節點。<br><br>　旋轉操作的實作方式如虛擬碼所示，將指標的指向改變即可。雖然只有 2 個節點的指標需要改變指向，不過改變的順序很重要，還請留意。";
document.getElementById('note').innerHTML = "旋轉操作中，需要改變指向的指標數量是固定的，因此時間複雜度為 O(1)。";
document.getElementById('application').innerHTML = "　一些進階資料結構在實作可維持良好平衡的搜尋樹時，會以旋轉操作為基本操作。像是紅黑樹 （red–black tree）與樹堆 （treap）等平衡良好的二元搜尋樹中，都有使用旋轉操作。";
document.getElementById('structure').innerHTML = '<tr><td style="text-align:center;width:100"><img src="../../icons/structures/DBT.svg" /><br/><br/></td><td class="frame">&nbsp;<img height="160" class="frame_svg" valign="middle" src="space_st.svg" />&nbsp;</td></tr><tr><td></td><td class="caption">動態二元樹</td></tr>';
document.getElementById('variable').innerHTML = '<tr><th class="scene_desc" colspan="3">データ</th></tr><tr><td class="symbol"><img src="variable_key.svg" /></td><td>二元搜尋樹的鍵</td><td class="code">key</td></tr>';
document.getElementById('formula').innerHTML = '<tr><th class="scene_desc" colspan="3">旋轉</th></tr><tr><td class="symbol"><img src="formula_write.svg" /></td><td>改變指標的指向。</td><td class="code"></td></tr>';
document.getElementById('scheme').innerHTML = '<tr><td style="text-align:center;width:100"><img src="anim_qr.svg" width="80"/></td><td class="frame"><hr class="separator"/><img height="160" class="frame_svg" src="scheme_right.svg" /><p class="caption">進行右旋轉。</p><hr class="separator"/><img height="160" class="frame_svg" src="scheme_left.svg" /><p class="caption">進行左旋轉。</p></td></tr>';
document.getElementById('scene').innerHTML = '<div><p><b class="scene_desc">旋轉</b><br/><img src="scene_0.svg" alt="旋轉 | 旋轉" title="旋轉 | 旋轉"/></p></div>';
document.getElementById('complexity').innerHTML = '<img src="../../../icons/complexity/const.svg" />';
document.getElementById('prerequisites').innerHTML = '<img src="../../icons/algorithms/bst_simulation.svg" width="60"/>';
MathJax.Hub.Queue(["Typeset",MathJax.Hub]);};