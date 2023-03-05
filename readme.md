# packaging(module)

## init package
```
$ go mod init {pkg-name}
```
## make folder & make init file
- generally make file with same name as folder name
- set package name
```
// package.go

package {pkg-name}
```

# build os
```
$ GOOS=windows go build
```
