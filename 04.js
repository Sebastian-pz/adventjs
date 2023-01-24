function fitsInOneBox(boxes) {
  return boxes
    .sort((a, b) => a.l - b.l)
    .every((box, i) => {
      if (i === 0) return true;
      const prevBox = boxes[i - 1];
      return box.l > prevBox.l && box.w > prevBox.w && box.h > prevBox.h;
    });
}

const boxes = [
  { l: 1, w: 1, h: 1 },
  { l: 3, w: 3, h: 3 },
  { l: 2, w: 2, h: 2 },
];
fitsInOneBox(boxes);
