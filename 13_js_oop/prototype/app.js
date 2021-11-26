console.dir(document.body)

String.prototype.custom_alert = function() {
  console.log(this)
}

"hello".custom_alert()

function to_hex(r, g, b) {
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + (b)).toString(16).slice(1)
}

function to_rgb(hex){
  return 'rgb(' + hex.replace('#', '').match(/../g).map(c => `0x${c}` - 0).join(',') + ')'
}

function Color(r, g, b){
  this.r = r
  this.g = g
  this.b = b

  // this.hex = () => to_hex(this.r, this.g, this.b )
  // this.rgb = () => to_rgb(this.hex())
}

Color.prototype.to_hex = function(){ return to_hex(this.r, this.g, this.b ) }
Color.prototype.to_rgb = function(){ return to_rgb(this.to_hex()) }
