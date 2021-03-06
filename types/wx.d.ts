// generate time:2018-6-28 12:34:22 
// Type definitions for wx app
// Definitions by: hellopao <https://github.com/hellopao/wx.d.ts>

/************************************************
 *                                               *
 *                 微信小程序  API                *
 *                                               *
 ************************************************/

interface IAnimation {
  /**
   * 透明度，参数范围 0~1
   */
  opacity(value: number): IAnimation;

  /**
   * 颜色值
   */
  backgroundColor(color: string): IAnimation;

  /**
   * 长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值
   */
  width(length: number): IAnimation;

  /**
   * 长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值
   */
  height(length: number): IAnimation;

  /**
   * 长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值
   */
  top(length: number): IAnimation;

  /**
   * 长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值
   */
  left(length: number): IAnimation;

  /**
   * 长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值
   */
  bottom(length: number): IAnimation;

  /**
   * 长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值
   */
  right(length: number): IAnimation;

  /**
   * deg的范围-180~180，从原点顺时针旋转一个deg角度
   */
  rotate(deg: number): IAnimation;

  /**
   * deg的范围-180~180，在X轴旋转一个deg角度
   */
  rotateX(deg: number): IAnimation;

  /**
   * deg的范围-180~180，在Y轴旋转一个deg角度
   */
  rotateY(deg: number): IAnimation;

  /**
   * deg的范围-180~180，在Z轴旋转一个deg角度
   */
  rotateZ(deg: number): IAnimation;

  /**
   * 同transform-function rotate3d
   */
  rotate3d(x: number, y: number, z: number, deg: number): IAnimation;

  /**
   * 一个参数时，表示在X轴、Y轴同时缩放sx倍数；两个参数时表示在X轴缩放sx倍数，在Y轴缩放sy倍数
   */
  scale(sx: number, sy?: number): IAnimation;

  /**
   * 在X轴缩放sx倍数
   */
  scaleX(sx: number): IAnimation;

  /**
   * 在Y轴缩放sy倍数
   */
  scaleY(sy: number): IAnimation;

  /**
   * 在Z轴缩放sy倍数
   */
  scaleZ(sz: number): IAnimation;

  /**
   * 在X轴缩放sx倍数，在Y轴缩放sy倍数，在Z轴缩放sz倍数
   */
  scale3d(sx: number, sy: number, sz: number): IAnimation;

  /**
   * 一个参数时，表示在X轴偏移tx，单位px；两个参数时，表示在X轴偏移tx，在Y轴偏移ty，单位px。
   */
  translate(tx: number, ty?: number): IAnimation;

  /**
   * 在X轴偏移tx，单位px
   */
  translateX(tx: number): IAnimation;

  /**
   * 在Y轴偏移tx，单位px
   */
  translateY(tx: number): IAnimation;

  /**
   * 在Z轴偏移tx，单位px
   */
  translateZ(tx: number): IAnimation;

  /**
   * 在X轴偏移tx，在Y轴偏移ty，在Z轴偏移tz，单位px
   */
  translate3d(tx: number, ty: number, tz: number): IAnimation;

  /**
   * 参数范围-180~180；一个参数时，Y轴坐标不变，X轴坐标延顺时针倾斜ax度；两个参数时，分别在X轴倾斜ax度，在Y轴倾斜ay度
   */
  skew(ax: number, ay?: number): IAnimation;

  /**
   * 参数范围-180~180；Y轴坐标不变，X轴坐标延顺时针倾斜ax度
   */
  skewX(ax: number): IAnimation;

  /**
   * 参数范围-180~180；X轴坐标不变，Y轴坐标延顺时针倾斜ay度
   */
  skewY(ay: number): IAnimation;

  /**
   * 同transform-function matrix
   */
  matrix(a, b, c, d, tx, ty): IAnimation;

  /**
   * 同transform-function matrix3d
   */
  matrix3d(): IAnimation;
}

interface ICanvasContext {
  /**
   * 设置填充色, 如果没有设置 fillStyle，默认颜色为 black。
   */
  setFillStyle(color: string): void;

  /**
   * 设置边框颜色, 如果没有设置 fillStyle，默认颜色为 black。
   */
  setStrokeStyle(color: string): void;

  /**
   * 设置阴影
   */
  setShadow(offsetX: number, offsetY: number, blur: number, color: string): void;

  /**
   * 创建一个线性的渐变颜色。需要使用 addColorStop() 来指定渐变点，至少要两个。
   */
  createLinearGradient(x0: number, y0: number, x1: number, y1: number): void;

  /**
   * 创建一个圆形的渐变颜色。 起点在圆心，终点在圆环。 需要使用 addColorStop() 来指定渐变点，至少要两个。
   */
  createCircularGradient(x: number, y: number, r: number): void;

  /**
   * 创建一个颜色的渐变点。小于最小 stop 的部分会按最小 stop 的 color 来渲染，大于最大 stop 的部分会按最大 stop 的 color 来渲染。需要使用 addColorStop() 来指定渐变点，至少要两个。
   */
  addColorStop(stop: number, color: string): void;

  /**
   * 设置线条端点的样式
   */
  setLineCap(lineCap: 'butt' | 'round' | 'square'): void;

  /**
   * 设置两线相交处的样式
   */
  setLineJoin(lineJoin: 'bevel' | 'round' | 'miter'): void;

  /**
   * 设置线条宽度
   */
  setLineWidth(lineWidth: number): void;

  /**
   * 设置最大倾斜
   */
  setMiterLimit(miterLimit: number): void;

  /**
   * 添加一个矩形路径到当前路径。
   */
  rect(x: number, y: number, width: number, height: number): void;

  /**
   * 填充一个矩形。用 setFillStyle() 设置矩形的填充色，如果没设置默认是黑色。
   */
  fillRect(x: number, y: number, width: number, height: number): void;

  /**
   * 一个矩形(非填充)。用 setFillStroke() 设置矩形线条的颜色，如果没设置默认是黑色。
   */
  strokeRect(x: number, y: number, width: number, height: number): void;

  /**
   * 在给定的矩形区域内，清除画布上的像素
   */
  clearRect(x: number, y: number, width: number, height: number): void;

  /**
   * 对当前路径进行填充
   */
  fill(): void;

  /**
   * 对当前路径进行描边
   */
  stroke(): void;

  /**
   * 开始一个路径
   */
  beginPath(): void;

  /**
   * 关闭一个路径
   */
  closePath(): void;

  /**
   * 把路径移动到画布中的指定点，但不创建线条。
   */
  moveTo(x: number, y: number): void;

