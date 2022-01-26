console.log(document.body.clientWidth)

/*
if (document.body.clientWidth > 1400) {
    viewport = document.querySelector("meta[name=viewport]");
    viewport.setAttribute('content', 'width=device-width, initial-scale=0.67, user-scalable=0');
    
  }else{
      console.log('fallo')
  }
  */
  var scale = 'scale(1)';
  if (document.body.clientWidth < 1400 && document.body.clientWidth > 1150) {
    document.body.style.zoom  = 0.75;
    console.log('entro')
    
  }else{

      console.log('fallo')
  }
