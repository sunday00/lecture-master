class Color {
  constructor(r, g, b) {
    this.rgb = [r, g, b];
    this.setHsl();
  }

  greet(){

  }

  setHsl(){
    let [ r, g, b ] = this.rgb;
		// Make r, g, and b fractions of 1
		r /= 255;
		g /= 255;
		b /= 255;

		// Find greatest and smallest channel values
		let cmin = Math.min(r, g, b),
			  cmax = Math.max(r, g, b),
			  delta = cmax - cmin,
        h = 0,
        s = 0,
        l = 0;
		if (delta == 0) h = 0;
		else if (cmax == r)
			// Red is max
			h = ((g - b) / delta) % 6;
		else if (cmax == g)
			// Green is max
			h = (b - r) / delta + 2;
		else
			// Blue is max
			h = (r - g) / delta + 4;

		h = Math.round(h * 60);

		// Make negative hues positive behind 360°
		if (h < 0) h += 360;
		// Calculate lightness
		l = (cmax + cmin) / 2;

		// Calculate saturation
		s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

		// Multiply l and s by 100
		s = +(s * 100).toFixed(1);
		l = +(l * 100).toFixed(1);

    this.hsl = [h, s, l];
  }

  toRgb(){
    const [r, g, b] = this.rgb;
    return `rgb(${r},${g},${b})`
  }

  toHsl(){
    const [h, s, l] = this.hsl;
		
    return `hsl(${h}, ${s}%, ${l}%)`
  }

  toOpposite(){
    const [h, s, l] = this.hsl;
		
    const oh = (h + 180) % 360;
    this.hsl = [oh, s, l]

    return `hsl(${oh}, ${s}%, ${l}%)`
  }

  toFullyColorful(){
    const [h, _, l] = this.hsl;
		
    this.hsl = [h, 100, l]

    return `hsl(${h}, 100%, ${l}%)`
  }
}

class Pet {
  constructor(name, age) {
    this.name = name,
    this.age = age    
  }

  eat(){
    return `${this.name} is eating...`
  }
}

class Cat extends Pet {
  constructor(name, age, leftLife=9) {
    super(name, age)
    this.leftLife = leftLife
  }
  meow(){
    return "meowww"
  }
}

class Dog {
  bark(){
    return "bow wow"
  }
}

let chamci = new Cat();
let komo = new Dog();

console.log( chamci.meow(), komo.bark() )
