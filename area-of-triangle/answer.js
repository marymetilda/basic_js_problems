function area(a, b, c) {
  const s = (a + b + c) / 2;
  const areaSquare = s * (s - a) * (s - b) * (s - c);
  const area = Math.sqrt(areaSquare);

  console.log(area);
}

area(5, 6, 7);
