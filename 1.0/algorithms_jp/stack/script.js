window.onload = function () {
document.getElementById('level').innerHTML = "&#9733; ";
document.getElementById('ptitle').innerHTML = "Last-In-Firs-Out";
document.getElementById('atitle').innerHTML = "スタック";
document.getElementById('ptitle_en').innerHTML = "Last-In-Firs-Out";
document.getElementById('atitle_en').innerHTML = "Stack";
document.getElementById('abstract').innerHTML = "スタックは最後に挿入したデータを優先的に取り出すLast-In-First-Outのルールに従ったデータ構造です。スタックの頂点を指すポインタと一次元配列で実現します。";
document.getElementById('input_comment').innerHTML = "スタックへ追加するデータ";
document.getElementById('output_comment').innerHTML = "スタックから取り出されるデータ";
document.getElementById('structure').innerHTML = '<tr><td><div class="smallicon">ICON</div></td><td class="frame">&nbsp;<img valign="middle" src="structure_st.svg" />&nbsp;</td></tr><tr><td></td><td class="caption">スタックの要素を管理する一次元配列</td></tr>';
document.getElementById('variable').innerHTML = '<tr><td class="symbol"><img src="variable_buff.svg" /></td><td>スタックの要素</td><td>buff</td></tr>';
document.getElementById('formula').innerHTML = '<tr><td class="symbol"><img src="formula_push.svg" /></td><td>スタックの頂点にデータを追加する</td><td>push</td></tr><tr><td class="symbol"><img src="formula_pop.svg" /></td><td>スタックの頂点からデータを取り出し削除する</td><td>pop</td></tr><tr><td class="symbol"><img src="formula_top.svg" /></td><td>スタックの頂点を指すポインタ</td><td>top</td></tr>';
document.getElementById('scheme').innerHTML = '<tr><td><div class="smallicon">ICON</div></td><td class="frame">&nbsp;<img src="scheme_push.svg" />&nbsp;</td><td class="frame">&nbsp;<img src="scheme_pop.svg" />&nbsp;</td></tr><tr><td></td><td class="caption">スタックへデータを追加する</td><td class="caption">スタックからデータを取り出す</td></tr>';
};