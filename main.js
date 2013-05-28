
function fetch(url, cb) {
    var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function handle() {
          if (xhr.readyState == 4) {
            cb(xhr.responseText);
          } else {
              //console.log("xhr:", xhr);
          }
        };
    xhr.open("GET", url, true);
    xhr.send();
}

fetch("http://registry.npmjs.org/bops/0.0.6", function (d) {
    var moduleData = JSON.parse(d);
    console.log("got from NPM:", moduleData);
    console.log("Module:"+moduleData.name+" v"+moduleData.version);
    console.log("tgz:"+moduleData.dist.tarball);
    TarGZ.load(moduleData.dist.tarball, function(files) {
        console.log("tarball:", files);
        files.forEach(function(f) {
            console.log(f.filename);
            if (f.filename.indexOf('.js') > 0) {
                console.log('bingo');
            }
        });
    });
});

