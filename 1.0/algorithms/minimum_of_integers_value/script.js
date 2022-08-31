window.onload = function () {
document.getElementById('io_arrow').innerHTML = "&rarr;";
document.getElementById('level').innerHTML = "&#9733; ";
document.getElementById('ptitle').innerHTML = "整數中的最小值";
document.getElementById('ptitle_en').innerHTML = "Minimum Element in Integers";
document.getElementById('input_comment').innerHTML = "N 個整數";
document.getElementById('output_comment').innerHTML = "找出最小值";
document.getElementById('motivation').innerHTML = "我們常需要在陣列中找出最大值或最小值，通常應用程式或演算法中，都有尋找這些值的函式可直接使用。";
document.getElementById('description').innerHTML = "從 N 個整數中找出最小值。";
document.getElementById('input_panel').innerHTML = '<img src="../../problems/minimum_of_integers_value/input.svg" width="340"/>';
document.getElementById('output_panel').innerHTML = '<img src="../../problems/minimum_of_integers_value/output.svg" width="340"/>';
document.getElementById('algorithm_icon').innerHTML = '<img src="../../icons/algorithms/minimum_of_integers_value.svg" width="100"/>';
document.getElementById('atitle').innerHTML = "最小元素值";
document.getElementById('atitle_en').innerHTML = "(Minimum)";
document.getElementById('abstract').innerHTML = "我們用一維陣列變數來儲存整數資料，並另外準備 1 個記錄最小值的變數。";
document.getElementById('explanation').innerHTML = "從陣列前端開始依序檢視元素，並與目前的最小值進行比較，若比對到的元素較小，則更新最小值。最小值一開始應以適當的值進行初始化。由於目的是要找出最小值，因此變數的初始值可設成一個非常大的值或是陣列中的某個元素（例如第 1 個元素）。本書是以 ∞ 符號來表示非常大的值，對應的虛擬碼則是以常數 INF 表示。";
document.getElementById('note').innerHTML = "若要尋找最大值，則可準備 1 個變數 maxv，並將 A[i] < minv 的部分改成 A[i] > maxv。不過要注意的是，在尋找最大值時，maxv 的初始值應設為一個非常小的值。";
document.getElementById('application').innerHTML = "各種演算法和應用程式，都會用到在陣列或其子陣列中尋找最小值或最大值的處理，請務必學會喔！";
document.getElementById('structure').innerHTML = '<tr><td style="text-align:center;width:100"><img src="../../icons/structures/A1D.svg" /><br/><br/><img src="../../icons/structures/A0D.svg" /><br/><br/></td><td class="frame">&nbsp;<img height="160" class="frame_svg" valign="middle" src="space_st.svg" />&nbsp;</td></tr><tr><td></td><td class="caption">一維陣列與單節點</td></tr>';
document.getElementById('variable').innerHTML = '<tr><th class="scene_desc" colspan="3">データ</th></tr><tr><td class="symbol"><img src="variable_A.svg" /></td><td>整數序列</td><td class="code">A</td></tr><tr><td class="symbol"><img src="variable_minv.svg" /></td><td>最小值</td><td class="code">minv</td></tr>';
document.getElementById('formula').innerHTML = '<tr><th class="scene_desc" colspan="3">輸入與初始化</th></tr><tr><td class="symbol"><img src="formula_in.svg" /></td><td>載入整數數列。</td><td class="code"></td></tr><tr><td class="symbol"><img src="formula_init.svg" /></td><td>初始化最小值變數。</td><td class="code">minv &larr; INF</td></tr><tr><th class="scene_desc" colspan="3">更新最小值</th></tr><tr><td class="symbol"><img src="formula_select.svg" /></td><td>比較陣列元素與最小值。</td><td class="code">if A[i] &lt; minv:</td></tr><tr><td class="symbol"><img src="formula_cp.svg" /></td><td>指向可更新最小值的元素。</td><td class="code">i</td></tr><tr><td class="symbol"><img src="formula_write.svg" /></td><td>更新最小值。</td><td class="code">minv &larr; A[i]</td></tr><tr><td class="symbol"><img src="formula_passed.svg" /></td><td>移到下一個元素。</td><td class="code">區間[0, i]</td></tr><tr><th class="scene_desc" colspan="3">輸出</th></tr><tr><td class="symbol"><img src="formula_out.svg" /></td><td>輸出最小值。</td><td class="code"></td></tr>';
document.getElementById('scheme').innerHTML = '<tr><td style="text-align:center;width:100"><img src="anim_qr.svg" width="80"/></td><td class="frame"><hr class="separator"/><img height="160" class="frame_svg" src="scheme_step1.svg" /><p class="caption">檢查數列元素是否比最小值還要小。</p><hr class="separator"/><img height="160" class="frame_svg" src="scheme_step2.svg" /><p class="caption">更新最小值。</p></td></tr>';
document.getElementById('scene').innerHTML = '<div><p><b class="scene_desc">輸入與初始化</b><br/><img src="scene_0.svg" alt="最小元素值（Minimum） | 輸入與初始化" title="最小元素值（Minimum） | 輸入與初始化"/></p></div><div><p><b class="scene_desc">更新最小值</b><br/><img src="scene_1.svg" alt="最小元素值（Minimum） | 更新最小值" title="最小元素值（Minimum） | 更新最小值"/></p></div><div><p><b class="scene_desc">輸出</b><br/><img src="scene_2.svg" alt="最小元素值（Minimum） | 輸出" title="最小元素值（Minimum） | 輸出"/></p></div>';
document.getElementById('complexity').innerHTML = '';
document.getElementById('prerequisites').innerHTML = '';
MathJax.Hub.Queue(["Typeset",MathJax.Hub]);};