  /**
   * 添加一个新点，然后在画布中创建从该点到最后指定点的线条。
   */
  lineTo(x: number, y: number): void;

  /**
   * 添加一个弧形路径到当前路径，顺时针绘制。
   */
  arc(x: number, y: number, radius: number, startAngle: number, sweepAngle: number): void;

  /**
   * 创建二次方贝塞尔曲线
   */
  quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void;

  /**
   * 创建三次方贝塞尔曲线
   */
  bezierCurveTo(cpx1: number, cpy1: number, cpx2: number, cpy2: number, x: number, y: number): void;

  /**
   * 对横纵坐标进行缩放
   */
  scale(scaleWidth: number/**横坐标缩放的倍数1 = 100%，0.5 = 50%，2 = 200%，依次类 */, scaleHeight: number/**    纵坐标轴缩放的倍数1 = 100%，0.5 = 50%，2 = 200%，依次类 */): void;

  /**
   * 对坐标轴进行顺时针旋转
   */
  rotate(deg: number/**degrees * Math.PI/180；degrees范围为0~360;旋转角度，以弧度计 */): void;

  /**
   * 对坐标原点进行缩放
   */
  translate(x: number/**水平坐标平移量 */, y: number/**竖直坐标平移量 */): void;

  /**
   * 在画布上绘制被填充的文本
   */
  fillText(text: string, x: number, y: number): void;

  /**
   * 设置字体大小
   */
  setFontSize(fontSize: number): void;

  /**
   * 在画布上绘制图像
   */
  drawImage(imageResource: string, x: number, y: number, width: number, height: number): void;

  /**
   * 设置全局画笔透明度。
   */
  setGlobalAlpha(alpha: number): void;

  /**
   * 保存当前坐标轴的缩放、旋转、平移信息
   */
  save(): void;

  /**
   * 恢复之前保存过的坐标轴的缩放、旋转、平移信息
   */
  restore(): void;

  /**
   * 进行绘图
   */
  draw(reserve?: boolean, callback?: Function): void;
}

interface IAudioContext {
  /**
   * 播放
   */
  play: () => void;
  /**
   * 暂停
   */
  pause: () => void;
  /**
   * 跳转到指定位置，单位 s
   */
  seek: (position: number) => void;
}

interface IVideoContext {
  /**
   * 播放
   */
  play: () => void;
  /**
   * 暂停
   */
  pause: () => void;
  /**
   * 跳转到指定位置，单位 s
   */
  seek: (position: number) => void;
  /**
   * 发送弹幕，danmu 包含两个属性 text, color。
   */
  sendDanmu: (danmu: { text: string; color: string; }) => void;
}

interface IMapContext {
  /**
   * 获取当前地图中心的经纬度，返回的是 gcj02 坐标系，可以用于 wx.openLocation
   */
  getCenterLocation: (obj: {
    /**
     * 接口调用成功的回调函数 ，res = { longitude: "经度", latitude: "纬度"}
     */
    success?: (res: { longitude: string; latitude: string }) => void;
    /**
     * 接口调用失败的回调函数
     */
    fail?: () => void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: () => void;
  }) => void;
  /**
   * 将地图中心移动到当前定位点，需要配合map组件的show-location使用
   */
  moveToLocation: () => void;
}

interface Application {
  setData: (obj: any) => void;
}

interface AppConstructor {
  new(): Application;

  (opts: {
    /**
     * 生命周期函数--监听小程序初始化
     */
    onLaunch?: () => void;
    /**
     * 生命周期函数--监听小程序显示
     */
    onShow?: () => void;
    /**
     * 生命周期函数--监听小程序隐藏
     */
    onHide?: () => void;

    [key: string]: any;
  }): Application;
}

declare var App: AppConstructor

declare function getApp(): Application;

declare function getCurrentPages(): Page[];

interface Page {
  setData: (obj: any) => void;
}

interface PageConstructor {
  new(): Page;

  (opts: {
    /**
     * 页面的初始数据
     */
    data?: any;
    /**
     * 页面的初始数据
     */
    onLoad?: () => void;
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady?: () => void;
    /**
     * 生命周期函数--监听页面显示
     */
    onShow?: () => void;
    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide?: () => void;
    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload?: () => void;
    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefreash?: () => void;
    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom?: () => void;
    /**
     * 用户点击右上角分享
     */
    onShareAppMessage?: () => {
      /**
       * 分享标题, 默认值当前小程序名称
       */
      title: string;
      /**
       * 分享描述, 默认值当前小程序名称
       */
      desc: string;
      /**
       * 分享路径    默认值当前页面 path ，必须是以 / 开头的完整路径
       */
      path: string;
    };

    [key: string]: any;
  }): Page;
}

declare var Page: PageConstructor

