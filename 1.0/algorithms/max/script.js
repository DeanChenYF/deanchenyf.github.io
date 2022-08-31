window.onload = function () {
document.getElementById('io_arrow').innerHTML = "&rarr;";
document.getElementById('level').innerHTML = "&#9734; ";
document.getElementById('ptitle').innerHTML = "２つの整数の最大値";
document.getElementById('ptitle_en').innerHTML = "Maximum of Two Elements";
document.getElementById('input_comment').innerHTML = "２つの整数";
document.getElementById('output_comment').innerHTML = "大きい方の整数";
document.getElementById('motivation').innerHTML = "問題解決には、状況を判断して意思決定を行うプロセスが伴います。２つの数値のうち、大きい方あるいは小さい方を選択する処理は、大小関係をもつデータを扱うプログラムで最も多く使われる処理です。";
document.getElementById('description').innerHTML = "与えられた２つの整数のうち、大きい方を選択してください。";
document.getElementById('input_panel').innerHTML = '<img src="../../problems/max/input.svg" width="340"/>';
document.getElementById('output_panel').innerHTML = '<img src="../../problems/max/output.svg" width="340"/>';
document.getElementById('algorithm_icon').innerHTML = '<img src="../../icons/algorithms/max.svg" width="100"/>';
document.getElementById('atitle').innerHTML = "最大値 (マックス)";
document.getElementById('atitle_en').innerHTML = "Max";
document.getElementById('abstract').innerHTML = "条件分岐によって、２つの整数の値のうち、大きい方を選択します。ただし、同じ値の場合はその値を最大値とします。";
document.getElementById('explanation').innerHTML = "本事典の可視化では、分岐処理の条件の評価とその決定を２つのステップ（フレーム）で表します。分岐によって選択される処理は、変数の値や条件式の結果に依存します。この例の場合は、x > y を満たすため、xが選ばれました。このようなフレームは分岐処理の決定の一例となります。";
document.getElementById('note').innerHTML = "最大値を求めるプログラムは、汎用的な処理として多くのプログラミング言語に実装されています。関数の場合は２つの変数x, yに値を受け取り、if x > y: を満たすとき return xを、そうでない場合 return y を行う関数として実装することができます。<br/><br/>今後はこの処理をmax(a, b)として利用します。max(a, b)はaとbの値のうち大きい方を返すものとします。また、x &gt; y を x &lt; y へ書き換えれば、２つの値の小さい方を求めるmin(a, b)になります。";
document.getElementById('application').innerHTML = "最大値を求めるmax関数、最小値を求めるmin関数は、数値を扱う多くのアルゴリズムに使われる汎用的な部品です。";
document.getElementById('structure').innerHTML = '<tr><td style="text-align:center;width:100"><img src="../../icons/structures/A0D.svg" /><br/><br/></td><td class="frame">&nbsp;<img height="160" class="frame_svg" valign="middle" src="space_st.svg" />&nbsp;</td></tr><tr><td></td><td class="caption">２つのシングルノード</td></tr>';
document.getElementById('variable').innerHTML = '<tr><th class="scene_desc" colspan="3">データ</th></tr><tr><td class="symbol"><img src="variable_x.svg" /></td><td>１つ目の整数</td><td class="code">x</td></tr><tr><td class="symbol"><img src="variable_y.svg" /></td><td>２つ目の整数</td><td class="code">y</td></tr>';
document.getElementById('formula').innerHTML = '<tr><th class="scene_desc" colspan="3">入力</th></tr><tr><td class="symbol"><img src="formula_ix.svg" /></td><td>２つの整数を読み込みます。</td><td class="code"></td></tr><tr><th class="scene_desc" colspan="3">選択</th></tr><tr><td class="symbol"><img src="formula_select.svg" /></td><td>xがyより大きいか調べます。</td><td class="code">if x > y:</td></tr><tr><td class="symbol"><img src="formula_decision.svg" /></td><td>値が大きい方を指します。</td><td class="code">xまたはy</td></tr><tr><td class="symbol"><img src="formula_ox.svg" /></td><td>大きい方の整数を出力します。</td><td class="code"></td></tr>';
document.getElementById('scheme').innerHTML = '<tr><td style="text-align:center;width:100"><img src="anim_qr.svg" width="80"/></td><td class="frame"><hr class="separator"/><img height="160" class="frame_svg" src="scheme_step1.svg" /><p class="caption">２つの変数の値の大小関係を比較します。</p><hr class="separator"/><img height="160" class="frame_svg" src="scheme_step2.svg" /><p class="caption">大きい方を選択します。</p></td></tr>';
document.getElementById('scene').innerHTML = '<div><p><b class="scene_desc">入力</b><br/><img src="scene_0.svg" alt="最大値 (マックス) | 入力" title="最大値 (マックス) | 入力"/></p></div><div><p><b class="scene_desc">選択</b><br/><img src="scene_1.svg" alt="最大値 (マックス) | 選択" title="最大値 (マックス) | 選択"/></p></div>';
document.getElementById('complexity').innerHTML = '';
document.getElementById('prerequisites').innerHTML = '';
MathJax.Hub.Queue(["Typeset",MathJax.Hub]);};