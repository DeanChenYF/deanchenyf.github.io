window.onload = function () {
document.getElementById('io_arrow').innerHTML = "&rarr;";
document.getElementById('level').innerHTML = "&#9733; &#9734; ";
document.getElementById('ptitle').innerHTML = "要素を大小関係でグループ化";
document.getElementById('ptitle_en').innerHTML = "Grouping Elements";
document.getElementById('input_comment').innerHTML = "整数の列<ul><li>要素の数N &le; 100,000</li></ul>";
document.getElementById('output_comment').innerHTML = "適当な基準より小さいグループを前方に、大きいグループを後方に配置";
document.getElementById('motivation').innerHTML = "数列の要素を、ある条件を満たすようにグループ化する操作は、部分的な整理を行うシンプルなものですが、数列全体を効率よく整列するための強力な部品になります。";
document.getElementById('description').innerHTML = "配列の適当な１つの要素を基準として、基準より小さいグループと大きいグループに分割してください。";
document.getElementById('input_panel').innerHTML = '<img src="../../problems/partition/input.svg" width="340"/>';
document.getElementById('output_panel').innerHTML = '<img src="../../problems/partition/output.svg" width="340"/>';
document.getElementById('algorithm_icon').innerHTML = '<img src="../../icons/algorithms/partition.svg" width="100"/>';
document.getElementById('atitle').innerHTML = "分割";
document.getElementById('atitle_en').innerHTML = "Partition";
document.getElementById('abstract').innerHTML = "分割は、前方からひとつずつ要素を確認し、列の前方に基準値より小さい要素、後方に大きい要素を移動していきます。ここでは、基準値を末尾の値とします。分割処理における要素の移動は、スワップ処理のみで行うことができ、１つの配列内で実現することができます。";
document.getElementById('explanation').innerHTML = "先頭の要素から順番に基準値と比べていき、それをどちらのグループに属させるかを決めていきます。基準値以上の場合は、そのまま大きいグループに含めます。逆に、基準値より小さい場合は、大きいグループの先頭とスワップし、１つ拡張した小さいグループに含めます。最後に、基準値を小さいグループと大きいグループの間に移動するために、大きいグループの先頭と末尾の要素（基準値）をスワップします。ここで、配列の中で基準値の位置が決定します。";
document.getElementById('note').innerHTML = "各要素をどちらかのグループに含める操作をN回行うので、分割処理のオーダーはO(N)になります。この処理は、配列Aの区間[l, r]を基準値A[r]で小さいグループと大きいグループに分割する関数partition(A, l, r)として定義します。partitionは要素の順列を変えつつ分割後の基準値の位置を返します。";
document.getElementById('application').innerHTML = "ある基準値を軸に、配列の要素をグループ化する分割処理は、高等的整列アルゴリズムであるクイックソートの基本操作になります。";
document.getElementById('structure').innerHTML = '<tr><td style="text-align:center;width:100"><img src="../../icons/structures/A1D.svg" /><br/><br/></td><td class="frame">&nbsp;<img height="160" class="frame_svg" valign="middle" src="space_st.svg" />&nbsp;</td></tr><tr><td></td><td class="caption">一次元配列</td></tr>';
document.getElementById('variable').innerHTML = '<tr><th class="scene_desc" colspan="3">データ</th></tr><tr><td class="symbol"><img src="variable_A.svg" /></td><td>整数の列</td><td class="code">A</td></tr>';
document.getElementById('formula').innerHTML = '<tr><th class="scene_desc" colspan="3">入力</th></tr><tr><td class="symbol"><img src="formula_in.svg" /></td><td>整数の列を読み込みます。</td><td class="code"></td></tr><tr><th class="scene_desc" colspan="3">分割</th></tr><tr><td class="symbol"><img src="formula_select.svg" /></td><td>基準値と比較します。</td><td class="code">if A[j] < A[r]:</td></tr><tr><td class="symbol"><img src="formula_swap.svg" /></td><td>大きいグループの先頭とスワップします。</td><td class="code">swap(A[i], A[j])</td></tr><tr><td class="symbol"><img src="formula_smallGroup.svg" /></td><td>基準より小さい要素を含むグループを拡張していきます。</td><td class="code">区間[l, i]</td></tr><tr><td class="symbol"><img src="formula_largeGroup.svg" /></td><td>基準より大きい要素を含むグループを拡張していきます。</td><td class="code">区間[i+1, j]</td></tr><tr><td class="symbol"><img src="formula_pi.svg" /></td><td>基準より小さい要素を含むグループの右端を指します。</td><td class="code">i</td></tr><tr><td class="symbol"><img src="formula_pj.svg" /></td><td>基準より大きい要素を含むグループの右端を指します。</td><td class="code">j</td></tr><tr><th class="scene_desc" colspan="3">出力</th></tr><tr><td class="symbol"><img src="formula_out.svg" /></td><td>グループ分けされた整数の列を出力します。</td><td class="code"></td></tr>';
document.getElementById('scheme').innerHTML = '<tr><td style="text-align:center;width:100"><img src="anim_qr.svg" width="80"/></td><td class="frame"><hr class="separator"/><img height="160" class="frame_svg" src="scheme_step1.svg" /><p class="caption">基準値と比較します。</p><hr class="separator"/><img height="160" class="frame_svg" src="scheme_step2.svg" /><p class="caption">グループに含めます。</p></td></tr>';
document.getElementById('scene').innerHTML = '<div><p><b class="scene_desc">入力</b><br/><img src="scene_0.svg" alt="分割 | 入力" title="分割 | 入力"/></p></div><div><p><b class="scene_desc">分割</b><br/><img src="scene_1.svg" alt="分割 | 分割" title="分割 | 分割"/></p></div><div><p><b class="scene_desc">出力</b><br/><img src="scene_2.svg" alt="分割 | 出力" title="分割 | 出力"/></p></div>';
document.getElementById('complexity').innerHTML = '<img src="../../../icons/complexity/linear.svg" />';
document.getElementById('prerequisites').innerHTML = '<img src="../../icons/algorithms/swap.svg" width="60"/>';
MathJax.Hub.Queue(["Typeset",MathJax.Hub]);};