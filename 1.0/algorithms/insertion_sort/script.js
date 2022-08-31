window.onload = function () {
document.getElementById('io_arrow').innerHTML = "&rarr;";
document.getElementById('level').innerHTML = "&#9733; &#9734; ";
document.getElementById('ptitle').innerHTML = "整數序列的排序";
document.getElementById('ptitle_en').innerHTML = "Sorting Integers";
document.getElementById('input_comment').innerHTML = "整數序列<ul><li>$N &le; 100$</li><li> $a_i &le; 10^9$</li></ul>";
document.getElementById('output_comment').innerHTML = "排序完成的整數序列";
document.getElementById('motivation').innerHTML = "資訊處理的基礎就是以資料之間共通的鍵值（key）為基準，將資料排序。本節將介紹元素數較少的整數序列排序方式。";
document.getElementById('description').innerHTML = "請將整數序列{a_0, a_1, ..., a_N}按照升冪排列。";
document.getElementById('input_panel').innerHTML = '<img src="../../problems/sort_small/input.svg" width="340"/>';
document.getElementById('output_panel').innerHTML = '<img src="../../problems/sort_small/output.svg" width="340"/>';
document.getElementById('algorithm_icon').innerHTML = '<img src="../../icons/algorithms/insertion_sort.svg" width="100"/>';
document.getElementById('atitle').innerHTML = "插入排序法";
document.getElementById('atitle_en').innerHTML = "Insertion Sort";
document.getElementById('abstract').innerHTML = "插入排序法的做法是從最前端開始依序使用插入（insertion）操作，以逐步完成資料的排序。";
document.getElementById('explanation').innerHTML = "由於元素數為 1 的子陣列已排序完成，因此我們會從陣列的第 2 個位置（索引為 1）開始，依序選定要插入的元素並執行 insertion。當第 i 次的 insertion 結束之後，由最前端算起的 i+1 個元素都會是已排序完成的元素，已排序部分會從前方開始 1 次增加 1 個元素。";
document.getElementById('note').innerHTML = "插入排序法的計算效率會受到輸入資料中的元素排列方式影響。若元素是以升冪或接近升冪的方式排列，則每次 insertion 操作都只需要 O(1) 即可完成，此時插入排序法的時間複雜度為 O(N)。但相反地，若元素是以降冪或接近降冪的方式排列，則在進行第 i 次的 insertion 操作時，會需走訪 i 個元素，此時插入排序法的時間複雜度為 O(N 2 )。若以平均來看，則第 i 次的 insertion 需要比較、移動元素 i/2 次，因此時間複雜度仍為O(N2)。";
document.getElementById('application').innerHTML = "由於插入排序法在遇到以升冪或接近升冪排列的資料時可快速排序，因此若應用程式或進階排序演算法中會處理到這類的資料時，便可使用。例如，Shell Sort（希爾排序法）就使用了插入排序法。";
document.getElementById('structure').innerHTML = '<tr><td style="text-align:center;width:100"><img src="../../icons/structures/A1D.svg" /><br/><br/></td><td class="frame">&nbsp;<img height="160" class="frame_svg" valign="middle" src="space_s.svg" />&nbsp;</td></tr><tr><td></td><td class="caption">一維陣列</td></tr>';
document.getElementById('variable').innerHTML = '<tr><th class="scene_desc" colspan="3">資料</th></tr><tr><td class="symbol"><img src="variable_A.svg" /></td><td>整數序列</td><td class="code">A</td></tr>';
document.getElementById('formula').innerHTML = '<tr><th class="scene_desc" colspan="3">輸入</th></tr><tr><td class="symbol"><img src="formula_in.svg" /></td><td>輸入整數序列。</td><td class="code"></td></tr><tr><th class="scene_desc" colspan="3">排序</th></tr><tr><td class="symbol"><img src="formula_insertion.svg" /></td><td>執行 insertion。</td><td class="code">insertion(0, j)</td></tr><tr><td class="symbol"><img src="formula_sorted.svg" /></td><td>擴大已排序完成的範圍。</td><td class="code">區間[0, i)</td></tr><tr><th class="scene_desc" colspan="3">輸出</th></tr><tr><td class="symbol"><img src="formula_out.svg" /></td><td>擴大已排序完成的範圍。</td><td class="code"></td></tr>';
document.getElementById('scheme').innerHTML = '<tr><td style="text-align:center;width:100"><img src="anim_qr.svg" width="80"/></td><td class="frame"><hr class="separator"/><img height="160" class="frame_svg" src="scheme_step1.svg" /><p class="caption">執行 insertion。</p></td></tr>';
document.getElementById('scene').innerHTML = '<div><p><b class="scene_desc">輸入</b><br/><img src="scene_0.svg" alt="插入排序法 | 輸入" title="插入排序法 | 輸入"/></p></div><div><p><b class="scene_desc">排序</b><br/><img src="scene_1.svg" alt="插入排序法 | 排序" title="插入排序法 | 排序"/></p></div><div><p><b class="scene_desc">輸出</b><br/><img src="scene_2.svg" alt="插入排序法 | 輸出" title="插入排序法 | 輸出"/></p></div>';
document.getElementById('complexity').innerHTML = '<img src="../../../icons/complexity/quad.svg" />';
document.getElementById('prerequisites').innerHTML = '<img src="../../icons/algorithms/insertion.svg" width="60"/>';
MathJax.Hub.Queue(["Typeset",MathJax.Hub]);};