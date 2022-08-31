window.onload = function () {
document.getElementById('io_arrow').innerHTML = "&rarr;";
document.getElementById('level').innerHTML = "&#9733; &#9734; ";
document.getElementById('ptitle').innerHTML = "それぞれ整列済みの２つの列の整列";
document.getElementById('ptitle_en').innerHTML = "Sorting Two Sorted Sequences";
document.getElementById('input_comment').innerHTML = "前半と後半がそれぞれ整列済みの整数の列<ul><li>列の要素数N &le; 100,000</li></ul>";
document.getElementById('output_comment').innerHTML = "整列された整数の列";
document.getElementById('motivation').innerHTML = "それぞれ解決済みの複数の部分問題の解を利用すれば、その特性を利用し、もともとの問題をより効率よく解決できる場合があります。２つの部分問題の解を統合して、問題を解いてみましょう。";
document.getElementById('description').innerHTML = "それぞれ昇順に整列された２つの整数の列を、１つの昇順に整列された整数の列として統合（マージ）してください。これら２つの部分列は、それらがそれぞれ前後に配置された１つの列で与えられます。";
document.getElementById('input_panel').innerHTML = '<img src="../../problems/merge/input.svg" width="340"/>';
document.getElementById('output_panel').innerHTML = '<img src="../../problems/merge/output.svg" width="340"/>';
document.getElementById('algorithm_icon').innerHTML = '<img src="../../icons/algorithms/merge.svg" width="100"/>';
document.getElementById('atitle').innerHTML = "マージ";
document.getElementById('atitle_en').innerHTML = "Merge";
document.getElementById('abstract').innerHTML = "すべての要素を一時的に退避しておくためのもう1つの配列を用意します。退避した要素を元の配列に戻す過程で全体を昇順に並べ替えます。";
document.getElementById('explanation').innerHTML = "整列された２つの部分を一時的に退避する配列にコピーします。この後、後半の部分をリバースしておきます。前方、後方それぞれの先頭のうち小さい要素を選びながら、もとの配列に戻していきます。後半をリバースする工夫によって、片方の列が空になった場合、その矢印がもう片方の最終要素を指すようになります。";
document.getElementById('note').innerHTML = "配列の前半の要素と後半の要素がそれぞれ昇順に整列済みであれば、効率よく全体を整列することができます。それぞれの先頭要素の比較と要素のコピーはN回行われるので、マージのオーダーはO(N)になります。一方、配列の要素全体を一時的に別な配列を退避するため、入力サイズの２倍のメモリが必要になります。";
document.getElementById('application').innerHTML = "それぞれ整列された２つの部分配列のマージは、高等的整列アルゴリズムであるマージソートの基本操作になります。";
document.getElementById('structure').innerHTML = '<tr><td style="text-align:center;width:100"><img src="../../icons/structures/A1D.svg" /><br/><br/></td><td class="frame">&nbsp;<img height="160" class="frame_svg" valign="middle" src="space_st.svg" />&nbsp;</td></tr><tr><td></td><td class="caption">２つの一次元配列</td></tr>';
document.getElementById('variable').innerHTML = '<tr><th class="scene_desc" colspan="3">データ</th></tr><tr><td class="symbol"><img src="variable_A.svg" /></td><td>整数の列</td><td class="code">A</td></tr><tr><td class="symbol"><img src="variable_T.svg" /></td><td>一時的に退避した整数の列</td><td class="code">T</td></tr>';
document.getElementById('formula').innerHTML = '<tr><th class="scene_desc" colspan="3">入力とデータの退避</th></tr><tr><td class="symbol"><img src="formula_lw.svg" /></td><td>入力データを退避します。</td><td class="code"></td></tr><tr><td class="symbol"><img src="formula_rw.svg" /></td><td>後半をリバースします。</td><td class="code"></td></tr><tr><th class="scene_desc" colspan="3">マージ</th></tr><tr><td class="symbol"><img src="formula_select.svg" /></td><td>どちらのグループの先頭が小さいか調べます。</td><td class="code">if T[i] &le; T[j]:</td></tr><tr><td class="symbol"><img src="formula_k.svg" /></td><td>選択された要素を戻します。</td><td class="code">A[k] &larr; T[?]</td></tr><tr><td class="symbol"><img src="formula_di.svg" /></td><td>前半部分の現在置を指します。</td><td class="code">i</td></tr><tr><td class="symbol"><img src="formula_dj.svg" /></td><td>後半部分の現在置を指します。</td><td class="code">j</td></tr><tr><td class="symbol"><img src="formula_sorted.svg" /></td><td>ソート済みの部分を拡張していきます。</td><td class="code">区間[l, k]</td></tr><tr><th class="scene_desc" colspan="3">出力</th></tr><tr><td class="symbol"><img src="formula_out.svg" /></td><td>整列された整数の列を出力します。</td><td class="code"></td></tr>';
document.getElementById('scheme').innerHTML = '<tr><td style="text-align:center;width:100"><img src="anim_qr.svg" width="80"/></td><td class="frame"><hr class="separator"/><img height="160" class="frame_svg" src="scheme_step1.svg" /><p class="caption">それぞれの先頭の要素を比較します。</p><hr class="separator"/><img height="160" class="frame_svg" src="scheme_step2.svg" /><p class="caption">小さい要素を配列に戻し、矢印を進めます。</p></td></tr>';
document.getElementById('scene').innerHTML = '<div><p><b class="scene_desc">入力とデータの退避</b><br/><img src="scene_0.svg" alt="マージ | 入力とデータの退避" title="マージ | 入力とデータの退避"/></p></div><div><p><b class="scene_desc">マージ</b><br/><img src="scene_1.svg" alt="マージ | マージ" title="マージ | マージ"/></p></div><div><p><b class="scene_desc">出力</b><br/><img src="scene_2.svg" alt="マージ | 出力" title="マージ | 出力"/></p></div>';
document.getElementById('complexity').innerHTML = '<img src="../../../icons/complexity/linear.svg" />';
document.getElementById('prerequisites').innerHTML = '<img src="../../icons/algorithms/reverse.svg" width="60"/>';
MathJax.Hub.Queue(["Typeset",MathJax.Hub]);};