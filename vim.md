const navigator = {
  h: 'move cursor left',
  j: 'move cursor right',
  k: 'move cursor up',
  l: 'move cursor down',
  w: 'jump forwards to the start of a word',
  e: 'jump forwards to the end of a word',
  0: 'jump to the start of the line',
  $: 'jump to the end of the line',
  {: 'jump to previous paragraph (or function/block, when editing code)',
  }: 'jump to next paragraph (or function/block, when editing code)',
};

const command = {
  x: 'delete(cut) a char',
  s: 'substitude a char',
  c: 'change',
  d: 'delete',
  D: 'delete(cut) to the end of the line',
  y: 'yank(copy)',
  p: 'put(paste) the clipboard after cursor',
  yy: 'yank(copy) a line',
  dd: 'delete(cut) a line',
  >>: 'indent(move right) line one shiftwidth',
  <<: 'de-indent(move left) line one shiftwidth',
};

const redoUndo = {
  u: 'undo',
  ctrl+r: 'redo',
};