
let baseUrl = ''
const routerMode = 'history'
const baseImgPath = 'http://www.hcocloud.com:8887/huankeadmin/'

if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://www.hcocloud.com:8887/huankeadmin/'
} else {
  baseUrl = 'http://www.hcocloud.com:8887/huankeadmin/'
}

export {
	baseUrl,
	routerMode,
	baseImgPath
}
