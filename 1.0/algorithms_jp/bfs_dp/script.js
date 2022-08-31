window.onload = function () {
document.getElementById('io_arrow').innerHTML = "&rarr;";
document.getElementById('level').innerHTML = "&#9733; &#9733; &#9734; ";
document.getElementById('ptitle').innerHTML = "最短距離";
document.getElementById('ptitle_en').innerHTML = "Shortest Distance";
document.getElementById('input_comment').innerHTML = "グラフと始点<ul><li>ノードの数N &le; 100,000</li><li>エッジの数M &le; 100,000</li></ul>";
document.getElementById('output_comment').innerHTML = "始点から各ノードへの最短距離";
document.getElementById('motivation').innerHTML = "グラフの最も興味深い性質のひとつがノード間の距離です。重みのないグラフでは、あるノードから別のノードまで到達するために最低限必要なエッジの数は、そのグラフの重要な特徴になります。";
document.getElementById('description').innerHTML = "各ノードについて、始点からの最短距離を求めてください。ここで、距離はエッジをたどる回数とします。";
document.getElementById('input_panel').innerHTML = '<img src="../../problems/shortest_step/input.svg" width="340"/>';
document.getElementById('output_panel').innerHTML = '<img src="../../problems/shortest_step/output.svg" width="340"/>';
document.getElementById('algorithm_icon').innerHTML = '<img src="../../icons/algorithms/bfs_dp.svg" width="100"/>';
document.getElementById('atitle').innerHTML = "BFSによる最短距離の計算";
document.getElementById('atitle_en').innerHTML = "BFS for Shortest Distance";
document.getElementById('abstract').innerHTML = "幅優先探索では、すでに距離が確定したノードの情報を利用して、始点からのノードの距離を効率的に求めることができます。";
document.getElementById('explanation').innerHTML = "幅優先探索では、始点のノードを含む層を層0として、始点から距離1のノードを含む層を層1、・・・とすると、層k+1を訪問する前に層kにある全てのノードが訪問済みになります。幅優先探索では、始点に近い順序でキューからノードが取り出されますが、キューから取り出されたノードuに隣接しかつ未訪問のノードvの距離は、始点からuまでの距離にuとvを直接繋ぐエッジの分の距離1を加算することで求まります。";
document.getElementById('note').innerHTML = "グラフを隣接リストで表現すれば、距離を求める幅優先探索のオーダーはO(N + M)となります。";
document.getElementById('application').innerHTML = "グラフにおける最短距離問題は、最も多くのアプリケーションを持つ問題です。幅優先探索は、ノードの数とエッジの数に線形な効率のよいアルゴリズムのため、広く応用されています。また、エッジに重みがある場合は、そのままでは適用できませんが、キューを優先度付きキューに置き換え、重みを考慮した距離を計算することで、エッジに重みがある最短経路を解決するためのアルゴリズムに拡張することができます。このアルゴリズムは２６章でで詳しく解説します。";
document.getElementById('structure').innerHTML = '<tr><td style="text-align:center;width:100"><img src="../../icons/structures/GR.svg" /><br/><br/></td><td class="frame">&nbsp;<img height="160" class="frame_svg" valign="middle" src="space_g.svg" />&nbsp;</td></tr><tr><td></td><td class="caption">グラフ</td></tr>';
document.getElementById('variable').innerHTML = '<tr><th class="scene_desc" colspan="3">データ</th></tr><tr><td class="symbol"><img src="variable_dist.svg" /></td><td>始点からの最短距離</td><td class="code">dist</td></tr>';
document.getElementById('formula').innerHTML = '<tr><th class="scene_desc" colspan="3">始点の初期化</th></tr><tr><td class="symbol"><img src="formula_si.svg" /></td><td>始点の最短距離を0に初期化します。</td><td class="code">dist[s] &larr; 0</td></tr><tr><th class="scene_desc" colspan="3">幅優先探索</th></tr><tr><td class="symbol"><img src="formula_vi.svg" /></td><td>最短距離を更新します。</td><td class="code">dist[v] &larr; dist[u] + 1</td></tr>';
document.getElementById('scheme').innerHTML = '<tr><td style="text-align:center;width:100"><img src="anim_qr.svg" width="80"/></td><td class="frame"><hr class="separator"/><img height="160" class="frame_svg" src="scheme_dp.svg" /><p class="caption">最短距離を更新します。</p></td></tr>';
document.getElementById('scene').innerHTML = '<div><p><b class="scene_desc">始点の初期化</b><br/><img src="scene_0.svg" alt="BFSによる最短距離の計算 | 始点の初期化" title="BFSによる最短距離の計算 | 始点の初期化"/></p></div><div><p><b class="scene_desc">幅優先探索</b><br/><img src="scene_1.svg" alt="BFSによる最短距離の計算 | 幅優先探索" title="BFSによる最短距離の計算 | 幅優先探索"/></p></div>';
document.getElementById('complexity').innerHTML = '<img src="../../../icons/complexity/linear.svg" />';
document.getElementById('prerequisites').innerHTML = '<img src="../../icons/algorithms/bfs_queue.svg" width="60"/>';
MathJax.Hub.Queue(["Typeset",MathJax.Hub]);};