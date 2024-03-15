document.addEventListener("DOMContentLoaded", function() {
    var bg = new Trianglify({
      noiseIntensity: 0,
      cell_size: 50,
      cellpadding: 10,
      fillOpacity: 1,
      strokeOpacity: 0,
      x_gradient: ['#311547', '#220334']
    });
  
    var pattern = bg.generate(window.innerWidth, window.innerHeight);
    document.body.setAttribute('style', 'background-image: '+pattern.dataUrl);
  });
  