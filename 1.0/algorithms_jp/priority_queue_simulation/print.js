window.onload = function () {
document.getElementById('variable').innerHTML = '<tr><th class="scene_desc" colspan="3">データ</th></tr><tr><td class="symbol"><img src="variable_A.svg" /></td><td>キューの要素</td><td class="code">A</td></tr>';
document.getElementById('formula').innerHTML = '<tr><th class="scene_desc" colspan="3">初期化</th></tr><tr><td class="symbol"><img src="formula_input.svg" /></td><td>ヒープ条件を満たす整数の列を設定します。</td><td class="code"></td></tr><tr><th class="scene_desc" colspan="3">データの挿入と削除</th></tr><tr><td class="symbol"><img src="formula_write.svg" /></td><td>要素を挿入します。</td><td class="code">A[heapSize++] &larr; x</td></tr><tr><td class="symbol"><img src="formula_upRotation.svg" /></td><td>アップヒープを行います。</td><td class="code">upHeap(heapSize-1)</td></tr><tr><td class="symbol"><img src="formula_downRotation.svg" /></td><td>ダウンヒープを行います。</td><td class="code">downHeap(0)</td></tr><tr><td class="symbol"><img src="formula_heap.svg" /></td><td>キューに入っている要素を表します。</td><td class="code">区間[0, heapSize)</td></tr>';
document.getElementById('scene').innerHTML = '<div><p><b class="scene_desc">初期化</b><br/><img src="scene_0.svg" alt="優先度付きキュー | 初期化" title="優先度付きキュー | 初期化"/></p></div><div><p><b class="scene_desc">データの挿入と削除</b><br/><img src="scene_1.svg" alt="優先度付きキュー | データの挿入と削除" title="優先度付きキュー | データの挿入と削除"/></p></div>';
};