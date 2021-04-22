import $ from "jquery";
import {gsap} from "gsap";

$(document).ready(function(){

  console.log('Page loaded');

var cloud1 = $("#cloud-container img:nth-child(1)");
var cloud2 = $("#cloud-container img:nth-child(2)");
var cloud3 = $("#cloud-container img:nth-child(3)");
var cloudArray = [cloud1,cloud2,cloud3]
  var mainTL = gsap.timeline();
  var tl = gsap.timeline();
  //defaults

  var flameScale0 = gsap.utils.wrap([0.5,0.55,0.75]);
  var flameScale1 = gsap.utils.wrap([0.5,0.55,0.75]);
  var flameScale2 = gsap.utils.wrap([0.5,0.55,0.75]);
  var flameScale3 = gsap.utils.wrap([0.5,0.55,0.75]);

//first nested timeline animation
  function cloudsTl(){
     var tl = gsap.timeline();
  
     tl.to(cloudArray ,{duration:1, stagger:0.3, y:"+-700", ease:"expo.out"})
  
       ;//timeline END
  
       return tl;
  
   }




//add main timeline
mainTL.add(cloudsTl())
//.add(aniBoxOrange(), "-=1")

;//timeline END



});