declare var wx: {
  // # 网络 #

  /**
   * 发起网络请求。使用前请先阅读说明。
   */
  request(obj: {
    /**
     *
     */
    url: string;
    /**
     *
     */
    data?: any;
    /**
     *
     */
    header?: any;
    /**
     * GET
     */
    method?: string;
    /**
     * json
     */
    dataType?: string;
    /**
     * text
     */
    responseType?: string;
    /**
     *
     */
    success?: Function;
    /**
     *
     */
    fail?: Function;
    /**
     *
     */
    complete?: Function;
  }): void;

  /**
   * 将本地资源上传到开发者服务器，客户端发起一个 HTTPS POST 请求，其中 content-type 为 multipart/form-data 。使用前请先阅读说明。
   */
  uploadFile(obj: {
    /**
     * 开发者服务器 url
     */
    url: string;
    /**
     * 要上传文件资源的路径
     */
    filePath: string;
    /**
     * 文件对应的 key , 开发者在服务器端通过这个 key 可以获取到文件二进制内容
     */
    name: string;
    /**
     * HTTP 请求 Header, header 中不能设置 Referer
     */
    header?: any;
    /**
     * HTTP 请求中其他额外的 form data
     */
    formData?: any;
    /**
     * 接口调用成功的回调函数
     */
    success?: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  /**
   * 下载文件资源到本地，客户端直接发起一个 HTTP GET 请求，返回文件的本地临时路径。使用前请先阅读说明。
   */
  downloadFile(obj: {
    /**
     * 下载资源的 url
     */
    url: string;
    /**
     * HTTP 请求 Header，header 中不能设置 Referer
     */
    header?: any;
    /**
     * 下载成功后以 tempFilePath 的形式传给页面，res = {tempFilePath: '文件的临时路径'}
     */
    success?: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  /**
   * 创建一个 WebSocket 连接。使用前请先阅读说明。
   */
  connectSocket(obj: {
    /**
     * 开发者服务器接口地址，必须是 wss 协议，且域名必须是后台配置的合法域名
     */
    url: string;
    /**
     * HTTP Header , header 中不能设置 Referer
     */
    header?: any;
    /**
     * 默认是GET，有效值：OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
     */
    method?: string;
    /**
     * 子协议数组
     */
    protocols?: string[];
    /**
     * 接口调用成功的回调函数
     */
    success?: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  /**
   * 监听WebSocket连接打开事件。
   */
  onSocketOpen(callback: Function): void;

  /**
   * 监听WebSocket错误。
   */
  onSocketError(callback: Function): void;

  /**
   * 通过 WebSocket 连接发送数据，需要先 wx.connectSocket，并在 wx.onSocketOpen 回调之后才能发送。
   */
  sendSocketMessage(obj: {
    /**
     * 需要发送的内容
     */
    data: any;
    /**
     * 接口调用成功的回调函数
     */
    success?: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  /**
   * 监听WebSocket接受到服务器的消息事件。
   */
  onSocketMessage(callback: Function): void;

  /**
   * 关闭 WebSocket 连接。
   */
  closeSocket(obj: {
    /**
     * 一个数字值表示关闭连接的状态号，表示连接被关闭的原因。如果这个参数没有被指定，默认的取值是1000 （表示正常连接关闭）
     */
    code?: number;
    /**
     * 一个可读的字符串，表示连接被关闭的原因。这个字符串必须是不长于123字节的UTF-8 文本（不是字符）
     */
    reason?: string;
    /**
     * 接口调用成功的回调函数
     */
    success?: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  /**
   * 监听WebSocket关闭。
   */
  onSocketClose(callback: Function): void;

  // # 媒体 #

  /**
   * 从本地相册选择图片或使用相机拍照。
   */
  chooseImage(obj: {
    /**
     * 最多可以选择的图片张数，默认9
     */
    count?: number;
    /**
     * original 原图，compressed 压缩图，默认二者都有
     */
    sizeType?: string[];
    /**
     * album 从相册选图，camera 使用相机，默认二者都有
     */
    sourceType?: string[];
    /**
     * 成功则返回图片的本地文件路径列表 tempFilePaths
     */
    success: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  /**
   * 预览图片。
   */
  previewImage(obj: {
    /**
     * 当前显示图片的链接，不填则默认为 urls 的第一张
     */
    current?: string;
    /**
     * 需要预览的图片链接列表
     */
    urls: string[];
    /**
     * 接口调用成功的回调函数
     */
    success?: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  /**
   * 获取图片信息
   */
  getImageInfo(obj: {
    /**
     * 图片的路径，可以是相对路径，临时文件路径，存储文件路径，网络图片路径
     */
    src: string;
    /**
     * 接口调用成功的回调函数
     */
    success?: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  saveImageToPhotosAlbum(obj: {
    /**
     * 图片文件路径，可以是临时文件路径也可以是永久文件路径，不支持网络图片路径
     */
    filePath: string;
    /**
     * 接口调用成功的回调函数
     */
    success?: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  /**
   * 注意：1.6.0 版本开始，本接口不再维护。建议使用能力更强的 wx.getRecorderManager 接口
   */
  startRecord(obj: {
    /**
     * 录音成功后调用，返回录音文件的临时文件路径，res = {tempFilePath: '录音文件的临时路径'}
     */
    success?: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  /**
   * ​主动调用停止录音。
   */
  stopRecord(): void;

  getRecorderManager(): void;

  /**
   * 注意：1.6.0 版本开始，本接口不再维护。建议使用能力更强的 wx.createInnerAudioContext 接口
   */
  playVoice(obj: {
    /**
     * 需要播放的语音文件的文件路径
     */
    filePath: string;
    /**
     * 指定录音时长，到达指定的录音时长后会自动停止录音，单位：秒，默认值：60
     */
    duration?: number;
    /**
     * 接口调用成功的回调函数
     */
    success?: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  /**
   * 暂停正在播放的语音。再次调用wx.playVoice播放同一个文件时，会从暂停处开始播放。如果想从头开始播放，需要先调用 wx.stopVoice。
   */
  pauseVoice(): void;

  /**
   * 结束播放语音。
   */
  stopVoice(): void;

  /**
   * 注意：1.2.0 版本开始，本接口不再维护。建议使用能力更强的 wx.getBackgroundAudioManager 接口
   */
  getBackgroundAudioPlayerState(obj: {
    /**
     * 接口调用成功的回调函数
     */
    success?: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  /**
   * 使用后台播放器播放音乐，对于微信客户端来说，只能同时有一个后台音乐在播放。当用户离开小程序后，音乐将暂停播放；当用户点击“显示在聊天顶部”时，音乐不会暂停播放；当用户在其他小程序占用了音乐播放器，原有小程序内的音乐将停止播放。
   */
  playBackgroundAudio(obj: {
    /**
     * 音乐链接，目前支持的格式有 m4a, aac, mp3, wav
     */
    dataUrl: string;
    /**
     * 音乐标题
     */
    title?: string;
    /**
     * 封面URL
     */
    coverImgUrl?: string;
    /**
     * 接口调用成功的回调函数
     */
    success?: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  /**
   * 暂停播放音乐。
   */
  pauseBackgroundAudio(): void;

  /**
   * 控制音乐播放进度。
   */
  seekBackgroundAudio(obj: {
    /**
     * 音乐位置，单位：秒
     */
    position: number;
    /**
     * 接口调用成功的回调函数
     */
    success?: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  /**
   * 停止播放音乐。
   */
  stopBackgroundAudio(): void;

  /**
   * 监听音乐播放。
   */
  onBackgroundAudioPlay(callback: Function): void;

  /**
   * 监听音乐暂停。
   */
  onBackgroundAudioPause(callback: Function): void;

  /**
   * 监听音乐停止。
   */
  onBackgroundAudioStop(callback: Function): void;

  getBackgroundAudioManager(): void;

  /**
   * 注意：1.6.0 版本开始，本接口不再维护。建议使用能力更强的 wx.createInnerAudioContext 接口
   */
  createAudioContext(audioId: string): IAudioContext;

  /**
   * 拍摄视频或从手机相册中选视频，返回视频的临时文件路径。
   */
  chooseVideo(obj: {
    /**
     * album 从相册选视频，camera 使用相机拍摄，默认为：['album', 'camera']
     */
    sourceType?: string[];
    /**
     * 是否压缩所选的视频源文件，默认值为true，需要压缩
     */
    compressed?: any;
    /**
     * 拍摄视频最长拍摄时间，单位秒。最长支持 60 秒
     */
    maxDuration?: number;
    /**
     * 接口调用成功，返回视频文件的临时文件路径，详见返回参数说明
     */
    success?: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  saveVideoToPhotosAlbum(obj: {
    /**
     * 视频文件路径，可以是临时文件路径也可以是永久文件路径
     */
    filePath: string;
    /**
     * 接口调用成功的回调函数
     */
    success?: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  /**
   * 创建并返回 video 上下文 videoContext 对象。在自定义组件下，第二个参数传入组件实例this，以操作组件内 <video/> 组件
   */
  createVideoContext(videoId: string): IVideoContext;

  createCameraContext(): void;

  createLivePlayerContext(domId: string): void;

  loadFontFace(obj: {
    /**
     * 定义的字体名称
     */
    family: string;
    /**
     * 字体资源的地址
     */
    source: string;
    /**
     * 可选的字体描述符
     */
    desc?: any;
    /**
     * 接口调用成功的回调函数
     */
    success?: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  // # 文件 #

  /**
   * 保存文件到本地。注意：saveFile 会把临时文件移动，因此调用成功后传入的 tempFilePath 将不可用
   */
  saveFile(obj: {
    /**
     * 需要保存的文件的临时路径
     */
    tempFilePath: string;
    /**
     * 返回文件的保存路径，res = {savedFilePath: '文件的保存路径'}
     */
    success?: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  /**
   * 获取本地已保存的文件列表
   */
  getSavedFileList(obj: {
    /**
     * 接口调用成功的回调函数，返回结果见success返回参数说明
     */
    success?: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  /**
   * 获取本地文件的文件信息。此接口只能用于获取已保存到本地的文件，若需要获取临时文件信息，请使用 wx.getFileInfo 接口。
   */
  getSavedFileInfo(obj: {
    /**
     * 文件路径
     */
    filePath: string;
    /**
     * 接口调用成功的回调函数，返回结果见success返回参数说明
     */
    success?: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  /**
   * 删除本地存储的文件
   */
  removeSavedFile(obj: {
    /**
     * 需要删除的文件路径
     */
    filePath: string;
    /**
     * 接口调用成功的回调函数
     */
    success?: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  /**
   * 新开页面打开文档，支持格式：doc, xls, ppt, pdf, docx, xlsx, pptx
   */
  openDocument(obj: {
    /**
     * 文件路径，可通过 downFile 获得
     */
    filePath: string;
    /**
     * 文件类型，指定文件类型打开文件，有效值 doc, xls, ppt, pdf, docx, xlsx, pptx
     */
    fileType?: string;
    /**
     * 接口调用成功的回调函数
     */
    success?: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  getFileInfo(obj: {
    /**
     * 本地文件路径
     */
    filePath: string;
    /**
     * 计算文件摘要的算法，默认值 md5，有效值：md5，sha1
     */
    digestAlgorithm?: string;
    /**
     * 接口调用成功的回调函数
     */
    success?: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  // # 数据缓存 #

  /**
   * 将数据存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容，这是一个异步接口。
   */
  setStorage(obj: {
    /**
     * 本地缓存中的指定的 key
     */
    key: string;
    /**
     * 需要存储的内容
     */
    data: any;
    /**
     * 接口调用成功的回调函数
     */
    success?: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  /**
   * 将 data 存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容，这是一个同步接口。
   */
  setStorageSync(key: string, data: any): void;

  /**
   * 从本地缓存中异步获取指定 key 对应的内容。
   */
  getStorage(obj: {
    /**
     * 本地缓存中的指定的 key
     */
    key: string;
    /**
     * 接口调用的回调函数,res = {data: key对应的内容}
     */
    success: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  /**
   * 从本地缓存中同步获取指定 key 对应的内容。
   */
  getStorageSync(key: string): void;

  /**
   * 异步获取当前storage的相关信息
   */
  getStorageInfo(obj: {
    /**
     * 接口调用的回调函数，详见返回参数说明
     */
    success: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  /**
   * 同步获取当前storage的相关信息
   */
  getStorageInfoSync(): void;

  /**
   * 从本地缓存中异步移除指定 key 。
   */
  removeStorage(obj: {
    /**
     * 本地缓存中的指定的 key
     */
    key: string;
    /**
     * 接口调用的回调函数
     */
    success: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  /**
   * 从本地缓存中同步移除指定 key 。
   */
  removeStorageSync(key: string): void;

  /**
   * 清理本地数据缓存。
   */
  clearStorage(): void;

  /**
   * 同步清理本地数据缓存
   */
  clearStorageSync(): void;

  // # 位置 #

  /**
   * 获取当前的地理位置、速度。当用户离开小程序后，此接口无法调用；当用户点击“显示在聊天顶部”时，此接口可继续调用。
   */
  getLocation(obj: {
    /**
     * 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于wx.openLocation的坐标
     */
    type?: string;
    /**
     * 传入 true 会返回高度信息，由于获取高度需要较高精确度，会减慢接口返回速度
     */
    altitude?: boolean;
    /**
     * 接口调用成功的回调函数，返回内容详见返回参数说明。
     */
    success: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  /**
   * 打开地图选择位置。
   */
  chooseLocation(obj: {
    /**
     * 接口调用成功的回调函数，返回内容详见返回参数说明。
     */
    success: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  /**
   * ​使用微信内置地图查看位置。
   */
  openLocation(obj: {
    /**
     * 纬度，范围为-90~90，负数表示南纬
     */
    latitude: number;
    /**
     * 经度，范围为-180~180，负数表示西经
     */
    longitude: number;
    /**
     * 缩放比例，范围5~18，默认为18
     */
    scale?: number;
    /**
     * 位置名
     */
    name?: string;
    /**
     * 地址的详细说明
     */
    address?: string;
    /**
     * 接口调用成功的回调函数
     */
    success?: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  /**
   * 创建并返回 map 上下文 mapContext 对象
   */
  createMapContext(mapId: string): IMapContext;

  // # 设备 #

  /**
   * 获取系统信息。
   */
  getSystemInfo(obj: {
    /**
     * 接口调用成功的回调
     */
    success: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  /**
   * 获取系统信息同步接口
   */
  getSystemInfoSync(): {
    //手机品牌
    brand: string,
    //手机型号
    model: string,
    //设备像素比
    pixelRatio: string,
    //屏幕宽度
    screenWidth: string,
    //屏幕高度
    screenHeight: string,
    //可使用窗口宽度
    windowWidth: string,
    //可使用窗口高度
    windowHeight: string,
    // 状态栏的高度
    statusBarHeight: string,
    // 微信设置的语言
    language: string,
    // 微信版本号
    version: string,
    // 操作系统版本
    system: string,
    //客户端平台
    platform: string,
    //用户字体大小设置
    fontSizeSetting: string,
    //客户端基础库版本
    SDKVersion: string
  };

  /**
   * 获取网络类型。
   */
  getNetworkType(obj: {
    /**
     * 接口调用成功，返回网络类型 networkType
     */
    success: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  onNetworkStatusChange(callback: Function): void;

  setScreenBrightness(obj: {
    /**
     * 屏幕亮度值，范围 0~1，0 最暗，1 最亮
     */
    value: number;
    /**
     * 接口调用成功
     */
    success?: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  getScreenBrightness(obj: {
    /**
     * 接口调用成功
     */
    success?: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  vibrateLong(obj: {
    /**
     * 接口调用成功的回调函数
     */
    success?: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  vibrateShort(obj: {
    /**
     * 接口调用成功的回调函数
     */
    success?: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  /**
   * 监听加速度数据，频率：5次/秒，接口调用后会自动开始监听，可使用 wx.stopAccelerometer 停止监听。
   */
  onAccelerometerChange(callback: Function): void;

  startAccelerometer(obj: {
    /**
     * 监听加速度数据回调函数的执行频率
     */
    interval?: string;
    /**
     * 接口调用成功的回调函数
     */
    success?: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  stopAccelerometer(obj: {
    /**
     * 接口调用成功的回调函数
     */
    success?: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  /**
   * 监听罗盘数据，频率：5次/秒，接口调用后会自动开始监听，可使用wx.stopCompass停止监听。
   */
  onCompassChange(callback: Function): void;

  startCompass(obj: {
    /**
     * 接口调用成功的回调函数
     */
    success?: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  stopCompass(obj: {
    /**
     * 接口调用成功的回调函数
     */
    success?: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  makePhoneCall(obj: {
    /**
     * 需要拨打的电话号码
     */
    phoneNumber: string;
    /**
     * 接口调用成功的回调
     */
    success?: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  /**
   * 调起客户端扫码界面，扫码成功后返回对应的结果
   */
  scanCode(obj: {
    /**
     * 是否只能从相机扫码，不允许从相册选择图片
     */
    onlyFromCamera?: boolean;
    /**
     * 扫码类型，参数类型是数组，二维码是'qrCode'，一维码是'barCode'，DataMatrix是‘datamatrix’，pdf417是‘pdf417’。
     */
    scanType?: Array<any>;
    /**
     * 接口调用成功的回调函数，返回内容详见返回参数说明。
     */
    success?: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  setClipboardData(obj: {
    /**
     * 需要设置的内容
     */
    data: string;
    /**
     * 接口调用成功的回调函数
     */
    success?: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  getClipboardData(obj: {
    /**
     * 接口调用成功的回调函数
     */
    success?: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  openBluetoothAdapter(obj: {
    /**
     * 成功则返回成功初始化信息
     */
    success: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  closeBluetoothAdapter(obj: {
    /**
     * 成功则返回成功关闭模块信息
     */
    success: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  getBluetoothAdapterState(obj: {
    /**
     * 成功则返回本机蓝牙适配器状态
     */
    success: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  onBluetoothAdapterStateChange(callback: Function): void;

  startBluetoothDevicesDiscovery(obj: {
    /**
     * 蓝牙设备主 service 的 uuid 列表
     */
    services?: Array<any>;
    /**
     * 是否允许重复上报同一设备， 如果允许重复上报，则onDeviceFound 方法会多次上报同一设备，但是 RSSI 值会有不同
     */
    allowDuplicatesKey?: boolean;
    /**
     * 上报设备的间隔，默认为0，意思是找到新设备立即上报，否则根据传入的间隔上报
     */
    interval?: number;
    /**
     * 成功则返回本机蓝牙适配器状态
     */
    success: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  stopBluetoothDevicesDiscovery(obj: {
    /**
     * 成功则返回本机蓝牙适配器状态
     */
    success: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  getBluetoothDevices(obj: {
    /**
     * 成功则返回本机蓝牙适配器状态
     */
    success: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  onBluetoothDeviceFound(callback: Function): void;

  getConnectedBluetoothDevices(obj: {
    /**
     * 蓝牙设备主 service 的 uuid 列表
     */
    services: Array<any>;
    /**
     * 成功则返回本机蓝牙适配器状态
     */
    success: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  createBLEConnection(obj: {
    /**
     * 蓝牙设备 id，参考 getDevices 接口
     */
    deviceId: string;
    /**
     * 超时时间，单位ms，不填表示不会超时
     */
    timeout?: number;
    /**
     * 成功则返回本机蓝牙适配器状态
     */
    success: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  closeBLEConnection(obj: {
    /**
     * 蓝牙设备 id，参考 getDevices 接口
     */
    deviceId: string;
    /**
     * 成功则返回本机蓝牙适配器状态
     */
    success: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  onBLEConnectionStateChange(callback: Function): void;

  getBLEDeviceServices(obj: {
    /**
     * 蓝牙设备 id，参考 getDevices 接口
     */
    deviceId: string;
    /**
     * 成功则返回本机蓝牙适配器状态
     */
    success: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  getBLEDeviceCharacteristics(obj: {
    /**
     * 蓝牙设备 id，参考 device 对象
     */
    deviceId: string;
    /**
     * 蓝牙服务 uuid
     */
    serviceId: string;
    /**
     * 成功则返回本机蓝牙适配器状态
     */
    success: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  readBLECharacteristicValue(obj: {
    /**
     * 蓝牙设备 id，参考 device 对象
     */
    deviceId: string;
    /**
     * 蓝牙特征值对应服务的 uuid
     */
    serviceId: string;
    /**
     * 蓝牙特征值的 uuid
     */
    characteristicId: string;
    /**
     * 成功则返回本机蓝牙适配器状态
     */
    success: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  writeBLECharacteristicValue(obj: {
    /**
     * 蓝牙设备 id，参考 device 对象
     */
    deviceId: string;
    /**
     * 蓝牙特征值对应服务的 uuid
     */
    serviceId: string;
    /**
     * 蓝牙特征值的 uuid
     */
    characteristicId: string;
    /**
     * 蓝牙设备特征值对应的二进制值
     */
    value: any;
    /**
     * 成功则返回本机蓝牙适配器状态
     */
    success: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  notifyBLECharacteristicValueChange(obj: {
    /**
     * 蓝牙设备 id，参考 device 对象
     */
    deviceId: string;
    /**
     * 蓝牙特征值对应服务的 uuid
     */
    serviceId: string;
    /**
     * 蓝牙特征值的 uuid
     */
    characteristicId: string;
    /**
     * true: 启用 notify; false: 停用 notify
     */
    state: boolean;
    /**
     * 成功则返回本机蓝牙适配器状态
     */
    success: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  onBLECharacteristicValueChange(callback: Function): void;

  startBeaconDiscovery(obj: {
    /**
     * iBeacon设备广播的 uuids
     */
    uuids: string[];
    /**
     * 接口调用成功的回调函数
     */
    success?: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  stopBeaconDiscovery(obj: {
    /**
     * 接口调用成功的回调函数
     */
    success?: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  getBeacons(obj: {
    /**
     * 接口调用成功的回调函数
     */
    success?: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  onBeaconUpdate(callback: Function): void;

  onBeaconServiceChange(callback: Function): void;

  onUserCaptureScreen(callback: Function): void;

  addPhoneContact(obj: {
    /**
     * 头像本地文件路径
     */
    photoFilePath?: string;
    /**
     * 昵称
     */
    nickName?: string;
    /**
     * 姓氏
     */
    lastName?: string;
    /**
     * 中间名
     */
    middleName?: string;
    /**
     * 名字
     */
    firstName: string;
    /**
     * 备注
     */
    remark?: string;
    /**
     * 手机号
     */
    mobilePhoneNumber?: string;
    /**
     * 微信号
     */
    weChatNumber?: string;
    /**
     * 联系地址国家
     */
    addressCountry?: string;
    /**
     * 联系地址省份
     */
    addressState?: string;
    /**
     * 联系地址城市
     */
    addressCity?: string;
    /**
     * 联系地址街道
     */
    addressStreet?: string;
    /**
     * 联系地址邮政编码
     */
    addressPostalCode?: string;
    /**
     * 公司
     */
    organization?: string;
    /**
     * 职位
     */
    title?: string;
    /**
     * 工作传真
     */
    workFaxNumber?: string;
    /**
     * 工作电话
     */
    workPhoneNumber?: string;
    /**
     * 公司电话
     */
    hostNumber?: string;
    /**
     * 电子邮件
     */
    email?: string;
    /**
     * 网站
     */
    url?: string;
    /**
     * 工作地址国家
     */
    workAddressCountry?: string;
    /**
     * 工作地址省份
     */
    workAddressState?: string;
    /**
     * 工作地址城市
     */
    workAddressCity?: string;
    /**
     * 工作地址街道
     */
    workAddressStreet?: string;
    /**
     * 工作地址邮政编码
     */
    workAddressPostalCode?: string;
    /**
     * 住宅传真
     */
    homeFaxNumber?: string;
    /**
     * 住宅电话
     */
    homePhoneNumber?: string;
    /**
     * 住宅地址国家
     */
    homeAddressCountry?: string;
    /**
     * 住宅地址省份
     */
    homeAddressState?: string;
    /**
     * 住宅地址城市
     */
    homeAddressCity?: string;
    /**
     * 住宅地址街道
     */
    homeAddressStreet?: string;
    /**
     * 住宅地址邮政编码
     */
    homeAddressPostalCode?: string;
    /**
     * 接口调用成功
     */
    success?: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  getHCEState(obj: {
    /**
     * 接口调用成功的回调函数
     */
    success?: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  startHCE(obj: {
    /**
     * 需要注册到系统的 AID 列表，每个 AID 为 String 类型
     */
    aid_list: Array<any>;
    /**
     * 接口调用成功的回调函数
     */
    success?: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  stopHCE(obj: {
    /**
     * 接口调用成功的回调函数
     */
    success?: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  onHCEMessage(callback: Function): void;

  sendHCEMessage(obj: {
    /**
     * 二进制数据
     */
    data: any;
    /**
     * 接口调用成功的回调函数
     */
    success?: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  startWifi(obj: {
    /**
     * 接口调用成功的回调函数
     */
    success?: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  stopWifi(obj: {
    /**
     * 接口调用成功的回调函数
     */
    success?: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  connectWifi(obj: {
    /**
     * Wi-Fi 设备ssid
     */
    SSID: string;
    /**
     * Wi-Fi 设备bssid
     */
    BSSID: string;
    /**
     * Wi-Fi 设备密码
     */
    password?: string;
    /**
     * 接口调用成功的回调函数
     */
    success?: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  getWifiList(obj: {
    /**
     * 接口调用成功的回调函数
     */
    success?: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  onGetWifiList(callback: Function): void;

  setWifiList(obj: {}): void;

  onWifiConnected(callback: Function): void;

  getConnectedWifi(obj: {
    /**
     * 接口调用成功的回调函数
     */
    success?: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  // # 界面 #

  /**
   * 显示消息提示框
   */
  showToast(obj: {
    /**
     * 提示的内容
     */
    title: string;
    /**
     * 图标，有效值 "success", "loading", "none"
     */
    icon?: string;
    /**
     * 自定义图标的本地路径，image 的优先级高于 icon
     */
    image?: string;
    /**
     * 提示的延迟时间，单位毫秒，默认：1500
     */
    duration?: number;
    /**
     * 是否显示透明蒙层，防止触摸穿透，默认：false
     */
    mask?: boolean;
    /**
     * 接口调用成功的回调函数
     */
    success?: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  showLoading(obj: {
    /**
     * 提示的内容
     */
    title: string;
    /**
     * 是否显示透明蒙层，防止触摸穿透，默认：false
     */
    mask?: boolean;
    /**
     * 接口调用成功的回调函数
     */
    success?: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  /**
   * 隐藏消息提示框
   */
  hideToast(): void;

  hideLoading(): void;

  /**
   * ​显示模态弹窗
   */
  showModal(obj: {
    /**
     * 提示的标题
     */
    title: string;
    /**
     * 提示的内容
     */
    content: string;
    /**
     * 是否显示取消按钮，默认为 true
     */
    showCancel?: boolean;
    /**
     * 取消按钮的文字，默认为"取消"，最多 4 个字符
     */
    cancelText?: string;
    /**
     * 取消按钮的文字颜色，默认为"#000000"
     */
    cancelColor?: any;
    /**
     * 确定按钮的文字，默认为"确定"，最多 4 个字符
     */
    confirmText?: string;
    /**
     * 确定按钮的文字颜色，默认为"#3CC51F"
     */
    confirmColor?: any;
    /**
     * 接口调用成功的回调函数
     */
    success?: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  /**
   * ​显示操作菜单
   */
  showActionSheet(obj: {
    /**
     * 按钮的文字数组，数组长度最大为6个
     */
    itemList: any;
    /**
     * 按钮的文字颜色，默认为"#000000"
     */
    itemColor?: any;
    /**
     * 接口调用成功的回调函数，详见返回参数说明
     */
    success?: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  setTopBarText(obj: {
    /**
     * 置顶栏文字内容
     */
    text: string;
    /**
     * 接口调用成功的回调函数
     */
    success?: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  /**
   * 动态设置当前页面的标题。
   */
  setNavigationBarTitle(obj: {
    /**
     * 页面标题
     */
    title: string;
    /**
     * 接口调用成功的回调函数
     */
    success?: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  /**
   * 在当前页面显示导航条加载动画。
   */
  showNavigationBarLoading(): void;

  /**
   * 隐藏导航条加载动画。
   */
  hideNavigationBarLoading(): void;

  setTabBarBadge(obj: {
    /**
     * tabBar的哪一项，从左边算起
     */
    index: number;
    /**
     * 显示的文本，超过 3 个字符则显示成“…”
     */
    text: string;
    /**
     * 接口调用成功的回调函数
     */
    success?: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  removeTabBarBadge(obj: {
    /**
     * tabBar的哪一项，从左边算起
     */
    index: number;
    /**
     * 接口调用成功的回调函数
     */
    success?: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  showTabBarRedDot(obj: {
    /**
     * tabBar的哪一项，从左边算起
     */
    index: number;
    /**
     * 接口调用成功的回调函数
     */
    success?: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  hideTabBarRedDot(obj: {
    /**
     * tabBar的哪一项，从左边算起
     */
    index: number;
    /**
     * 接口调用成功的回调函数
     */
    success?: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  setTabBarStyle(obj: {
    /**
     *
     */
    color?: any;
    /**
     *
     */
    selectedColor?: any;
    /**
     *
     */
    backgroundColor?: any;
    /**
     *
     */
    borderStyle?: string;
    /**
     *
     */
    success?: Function;
    /**
     *
     */
    fail?: Function;
    /**
     *
     */
    complete?: Function;
  }): void;

  setTabBarItem(obj: {
    /**
     * tabBar 的哪一项，从左边算起
     */
    index: number;
    /**
     * tab 上按钮文字
     */
    text?: string;
    /**
     * 图片路径，icon 大小限制为40kb，建议尺寸为 81px * 81px，当 postion 为 top 时，此参数无效，不支持网络图片
     */
    iconPath?: string;
    /**
     * 选中时的图片路径，icon 大小限制为40kb，建议尺寸为 81px * 81px ，当 postion 为 top 时，此参数无效
     */
    selectedIconPath?: string;
    /**
     * 接口调用成功的回调函数
     */
    success?: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  showTabBar(obj: {
    /**
     * 是否需要动画效果，默认无
     */
    animation?: boolean;
    /**
     * 接口调用成功的回调函数
     */
    success?: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  hideTabBar(obj: {
    /**
     * 是否需要动画效果，默认无
     */
    animation?: boolean;
    /**
     * 接口调用成功的回调函数
     */
    success?: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  setBackgroundColor(obj: {
    /**
     *
     */
    backgroundColor?: any;
    /**
     *
     */
    backgroundColorTop?: any;
    /**
     *
     */
    backgroundColorBottom?: any;
  }): void;

  setBackgroundTextStyle(obj: {
    /**
     *
     */
    textStyle?: string;
  }): void;

  /**
   * 保留当前页面，跳转到应用内的某个页面，使用wx.navigateBack可以返回到原页面。
   */
  navigateTo(obj: {
    /**
     * 需要跳转的应用内非 tabBar 的页面的路径 , 路径后可以带参数。参数与路径之间使用?分隔，参数键与参数值用=相连，不同参数用&分隔；如 'path?key=value&key2=value2'
     */
    url: string;
    /**
     * 接口调用成功的回调函数
     */
    success?: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  /**
   * 关闭当前页面，跳转到应用内的某个页面。
   */
  redirectTo(obj: {
    /**
     * 需要跳转的应用内非 tabBar 的页面的路径，路径后可以带参数。参数与路径之间使用?分隔，参数键与参数值用=相连，不同参数用&分隔；如 'path?key=value&key2=value2'
     */
    url: string;
    /**
     * 接口调用成功的回调函数
     */
    success?: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  reLaunch(obj: {
    /**
     * 需要跳转的应用内页面路径 , 路径后可以带参数。参数与路径之间使用?分隔，参数键与参数值用=相连，不同参数用&分隔；如 'path?key=value&key2=value2'，如果跳转的页面路径是 tabBar 页面则不能带参数
     */
    url: string;
    /**
     * 接口调用成功的回调函数
     */
    success?: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  /**
   * 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
   */
  switchTab(obj: {
    /**
     * 需要跳转的 tabBar 页面的路径（需在 app.json 的 tabBar 字段定义的页面），路径后不能带参数
     */
    url: string;
    /**
     * 接口调用成功的回调函数
     */
    success?: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  /**
   * 关闭当前页面，返回上一页面或多级页面。可通过 getCurrentPages()) 获取当前的页面栈，决定需要返回几层。
   */
  navigateBack(obj: {
    /**
     * 返回的页面数，如果 delta 大于现有页面数，则返回到首页。
     */
    delta?: number;
  }): void;

  /**
   * 创建一个动画实例animation。调用实例的方法来描述动画。最后通过动画实例的export方法导出动画数据传递给组件的animation属性。
   */
  createAnimation(obj: {
    /**
     * 400
     */
    duration?: number;
    /**
     * "linear"
     */
    timingFunction?: string;
    /**
     * 0
     */
    delay?: number;
    /**
     * "50% 50% 0"
     */
    transformOrigin?: string;
  }): IAnimation;

  pageScrollTo(obj: {
    /**
     * 滚动到页面的目标位置（单位px）
     */
    scrollTop: number;
    /**
     * 滚动动画的时长，默认300ms，单位 ms
     */
    duration?: number;
  }): void;

  /**
   * 创建 canvas 绘图上下文（指定 canvasId）.Tip: 需要指定 canvasId，该绘图上下文只作用于对应的 <canvas/>
   */
  createCanvasContext(canvasId: string): ICanvasContext;


  /**
   * 返回一个数组，用来描述 canvas 区域隐含的像素数据
   */
  canvasGetImageData({canvasId, x, y, width, height, success, fail, complete}): void


  /**
   * 把当前画布的内容导出生成图片，并返回文件路径
   */
  canvasToTempFilePath(canvasId: string): void;

  startPullDownRefresh(obj: {
    /**
     * 接口调用成功的回调函数
     */
    success?: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  /**
   * 停止当前页面下拉刷新。
   */
  stopPullDownRefresh(): void;

  // # 第三方平台 #

  getExtConfig(obj: {
    /**
     * 返回第三方平台自定义的数据
     */
    success?: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  getExtConfigSync(): void;

  // # 开放接口 #

  /**
   * 调用接口wx.login() 获取临时登录凭证（code）
   */
  login(obj: {
    /**
     * 超时时间，单位 ms
     */
    timeout?: number;
    /**
     * 接口调用成功的回调函数
     */
    success?: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  /**
   * 注意：此接口有调整，使用该接口将不再出现授权弹窗，请使用 <button open-type="getUserInfo"></button> 引导用户主动进行授权操作
   */
  getUserInfo(obj: {
    /**
     * 是否带上登录态信息
     */
    withCredentials?: boolean;
    /**
     * 指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文。默认为en。
     */
    lang?: string;
    /**
     * 超时时间，单位 ms
     */
    timeout?: number;
    /**
     * 接口调用成功的回调函数
     */
    success?: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  /**
   * 发起微信支付。
   */
  requestPayment(obj: {
    /**
     * 时间戳从1970年1月1日00:00:00至今的秒数,即当前的时间
     */
    timeStamp: string;
    /**
     * 随机字符串，长度为32个字符以下。
     */
    nonceStr: string;
    /**
     * 统一下单接口返回的 prepay_id 参数值，提交格式如：prepay_id=*
     */
    package: string;
    /**
     * 签名算法，暂支持 MD5
     */
    signType: string;
    /**
     * 签名,具体签名方案参见小程序支付接口文档;
     */
    paySign: string;
    /**
     * 接口调用成功的回调函数
     */
    success?: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  chooseAddress(obj: {
    /**
     * 返回用户选择的收货地址信息
     */
    success?: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  addCard(obj: {
    /**
     * 需要添加的卡券列表，列表内对象说明请参见请求对象说明
     */
    cardList: any;
    /**
     * 接口调用成功的回调函数
     */
    success?: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  openCard(obj: {
    /**
     * 需要打开的卡券列表，列表内参数详见openCard 请求对象说明
     */
    cardList: any;
    /**
     * 接口调用成功的回调函数
     */
    success?: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  openSetting(obj: {
    /**
     * 接口调用成功的回调函数，返回内容详见返回参数说明。
     */
    success?: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  getSetting(obj: {
    /**
     * 接口调用成功的回调函数，返回内容详见返回参数说明。
     */
    success?: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  getWeRunData(obj: {
    /**
     * 超时时间，单位 ms
     */
    timeout?: number;
    /**
     * 接口调用成功的回调函数
     */
    success?: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  navigateToMiniProgram(obj: {
    /**
     * 要打开的小程序 appId
     */
    appId: string;
    /**
     * 打开的页面路径，如果为空则打开首页
     */
    path?: string;
    /**
     * 需要传递给目标小程序的数据，目标小程序可在 App.onLaunch()，App.onShow() 中获取到这份数据。详情
     */
    extraData?: any;
    /**
     * 要打开的小程序版本，有效值 develop（开发版），trial（体验版），release（正式版） ，仅在当前小程序为开发版或体验版时此参数有效；如果当前小程序是正式版，则打开的小程序必定是正式版。默认值 release
     */
    envVersion?: string;
    /**
     * 接口调用成功的回调函数
     */
    success?: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  chooseInvoiceTitle(obj: {
    /**
     * 接口调用成功的回调函数
     */
    success?: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  checkIsSupportSoterAuthentication(obj: {
    /**
     * 接口调用成功的回调函数
     */
    success?: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  // # 数据 #

  /**
   * 自定义分析数据上报接口。使用前，需要在小程序管理后台自定义分析中新建事件，配置好事件名与字段。
   */
  reportAnalytics(eventName: string, data: string): void;

  // # 更新 #

  getUpdateManager(): void;

  // # 多线程 #

  createWorker(scriptPath: string): void;

  // # 监控 #

  reportMonitor(name: string, value: string): void;

  // # 调试接口 #

  setEnableDebug(obj: {
    /**
     * 是否打开调试
     */
    enableDebug: boolean;
    /**
     * 接口调用成功的回调函数
     */
    success?: Function;
    /**
     * 接口调用失败的回调函数
     */
    fail?: Function;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: Function;
  }): void;

  // # 日志 #

  getLogManager(): void;


  /**
   * 返回一个SelectorQuery对象实例。
   */
  createSelectorQuery(): ISelectorQuery;

  //将ArrayBuffer与Base64互转
  arrayBufferToBase64()

  //将ArrayBuffer与Base64互转
  base64ToArrayBuffer()
}


interface ISelectorQuery {
  /**
   * 将选择器的选取范围更改为自定义组件component内
   */
  in(obj: object): void

  /**
   * 在当前页面下选择第一个匹配选择器selector的节点
   */
  select(selector: string): INodesRef

  /**
   * 在当前页面下选择匹配选择器selector的节点
   */
  selectAll(selector: string): INodesRef

  /**
   * 选择显示区域，可用于获取显示区域的尺寸、滚动位置等信息，返回一个NodesRef对象实例。
   */
  selectViewport(selector: string): void

  /**
   * 执行所有的请求，请求结果按请求次序构成数组，在callback的第一个参数中返回。
   */
  exec(callback: Function): void
}

interface INodesRef {
  /**
   * 添加节点的布局位置的查询请求，相对于显示区域，以像素为单位。
   */
  boundingClientRect(callback: (res: IRect) => void)

  /**
   * 添加节点的滚动位置查询请求，以像素为单位
   */
  scrollOffset(callback: Function)

  /**
   * 获取节点的相关信息，需要获取的字段在fields中指定
   */
  fields(callback: Function)
}


interface IRect {
  // 节点的ID
  id: string,
  // 节点的dataset
  dataset: string,
  // 节点的左边界坐标
  left: string,
  // 节点的右边界坐标
  right: string,
  // 节点的上边界坐标
  top: string,
  // 节点的下边界坐标
  bottom: string,
  // 节点的宽度
  width: string,
  // 节点的高度
  height: string,
}
