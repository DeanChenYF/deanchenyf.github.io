window.onload = function () {
document.getElementById('io_arrow').innerHTML = "&rarr;";
document.getElementById('level').innerHTML = "&#9733; &#9734; ";
document.getElementById('ptitle').innerHTML = "ヒープノードの値の増加";
document.getElementById('ptitle_en').innerHTML = "Increasing Value of Heap Node";
document.getElementById('input_comment').innerHTML = "最大ヒープに対する要素の増加更新<ul><li>ヒープの要素数N &le; 100,000</li></ul>";
document.getElementById('output_comment').innerHTML = "再構築された最大ヒープ";
document.getElementById('motivation').innerHTML = "最大ヒープは、「各ノードについて、自分の値がその子の値以上」という条件を満たします。ヒープのノードの値が増加した場合は、その親をはじめ、祖先の値に応じてヒープを再構築する必要があります。";
document.getElementById('description').innerHTML = "最大ヒープに対して、一つのノードの値が、優先度が増加するように更新されました。最大ヒープを再構築してください。";
document.getElementById('input_panel').innerHTML = '<img src="../../problems/heap_increase/input.svg" width="340"/>';
document.getElementById('output_panel').innerHTML = '<img src="../../problems/heap_increase/output.svg" width="340"/>';
document.getElementById('algorithm_icon').innerHTML = '<img src="../../icons/algorithms/upheap_simulation.svg" width="100"/>';
document.getElementById('atitle').innerHTML = "アップヒープ";
document.getElementById('atitle_en').innerHTML = "Up Heap";
document.getElementById('abstract').innerHTML = "最大ヒープを１つの配列変数で表します。最大ヒープの要素が「増加によって」更新された場合は、最大ヒープ条件を満たすように「大きくなった」要素を根に向かって移動させます。この操作をアップヒープと呼びます。ここでは、要素の移動をスワップで行います。";
document.getElementById('explanation').innerHTML = "最大ヒープのノードの値が増加したときは、そのノードを現在地として開始し、親の値と大きさを比較し、親の値の方が小さかったらスワップする処理を繰り返します。要素をスワップした後はその時の親を現在地に変更します。この処理は、ヒープ条件を満たす親が現れたとき、あるいは現在地が根に達したときに終了します。";
document.getElementById('note').innerHTML = "ここでは、親ノードの要素と子ノードの要素を比較・スワップするswap関数を応用した方法で実装しました。一方、増加した要素を一時変数に保持しておき、それよりも小さい祖先の値を降下させ、適切な位置に増加した要素を挿入するinsertionを応用した実装を行うこともできます。swapによる方法もinsertionによる方法も、各要素が動く範囲は、完全二分木の高さに抑えられるため、アップヒープのオーダーはO(log N)となります。";
document.getElementById('application').innerHTML = "この処理は優先度付きキューを実装するための部品になります。";
document.getElementById('structure').innerHTML = '<tr><td style="text-align:center;width:100"><img src="../../icons/structures/ACBT.svg" /><br/><br/></td><td class="frame">&nbsp;<img height="160" class="frame_svg" valign="middle" src="space_t.svg" />&nbsp;</td></tr><tr><td></td><td class="caption">おおよそ完全二分木</td></tr>';
document.getElementById('variable').innerHTML = '<tr><th class="scene_desc" colspan="3">データ</th></tr><tr><td class="symbol"><img src="variable_A.svg" /></td><td>最大ヒープの要素</td><td class="code">A</td></tr>';
document.getElementById('formula').innerHTML = '<tr><th class="scene_desc" colspan="3">入力・初期化</th></tr><tr><td class="symbol"><img src="formula_input.svg" /></td><td>最大ヒープ条件を満たす整数の列を読み込みます。</td><td class="code"></td></tr><tr><th class="scene_desc" colspan="3">要素の更新とアップヒープ</th></tr><tr><td class="symbol"><img src="formula_write.svg" /></td><td>要素をより大きい値に更新します。</td><td class="code">A[i] &larr; value</td></tr><tr><td class="symbol"><img src="formula_select.svg" /></td><td>ヒープ条件を満たすかどうかをチェックします。</td><td class="code">if A[i] &le; A[parent(i)]:</td></tr><tr><td class="symbol"><img src="formula_pair.svg" /></td><td>親子の値をスワップします。</td><td class="code">swap(A[i], A[parent(i)])</td></tr><tr><td class="symbol"><img src="formula_trace.svg" /></td><td>更新された要素が根に向かって移動していきます。</td><td class="code">iの軌跡</td></tr>';
document.getElementById('scheme').innerHTML = '<tr><td style="text-align:center;width:100"><img src="anim_qr.svg" width="80"/></td><td class="frame"><hr class="separator"/><img height="160" class="frame_svg" src="scheme_step1.svg" /><p class="caption">親子の値を比較します。</p><hr class="separator"/><img height="160" class="frame_svg" src="scheme_step2.svg" /><p class="caption">親子の値をスワップします。</p></td></tr>';
document.getElementById('scene').innerHTML = '<div><p><b class="scene_desc">入力・初期化</b><br/><img src="scene_0.svg" alt="アップヒープ | 入力・初期化" title="アップヒープ | 入力・初期化"/></p></div><div><p><b class="scene_desc">要素の更新とアップヒープ</b><br/><img src="scene_1.svg" alt="アップヒープ | 要素の更新とアップヒープ" title="アップヒープ | 要素の更新とアップヒープ"/></p></div>';
document.getElementById('complexity').innerHTML = '<img src="../../../icons/complexity/log.svg" />';
document.getElementById('prerequisites').innerHTML = '<img src="../../icons/algorithms/swap.svg" width="60"/>';
MathJax.Hub.Queue(["Typeset",MathJax.Hub]);};