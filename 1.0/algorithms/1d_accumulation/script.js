window.onload = function () {
document.getElementById('io_arrow').innerHTML = "&rarr;";
document.getElementById('level').innerHTML = "&#9733; &#9733; &#9734; ";
document.getElementById('ptitle').innerHTML = "重疊的線段";
document.getElementById('ptitle_en').innerHTML = "Overlapped Segments";
document.getElementById('input_comment').innerHTML = "由起點與終點座標代表多條線段<ul><ll>1 &le; x座標N &le; 100,000</li><li>線段數Q &le; 100,000</li></ul>";
document.getElementById('output_comment').innerHTML = "各整數 x 座標上的重疊線段數量";
document.getElementById('motivation').innerHTML = "一維整數座標區間的問題，可以用累積和的概念有效率地解決。";
document.getElementById('description').innerHTML = "請從多條線段，求出各整數 x 座標上的重疊線段數量。";
document.getElementById('input_panel').innerHTML = '<img src="../../problems/overlapping_1d/input.svg" width="340"/>';
document.getElementById('output_panel').innerHTML = '<img src="../../problems/overlapping_1d/output.svg" width="340"/>';
document.getElementById('algorithm_icon').innerHTML = '<img src="../../icons/algorithms/1d_accumulation.svg" width="100"/>';
document.getElementById('atitle').innerHTML = "一維累積和";
document.getElementById('atitle_en').innerHTML = "1 Dimensional Accumulation";
document.getElementById('abstract').innerHTML = "我們用一維陣列來存放（標示）線段，而線段是用 x 座標來標示頭尾，所以一維陣列 的大小 N 必須要大於或等於 x 座標的最大值 +1，否則會放不下。請注意！本節所指的線段長度不包含線段的終點（例如起點為 2，終點為 6，則線段會由 2 畫到 5，不含 6）。";
document.getElementById('explanation').innerHTML = "假設線段的 2 個端點座標分別為 b 與 e（begin 與 end），當線段放到陣列後，將起點 座標 A[b] 加 1、終點座標 A[e] 減 1。如此一來，從陣列前端開始計算重疊的線段數 時，就可知道從座標 b 開始增加 1 條線段，從座標 e 開始減少 1 條線段。<br/></br>當新增線段的階段處理完成後，陣列元素上的數值便代表增加的線段數量（若為負值 則表示減少的線段數量），因此我們只要從陣列 A 的前端開始取累積和，便能求出各座 標上重疊的線段數。";
document.getElementById('note').innerHTML = "此問題也有比較單純的解法，當線段的兩端點座標分別為 b 與 e 時，我們可以將陣列 中第 b 個元素到第 e-1 個元素的值（線段數）都加 1，如此便可得到各座標上的線段數 量。不過這種演算法的時間複雜度會是 O(NQ)。<br/><br/>至於利用累積和的演算法，其複雜度由於新增 Q 條線段時為 O(Q)，計算累積和時為  O(N)，因此整體的時間複雜度為 O(N+Q)。";
document.getElementById('application').innerHTML = "此演算法的應用並不限於線段等幾何學上的問題，只要換個角度思考，就能擴大 其應用。例如用來計算時間軸上的重疊區間，這樣就能藉由每位客人的入店、離店 時間，計算出各時段的店內人數等。";
document.getElementById('structure').innerHTML = '<tr><td style="text-align:center;width:100"><img src="../../icons/structures/A1D.svg" /><br/><br/></td><td class="frame">&nbsp;<img height="160" class="frame_svg" valign="middle" src="space_st.svg" />&nbsp;</td></tr><tr><td></td><td class="caption">一維陣列</td></tr>';
document.getElementById('variable').innerHTML = '<tr><th class="scene_desc" colspan="3">資料</th></tr><tr><td class="symbol"><img src="variable_A.svg" /></td><td>重疊的線段數</td><td class="code">A</td></tr>';
document.getElementById('formula').innerHTML = '<tr><th class="scene_desc" colspan="3">新增線段</th></tr><tr><td class="symbol"><img src="formula_bw.svg" /></td><td>線段放進來時， 起點座標陣列值加 1。</td><td class="code">A[b]++</td></tr><tr><td class="symbol"><img src="formula_ew.svg" /></td><td>線段放進來時， 終點座標陣列值減 1。</td><td class="code">A[e]--</td></tr><tr><th class="scene_desc" colspan="3">計算累積和</th></tr><tr><td class="symbol"><img src="formula_cur.svg" /></td><td>由陣列前端開始，逐一累加元素。</td><td class="code">A[i] &larr; A[i] + A[i-1]</td></tr>';
document.getElementById('scheme').innerHTML = '<tr><td style="text-align:center;width:100"><img src="anim_qr.svg" width="80"/></td><td class="frame"><hr class="separator"/><img height="160" class="frame_svg" src="scheme_step1.svg" /><p class="caption">新增線段。</p><hr class="separator"/><img height="160" class="frame_svg" src="scheme_step2.svg" /><p class="caption">藉由累積和求出各 x 座標上重疊的線段數。</p></td></tr>';
document.getElementById('scene').innerHTML = '<div><p><b class="scene_desc">新增線段</b><br/><img src="scene_0.svg" alt="一維累積和 | 新增線段" title="一維累積和 | 新增線段"/></p></div><div><p><b class="scene_desc">計算累積和</b><br/><img src="scene_1.svg" alt="一維累積和 | 計算累積和" title="一維累積和 | 計算累積和"/></p></div>';
document.getElementById('complexity').innerHTML = '<img src="../../../icons/complexity/linear.svg" />';
document.getElementById('prerequisites').innerHTML = '<img src="../../icons/algorithms/accumulation.svg" width="60"/>';
MathJax.Hub.Queue(["Typeset",MathJax.Hub]);};