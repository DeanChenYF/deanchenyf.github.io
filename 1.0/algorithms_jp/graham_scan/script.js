window.onload = function () {
document.getElementById('io_arrow').innerHTML = "&rarr;";
document.getElementById('level').innerHTML = "&#9733; &#9733; &#9733; ";
document.getElementById('ptitle').innerHTML = "点の凸包";
document.getElementById('ptitle_en').innerHTML = "Convex Hull";
document.getElementById('input_comment').innerHTML = "平面上の点群<ul><li>点の数N &le; 100,000</li></ul>";
document.getElementById('output_comment').innerHTML = "点を全て包む面積最小の凸多角形";
document.getElementById('motivation').innerHTML = "より大規模な点の集合に対して、凸包を求めてみましょう。";
document.getElementById('description').innerHTML = "与えられた点の集合の、凸包を求めてください。";
document.getElementById('input_panel').innerHTML = '<img src="../../problems/convex_hull/input.svg" width="340"/>';
document.getElementById('output_panel').innerHTML = '<img src="../../problems/convex_hull/output.svg" width="340"/>';
document.getElementById('algorithm_icon').innerHTML = '<img src="../../icons/algorithms/graham_scan.svg" width="100"/>';
document.getElementById('atitle').innerHTML = "グラハムスキャン";
document.getElementById('atitle_en').innerHTML = "Graham Scan";
document.getElementById('abstract').innerHTML = "グラハムスキャンは、スタックの特徴を活かし、凸包の辺上の点を、始点から反時計回りに決定していきます。";
document.getElementById('explanation').innerHTML = "グラハムスキャンは、前処理とスキャン操作の２つのフェーズからなります。前処理では、スキャンの始点となる点を決め、それを基準に他の点をソートします。始点として、y座標が最も小さい点、そのような点が複数ある場合はその中でx座標が最も小さい点を選びます。点のソートは、始点との偏角を基準に行います。偏角が同じ場合は、始点との距離が近い方を優先します。続いて、始点を含めた最初の３点を凸包に含め、これらをこの順番でスタックに積んでおきます。<br></br>グラハムスキャンの本体は、凸包上の点の候補をスタックに積んでいき、最終的にスタックの中に残っている点を凸包として完成させます。前処理によって偏角でソートされた点を順番に、凸包の点の候補として調べていきます。現在みている点をheadとします。headを凸包に追加する前に、スタックの上から２番目の点top2、頂点の点top、headの３点の位置関係を調べ、top2 &rarr; topに対してheadが時計回りの位置にいる限り、スタックからtopを削除していきます。headが反時計回りの位置にきたとき、つまり凸包を形成するとき、headを凸包に含めスタックに積みます。";
document.getElementById('note').innerHTML = "グラハムスキャンの凸包の点を選ぶ処理において、各点がスタックに挿入されるのは高々１回なので、オーダーはO(N)となります。ただし、偏角でソートする部分が最も計算量に影響するため、グラハムスキャンのオーダーはソートのアルゴリズムに依存しO(N log N)となります。";
document.getElementById('application').innerHTML = "点の凸包を実現するグラハムスキャンは、計算幾何学、画像処理、コンピュータビジョン・グラフィックス、ゲームの分野で多くのアプリケーションを持ちます。例えば、物体の認識、物体の衝突判定処理、マップ上の経路計画などの前処理として応用することができます。";
document.getElementById('structure').innerHTML = '<tr><td style="text-align:center;width:100"><img src="../../icons/structures/P2D.svg" /><br/><br/></td><td class="frame">&nbsp;<img height="160" class="frame_svg" valign="middle" src="space_p2d.svg" />&nbsp;</td></tr><tr><td></td><td class="caption">2次元点群</td></tr>';
document.getElementById('variable').innerHTML = '<tr><th class="scene_desc" colspan="3">データ</th></tr>';
document.getElementById('formula').innerHTML = '<tr><th class="scene_desc" colspan="3">点の整列と始点の決定</th></tr><tr><td class="symbol"><img src="formula_source.svg" /></td><td>最も左下の点を探します。</td><td class="code"></td></tr><tr><td class="symbol"><img src="formula_leftmost.svg" /></td><td>最も左下の点を指します。</td><td class="code"></td></tr><tr><td class="symbol"><img src="formula_all.svg" /></td><td>最も左下の点を基準に、点を偏角でソートします。</td><td class="code"></td></tr><tr><th class="scene_desc" colspan="3">凸包の構築</th></tr><tr><td class="symbol"><img src="formula_select.svg" /></td><td>3点が反時計回りかどうかをチェックします。</td><td class="code"></td></tr><tr><td class="symbol"><img src="formula_head.svg" /></td><td>点の番号をスタックに追加します。</td><td class="code">st.push(head)</td></tr><tr><td class="symbol"><img src="formula_trace.svg" /></td><td>凸包の辺を確定していきます。</td><td class="code"></td></tr>';
document.getElementById('scheme').innerHTML = '<tr><td style="text-align:center;width:100"><img src="anim_qr.svg" width="80"/></td><td class="frame"><hr class="separator"/><img height="160" class="frame_svg" src="scheme_step1.svg" /><p class="caption">点の位置関係を調べます。</p><hr class="separator"/><img height="160" class="frame_svg" src="scheme_step2.svg" /><p class="caption">点を凸包の候補から除外します。</p><hr class="separator"/><img height="160" class="frame_svg" src="scheme_step3.svg" /><p class="caption">点を凸包の候補に含めます。</p></td></tr>';
document.getElementById('scene').innerHTML = '<div><p><b class="scene_desc">点の整列と始点の決定</b><br/><img src="scene_0.svg" alt="グラハムスキャン | 点の整列と始点の決定" title="グラハムスキャン | 点の整列と始点の決定"/></p></div><div><p><b class="scene_desc">凸包の構築</b><br/><img src="scene_1.svg" alt="グラハムスキャン | 凸包の構築" title="グラハムスキャン | 凸包の構築"/></p></div>';
document.getElementById('complexity').innerHTML = '<img src="../../../icons/complexity/linear_log.svg" />';
document.getElementById('prerequisites').innerHTML = '<img src="../../icons/algorithms/stack_simulation.svg" width="60"/><img src="../../icons/algorithms/quick_sort.svg" width="60"/>';
MathJax.Hub.Queue(["Typeset",MathJax.Hub]);};