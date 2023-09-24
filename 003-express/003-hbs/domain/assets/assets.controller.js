import path from "path";

class AssetsController {
  getFile(req, res){
    const dir = path.resolve('public')

    console.log(dir)

    const file = path.join(dir, 'images', req.query.file + '.png')
    res.sendFile(file)
  }
}

export default new AssetsController()
