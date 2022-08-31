var algorithmId = 'stack_simulation';
var svg = new Array();
svg.push('<svg  xmlns:svg="http://www.w3.org/2000/svg"  xmlns="http://www.w3.org/2000/svg"  xmlns:xlink="http://www.w3.org/1999/xlink"  viewBox ="0 0 200 280"  > <defs><polygon points="0,0 6,8, 0,16 20,8" id="m_tmpl2"/><marker id="token_arrow"  markerUnits="userSpaceOnUse" markerWidth="20" markerHeight="16" viewBox="0 0 20 16" refX="14" refY="8" orient="auto"><use xlink:href="#m_tmpl2" fill="#60a0ff"/></marker></defs><defs><polygon points="0,0 0,4 0,8 12,4" id="m_tmpl3"/><marker id="link_arrow" markerUnits="strokeWidth" markerWidth="12" markerHeight="8" viewBox="0 0 12 8" refX="12" refY="4" orient="auto"><use xlink:href="#m_tmpl3" fill="#888888"/></marker></defs><rect x ="0" y="0" width="200" height="280" fill="#ffffff" stroke="#a0a0a0" stroke-width="0"/><g transform="translate(100,84) scale(1)"><g fill="#ffffff" stroke="#a0a0a0" stroke-width="1"><rect x="-14" y="114" width="28" height="28" rx="4" ry="4" /><rect x="-14" y="82" width="28" height="28" rx="4" ry="4" /><rect x="-14" y="50" width="28" height="28" rx="4" ry="4" /><rect x="-14" y="18" width="28" height="28" rx="4" ry="4" /><rect x="-14" y="-14" width="28" height="28" rx="4" ry="4" /></g><g font-size="9" font-family="Verdana" fill="#888888"><text id="" x="-22" y="128" dominant-baseline="central" text-anchor="middle">0</text><text id="" x="-22" y="96" dominant-baseline="central" text-anchor="middle">1</text><text id="" x="-22" y="64" dominant-baseline="central" text-anchor="middle">2</text><text id="" x="-22" y="32" dominant-baseline="central" text-anchor="middle">3</text><text id="" x="-22" y="0" dominant-baseline="central" text-anchor="middle">4</text></g></g><g transform="translate(100,84) scale(1)"><g class="flash_g" fill="#ff1493" stroke="#ff1493" stroke-width="1"><rect x="-14" y="114" width="28" height="28" rx="4" ry="4" /></g><g fill="none" stroke="#a0a0a0" stroke-width="1"><rect x="-14" y="114" width="28" height="28" rx="4" ry="4" /></g></g><g transform="translate(100,84) scale(1)"><g class="flash_g" transform="translate(14,128) rotate(90)" fill="#ff1493"><path d="M 0 0 L 8 -10 L 4 -10 L 4 -26 L -4 -26 L -4 -10 L -8 -10 z"/></g></g><g transform="translate(100,84) scale(1)"><g stroke-width="0"><circle cx="0" cy="128" r="10" fill="#f0f080" id="var_S_1__0" /></g><g font-size="14" font-family="sans-serif" fill="#888888"><text id="text_S_1__0" x="0" y="128" dominant-baseline="central" text-anchor="middle">8</text></g><g font-size="14" font-family="sans-serif" fill="#ffffff"><text id="" x="0" y="-28" dominant-baseline="central" text-anchor="middle">S</text></g><animateMotion xlink:href="#var_S_1__0" path="M0,-80 L0,0" dur="1s" repeatCount="1"/><animateMotion xlink:href="#text_S_1__0" path="M0,-80 L0,0" dur="1s" repeatCount="1"/><g fill="none" stroke="#60a0ff" stroke-width="4" stroke-linecap="round" stroke-dasharray="0.1, 8"><path class="for_print" d="M 0 62 L 0 114"  marker-end="url(#token_arrow)"/></g></g><text x="16" y="20" font-size="16" text-anchor="middle" fill="#888888" font-family="sans-serif" >1-1</text><text x="100" y="264" font-size="9" text-anchor="middle"  font-family="Hiragino Kaku Gothic ProN, メイリオ, sans-serif">push(8): S[0] &#8592; 8</text></svg>  ');
svg.push('<svg  xmlns:svg="http://www.w3.org/2000/svg"  xmlns="http://www.w3.org/2000/svg"  xmlns:xlink="http://www.w3.org/1999/xlink"  viewBox ="0 0 200 280"  > <defs><polygon points="0,0 6,8, 0,16 20,8" id="m_tmpl2"/><marker id="token_arrow"  markerUnits="userSpaceOnUse" markerWidth="20" markerHeight="16" viewBox="0 0 20 16" refX="14" refY="8" orient="auto"><use xlink:href="#m_tmpl2" fill="#60a0ff"/></marker></defs><defs><polygon points="0,0 0,4 0,8 12,4" id="m_tmpl3"/><marker id="link_arrow" markerUnits="strokeWidth" markerWidth="12" markerHeight="8" viewBox="0 0 12 8" refX="12" refY="4" orient="auto"><use xlink:href="#m_tmpl3" fill="#888888"/></marker></defs><rect x ="0" y="0" width="200" height="280" fill="#ffffff" stroke="#a0a0a0" stroke-width="0"/><g transform="translate(100,84) scale(1)"><g fill="#ffffff" stroke="#a0a0a0" stroke-width="1"><rect x="-14" y="114" width="28" height="28" rx="4" ry="4" /><rect x="-14" y="82" width="28" height="28" rx="4" ry="4" /><rect x="-14" y="50" width="28" height="28" rx="4" ry="4" /><rect x="-14" y="18" width="28" height="28" rx="4" ry="4" /><rect x="-14" y="-14" width="28" height="28" rx="4" ry="4" /></g><g font-size="9" font-family="Verdana" fill="#888888"><text id="" x="-22" y="128" dominant-baseline="central" text-anchor="middle">0</text><text id="" x="-22" y="96" dominant-baseline="central" text-anchor="middle">1</text><text id="" x="-22" y="64" dominant-baseline="central" text-anchor="middle">2</text><text id="" x="-22" y="32" dominant-baseline="central" text-anchor="middle">3</text><text id="" x="-22" y="0" dominant-baseline="central" text-anchor="middle">4</text></g></g><g transform="translate(100,84) scale(1)"><g class="flash_g" fill="#ff1493" stroke="#ff1493" stroke-width="1"><rect x="-14" y="82" width="28" height="28" rx="4" ry="4" /></g><g fill="none" stroke="#a0a0a0" stroke-width="1"><rect x="-14" y="82" width="28" height="28" rx="4" ry="4" /></g></g><g transform="translate(100,84) scale(1)"><g class="flash_g" transform="translate(14,96) rotate(90)" fill="#ff1493"><path d="M 0 0 L 8 -10 L 4 -10 L 4 -26 L -4 -26 L -4 -10 L -8 -10 z"/></g></g><g transform="translate(100,84) scale(1)"><g stroke-width="0"><circle cx="0" cy="128" r="10" fill="#f0f080" id="var_S_2__0" /><circle cx="0" cy="96" r="10" fill="#b8e8ff" id="var_S_2__1" /></g><g font-size="14" font-family="sans-serif" fill="#888888"><text id="text_S_2__0" x="0" y="128" dominant-baseline="central" text-anchor="middle">8</text><text id="text_S_2__1" x="0" y="96" dominant-baseline="central" text-anchor="middle">6</text></g><g font-size="14" font-family="sans-serif" fill="#ffffff"><text id="" x="0" y="-28" dominant-baseline="central" text-anchor="middle">S</text></g><animateMotion xlink:href="#var_S_2__1" path="M0 -80 L 0 0" dur="0.9s" repeatCount="1"/><animateMotion xlink:href="#text_S_2__1" path="M0 -80 L 0 0" dur="0.9s" repeatCount="1"/><g fill="none" stroke="#60a0ff" stroke-width="4" stroke-linecap="round" stroke-dasharray="0.1, 8"><path class="for_print" d="M 0 30 L 0 82"  marker-end="url(#token_arrow)"/></g></g><text x="16" y="20" font-size="16" text-anchor="middle" fill="#888888" font-family="sans-serif" >1-2</text><text x="100" y="264" font-size="9" text-anchor="middle"  font-family="Hiragino Kaku Gothic ProN, メイリオ, sans-serif">push(6): S[1] &#8592; 6</text></svg>  ');
svg.push('<svg  xmlns:svg="http://www.w3.org/2000/svg"  xmlns="http://www.w3.org/2000/svg"  xmlns:xlink="http://www.w3.org/1999/xlink"  viewBox ="0 0 200 280"  > <defs><polygon points="0,0 6,8, 0,16 20,8" id="m_tmpl2"/><marker id="token_arrow"  markerUnits="userSpaceOnUse" markerWidth="20" markerHeight="16" viewBox="0 0 20 16" refX="14" refY="8" orient="auto"><use xlink:href="#m_tmpl2" fill="#60a0ff"/></marker></defs><defs><polygon points="0,0 0,4 0,8 12,4" id="m_tmpl3"/><marker id="link_arrow" markerUnits="strokeWidth" markerWidth="12" markerHeight="8" viewBox="0 0 12 8" refX="12" refY="4" orient="auto"><use xlink:href="#m_tmpl3" fill="#888888"/></marker></defs><rect x ="0" y="0" width="200" height="280" fill="#ffffff" stroke="#a0a0a0" stroke-width="0"/><g transform="translate(100,84) scale(1)"><g fill="#ffffff" stroke="#a0a0a0" stroke-width="1"><rect x="-14" y="114" width="28" height="28" rx="4" ry="4" /><rect x="-14" y="82" width="28" height="28" rx="4" ry="4" /><rect x="-14" y="50" width="28" height="28" rx="4" ry="4" /><rect x="-14" y="18" width="28" height="28" rx="4" ry="4" /><rect x="-14" y="-14" width="28" height="28" rx="4" ry="4" /></g><g font-size="9" font-family="Verdana" fill="#888888"><text id="" x="-22" y="128" dominant-baseline="central" text-anchor="middle">0</text><text id="" x="-22" y="96" dominant-baseline="central" text-anchor="middle">1</text><text id="" x="-22" y="64" dominant-baseline="central" text-anchor="middle">2</text><text id="" x="-22" y="32" dominant-baseline="central" text-anchor="middle">3</text><text id="" x="-22" y="0" dominant-baseline="central" text-anchor="middle">4</text></g></g><g transform="translate(100,84) scale(1)"><g class="flash_g" fill="#ff1493" stroke="#ff1493" stroke-width="1"><rect x="-14" y="50" width="28" height="28" rx="4" ry="4" /></g><g fill="none" stroke="#a0a0a0" stroke-width="1"><rect x="-14" y="50" width="28" height="28" rx="4" ry="4" /></g></g><g transform="translate(100,84) scale(1)"><g class="flash_g" transform="translate(14,64) rotate(90)" fill="#ff1493"><path d="M 0 0 L 8 -10 L 4 -10 L 4 -26 L -4 -26 L -4 -10 L -8 -10 z"/></g></g><g transform="translate(100,84) scale(1)"><g stroke-width="0"><circle cx="0" cy="128" r="10" fill="#f0f080" id="var_S_3__0" /><circle cx="0" cy="96" r="10" fill="#b8e8ff" id="var_S_3__1" /><circle cx="0" cy="64" r="10" fill="#c0e040" id="var_S_3__2" /></g><g font-size="14" font-family="sans-serif" fill="#888888"><text id="text_S_3__0" x="0" y="128" dominant-baseline="central" text-anchor="middle">8</text><text id="text_S_3__1" x="0" y="96" dominant-baseline="central" text-anchor="middle">6</text><text id="text_S_3__2" x="0" y="64" dominant-baseline="central" text-anchor="middle">7</text></g><g font-size="14" font-family="sans-serif" fill="#ffffff"><text id="" x="0" y="-28" dominant-baseline="central" text-anchor="middle">S</text></g><animateMotion xlink:href="#var_S_3__2" path="M0 -80 L 0 0" dur="0.9s" repeatCount="1"/><animateMotion xlink:href="#text_S_3__2" path="M0 -80 L 0 0" dur="0.9s" repeatCount="1"/><g fill="none" stroke="#60a0ff" stroke-width="4" stroke-linecap="round" stroke-dasharray="0.1, 8"><path class="for_print" d="M 0 -2 L 0 50"  marker-end="url(#token_arrow)"/></g></g><text x="16" y="20" font-size="16" text-anchor="middle" fill="#888888" font-family="sans-serif" >1-3</text><text x="100" y="264" font-size="9" text-anchor="middle"  font-family="Hiragino Kaku Gothic ProN, メイリオ, sans-serif">push(7): S[2] &#8592; 7</text></svg>  ');
svg.push('<svg  xmlns:svg="http://www.w3.org/2000/svg"  xmlns="http://www.w3.org/2000/svg"  xmlns:xlink="http://www.w3.org/1999/xlink"  viewBox ="0 0 200 280"  > <defs><polygon points="0,0 6,8, 0,16 20,8" id="m_tmpl2"/><marker id="token_arrow"  markerUnits="userSpaceOnUse" markerWidth="20" markerHeight="16" viewBox="0 0 20 16" refX="14" refY="8" orient="auto"><use xlink:href="#m_tmpl2" fill="#60a0ff"/></marker></defs><defs><polygon points="0,0 0,4 0,8 12,4" id="m_tmpl3"/><marker id="link_arrow" markerUnits="strokeWidth" markerWidth="12" markerHeight="8" viewBox="0 0 12 8" refX="12" refY="4" orient="auto"><use xlink:href="#m_tmpl3" fill="#888888"/></marker></defs><rect x ="0" y="0" width="200" height="280" fill="#ffffff" stroke="#a0a0a0" stroke-width="0"/><g transform="translate(100,84) scale(1)"><g fill="#ffffff" stroke="#a0a0a0" stroke-width="1"><rect x="-14" y="114" width="28" height="28" rx="4" ry="4" /><rect x="-14" y="82" width="28" height="28" rx="4" ry="4" /><rect x="-14" y="50" width="28" height="28" rx="4" ry="4" /><rect x="-14" y="18" width="28" height="28" rx="4" ry="4" /><rect x="-14" y="-14" width="28" height="28" rx="4" ry="4" /></g><g font-size="9" font-family="Verdana" fill="#888888"><text id="" x="-22" y="128" dominant-baseline="central" text-anchor="middle">0</text><text id="" x="-22" y="96" dominant-baseline="central" text-anchor="middle">1</text><text id="" x="-22" y="64" dominant-baseline="central" text-anchor="middle">2</text><text id="" x="-22" y="32" dominant-baseline="central" text-anchor="middle">3</text><text id="" x="-22" y="0" dominant-baseline="central" text-anchor="middle">4</text></g></g><g transform="translate(100,84) scale(1)"><g class="flash_g" fill="#ffffff" stroke="#ff8c00" stroke-width="2"><rect x="-14" y="50" width="28" height="28" rx="4" ry="4" /></g></g><g transform="translate(100,84) scale(1)"><g class="flash_g" transform="translate(14,64) rotate(90)" fill="#ff1493"><path d="M 0 0 L 8 -10 L 4 -10 L 4 -26 L -4 -26 L -4 -10 L -8 -10 z"/></g></g><g transform="translate(100,84) scale(1)"><g stroke-width="0"><circle cx="0" cy="128" r="10" fill="#f0f080" id="var_S_4__0" /><circle cx="0" cy="96" r="10" fill="#b8e8ff" id="var_S_4__1" /><circle cx="0" cy="64" r="10" fill="#c0e040" id="var_S_4__2" /></g><g font-size="14" font-family="sans-serif" fill="#888888"><text id="text_S_4__0" x="0" y="128" dominant-baseline="central" text-anchor="middle">8</text><text id="text_S_4__1" x="0" y="96" dominant-baseline="central" text-anchor="middle">6</text><text id="text_S_4__2" x="0" y="64" dominant-baseline="central" text-anchor="middle">7</text></g><g font-size="14" font-family="sans-serif" fill="#ffffff"><text id="" x="0" y="-28" dominant-baseline="central" text-anchor="middle">S</text></g><animateMotion xlink:href="#var_S_4__2" fill="freeze" begin="0s;accumulate.end" path="M0 0 L 0 -80" dur="0.9s" repeatCount="1"/><animateMotion xlink:href="#text_S_4__2"  fill="freeze" begin="0s;accumulate.end"  path="M0 0 L 0 -80" dur="0.9s" repeatCount="1"/><animate xlink:href="#var_S_4__2"  fill="freeze" begin="0s;accumulate.end" from="1" to="0" attributeName="opacity" dur="0.9s" repeatCount="1"/><animate xlink:href="#text_S_4__2"  fill="freeze" begin="0s;accumulate.end" from="1" to="0" attributeName="opacity" dur="0.9s" repeatCount="1"/></g><text x="16" y="20" font-size="16" text-anchor="middle" fill="#888888" font-family="sans-serif" >1-4</text><text x="100" y="264" font-size="9" text-anchor="middle"  font-family="Hiragino Kaku Gothic ProN, メイリオ, sans-serif">pop(): return S[2] (= 7)</text></svg>  ');
svg.push('<svg  xmlns:svg="http://www.w3.org/2000/svg"  xmlns="http://www.w3.org/2000/svg"  xmlns:xlink="http://www.w3.org/1999/xlink"  viewBox ="0 0 200 280"  > <defs><polygon points="0,0 6,8, 0,16 20,8" id="m_tmpl2"/><marker id="token_arrow"  markerUnits="userSpaceOnUse" markerWidth="20" markerHeight="16" viewBox="0 0 20 16" refX="14" refY="8" orient="auto"><use xlink:href="#m_tmpl2" fill="#60a0ff"/></marker></defs><defs><polygon points="0,0 0,4 0,8 12,4" id="m_tmpl3"/><marker id="link_arrow" markerUnits="strokeWidth" markerWidth="12" markerHeight="8" viewBox="0 0 12 8" refX="12" refY="4" orient="auto"><use xlink:href="#m_tmpl3" fill="#888888"/></marker></defs><rect x ="0" y="0" width="200" height="280" fill="#ffffff" stroke="#a0a0a0" stroke-width="0"/><g transform="translate(100,84) scale(1)"><g fill="#ffffff" stroke="#a0a0a0" stroke-width="1"><rect x="-14" y="114" width="28" height="28" rx="4" ry="4" /><rect x="-14" y="82" width="28" height="28" rx="4" ry="4" /><rect x="-14" y="50" width="28" height="28" rx="4" ry="4" /><rect x="-14" y="18" width="28" height="28" rx="4" ry="4" /><rect x="-14" y="-14" width="28" height="28" rx="4" ry="4" /></g><g font-size="9" font-family="Verdana" fill="#888888"><text id="" x="-22" y="128" dominant-baseline="central" text-anchor="middle">0</text><text id="" x="-22" y="96" dominant-baseline="central" text-anchor="middle">1</text><text id="" x="-22" y="64" dominant-baseline="central" text-anchor="middle">2</text><text id="" x="-22" y="32" dominant-baseline="central" text-anchor="middle">3</text><text id="" x="-22" y="0" dominant-baseline="central" text-anchor="middle">4</text></g></g><g transform="translate(100,84) scale(1)"><g class="flash_g" fill="#ffffff" stroke="#ff8c00" stroke-width="2"><rect x="-14" y="82" width="28" height="28" rx="4" ry="4" /></g></g><g transform="translate(100,84) scale(1)"><g class="flash_g" transform="translate(14,96) rotate(90)" fill="#ff1493"><path d="M 0 0 L 8 -10 L 4 -10 L 4 -26 L -4 -26 L -4 -10 L -8 -10 z"/></g></g><g transform="translate(100,84) scale(1)"><g stroke-width="0"><circle cx="0" cy="128" r="10" fill="#f0f080" id="var_S_5__0" /><circle cx="0" cy="96" r="10" fill="#b8e8ff" id="var_S_5__1" /></g><g font-size="14" font-family="sans-serif" fill="#888888"><text id="text_S_5__0" x="0" y="128" dominant-baseline="central" text-anchor="middle">8</text><text id="text_S_5__1" x="0" y="96" dominant-baseline="central" text-anchor="middle">6</text></g><g font-size="14" font-family="sans-serif" fill="#ffffff"><text id="" x="0" y="-28" dominant-baseline="central" text-anchor="middle">S</text></g><animateMotion xlink:href="#var_S_5__1" fill="freeze" begin="0s;accumulate.end" path="M0 0 L 0 -80" dur="0.9s" repeatCount="1"/><animateMotion xlink:href="#text_S_5__1"  fill="freeze" begin="0s;accumulate.end"  path="M0 0 L 0 -80" dur="0.9s" repeatCount="1"/><animate xlink:href="#var_S_5__1"  fill="freeze" begin="0s;accumulate.end" from="1" to="0" attributeName="opacity" dur="0.9s" repeatCount="1"/><animate xlink:href="#text_S_5__1"  fill="freeze" begin="0s;accumulate.end" from="1" to="0" attributeName="opacity" dur="0.9s" repeatCount="1"/></g><text x="16" y="20" font-size="16" text-anchor="middle" fill="#888888" font-family="sans-serif" >1-5</text><text x="100" y="264" font-size="9" text-anchor="middle"  font-family="Hiragino Kaku Gothic ProN, メイリオ, sans-serif">pop(): return S[1] (= 6)</text></svg>  ');
svg.push('<svg  xmlns:svg="http://www.w3.org/2000/svg"  xmlns="http://www.w3.org/2000/svg"  xmlns:xlink="http://www.w3.org/1999/xlink"  viewBox ="0 0 200 280"  > <defs><polygon points="0,0 6,8, 0,16 20,8" id="m_tmpl2"/><marker id="token_arrow"  markerUnits="userSpaceOnUse" markerWidth="20" markerHeight="16" viewBox="0 0 20 16" refX="14" refY="8" orient="auto"><use xlink:href="#m_tmpl2" fill="#60a0ff"/></marker></defs><defs><polygon points="0,0 0,4 0,8 12,4" id="m_tmpl3"/><marker id="link_arrow" markerUnits="strokeWidth" markerWidth="12" markerHeight="8" viewBox="0 0 12 8" refX="12" refY="4" orient="auto"><use xlink:href="#m_tmpl3" fill="#888888"/></marker></defs><rect x ="0" y="0" width="200" height="280" fill="#ffffff" stroke="#a0a0a0" stroke-width="0"/><g transform="translate(100,84) scale(1)"><g fill="#ffffff" stroke="#a0a0a0" stroke-width="1"><rect x="-14" y="114" width="28" height="28" rx="4" ry="4" /><rect x="-14" y="82" width="28" height="28" rx="4" ry="4" /><rect x="-14" y="50" width="28" height="28" rx="4" ry="4" /><rect x="-14" y="18" width="28" height="28" rx="4" ry="4" /><rect x="-14" y="-14" width="28" height="28" rx="4" ry="4" /></g><g font-size="9" font-family="Verdana" fill="#888888"><text id="" x="-22" y="128" dominant-baseline="central" text-anchor="middle">0</text><text id="" x="-22" y="96" dominant-baseline="central" text-anchor="middle">1</text><text id="" x="-22" y="64" dominant-baseline="central" text-anchor="middle">2</text><text id="" x="-22" y="32" dominant-baseline="central" text-anchor="middle">3</text><text id="" x="-22" y="0" dominant-baseline="central" text-anchor="middle">4</text></g></g><g transform="translate(100,84) scale(1)"><g class="flash_g" fill="#ff1493" stroke="#ff1493" stroke-width="1"><rect x="-14" y="82" width="28" height="28" rx="4" ry="4" /></g><g fill="none" stroke="#a0a0a0" stroke-width="1"><rect x="-14" y="82" width="28" height="28" rx="4" ry="4" /></g></g><g transform="translate(100,84) scale(1)"><g class="flash_g" transform="translate(14,96) rotate(90)" fill="#ff1493"><path d="M 0 0 L 8 -10 L 4 -10 L 4 -26 L -4 -26 L -4 -10 L -8 -10 z"/></g></g><g transform="translate(100,84) scale(1)"><g stroke-width="0"><circle cx="0" cy="128" r="10" fill="#f0f080" id="var_S_6__0" /><circle cx="0" cy="96" r="10" fill="#ffd0e0" id="var_S_6__1" /></g><g font-size="14" font-family="sans-serif" fill="#888888"><text id="text_S_6__0" x="0" y="128" dominant-baseline="central" text-anchor="middle">8</text><text id="text_S_6__1" x="0" y="96" dominant-baseline="central" text-anchor="middle">5</text></g><g font-size="14" font-family="sans-serif" fill="#ffffff"><text id="" x="0" y="-28" dominant-baseline="central" text-anchor="middle">S</text></g><animateMotion xlink:href="#var_S_6__1" path="M0 -80 L 0 0" dur="0.9s" repeatCount="1"/><animateMotion xlink:href="#text_S_6__1" path="M0 -80 L 0 0" dur="0.9s" repeatCount="1"/><g fill="none" stroke="#60a0ff" stroke-width="4" stroke-linecap="round" stroke-dasharray="0.1, 8"><path class="for_print" d="M 0 30 L 0 82"  marker-end="url(#token_arrow)"/></g></g><text x="16" y="20" font-size="16" text-anchor="middle" fill="#888888" font-family="sans-serif" >1-6</text><text x="100" y="264" font-size="9" text-anchor="middle"  font-family="Hiragino Kaku Gothic ProN, メイリオ, sans-serif">push(5): S[1] &#8592; 5</text></svg>  ');
svg.push('<svg  xmlns:svg="http://www.w3.org/2000/svg"  xmlns="http://www.w3.org/2000/svg"  xmlns:xlink="http://www.w3.org/1999/xlink"  viewBox ="0 0 200 280"  > <defs><polygon points="0,0 6,8, 0,16 20,8" id="m_tmpl2"/><marker id="token_arrow"  markerUnits="userSpaceOnUse" markerWidth="20" markerHeight="16" viewBox="0 0 20 16" refX="14" refY="8" orient="auto"><use xlink:href="#m_tmpl2" fill="#60a0ff"/></marker></defs><defs><polygon points="0,0 0,4 0,8 12,4" id="m_tmpl3"/><marker id="link_arrow" markerUnits="strokeWidth" markerWidth="12" markerHeight="8" viewBox="0 0 12 8" refX="12" refY="4" orient="auto"><use xlink:href="#m_tmpl3" fill="#888888"/></marker></defs><rect x ="0" y="0" width="200" height="280" fill="#ffffff" stroke="#a0a0a0" stroke-width="0"/><g transform="translate(100,84) scale(1)"><g fill="#ffffff" stroke="#a0a0a0" stroke-width="1"><rect x="-14" y="114" width="28" height="28" rx="4" ry="4" /><rect x="-14" y="82" width="28" height="28" rx="4" ry="4" /><rect x="-14" y="50" width="28" height="28" rx="4" ry="4" /><rect x="-14" y="18" width="28" height="28" rx="4" ry="4" /><rect x="-14" y="-14" width="28" height="28" rx="4" ry="4" /></g><g font-size="9" font-family="Verdana" fill="#888888"><text id="" x="-22" y="128" dominant-baseline="central" text-anchor="middle">0</text><text id="" x="-22" y="96" dominant-baseline="central" text-anchor="middle">1</text><text id="" x="-22" y="64" dominant-baseline="central" text-anchor="middle">2</text><text id="" x="-22" y="32" dominant-baseline="central" text-anchor="middle">3</text><text id="" x="-22" y="0" dominant-baseline="central" text-anchor="middle">4</text></g></g><g transform="translate(100,84) scale(1)"><g class="flash_g" fill="#ffffff" stroke="#ff8c00" stroke-width="2"><rect x="-14" y="82" width="28" height="28" rx="4" ry="4" /></g></g><g transform="translate(100,84) scale(1)"><g class="flash_g" transform="translate(14,96) rotate(90)" fill="#ff1493"><path d="M 0 0 L 8 -10 L 4 -10 L 4 -26 L -4 -26 L -4 -10 L -8 -10 z"/></g></g><g transform="translate(100,84) scale(1)"><g stroke-width="0"><circle cx="0" cy="128" r="10" fill="#f0f080" id="var_S_7__0" /><circle cx="0" cy="96" r="10" fill="#ffd0e0" id="var_S_7__1" /></g><g font-size="14" font-family="sans-serif" fill="#888888"><text id="text_S_7__0" x="0" y="128" dominant-baseline="central" text-anchor="middle">8</text><text id="text_S_7__1" x="0" y="96" dominant-baseline="central" text-anchor="middle">5</text></g><g font-size="14" font-family="sans-serif" fill="#ffffff"><text id="" x="0" y="-28" dominant-baseline="central" text-anchor="middle">S</text></g><animateMotion xlink:href="#var_S_7__1" fill="freeze" begin="0s;accumulate.end" path="M0 0 L 0 -80" dur="0.9s" repeatCount="1"/><animateMotion xlink:href="#text_S_7__1"  fill="freeze" begin="0s;accumulate.end"  path="M0 0 L 0 -80" dur="0.9s" repeatCount="1"/><animate xlink:href="#var_S_7__1"  fill="freeze" begin="0s;accumulate.end" from="1" to="0" attributeName="opacity" dur="0.9s" repeatCount="1"/><animate xlink:href="#text_S_7__1"  fill="freeze" begin="0s;accumulate.end" from="1" to="0" attributeName="opacity" dur="0.9s" repeatCount="1"/></g><text x="16" y="20" font-size="16" text-anchor="middle" fill="#888888" font-family="sans-serif" >1-7</text><text x="100" y="264" font-size="9" text-anchor="middle"  font-family="Hiragino Kaku Gothic ProN, メイリオ, sans-serif">pop(): return S[1] (= 5)</text></svg>  ');
