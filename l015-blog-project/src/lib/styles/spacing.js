const point = 8;

const makeSpaces = (type, direction, n) => {
  return `${type}-${direction}: ${point * n}px;\n`;
};

const makeSpacesBoth = (type, x, y) => {
  const sizeX = typeof x === 'number' ? `${point * x}px` : x;
  const sizeY = typeof y === 'number' ? `${point * y}px` : y;
  return `${type}: ${sizeY} ${sizeX};\n`;
};

const spacing = (spLetters) => {
  const gaps = [];
  const spaces = spLetters.split(' ');
  spaces.forEach((s) => {
    const letters = s.split('-');
    const type = letters[0] === 'm' ? 'margin' : 'padding';

    let direction = undefined;
    switch (letters[1]) {
      case 't':
        direction = 'top';
        break;
      case 'b':
        direction = 'bottom';
        break;
      case 'l':
        direction = 'left';
        break;
      case 'r':
        direction = 'right';
        break;
      default:
        direction = undefined;
        break;
    }

    if (direction) {
      gaps.push(makeSpaces(type, direction, letters[2]));
      return;
    }

    let x = undefined;
    let y = undefined;
    switch (letters[1]) {
      case 'x':
        x =
          letters[2] !== ('auto' || 'unset')
            ? Number.parseInt(letters[2])
            : type === 'margin'
            ? 'auto'
            : 'unset';
        y = 0;
        break;
      case 'y':
        x = 0;
        y =
          letters[2] !== ('auto' || 'unset')
            ? Number.parseInt(letters[2])
            : type === 'margin'
            ? 'auto'
            : 'unset';
        break;
      default:
        y = undefined;
        x = undefined;
        break;
    }

    if (x || y) {
      gaps.push(makeSpacesBoth(type, x, y));
      return;
    }

    if (letters[2]) {
      x = Number.parseInt(letters[2]);
      y = Number.parseInt(letters[1]);
      gaps.push(makeSpacesBoth(type, x, y));
      return;
    }

    if (letters[1]) {
      gaps.push(
        makeSpacesBoth(
          type,
          Number.parseInt(letters[1]),
          Number.parseInt(letters[1]),
        ),
      );
      return;
    }
  });

  return gaps.join('');
};

export default spacing;
