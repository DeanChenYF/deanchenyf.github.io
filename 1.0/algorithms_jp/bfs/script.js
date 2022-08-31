window.onload = function () {

document.getElementById('io0').innerHTML = '<img src="io_0.svg" />';
document.getElementById('io0_comment').innerHTML = 'グラフと始点';
document.getElementById('io1').innerHTML = '<img src="io_1.svg" />';
document.getElementById('io1_comment').innerHTML = '始点から各ノードへの最短距離';
document.getElementById('scheme').innerHTML = '';
document.getElementById('structure').innerHTML = '<img src="structure_g.svg" />';
document.getElementById('variable').innerHTML = '<tr><td><img src="variable_d.svg" /></td><td>始点から各ノードへの最短距離</td></tr>';
document.getElementById('formula').innerHTML = '<tr><td><img src="formula_s.svg" /></td><td>始点の距離を0に初期化する</td></tr><tr><td><img src="formula_u.svg" /></td><td>これまでの最短距離を読み込む</td></tr><tr><td><img src="formula_v.svg" /></td><td>距離を d[<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" ><g transform="translate(14,14) scale(0.5)"><g fill="#ffffff" stroke="#ffa0a0" stroke-width="2"><circle cx="0" cy="0" r="14" /></g></g></svg>] + 1 へ更新する</td></tr><tr><td><img src="formula_visited.svg" /></td><td>訪問済みのノード</td></tr>';
document.getElementById('ptitle').innerHTML = "最短距離";
document.getElementById('atitle').innerHTML = "幅優先探索";
document.getElementById('abstract').innerHTML = "";
document.getElementById('level').innerHTML = "&#9733; &#9733; &#9734; ";
document.getElementById('scene').innerHTML = '<img src="frames.svg"/>';

};

