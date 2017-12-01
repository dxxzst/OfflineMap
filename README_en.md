# Offline map display based on MySQL + Node.js + Leaflet 

---

**1. Basic instructions**

The project achieved off-line display of Baidu, Google, AMap, Tencent map. The main functions are as follows:

 - Map tiles download, storage. Currently supports storing to MySQL
 - The Node.js service invokes the map tiles in MySQL
 - Using LeafLet to show the map

Show results as follows:
![results][9]

**2. Map tile download tools and configuration**

Tools Download Link: http://pan.baidu.com/s/1qYoHj4K Password: ehgh
Tools to use:

 - Database configuration
 
 Open the MapDownloader.exe.config file in the tools directory. Fill in the configuration information as shown in the figure according to the actual situation。
 ![configuration][5]

 - Download Map tiles 
 
Open the tool directory MapDownloader.exe -> select the drawing tools, rectangles -> select the area on the map box -> Select MySQL database storage -> Zoom Select according to need -> Click to download
[Download tile map] [6]

  - Tile map stored in the database
  ! [Tiles stored in database] [7]
 
> Note: The Type field in the database refers to the map type. For Google Maps Generic map (1818940751), satellite map (47626774), callout (1024577166). This tool is feature-rich and can be carefully researched.

**3. Node.js service configuration**

  - Modify the configuration mysql.js. According to the actual situation, configure the database link
  ! [Configure database link] [8]
  - Go to the directory `cd OfflineMap`
  - Install the resource `npm install`
  - Start the service `npm start`
  - Service address `http: //127.0.0.1: 3001`

**4. Page Display**

Open the example folder map.html can be.

**If this project is helpful to you, welcome to Star.**


  [1]: https://www.mysql.com/
  [2]: https://nodejs.org/en/
  [3]: http://leafletjs.com/
  
  
  [5]: http://i2.kiimg.com/561545/18b1c776ce529746.jpg
  [6]: http://i4.piimg.com/561545/30fdee742409cee8.jpg
  [7]: http://i4.piimg.com/561545/1f87b80cce9a7c26.jpg
  [8]: http://i4.piimg.com/561545/71c0b9872f222c0b.jpg
  [9]: http://i2.kiimg.com/561545/216983d692fef56a.jpg
