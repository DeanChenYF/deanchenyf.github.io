var variable_content = '<tr><th class="scene_desc" colspan="3">データ</th></tr><tr><td class="symbol"><img src="variable_P.svg" /></td><td>P[i]が1のときiが素数である素数表</td><td class="code">P</td></tr>';
var formula_content = '<tr><th class="scene_desc" colspan="3">初期化</th></tr><tr><td class="symbol"><img src="formula_ini.svg" /></td><td>2以上の数を素数の候補として初期化します。</td><td class="code"></td></tr><tr><th class="scene_desc" colspan="3">2の倍数を削除</th></tr><tr><td class="symbol"><img src="formula_s.svg" /></td><td>2の倍数を合成数とします。</td><td class="code">P[j] &larr; 0</td></tr><tr><th class="scene_desc" colspan="3">奇数の素数の倍数を削除</th></tr><tr><td class="symbol"><img src="formula_decision.svg" /></td><td>素数として残します。</td><td class="code">i</td></tr><tr><td class="symbol"><img src="formula_s.svg" /></td><td>残した数の倍数を合成数とします。</td><td class="code">P[j] &larr; 0</td></tr><tr><td class="symbol"><img src="formula_valid.svg" /></td><td>素数表を確定します。</td><td class="code">区間[0, i*i]</td></tr><tr><th class="scene_desc" colspan="3">素数リストを出力</th></tr><tr><td class="symbol"><img src="formula_prime.svg" /></td><td>素数を列挙します。</td><td class="code"></td></tr>';
