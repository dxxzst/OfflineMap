# 基于MySQL + Node.js + Leaflet的离线地图展示

---

**1. 基本说明**

本项目实现了离线展示百度、谷歌、高德、腾讯地图。主要功能如下：

 - 实现了地图瓦片图下载、存储。目前支持存储至[MySQL][1]
 - [Node.js][2]服务调用MySQL中的瓦片图 
 - [Leaflet][3]展示地图

展示效果如下：
![展示效果][5]

**2. 地图瓦片下载工具及配置**

工具下载链接:~~http://pan.baidu.com/s/1qYoHj4K 密码: ehgh~~

最新地址：https://pan.baidu.com/s/1miMF9nM

工具使用方法：

 - 数据库配置
 
 打开工具目录中的 MapDownloader.exe.config 文件。根据实际情况填写如图中的配置信息。
 ![数据库配置][6]

 - 地图瓦片图下载
 
 打开工具目录中 MapDownloader.exe -> 选择画图工具、矩形 -> 地图上框选区域 -> 存储方式选择MySQL数据库 -> Zoom根据需要选择 -> 点击下载
![下载瓦片图][7]

 - 数据库中存储的瓦片图
 ![数据库中存储的瓦片图][8]
 
> 备注：数据库中Type字段指的是地图类型，对于谷歌地图 普通地图（1818940751）、卫星地图（47626774）、标注（1024577166）。此工具功能丰富，可细细研究。

**3. node.js服务配置**

 - 修改mysql.js 中的配置。根据实际情况，配置数据库链接
 ![配置数据库链接][9]
 - 进入目录 `cd OfflineMap`
 - 安装资源 `npm install`
 - 启动服务 `npm start`
 - 服务地址 `http://127.0.0.1:3001`

**4. 页面展示**

打开example文件夹中的map.html即可。

**如本项目对您有所帮助，欢迎Star。**


  [1]: https://www.mysql.com/
  [2]: https://nodejs.org/en/
  [3]: http://leafletjs.com/
  
  [5]: https://images2018.cnblogs.com/blog/1010568/201803/1010568-20180309204134685-1017810917.jpg
  [6]: https://images2018.cnblogs.com/blog/1010568/201803/1010568-20180309204153057-258755990.jpg
  [7]: https://images2018.cnblogs.com/blog/1010568/201803/1010568-20180309204751868-1305224209.jpg
  [8]: https://images2018.cnblogs.com/blog/1010568/201803/1010568-20180309204233316-1946879164.jpg
  [9]: https://images2018.cnblogs.com/blog/1010568/201803/1010568-20180309204244557-69518306.jpg
