import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

test('contains the four-day Fujian Xiamen and Quanzhou trip map', async () => {
  const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');

  assert.match(html, /福建4天3夜/);
  assert.match(html, /深圳北站/);
  assert.match(html, /厦门北站/);
  assert.match(html, /鼓浪屿/);
  assert.match(html, /沙坡尾/);
  assert.match(html, /泉州开元寺/);
  assert.match(html, /泉州西街/);
  assert.match(html, /10月6日/);
  assert.match(html, /高铁/);
  assert.match(html, /飞机/);
  assert.match(html, /const DAYS\s*=\s*\[/);
  assert.match(html, /Leaflet/);
  assert.match(html, /xhsKeyword/);
  assert.match(html, /const XHS_USE_APP = true/);
  assert.match(html, /const DP_USE_APP = true/);
  assert.match(html, /window\.location\.href = kind==='dp' \? dpAppUrl\(loc\) : xhsAppUrl\(loc\)/);
  assert.doesNotMatch(html, /Tokyo|REPLACE:/);
});
