window.onload = function () {
document.getElementById('io_arrow').innerHTML = "&rarr;";
document.getElementById('level').innerHTML = "&#9733; &#9733; ";
document.getElementById('ptitle').innerHTML = "グラフの接続性";
document.getElementById('ptitle_en').innerHTML = "Connectivity of Graph";
document.getElementById('input_comment').innerHTML = "無向グラフ<ul><li>ノードの数N &le; 1,000</li><li>エッジの数M &le; 1,000</li></ul>";
document.getElementById('output_comment').innerHTML = "各ノードの訪問状態";
document.getElementById('motivation').innerHTML = "グラフにおける最も基本的な操作は、ある始点から可能なエッジをたどっていき、ノードの接続性を調べることです。";
document.getElementById('description').innerHTML = "適当な始点から出発し、グラフの全てのノードを体系的に訪問してください。";
document.getElementById('input_panel').innerHTML = '<img src="../../problems/connectivity/input.svg" width="340"/>';
document.getElementById('output_panel').innerHTML = '<img src="../../problems/connectivity/output.svg" width="340"/>';
document.getElementById('algorithm_icon').innerHTML = '<img src="../../icons/algorithms/dfs_stack.svg" width="100"/>';
document.getElementById('atitle').innerHTML = "深さ優先探索";
document.getElementById('atitle_en').innerHTML = "Depth First Search";
document.getElementById('abstract').innerHTML = "深さ優先探索(DFS: Depth First Search)はグラフのノードを体系的に訪問するアルゴリズムで、探索途中のノードをスタックで管理します。";
document.getElementById('explanation').innerHTML = "深さ優先探索は、始点のノードから訪問し、まだ訪問していないノードへのエッジが存在すれば、そのノードを訪問し、同様の方法で探索を繰り返します。この方法では、いずれあるノードでそこから訪問できるノードがなくなります。そのような時は、前のノードに戻り、隣接するノードを走査する処理に戻ります（これをバックトラックと言います）。そのために、これまで訪問してきた、まだエッジを調べつくしていないかもしれないノードのリストを記憶しておく必要があります。この処理は、隣接するノードを訪問する前に、現在のノードの番号をスタックに退避しておくことで実現します。スタックからノードの番号を取り出すことで、そのノードに戻ることができます。";
document.getElementById('note').innerHTML = "スタックにデータを挿入するpush操作はO(1)、データを取り出すpop操作もO(1)です。スタックを用いた深さ優先探索では、各ノードから隣接するノードを走査する過程で全てのエッジが走査されます。また、各ノードに対するアクションは、訪問と完了です。幅優先探索と同様に、隣接リストによるグラフに対する深さ優先探索の計算量はO(N + M)となります。一方、隣接行列の場合は、各ノードの隣接ノードの走査にO(N)必要なため、オーダーはO($N^2$)になります。<br/><br/>深さ優先探索は、ノードを訪問する処理を再帰関数で実装することができます。実際は、訪問中のノードをスタックに積む方法と同じ動作になります。この方法は次のトピックで実装します。";
document.getElementById('application').innerHTML = "深さ優先探索は、グラフのノードの接続性からグラフの様々な性質を検出することができます。例えば、後の章で見るように、連結成分や閉路などを高速に検出することができます。";
document.getElementById('structure').innerHTML = '<tr><td style="text-align:center;width:100"><img src="../../icons/structures/GR.svg" /><br/><br/></td><td class="frame">&nbsp;<img height="160" class="frame_svg" valign="middle" src="space_g.svg" />&nbsp;</td></tr><tr><td></td><td class="caption">無向グラフ</td></tr>';
document.getElementById('variable').innerHTML = '<tr><th class="scene_desc" colspan="3">データ</th></tr><tr><td class="symbol"><img src="variable_color.svg" /></td><td>ノードの訪問状態</td><td class="code">color</td></tr>';
document.getElementById('formula').innerHTML = '<tr><th class="scene_desc" colspan="3">始点の決定</th></tr><tr><td class="symbol"><img src="formula_push.svg" /></td><td>始点をスタックに積みます。</td><td class="code">st.push(s)</td></tr><tr><th class="scene_desc" colspan="3">探索</th></tr><tr><td class="symbol"><img src="formula_vi.svg" /></td><td>ノードを訪問します。</td><td class="code">color[v] &larr; GRAY</td></tr><tr><td class="symbol"><img src="formula_push.svg" /></td><td>ノードをスタックに積みます。</td><td class="code">st.push(v)</td></tr><tr><td class="symbol"><img src="formula_ci.svg" /></td><td>ノードの訪問を完了します。</td><td class="code">color[u] &larr; BLACK</td></tr><tr><td class="symbol"><img src="formula_visited.svg" /></td><td>訪問したノードのグループを拡張していきます。</td><td class="code">colorがGRAYのノード</td></tr><tr><td class="symbol"><img src="formula_finished.svg" /></td><td>訪問が完了したノードのグループを拡張していきます。</td><td class="code">colorがBLACKのノード</td></tr>';
document.getElementById('scheme').innerHTML = '<tr><td style="text-align:center;width:100"><img src="anim_qr.svg" width="80"/></td><td class="frame"><hr class="separator"/><img height="160" class="frame_svg" src="scheme_visit.svg" /><p class="caption">隣接するノードを訪問します。</p><hr class="separator"/><img height="160" class="frame_svg" src="scheme_back.svg" /><p class="caption">全ての隣接するノードを訪問し完了します。</p></td></tr>';
document.getElementById('scene').innerHTML = '<div><p><b class="scene_desc">始点の決定</b><br/><img src="scene_0.svg" alt="深さ優先探索 | 始点の決定" title="深さ優先探索 | 始点の決定"/></p></div><div><p><b class="scene_desc">探索</b><br/><img src="scene_1.svg" alt="深さ優先探索 | 探索" title="深さ優先探索 | 探索"/></p></div>';
document.getElementById('complexity').innerHTML = '<img src="../../../icons/complexity/quad.svg" /><img src="../../../icons/complexity/linear.svg" />';
document.getElementById('prerequisites').innerHTML = '<img src="../../icons/algorithms/stack_simulation.svg" width="60"/>';
MathJax.Hub.Queue(["Typeset",MathJax.Hub]);};