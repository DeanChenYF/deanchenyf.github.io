window.onload = function () {
document.getElementById('io_arrow').innerHTML = "&rarr;";
document.getElementById('level').innerHTML = "&#9733; &#9734; ";
document.getElementById('ptitle').innerHTML = "與基準值做比較，將元素分組";
document.getElementById('ptitle_en').innerHTML = "Grouping Elements";
document.getElementById('input_comment').innerHTML = "序列<ul><li>元素數N &le; 100,000</li></ul>";
document.getElementById('output_comment').innerHTML = "比基準值（紅色長條）小的群組放在左邊，比基準值大的群組放在右邊";
document.getElementById('motivation').innerHTML = "分割（partition）是排序效率高的演算法，其運作方式是從序列中找出一個基準值（pivot），接著逐一和序列中的各個元素做比較，小於基準值的元素放在左邊；大於基準值的元素放在右邊。所有元素都比較過一輪後，再分別從左、右兩邊的資料裡找出基準值，重複上述的步驟，直到完成排序。本節將帶你實作第一輪各個元素與基準值的比較，後續的排序你可以用同樣的方法自行練習。";
document.getElementById('description').innerHTML = "從序列中挑選 1 個適當的元素做為基準，將序列分成比基準小和比基準大的 2 個群組。";
document.getElementById('input_panel').innerHTML = '<img src="../../problems/partition/input.svg" width="340"/>';
document.getElementById('output_panel').innerHTML = '<img src="../../problems/partition/output.svg" width="340"/>';
document.getElementById('algorithm_icon').innerHTML = '<img src="../../icons/algorithms/partition.svg" width="100"/>';
document.getElementById('atitle').innerHTML = "分割";
document.getElementById('atitle_en').innerHTML = "Partition";
document.getElementById('abstract').innerHTML = "分割處理會從陣列前方開始逐一檢查各元素，並將小於基準值的元素移到陣列左方，大於基準值的元素移到右方。本節介紹的做法是以陣列最尾端的值為基準值。由於分割處理可利用「互換」完成所有元素的移動，因此只需要使用 1 個陣列。";
document.getElementById('explanation').innerHTML = "由陣列前端開始依序比較各元素與基準值（r）的大小，以判斷元素應該屬於哪一個群組（if A[j] < A[r]）。大於或等於基準值的元素不需移動，但要將較大群組的範圍加 1（i+1）以擴及該元素。小於基準值的元素則需與較大群組的最前端元素進行互換（swap(A[i], A[j])），較小群組的範圍需加 1 （i+1）以擴及該元素。除了基準值以外的所有元素皆比較完畢後，將較大群組最前端的元素與最尾端的元素（基準值）互換（swap(A[i], A[r]），使基準值移到較小群組與較大群組的中間。至此，就連基準值在陣列中的位置也定位完成了。。";
document.getElementById('note').innerHTML = "由於判斷各元素分別屬於哪一個群組的操作需進行 N 次，因此分割處理的時間複雜度為 O(N)。在接下來的章節中，我們會直接使用 partition(A,  ll , r) 函式進行分割操作，將陣列 A 的區間 [ ll , r] 分成比基準值 A[r] 大或小的 2 個群組。partition 函式會改變元素的排列，並傳回分割完成後，基準值的所在位置。";
document.getElementById('application').innerHTML = "以特定基準值為主，將陣列元素分組的分割處理，是快速排序法（Quick Sort）的基本操作。";
document.getElementById('structure').innerHTML = '<tr><td style="text-align:center;width:100"><img src="../../icons/structures/A1D.svg" /><br/><br/></td><td class="frame">&nbsp;<img height="160" class="frame_svg" valign="middle" src="space_st.svg" />&nbsp;</td></tr><tr><td></td><td class="caption">一次元配列</td></tr>';
document.getElementById('variable').innerHTML = '<tr><th class="scene_desc" colspan="3">資料</th></tr><tr><td class="symbol"><img src="variable_A.svg" /></td><td>整數陣列</td><td class="code">A</td></tr>';
document.getElementById('formula').innerHTML = '<tr><th class="scene_desc" colspan="3">輸入</th></tr><tr><td class="symbol"><img src="formula_in.svg" /></td><td>載入整數序列。</td><td class="code"></td></tr><tr><th class="scene_desc" colspan="3">分割</th></tr><tr><td class="symbol"><img src="formula_select.svg" /></td><td>與基準值做比較。</td><td class="code">if A[j] < A[r]:</td></tr><tr><td class="symbol"><img src="formula_swap.svg" /></td><td>與較大群組最前端的元素互換。</td><td class="code">swap(A[i], A[j])</td></tr><tr><td class="symbol"><img src="formula_smallGroup.svg" /></td><td>擴大含有較小元素的群組範圍。</td><td class="code">區間[l, i]</td></tr><tr><td class="symbol"><img src="formula_largeGroup.svg" /></td><td>擴大含有較大元素的群組範圍。</td><td class="code">區間[i+1, j]</td></tr><tr><td class="symbol"><img src="formula_pi.svg" /></td><td>指向含有較小元素的群組的最右端。</td><td class="code">i</td></tr><tr><td class="symbol"><img src="formula_pj.svg" /></td><td>指向含有較大元素的群組的最右端。</td><td class="code">j</td></tr><tr><th class="scene_desc" colspan="3">輸出</th></tr><tr><td class="symbol"><img src="formula_out.svg" /></td><td>輸出分組完成的序列。</td><td class="code"></td></tr>';
document.getElementById('scheme').innerHTML = '<tr><td style="text-align:center;width:100"><img src="anim_qr.svg" width="80"/></td><td class="frame"><hr class="separator"/><img height="160" class="frame_svg" src="scheme_step1.svg" /><p class="caption">與基準值 8 做比較。</p><hr class="separator"/><img height="160" class="frame_svg" src="scheme_step2.svg" /><p class="caption">歸入所屬群組。</p></td></tr>';
document.getElementById('scene').innerHTML = '<div><p><b class="scene_desc">輸入</b><br/><img src="scene_0.svg" alt="分割 | 輸入" title="分割 | 輸入"/></p></div><div><p><b class="scene_desc">分割</b><br/><img src="scene_1.svg" alt="分割 | 分割" title="分割 | 分割"/></p></div><div><p><b class="scene_desc">輸出</b><br/><img src="scene_2.svg" alt="分割 | 輸出" title="分割 | 輸出"/></p></div>';
document.getElementById('complexity').innerHTML = '<img src="../../../icons/complexity/linear.svg" />';
document.getElementById('prerequisites').innerHTML = '<img src="../../icons/algorithms/swap.svg" width="60"/>';
MathJax.Hub.Queue(["Typeset",MathJax.Hub]);};