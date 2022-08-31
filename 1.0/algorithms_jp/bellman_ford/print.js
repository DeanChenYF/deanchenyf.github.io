window.onload = function () {
document.getElementById('variable').innerHTML = '<tr><th class="scene_desc" colspan="3">データ</th></tr><tr><td class="symbol"><img src="variable_dist.svg" /></td><td>始点から各ノードへの最短距離</td><td class="code">dist</td></tr><tr><td class="symbol"><img src="variable_weight.svg" /></td><td>ノード間の距離</td><td class="code">weight</td></tr>';
document.getElementById('formula').innerHTML = '<tr><th class="scene_desc" colspan="3">始点の初期化</th></tr><tr><td class="symbol"><img src="formula_source.svg" /></td><td>始点の暫定距離を0に初期化します。</td><td class="code">dist[s] &larr; 0</td></tr><tr><td class="symbol"><img src="formula_others.svg" /></td><td>その他のノードの暫定距離を大きな値に設定します。</td><td class="code">dist[v] &larr; INF</td></tr><tr><th class="scene_desc" colspan="3">距離の更新</th></tr><tr><td class="symbol"><img src="formula_v.svg" /></td><td>暫定距離を更新します。</td><td class="code">if dist[e.v] &gt; dist[u] + e.weight: <br>&nbsp;&nbsp;&nbsp;&nbsp;dist[e.v] &larr; dist[u] + e.weight</td></tr><tr><th class="scene_desc" colspan="3">最短距離を出力</th></tr><tr><td class="symbol"><img src="formula_all.svg" /></td><td>始点からの最短距離を出力します。</td><td class="code"></td></tr>';
document.getElementById('scene').innerHTML = '<div><p><b class="scene_desc">始点の初期化</b><br/><img src="scene_0.svg" alt="ベルマンフォードのアルゴリズム | 始点の初期化" title="ベルマンフォードのアルゴリズム | 始点の初期化"/></p></div><div><p><b class="scene_desc">距離の更新</b><br/><img src="scene_1.svg" alt="ベルマンフォードのアルゴリズム | 距離の更新" title="ベルマンフォードのアルゴリズム | 距離の更新"/></p></div><div><p><b class="scene_desc">最短距離を出力</b><br/><img src="scene_2.svg" alt="ベルマンフォードのアルゴリズム | 最短距離を出力" title="ベルマンフォードのアルゴリズム | 最短距離を出力"/></p></div>';
};