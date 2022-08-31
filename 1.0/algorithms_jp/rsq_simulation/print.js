window.onload = function () {
document.getElementById('variable').innerHTML = '<tr><th class="scene_desc" colspan="3">データ</th></tr><tr><td class="symbol"><img src="variable_sum.svg" /></td><td>区間の和</td><td class="code">sum</td></tr><tr><td class="symbol"><img src="variable_res.svg" /></td><td>指定区間の和として返される値（※表示用のため配列にする必要はありません）</td><td class="code">res</td></tr>';
document.getElementById('formula').innerHTML = '<tr><th class="scene_desc" colspan="3">質問に対する処理</th></tr><tr><td class="symbol"><img src="formula_update.svg" /></td><td>区間和を更新します。</td><td class="code">sum[k] &larr; ?</td></tr><tr><td class="symbol"><img src="formula_query.svg" /></td><td>指定区間の和を決定します。</td><td class="code">res &larr; ?</td></tr><tr><td class="symbol"><img src="formula_updated.svg" /></td><td>更新クエリにより更新済みの区間</td><td class="code">kの軌跡</td></tr><tr><td class="symbol"><img src="formula_outside.svg" /></td><td>探索区間とクエリ区間がが交わらない区間</td><td class="code">if r &le; a or b &le; l:</td></tr><tr><td class="symbol"><img src="formula_contain.svg" /></td><td>探索区間がクエリ区間に完全に含まれる区間</td><td class="code">else if a &le; l and r &le; b:</td></tr><tr><td class="symbol"><img src="formula_visited.svg" /></td><td>探索区間がクエリ区間とクエリ区間外を含む区間</td><td class="code">else:</td></tr>';
document.getElementById('scene').innerHTML = '<div><p><b class="scene_desc">質問に対する処理</b><br/><img src="scene_0.svg" alt="セグメント木: RSQ | 質問に対する処理" title="セグメント木: RSQ | 質問に対する処理"/></p></div>';
};