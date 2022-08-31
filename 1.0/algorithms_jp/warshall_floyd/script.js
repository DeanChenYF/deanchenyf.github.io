window.onload = function () {
document.getElementById('io_arrow').innerHTML = "&rarr;";
document.getElementById('level').innerHTML = "&#9733; &#9733; &#9733; ";
document.getElementById('ptitle').innerHTML = "全点対間最短経路";
document.getElementById('ptitle_en').innerHTML = "All Pairs Shortest Path";
document.getElementById('input_comment').innerHTML = "重み付き有向グラフ<ul><li>ノードの数N &le; 100</li></ul>";
document.getElementById('output_comment').innerHTML = "全点対間最短経路の距離";
document.getElementById('motivation').innerHTML = "";
document.getElementById('description').innerHTML = "重み付き有向グラフの隣接行列から、ノードの全ての組についての、最短距離を表す行列を求めてください。";
document.getElementById('input_panel').innerHTML = '<img src="../../problems/apsp/input.svg" width="340"/>';
document.getElementById('output_panel').innerHTML = '<img src="../../problems/apsp/output.svg" width="340"/>';
document.getElementById('algorithm_icon').innerHTML = '<img src="../../icons/algorithms/warshall_floyd.svg" width="100"/>';
document.getElementById('atitle').innerHTML = "ワーシャルフロイドのアルゴリズム";
document.getElementById('atitle_en').innerHTML = "Warshall Floyd's Algorithm";
document.getElementById('abstract').innerHTML = "ワーシャルフロイドのアルゴリズムは、グラフの隣接行列を、全てのノードの組(i, j)間の最短距離を表す行列に変換します。";
document.getElementById('explanation').innerHTML = "ワーシャルフロイドのアルゴリズムは、２次元配列distの要素dist[i][j]がノードiからノードjへの最短距離となるような、N&times;Nの行列を生成します。最初distは与えられるグラフの隣接行列と同じです。<br/><br/>ワーシャルフロイドのアルゴリズムは、中間点k (k=0, 1, ..., N-1)について、ノードiからノードjまでの最短距離を更新していきます。ノードkについて最短距離を更新するときは、すでにノード0, 1, 2, ... k-1を中間点とした距離が計算済みになっています。各始点・終点の組(i, j)について、iからjへの最短経路にkが含まれない場合は、dist[i][j]の値が維持されます。一方、iからjへの最短経路にkが含まれる場合は、dist[i][k] + dist[k][j] が dist[i][j]よりも小さくなり、dist[i][j]はdist[i][k] + dist[k][j]に更新されます。<br><br>ワーシャルフロイドのアルゴリズムは、ベルマンフォードのアルゴリズムと同様、負の重みをもつグラフに対しても適用することができ、負の閉路を検知することができます。アルゴリズムが終了した時点で、あるノードに着目したとき、それ自身への最短距離が負になっていれば、そのグラフに負の閉路が存在すると判断することができます。";
document.getElementById('note').innerHTML = "N個の経由点に対して、全てのノードの組（N &times N）だけ距離の更新が行われる可能性があるので、ワーシャルフロイドのアルゴリズムのオーダーはO($N^3$)となります。";
document.getElementById('application').innerHTML = "ワーシャルフロイドのアルゴリズムは、シンプルに実装することができますが、強力なアルゴリズムです。グラフのサイズは限られてしまいますが、全ての始点・終点の組に対する最短経路を求める問題、負の重みをもつグラフに対する問題、ノード間の到達性を調べるアプリケーションなどに応用することができます。";
document.getElementById('structure').innerHTML = '<tr><td style="text-align:center;width:100"><img src="../../icons/structures/DGR.svg" /><br/><br/><img src="../../icons/structures/A2D.svg" /><br/><br/></td><td class="frame">&nbsp;<img height="160" class="frame_svg" valign="middle" src="space_st.svg" />&nbsp;</td></tr><tr><td></td><td class="caption">有向グラフと2次元配列</td></tr>';
document.getElementById('variable').innerHTML = '<tr><th class="scene_desc" colspan="3">データ</th></tr><tr><td class="symbol"><img src="variable_dist.svg" /></td><td>ノード間の距離</td><td class="code">dist</td></tr>';
document.getElementById('formula').innerHTML = '<tr><th class="scene_desc" colspan="3">隣接行列の初期化</th></tr><tr><td class="symbol"><img src="formula_input.svg" /></td><td>行列を作ります。</td><td class="code"></td></tr><tr><th class="scene_desc" colspan="3">行列の更新</th></tr><tr><td class="symbol"><img src="formula_ij.svg" /></td><td>距離を更新します。</td><td class="code">dist[i][j] &larr; dist[i][k] + dist[k][j]</td></tr><tr><td class="symbol"><img src="formula_inter.svg" /></td><td>経由点を表します。</td><td class="code">k</td></tr><tr><th class="scene_desc" colspan="3">出力</th></tr><tr><td class="symbol"><img src="formula_output.svg" /></td><td>行列を出力します。</td><td class="code"></td></tr>';
document.getElementById('scheme').innerHTML = '<tr><td style="text-align:center;width:100"><img src="anim_qr.svg" width="80"/></td><td class="frame"><hr class="separator"/><img height="160" class="frame_svg" src="scheme_step1.svg" /><p class="caption">経由点ごとに距離を更新します。</p></td></tr>';
document.getElementById('scene').innerHTML = '<div><p><b class="scene_desc">隣接行列の初期化</b><br/><img src="scene_0.svg" alt="ワーシャルフロイドのアルゴリズム | 隣接行列の初期化" title="ワーシャルフロイドのアルゴリズム | 隣接行列の初期化"/></p></div><div><p><b class="scene_desc">行列の更新</b><br/><img src="scene_1.svg" alt="ワーシャルフロイドのアルゴリズム | 行列の更新" title="ワーシャルフロイドのアルゴリズム | 行列の更新"/></p></div><div><p><b class="scene_desc">出力</b><br/><img src="scene_2.svg" alt="ワーシャルフロイドのアルゴリズム | 出力" title="ワーシャルフロイドのアルゴリズム | 出力"/></p></div>';
document.getElementById('complexity').innerHTML = '<img src="../../../icons/complexity/cube.svg" />';
document.getElementById('prerequisites').innerHTML = '';
MathJax.Hub.Queue(["Typeset",MathJax.Hub]);};