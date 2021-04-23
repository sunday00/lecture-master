export class Lib {
  static getQuadValue = (p0, p1, p2, t) => {
    return (1 - t) * (1 - t) * p0 + 2 * (1 - t) * t * p1 + t * t * p2;
  };

  static getPointOnQuad(x1, y1, x2, y2, x3, y3, t) {
    const tx = this.getQuadTangent(x1, x2, x3, t);
    const ty = this.getQuadTangent(y1, y2, y3, t);
    return {
      x: this.getQuadValue(x1, x2, x3, t),
      y: this.getQuadValue(y1, y2, y3, t),
      rotation: -Math.atan2(tx, ty) + (90 * Math.PI) / 180,
    };
  }

  static getQuadTangent(a, b, c, t) {
    return 2 * (1 - t) * (b - a) + 2 * (c - b) * t;
  }

  static getCirclePoint(radius, t) {
    const theta = Math.PI * 2 * t;
    return {
      x: Math.cos(theta) * radius,
      y: Math.sin(theta) * radius,
    };
  }
}
