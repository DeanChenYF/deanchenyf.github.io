window.onload = function () {
document.getElementById('io_arrow').innerHTML = "&rarr;";
document.getElementById('level').innerHTML = "&#9733; &#9733; ";
document.getElementById('ptitle').innerHTML = "質數表";
document.getElementById('ptitle_en').innerHTML = "Prime Number Table";
document.getElementById('input_comment').innerHTML = "整數N <ul><li>2 &le; N &le; 1,000,000</li></ul>";
document.getElementById('output_comment').innerHTML = "到N為止的質數表，圖中的1表示質數，空白表示0(合數）";
document.getElementById('motivation').innerHTML = "質數指的是除了 1 與該數本身之外，沒有其他因數的正整數。由於密碼及高速演算法的實作等，都會用到質數的特性，因此我們需要可判斷是否為質數以及可產生質數的高效演算法。";
document.getElementById('description').innerHTML = "請建立1個質數表，其中第i個元素在整數i為質數時為1，合數時為0(※ 編註：合數是除了1與該數本身之外，有其他因數的正整數）。";
document.getElementById('input_panel').innerHTML = '<img src="../../problems/prime_number_table/input.svg" width="340"/>';
document.getElementById('output_panel').innerHTML = '<img src="../../problems/prime_number_table/output.svg" width="340"/>';
document.getElementById('algorithm_icon').innerHTML = '<img src="../../icons/algorithms/sieve_of_eratosthenes.svg" width="100"/>';
document.getElementById('atitle').innerHTML = "埃拉托斯特尼篩法";
document.getElementById('atitle_en').innerHTML = "Sieve of Eratosthenes";
document.getElementById('abstract').innerHTML = "「埃拉托斯特尼篩法」是以大小為 N 的陣列做為質數表，列出從 2 到 (N-1) 的質數演算法。";
document.getElementById('explanation').innerHTML = "埃氏篩法的運作原理如下：1.  首先列出 2 以上的整數，將它們視為質數的候選數並初始化為 1。2.  保留第一個質數「2」。從候選數中刪掉 2 的倍數（4、6、8、...），也就是填入 0。3.  保留第二個質數「3」。從候選數中刪掉 3 的倍數（6、9、12、...），也就是填入 0。※ 編註：由於 6、12、18、24、30、42、48，在刪除 2 的倍數時已經被篩掉了（填入 0），所以進行 3 的倍數篩選時，就可以略過這些已經被填入 0 的整數。4.  繼續從候選數中找出奇數 i（因為偶數是 2 的倍數，不是質數），然後篩掉所有 i 的倍數（因為 i 的倍數不是質數），即可得到由 2 到 i 2  的質數表，例如此範例保留質數 7，並刪除所有 7 的倍數後，即可得到 49 以下的質數表。同理可證，在篩選奇數 i 的倍數時，只要篩選到 N 的平方根為止。。";
document.getElementById('note').innerHTML = "埃氏篩法的時間複雜度已知為O ($N $log^2 N$)。";
document.getElementById('application').innerHTML = "質數可用於加密等各種應用程式中，電腦安全領域也會使用埃氏篩法快速建立質數表。此外，產生亂數的演算法及資料結構的實作，也都會用到質數。";
document.getElementById('structure').innerHTML = '<tr><td style="text-align:center;width:100"><img src="../../icons/structures/A1D.svg" /><br/><br/></td><td class="frame">&nbsp;<img height="160" class="frame_svg" valign="middle" src="space_a.svg" />&nbsp;</td></tr><tr><td></td><td class="caption">一維陣列</td></tr>';
document.getElementById('variable').innerHTML = '<tr><th class="scene_desc" colspan="3">資料</th></tr><tr><td class="symbol"><img src="variable_P.svg" /></td><td>若 P [ i ]  為 1，則表示 i 為質數 的質數表</td><td class="code">P</td></tr>';
document.getElementById('formula').innerHTML = '<tr><th class="scene_desc" colspan="3">初始化</th></tr><tr><td class="symbol"><img src="formula_ini.svg" /></td><td>將2以上的數都初始化為質數的候選數。</td><td class="code"></td></tr><tr><th class="scene_desc" colspan="3">刪除 2 的倍數</th></tr><tr><td class="symbol"><img src="formula_s.svg" /></td><td>將 2 的倍數視為合數 ※。</td><td class="code">P[j] &larr; 0</td></tr><tr><th class="scene_desc" colspan="3">刪除奇數質數的倍數</th></tr><tr><td class="symbol"><img src="formula_decision.svg" /></td><td>保留為質數。</td><td class="code">i</td></tr><tr><td class="symbol"><img src="formula_s.svg" /></td><td>將未被刪除的質數之倍數視為合數。</td><td class="code">P[j] &larr; 0</td></tr><tr><td class="symbol"><img src="formula_valid.svg" /></td><td>完成質數表。</td><td class="code">區間[0, i*i]</td></tr><tr><th class="scene_desc" colspan="3">輸出質數清單</th></tr><tr><td class="symbol"><img src="formula_prime.svg" /></td><td>列出質數。</td><td class="code"></td></tr>';
document.getElementById('scheme').innerHTML = '<tr><td style="text-align:center;width:100"><img src="anim_qr.svg" width="80"/></td><td class="frame"><hr class="separator"/><img height="160" class="frame_svg" src="scheme_step.svg" /><p class="caption">刪除倍數。</p></td></tr>';
document.getElementById('scene').innerHTML = '<div><p><b class="scene_desc">初始化</b><br/><img src="scene_0.svg" alt="埃拉托斯特尼篩法 | 初始化" title="埃拉托斯特尼篩法 | 初始化"/></p></div><div><p><b class="scene_desc">刪除 2 的倍數</b><br/><img src="scene_1.svg" alt="埃拉托斯特尼篩法 | 刪除 2 的倍數" title="埃拉托斯特尼篩法 | 刪除 2 的倍數"/></p></div><div><p><b class="scene_desc">刪除奇數質數的倍數</b><br/><img src="scene_2.svg" alt="埃拉托斯特尼篩法 | 刪除奇數質數的倍數" title="埃拉托斯特尼篩法 | 刪除奇數質數的倍數"/></p></div><div><p><b class="scene_desc">輸出質數清單</b><br/><img src="scene_3.svg" alt="埃拉托斯特尼篩法 | 輸出質數清單" title="埃拉托斯特尼篩法 | 輸出質數清單"/></p></div>';
document.getElementById('complexity').innerHTML = '<img src="../../../icons/complexity/linear_log.svg" />';
document.getElementById('prerequisites').innerHTML = '';
MathJax.Hub.Queue(["Typeset",MathJax.Hub]);};