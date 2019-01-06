<!--
// Copyright ©2000 Reynald V. Nuñez. Abakada Web WorkShop
// generic functions to move an object on screen

var ie4up, ns6, ns4, dom;
ie4up = document.all ? true : false;
ns6 = document.getElementById ? true : false;
ns4 = document.layerrs ? true : false;
dom = ie4up || ns6;

function init ( id, x, y ) {
   if ( window.move ) clearInterval ( move );
   el = ie4up ? document.all [ id ] : ns6 ? 
      document.getElementById ( id ) : document [ id ];
   els = dom ? el.style : el;
   els.left = x;
   els.top = y;
   els.visibility = "visible";
   posX = parseInt ( els.left );
   posY = parseInt ( els.top );
}

function initLeft ( ) {
   measure ( 'theDiv' );
   return -elWidth;
}
function initRight ( ) {
   measure ( );
   return docWidth;
}
function initTop ( ) {
   measure ( 'theDiv' );
   return -elHeight;
}
function initBott ( ) {
   measure ( );
   return docHeight;
}
function centerX ( ) {
   measure ( 'theDiv' );
   return ( docWidth - elWidth ) / 2;
}
function centerY ( ) {
   measure ( );
   return docHeight / 2;
}

function slidefromLeft ( inc, end ) {
   if ( posX < end ) {
      posX += inc;
      els.left = posX;
   }
   else clearInterval ( move );
}

function slidefromRight ( inc, end ) {
   if ( posX > end ) {
      posX -= inc;
      els.left = posX;
   }
   else clearInterval ( move );
}

function slidefromTop ( inc, end ) {
   if ( posY < end ) {
      posY += inc;
      els.top = posY;
   }
   else clearInterval ( move );
}

function slidefromBottom ( inc, end ) {
   if ( posY > end ) {
      posY -= inc;
      els.top = posY;
   }
   else clearInterval ( move );
}

function glideDownRight ( inc, end ) {
   if ( posY < end ) {
      posX += inc;
      posY += inc;
      els.left = posX;
      els.top = posY;
   }
   else clearInterval ( move );
}

function glideDownLeft ( inc, end ) {
   if ( posY < end ) {
      posX -= inc;
      posY += inc;
      els.left = posX;
      els.top = posY;
   }
   else clearInterval ( move );
}

function glideUpRight ( inc, end ) {
   if ( posY > end ) {
      posX += inc;
      posY -= inc;
      els.left = posX;
      els.top = posY;
   }
   else clearInterval ( move );
}

function glideUpLeft ( inc, end ) {
   if ( posY > end ) {
      posX -= inc;
      posY -= inc;
      els.left = posX;
      els.top = posY;
   }
   else clearInterval ( move );
}

function measure ( id ) {
   if ( ie4up ) {
      docWidth = document.body.offsetWidth;
      docHeight = document.body.offsetHeight;
      scrollOffsetLeft = document.body.scrollLeft;
      scrollOffsetTop = document.body.scrollTop;
   }
   else {
      docWidth = window.innerWidth;
      docHeight = window.innerHeight;
      scrollOffsetLeft = window.pageXOffset;
      scrollOffsetTop = window.pageYOffset;
   }
   if ( !id ) return;
   el = ie4up ? document.all [ id ] : ns6 ? 
      document.getElementById ( id ) : document [ id ];
   if ( dom ) {
      els = el.style;
      elWidth = el.offsetWidth;
      elHeight = el.offsetHeight;
      elLeft = el.offsetLeft;
      elTop = el.offsetTop;
   }
   else {
      els = el;
      elWidth = el.clip.width;
      elHeight = el.clip.height;
      elLeft = el.left;
      elTop = el.top;
   }
}
//-->