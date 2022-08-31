window.onload = function () {
document.getElementById('io_arrow').innerHTML = "&rarr;";
document.getElementById('level').innerHTML = "&#9733; &#9733; &#9733; ";
document.getElementById('ptitle').innerHTML = "長方形の重なり";
document.getElementById('ptitle_en').innerHTML = "Overlapped Rectangles";
document.getElementById('input_comment').innerHTML = "左上の点と右下の点の座標の組で表された複数の長方形<ul><li>1 &le; x, y座標 &le; 1,000</li><li>長方形の数 &le; 100,000</ul>";
document.getElementById('output_comment').innerHTML = "長方形が重なっている箇所の個数";
document.getElementById('motivation').innerHTML = "区間の情報を１次元の累積和で高速に求めるアイデアは、同様に2次元の問題に応用することができます。";
document.getElementById('description').innerHTML = "複数の長方形が与えられるので、各座標において（１枚以上）重なっている長方形の個数を求めてください。";
document.getElementById('input_panel').innerHTML = '<img src="../../problems/overlapping_2d/input.svg" width="340"/>';
document.getElementById('output_panel').innerHTML = '<img src="../../problems/overlapping_2d/output.svg" width="340"/>';
document.getElementById('algorithm_icon').innerHTML = '<img src="../../icons/algorithms/2d_accumulation.svg" width="100"/>';
document.getElementById('atitle').innerHTML = "２次元累積和";
document.getElementById('atitle_en').innerHTML = "2 Dimensional Accumulation";
document.getElementById('abstract').innerHTML = "長方形の左上の頂点と右下の頂点の座標を2次元配列構造のノードで表し、対応する配列の要素にその座標上にある長方形の数を記録していきます。";
document.getElementById('explanation').innerHTML = "1次元の累積和を２次元の累積和に拡張します。与えられた長方形の左上の点と右下の点の座標をそれぞれ(x1, y1), (x2, y2) とすると、　A[x1][y1]とA[x2][y2]には１を加え、A[x1][y2]とA[x2][y1]から1を引きます。(x1, y1)の座標のみが長方形に含まれていることに注意してください。<br/><br/>累積和のアルゴリズムは、まず水平方向（xが大きくなる方向に）スキャンし、それぞれのノードの値にyが等しい１つ前のノードの値を加算していきます。同様に垂直方向（yが大きくなる方向に）スキャンします。これらの処理により、各ノードには対応する座標における長方形の個数が求まっています。";
document.getElementById('note').innerHTML = "この問題を素朴なアルゴリズムで解決する場合、与えられた長方形の大きさに対応する配列の領域に１を加算していくので（塗り潰していく）、オーダーはO($NM$)となります。この処理を長方形の数だけ行うので、素朴なアルゴリズムのオーダーはO($QNM$)となります。<br/><br/>累積和を用いたアルゴリズムでは、Q個の長方形を追加する操作にO(Q)、累積和を求める処理にO($NM$)かかるので、オーダーはO($Q + NM$)となります。";
document.getElementById('application').innerHTML = "";
document.getElementById('structure').innerHTML = '<tr><td style="text-align:center;width:100"><img src="../../icons/structures/A2D.svg" /><br/><br/></td><td class="frame">&nbsp;<img height="160" class="frame_svg" valign="middle" src="space_st.svg" />&nbsp;</td></tr><tr><td></td><td class="caption">２次元配列</td></tr>';
document.getElementById('variable').innerHTML = '<tr><th class="scene_desc" colspan="3">データ</th></tr><tr><td class="symbol"><img src="variable_A.svg" /></td><td>長方形が重なっている枚数</td><td class="code">A</td></tr>';
document.getElementById('formula').innerHTML = '<tr><th class="scene_desc" colspan="3">長方形の追加</th></tr><tr><td class="symbol"><img src="formula_add.svg" /></td><td>左上と右下の点に対応する要素に１を加えます。</td><td class="code">A[x1][y1]++<br/>A[x2][y2]++</td></tr><tr><td class="symbol"><img src="formula_sub.svg" /></td><td>左下と右上の点に対応する要素から１を引きます。</td><td class="code">A[x1][y2]--<br/>A[x2][y1]--</td></tr><tr><th class="scene_desc" colspan="3">水平方向のスキャン</th></tr><tr><td class="symbol"><img src="formula_scan.svg" /></td><td>手前の要素を加算していきます。</td><td class="code">A[x][y] &larr; A[x][y] + A[x-1][y]</td></tr><tr><th class="scene_desc" colspan="3">垂直方向のスキャン</th></tr><tr><td class="symbol"><img src="formula_scan.svg" /></td><td>手前の要素を加算していきます。</td><td class="code">A[x][y] &larr; A[x][y] + A[x][y-1]</td></tr>';
document.getElementById('scheme').innerHTML = '<tr><td style="text-align:center;width:100"><img src="anim_qr.svg" width="80"/></td><td class="frame"><hr class="separator"/><img height="160" class="frame_svg" src="scheme_step1.svg" /><p class="caption">長方形を追加します。</p><hr class="separator"/><img height="160" class="frame_svg" src="scheme_step2.svg" /><p class="caption">水平方向と垂直方向に累積和をとります。</p></td></tr>';
document.getElementById('scene').innerHTML = '<div><p><b class="scene_desc">長方形の追加</b><br/><img src="scene_0.svg" alt="２次元累積和 | 長方形の追加" title="２次元累積和 | 長方形の追加"/></p></div><div><p><b class="scene_desc">水平方向のスキャン</b><br/><img src="scene_1.svg" alt="２次元累積和 | 水平方向のスキャン" title="２次元累積和 | 水平方向のスキャン"/></p></div><div><p><b class="scene_desc">垂直方向のスキャン</b><br/><img src="scene_2.svg" alt="２次元累積和 | 垂直方向のスキャン" title="２次元累積和 | 垂直方向のスキャン"/></p></div>';
document.getElementById('complexity').innerHTML = '<img src="../../../icons/complexity/quad.svg" />';
document.getElementById('prerequisites').innerHTML = '<img src="../../icons/algorithms/1d_accumulation.svg" width="60"/>';
MathJax.Hub.Queue(["Typeset",MathJax.Hub]);};