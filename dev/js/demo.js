import $ from "jquery";
import {gsap} from "gsap";

$(document).ready(function(){

  console.log('Page loaded');

  //var mainTL = gsap.timeline();
  //var tl = gsap.timeline();
  //defaults

//first nested timeline animation
  // function nestedTl(){
  //   var tl = gsap.timeline();
  //
  //   tl.to(redBox ,{duration:1, x:400, ease:"none"})
  //
  //     .to(blueBox ,{duration:1, x:400, ease:"none"})
  //
  //     ;//timeline END
  //
  //     return tl;
  //
  // }




//add main timeline
mainTL.add(nestedTl())
//.add(aniBoxOrange(), "-=1")

;//timeline END



});
