window.onload = function () {
document.getElementById('io_arrow').innerHTML = "&rarr;";
document.getElementById('level').innerHTML = "&#9733; &#9733; &#9734; ";
document.getElementById('ptitle').innerHTML = "辞書";
document.getElementById('ptitle_en').innerHTML = "Dictionary";
document.getElementById('input_comment').innerHTML = "辞書に対する検索・追加・削除操作<ul><li>操作・問い合わせの数Q &le; 100,000</li><li>0 &le; キー &le; 1,000,000,000</li></ul>";
document.getElementById('output_comment').innerHTML = "問い合わせへの回答";
document.getElementById('motivation').innerHTML = "キーと値のペアを指定して、データの追加・検索・削除を行うことができる仕組みを辞書、あるいは連想配列と呼びます。キーとは、検索や整列の基準となるもので、辞書においては対応する値にひもづく識別子のようなものです。";
document.getElementById('description').innerHTML = "データの検索・追加・削除を行う、辞書の機能を提供するデータ構造を実装してください。ここでは、キーと値をまとめ、データの実態としてキーのみを扱うものとします。";
document.getElementById('input_panel').innerHTML = '<img src="../../problems/dictionary/input.svg" width="340"/>';
document.getElementById('output_panel').innerHTML = '<img src="../../problems/dictionary/output.svg" width="340"/>';
document.getElementById('algorithm_icon').innerHTML = '<img src="../../icons/algorithms/hash_simulation.svg" width="100"/>';
document.getElementById('atitle').innerHTML = "ハッシュ表";
document.getElementById('atitle_en').innerHTML = "Hash Table";
document.getElementById('abstract').innerHTML = "入力されたデータ（キー）に対応する格納位置を、キーを入力としたハッシュ関数で求めるデータ構造をハッシュ表と言います。ハッシュ表は1次元配列構造で実装することができます。ここでは、キーの追加機能を実装します。";
document.getElementById('explanation').innerHTML = "ハッシュ表のデータ構造は、サイズがNのハッシュ表本体と、要素となるキーの格納場所を決めるハッシュ関数から構成されています。基本的には、ハッシュ関数は受け取ったキーに基づく式で場所を決定しますが、異なるキーでも同じ場所を算出してしまう場合があります。書き込もうとした場所に先客がいる状態になり、これを衝突と呼びます。衝突が起きても、空いている領域にキーを挿入する方法としてオープンアドレス法が知られています。ここでは、オープンアドレス法に基づき、２つのサブ関数を用いる実装を行います。<br><br>オープンアドレス方では、ハッシュ関数がキーと衝突回数を受け取り、格納場所を決めます。つまり、衝突が起こる度に、ハッシュ関数で空いている領域を探していきます。ハッシュ関数に用いる数式は様々ですが、ここでは以下のように実装します。<br><br> $hash(k, i) = (h_1(k) + i$ &times; $h_2(k))$ mod $N$<br><br>Nで割った余りをとっているのは、計算結果が必ず表のサイズに収まるようにするためです。$h_1(k)$と$h_2(k)$はハッシュ関数のサブ関数です。iは衝突の回数を表し、最初に$hash(k, 0)$、つまり$h_1(k)$で始点を決定し、衝突が起きる度に$hash(k, 1), hash(k, 2), ...$ のように空き領域を探していきます。つまり$h_2(k)$は次に調べる位置までの移動距離を表します。Nで割った余りをとるので、配列のサイズを超えることはなく、探索は循環します。ここで、探索でたどり着けない位置が発生しないよう（同じ位置に戻らないよう）、$h_2(k)$と表のサイズNは互いに素でなければいけないことに注意してください。ここでは、Nを素数とし$h_2(k)$をそれよりも小さい数に設定しています。";
document.getElementById('note').innerHTML = "ハッシュ表は衝突を無視することができれば、データの追加・検索・削除をO(1)で達成することができますが、実際の計算コストは、ハッシュ関数の中で用いられる式やパラメタに依存します。ここでは、最も基本的な式を用いましたが、ハッシュ関数を工夫することで効率的なデータ構造あるいは探索アルゴリズムを実装することができます。<br><br>ここでは、データの追加のみ解説を行いましたが、データの検索と削除を行う関数も、共通のハッシュ関数を用いたうえで、ほとんど同じように実装することができます。";
document.getElementById('application').innerHTML = "辞書は、直観的かつ効率的に要素を管理できることから、プログラミングには欠かせないデータ構造となっています。ハッシュは辞書を実装するための強力なデータ構造あるいはアルゴリズムです。一方、ハッシュによる辞書では、辞書の中のキーの順序を保てないため、その操作の種類には限りがあります。また、データが疎であっても、大きな表を作るため、メモリ管理の工夫も必要になってきます。";
document.getElementById('structure').innerHTML = '<tr><td style="text-align:center;width:100"><img src="../../icons/structures/A1D.svg" /><br/><br/></td><td class="frame">&nbsp;<img height="160" class="frame_svg" valign="middle" src="space_st.svg" />&nbsp;</td></tr><tr><td></td><td class="caption">１次元配列</td></tr>';
document.getElementById('variable').innerHTML = '<tr><th class="scene_desc" colspan="3">データ</th></tr><tr><td class="symbol"><img src="variable_key.svg" /></td><td>ハッシュ表の要素</td><td class="code">key</td></tr>';
document.getElementById('formula').innerHTML = '<tr><th class="scene_desc" colspan="3">データの追加</th></tr><tr><td class="symbol"><img src="formula_input.svg" /></td><td>データを追加します。</td><td class="code">insert(k):</td></tr><tr><td class="symbol"><img src="formula_hash2.svg" /></td><td>ハッシュ関数で空き領域を探します。</td><td class="code">pos &larr; hash(k, i)</td></tr><tr><td class="symbol"><img src="formula_pointer.svg" /></td><td>ハッシュ関数で求めた位置を指します。</td><td class="code">pos</td></tr><tr><td class="symbol"><img src="formula_write.svg" /></td><td>要素を書き込みます。</td><td class="code">key[pos] &larr; k</td></tr><tr><td class="symbol"><img src="formula_collision.svg" /></td><td>衝突が起こった箇所を表します。</td><td class="code">posの値の軌跡</td></tr>';
document.getElementById('scheme').innerHTML = '<tr><td style="text-align:center;width:100"><img src="anim_qr.svg" width="80"/></td><td class="frame"><hr class="separator"/><img height="160" class="frame_svg" src="scheme_step1.svg" /><p class="caption">キーを挿入する位置を探します。</p><hr class="separator"/><img height="160" class="frame_svg" src="scheme_step2.svg" /><p class="caption">衝突が起きたため、再び挿入する位置を探します。</p><hr class="separator"/><img height="160" class="frame_svg" src="scheme_step3.svg" /><p class="caption">空いた領域にキーを書き込みます。</p></td></tr>';
document.getElementById('scene').innerHTML = '<div><p><b class="scene_desc">データの追加</b><br/><img src="scene_0.svg" alt="ハッシュ表 | データの追加" title="ハッシュ表 | データの追加"/></p></div>';
document.getElementById('complexity').innerHTML = '<img src="../../../icons/complexity/const.svg" />';
document.getElementById('prerequisites').innerHTML = '';
MathJax.Hub.Queue(["Typeset",MathJax.Hub]);};