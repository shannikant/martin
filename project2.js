function show() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });


  var load = document.querySelector("#loader");
  var loadh3 = document.querySelector("#counter");

  var grow = 0;
    setInterval(function(){
      if(grow<=100){
        loadh3.innerHTML = `${grow++}`  
      }  
    },20)

  gsap.to("#loader",{
    y:"-100vh",
    duration:0.8,
    delay:2.5,
  })
  gsap.to("#loader>h3:nth-child(1)",{
    y:-50,
    // duration:1,
    opacity:0,
    delay:2.2,
  })
  gsap.to("#main>#loader>h3:nth-child(2)",{
  
    // duration:1,
    opacity:0,
    delay:2.3,
  })

  document.querySelector("body").addEventListener("mousemove", function (dets) {
    document.querySelector("#circle").style.left = `${dets.x}px`;
    document.querySelector("#circle").style.top = `${dets.y}px`;
  });

  var show = document.querySelectorAll("#page1>#nav>h6");
  show.forEach(function (elem) {
    elem.addEventListener("mouseenter", function (elem) {
      document.querySelector("#circle").style.height = "50px";
      document.querySelector("#circle").style.width = "50px";
      // document.querySelector("#circle").style.transform="scale(2.5)";
    });
    elem.addEventListener("mouseleave", function (elem) {
      document.querySelector("#circle").style.height = "15px";
      document.querySelector("#circle").style.width = "15px";
      // document.querySelector("#circle").style.transform="scale(1)";
    });
  });

  var show2 = document.querySelectorAll("#page1>#downnav>#contacts>h4");
  show2.forEach(function (elem) {
    elem.addEventListener("mouseenter", function (elem) {
      document.querySelector("#circle").style.height = "50px";
      document.querySelector("#circle").style.width = "50px";
    });
    elem.addEventListener("mouseleave", function (elem) {
      document.querySelector("#circle").style.height = "15px";
      document.querySelector("#circle").style.width = "15px";
    });
  });

  var show3 = document.querySelectorAll("#page3>.pics");
  show3.forEach(function (elem) {
    elem.addEventListener("mouseenter", function (elem) {
      document.querySelector("#circle").style.height = "150px";
      document.querySelector("#circle").style.width = "150px";
      document.querySelector("#circle>h2").style.display = "initial";
    });
    elem.addEventListener("mouseleave", function (elem) {
      document.querySelector("#circle").style.height = "15px";
      document.querySelector("#circle").style.width = "15px";
      document.querySelector("#circle>h2").style.display = "none";
    });
  });

  var show4 = document.querySelectorAll("#page2>#h4>h4");
  show4.forEach(function (elem) {
    elem.addEventListener("mouseenter", function (elem) {
      document.querySelector("#circle").style.height = "50px";
      document.querySelector("#circle").style.width = "50px";
    });
    elem.addEventListener("mouseleave", function (elem) {
      document.querySelector("#circle").style.height = "15px";
      document.querySelector("#circle").style.width = "15px";
    });
  });

  var show5 = document.querySelectorAll("#page7>#text");
  show5.forEach(function (elem) {
    elem.addEventListener("mouseenter", function (elem) {
      document.querySelector("#circle").style.height = "150px";
      document.querySelector("#circle").style.width = "150px";
      document.querySelector("#circle>h3").style.display = "initial";
    });
    elem.addEventListener("mouseleave", function (elem) {
      document.querySelector("#circle").style.height = "15px";
      document.querySelector("#circle").style.width = "15px";
      document.querySelector("#circle>h3").style.display = "none";
    });
  });

  var show6 = document.querySelectorAll("#page7>#down>#social>#behance");
  show6.forEach(function (elem) {
    elem.addEventListener("mouseenter", function (elem) {
      document.querySelector("#circle").style.height = "50px";
      document.querySelector("#circle").style.width = "50px";
    });
    elem.addEventListener("mouseout", function (elem) {
      document.querySelector("#circle").style.height = "15px";
      document.querySelector("#circle").style.width = "15px";
    });
  });

  var show7 = document.querySelectorAll("#page7>#down>#social>h3");
  show7.forEach(function (elem) {
    elem.addEventListener("mouseenter", function (elem) {
      document.querySelector("#circle").style.height = "50px";
      document.querySelector("#circle").style.width = "50px";
    });
    elem.addEventListener("mouseout", function (elem) {
      document.querySelector("#circle").style.height = "15px";
      document.querySelector("#circle").style.width = "15px";
    });
  });

  var show8 = document.querySelectorAll("#page7>#down>#back>h3");
  show8.forEach(function (elem) {
    elem.addEventListener("mouseenter", function (elem) {
      document.querySelector("#circle").style.height = "50px";
      document.querySelector("#circle").style.width = "50px";
    });
    elem.addEventListener("mouseout", function (elem) {
      document.querySelector("#circle").style.height = "15px";
      document.querySelector("#circle").style.width = "15px";
    });
  });

  var button = document.querySelectorAll("#page1>#nav>#button");
  button.forEach(function (elem) {
    elem.addEventListener("mouseenter", function (elem) {
      document.querySelector("#circle").style.height = "50px";
      document.querySelector("#circle").style.width = "50px";
      document.querySelector("#page1>#nav>#button>h3").style.top = "-50%";
      document.querySelector("#page1>#nav>#button>h4").style.top = "5%";
      document.querySelector("#page1>#nav>#button>#overlay").style.width =
        "100%";
    });
    elem.addEventListener("mouseleave", function (elem) {
      document.querySelector("#circle").style.height = "15px";
      document.querySelector("#circle").style.width = "15px";
      document.querySelector("#page1>#nav>#button>h3").style.top = "50%";
      document.querySelector("#page1>#nav>#button>h4").style.top = "110%";
      document.querySelector("#page1>#nav>#button>#overlay").style.width = "0%";
    });
  });

  var button2 = document.querySelectorAll("#page1>#right>#button");
  button2.forEach(function (elem) {
    elem.addEventListener("mouseenter", function (elem) {
      document.querySelector("#circle").style.height = "50px";
      document.querySelector("#circle").style.width = "50px";
      document.querySelector("#page1>#right>#button>h4").style.top = "-100%";
      document.querySelector("#page1>#right>#button>i").style.bottom = "-100%";
      document.querySelector("#page1>#right>#button>h3").style.top = "24%";
      document.querySelector("#page1>#right>#button>#down-arrow2").style.top =
        "26%";
      document.querySelector("#page1>#right>#button>#overlay").style.width =
        "220px";
    });
    elem.addEventListener("mouseleave", function (elem) {
      document.querySelector("#circle").style.height = "15px";
      document.querySelector("#circle").style.width = "15px";
      document.querySelector("#page1>#right>#button>h4").style.top = "24%";
      document.querySelector("#page1>#right>#button>i").style.bottom = "20%";
      document.querySelector("#page1>#right>#button>h3").style.top = "100%";
      document.querySelector("#page1>#right>#button>#down-arrow2").style.top =
        "-24%";
      document.querySelector("#page1>#right>#button>#overlay").style.width =
        "0px";
    });
  });
  var button3 = document.querySelectorAll("#page2>#button");
  button3.forEach(function (elem) {
    elem.addEventListener("mouseenter", function (elem) {
      document.querySelector("#page2>#button>h4").style.top = "-50%";
      document.querySelector("#page2>#button>i").style.bottom = "-50%";
      document.querySelector("#page2>#button>h3").style.top = "24%";
      document.querySelector("#page2>#button>#down-arrow2").style.top = "26%";
      document.querySelector("#page2>#button>#overlay").style.width = "215px";
      document.querySelector("#circle").style.height = "50px";
      document.querySelector("#circle").style.width = "50px";
    });
    elem.addEventListener("mouseleave", function (elem) {
      document.querySelector("#page2>#button>h4").style.top = "50%";
      document.querySelector("#page2>#button>i").style.bottom = "20%";
      document.querySelector("#page2>#button>h3").style.top = "100%";
      document.querySelector("#page2>#button>#down-arrow2").style.top = "-40%";
      document.querySelector("#page2>#button>#overlay").style.width = "0px";
      document.querySelector("#circle").style.height = "15px";
      document.querySelector("#circle").style.width = "15px";
    });
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
show();

// document.querySelectorAll("#text-image .elem").addEventListener("mousemove",function(elem){
//   document.querySelector("#text-image .elem").style.backgroundColor = "red";
// })

const alt = document.querySelectorAll("#text-image>.elem");
alt.forEach(function (elem) {
  elem.addEventListener("mouseenter", function (elem) {
    document.querySelector("#text-image>.elem>#img");
    this.children[1].style.opacity = 1;
    this.children[0].style.transform = "translateX(4%)";
  });
  elem.addEventListener("mouseleave", function (elem) {
    document.querySelector("#text-image>.elem>#img");
    this.children[1].style.opacity = 0;
    this.children[0].style.transform = "translateX(0%)";
  });
});

var image = document.querySelectorAll("#page1>#left>#img");
image.forEach(function (elem) {
  elem.addEventListener("mouseenter", function (elem) {
    document.querySelector(
      "#page1>#left>#img>img"
    ).style.transform = `scale(1.5)`;
    document.querySelector("#circle").style.height = "50px";
    document.querySelector("#circle").style.width = "50px";
  });
  elem.addEventListener("mouseleave", function (elem) {
    document.querySelector(
      "#page1>#left>#img>img"
    ).style.transform = `scale(1)`;
    document.querySelector("#circle").style.height = "15px";
    document.querySelector("#circle").style.width = "15px";
  });
});
var image2 = document.querySelectorAll("#page1>#left>#img2");
image2.forEach(function (elem) {
  elem.addEventListener("mouseenter", function (elem) {
    document.querySelector(
      "#page1>#left>#img2>img"
    ).style.transform = `scale(1.5)`;
    document.querySelector("#circle").style.height = "50px";
    document.querySelector("#circle").style.width = "50px";
  });
  elem.addEventListener("mouseleave", function (elem) {
    document.querySelector(
      "#page1>#left>#img2>img"
    ).style.transform = `scale(1)`;
    document.querySelector("#circle").style.height = "15px";
    document.querySelector("#circle").style.width = "15px";
  });
});
var image3 = document.querySelectorAll("#page1>#left>#img3");
image3.forEach(function (elem) {
  elem.addEventListener("mouseenter", function (elem) {
    document.querySelector(
      "#page1>#left>#img3>img"
    ).style.transform = `scale(1.5)`;
    document.querySelector("#circle").style.height = "50px";
    document.querySelector("#circle").style.width = "50px";
  });
  elem.addEventListener("mouseleave", function (elem) {
    document.querySelector(
      "#page1>#left>#img3>img"
    ).style.transform = `scale(1)`;
    document.querySelector("#circle").style.height = "15px";
    document.querySelector("#circle").style.width = "15px";
  });
});
var image4 = document.querySelectorAll("#page1>#left>#img4");
image4.forEach(function (elem) {
  elem.addEventListener("mouseenter", function (elem) {
    document.querySelector(
      "#page1>#left>#img4>img"
    ).style.transform = `scale(1.5)`;
    document.querySelector("#circle").style.height = "50px";
    document.querySelector("#circle").style.width = "50px";
  });
  elem.addEventListener("mouseleave", function (elem) {
    document.querySelector(
      "#page1>#left>#img4>img"
    ).style.transform = `scale(1)`;
    document.querySelector("#circle").style.height = "15px";
    document.querySelector("#circle").style.width = "15px";
  });
});
var image5 = document.querySelectorAll("#page1>#left>#img5");
image5.forEach(function (elem) {
  elem.addEventListener("mouseenter", function (elem) {
    document.querySelector(
      "#page1>#left>#img5>img"
    ).style.transform = `scale(1.5)`;
    document.querySelector("#circle").style.height = "50px";
    document.querySelector("#circle").style.width = "50px";
  });
  elem.addEventListener("mouseleave", function (elem) {
    document.querySelector(
      "#page1>#left>#img5>img"
    ).style.transform = `scale(1)`;
    document.querySelector("#circle").style.height = "15px";
    document.querySelector("#circle").style.width = "15px";
  });
});


var tll1 = gsap.timeline();

tll1.from("#page1>#nav>h6", {
  y: 30,
  opacity: 0,
  duration: 1,
  delay: 4,
  })
  .from("#page1>#nav>#h4", {
  y: 30,
  opacity: 0,
  duration: 1,
  // delay: 3.2,
  })
  .from("#page1>#nav>#hh4", {
  y: 30,
  opacity: 0,
  duration: 1,
  // delay: 3.6,
  })
  .from("#page1>#nav>#button", {
  y: 30,
  opacity: 0,
  duration: 1,
  // delay: 3.8,
  })

gsap.from("#page1>#right>#h1", {
  y: 30,
  opacity: 0,
  duration: 1,
  delay: 4,
  })
gsap.from("#page1>#right>#p", {
  y: 20,
  opacity: 0,
  duration: 1,
  delay: 4.4,
  })
gsap.from("#page1>#right>#button", {
  y: 20,
  opacity: 0,
  duration: 1,
  delay: 4.7,
  })

gsap.from("#page1>#downnav>#contacts>h4", {
    y: 30,
    opacity: 0,
    duration: 1,
    delay: 4.4,
  })
gsap.from("#page1>#downnav>#idnum>h4", {
      y: 30,
      opacity: 0,
      duration: 1,
      delay:4.8,
    })
gsap.from("#page1>#downnav>#year", {
      y: 30,
      opacity: 0,
      duration: 1,
      delay:5.2,
    });
  
gsap.to("#page1>#left>#img", {
  scale: 1,
  duration: 1,
  delay: 3.2,
  })
gsap.to("#page1>#left>#img2", {
  scale: 1,
  duration: 1,
  delay: 3.3,
  })
gsap.to("#page1>#left>#img3", {
  scale: 1,
  duration: 1,
  delay: 3.6,
  })
gsap.to("#page1>#left>#img4", {
  scale: 1,
  duration: 1,
  delay: 3.9,
  })
gsap.to("#page1>#left>#img5", {
  scale: 1,
  duration: 1,
  delay: 4.2,
  });


// var tl = gsap.timeline();
// tl
gsap.from("#page2>#h4", {
  scrollTrigger: {
    trigger: "#page2>#h4",
    scroller: "#main",
    // markers:true,
    start: "top 95%",
    end: "top 94%",
    scrub: 2,
  },
  x: -40,
  opacity: 0,
  duration: 1,
  delay: 1,
});
gsap.from("#page2>#txt>h1", {
  scrollTrigger: {
    trigger: "#page2>#txt>h1",
    scroller: "#main",
    // markers:true,
    start: "top 80%",
    end: "top 75%",
    scrub: 3,
  },
  y: 50,
  opacity: 0,
  duration: 2,
  delay: 2,
});
gsap.to("#page2>#img", {
  scrollTrigger: {
    trigger: "#page2>#img",
    scroller: "#main",
    // markers:true,
    start: "top 95%",
    end: "top 90%",
    scrub: 2,
  },
  scale: 1.2,
  duration: 1,
  delay: 1.3,
});

var tl = gsap.timeline();

tl.from("#page2>#webdetails>#web>h3", {
  scrollTrigger: {
    trigger: "#page2>#webdetails>#web>h3",
    scroller: "#main",
    start: "top 95%",
    end: "top 90%",
    scrub: 3,
  },
  y: 30,
  duration: 1,
  opacity: 0,
  delay: 2,
})
  .from(
    "#page2>#webdetails>#web>h5",
    {
      scrollTrigger: {
        trigger: "#page2>#webdetails>#web>h5",
        scroller: "#main",
        start: "top 95%",
        end: "top 90%",
        scrub: 3,
      },
      y: 30,
      duration: 1,
      opacity: 0,
      delay: 2,
    },
    "-=.8"
  )
  .from(
    "#page2>#webdetails>#art>h3",
    {
      scrollTrigger: {
        trigger: "#page2>#webdetails>#web>h3",
        scroller: "#main",
        start: "top 95%",
        end: "top 90%",
        scrub: 3,
      },
      y: 30,
      duration: 1,
      opacity: 0,
      delay: 2.2,
    },
    "-=.9"
  )
  .from(
    "#page2>#webdetails>#art>h5",
    {
      scrollTrigger: {
        trigger: "#page2>#webdetails>#art>h5",
        scroller: "#main",
        start: "top 95%",
        end: "top 90%",
        scrub: 3,
      },
      y: 30,
      duration: 1,
      opacity: 0,
      delay: 2.2,
    },
    "-=.9"
  )
  .from(
    "#page2>#webdetails>#vsdesign>h3",
    {
      scrollTrigger: {
        trigger: "#page2>#webdetails>#art>h5",
        scroller: "#main",
        start: "top 95%",
        end: "top 90%",
        scrub: 3,
      },
      y: 30,
      duration: 1,
      opacity: 0,
      delay: 2.4,
    },
    "-=.9"
  )
  .from(
    "#page2>#webdetails>#vsdesign>h5",
    {
      scrollTrigger: {
        trigger: "#page2>#webdetails>#art>h5",
        scroller: "#main",
        start: "top 95%",
        end: "top 90%",
        scrub: 3,
      },
      y: 30,
      duration: 1,
      opacity: 0,
      delay: 2.4,
    },
    "-=.9"
  )
  .from(
    "#page2>#button",
    {
      scrollTrigger: {
        trigger: "#page2>#button",
        scroller: "#main",
        start: "top 95%",
        end: "top 90%",
        scrub: 3,
      },
      y: 30,
      duration: 1,
      opacity: 0,
      delay: 2.4,
    },
    "-=.9"
  );
gsap.from("#page4>#play-experiments>h1", {
  scrollTrigger: {
    trigger: "#page4>#play-experiments>h1",
    scroller: "#main",
    start: "top 80%",
    end: "top 75%",
    scrub: 3,
  },
  stagger: 2,
  y: 40,
  duration: 1,
  opacity: 0,
  delay: 2,
  ease: Expo.easeInOut,
  onStart: function () {
    $("#page4>#play-experiments>h1").textillate({ in: { effect: "rollIn" } });
  },
});
gsap.to("#page4>#play-experiments>h3", {
  scrollTrigger: {
    trigger: "#page4>#play-experiments>h3",
    scroller: "#main",
    start: "top 80%",
    end: "top 75%",
    scrub: 2,
  },
  scale: 1,
  duration: 1,
  opacity: 1,
  delay: 2,
});

var tl2 = gsap.timeline();
tl2
  .from("#page4>#text-image>.elem:nth-child(1)>h2", {
    scrollTrigger: {
      trigger: "#page4>#text-image>.elem:nth-child(1)>h2",
      scroller: "#main",
      start: "top 85%",
      end: "top 95%",
      scrub: 2,
    },
    x: -100,
    opacity: 0,
    duration: 1,
    delay: 3,
  })
  // .to("#page4>#text-image>.elem:nth-child(1)",{
  //   scrollTrigger:{
  //     trigger:"#page4>#text-image>.elem:nth-child(1)",
  //     scroller:"#main",
  //     start:"top 100%",
  //     end:"top 95%",
  //     scrub:2,
  //   },
  //   width:"95vw",
  //   opacity:1,
  //   duration:1,
  //   delay:3,
  // })
  .from("#page4>#text-image>.elem:nth-child(2)>h2", {
    scrollTrigger: {
      trigger: "#page4>#text-image>.elem:nth-child(2)>h2",
      scroller: "#main",
      start: "top 85%",
      end: "top 95%",
      scrub: 2,
    },
    x: -100,
    opacity: 0,
    duration: 1,
    delay: 3.2,
  })
  .from("#page4>#text-image>.elem:nth-child(3)>h2", {
    scrollTrigger: {
      trigger: "#page4>#text-image>.elem:nth-child(3)>h2",
      scroller: "#main",
      start: "top 85%",
      end: "top 95%",
      scrub: 2,
    },
    x: -100,
    opacity: 0,
    duration: 1,
    delay: 3.4,
  })
  .from("#page4>#text-image>.elem:nth-child(4)>h2", {
    scrollTrigger: {
      trigger: "#page4>#text-image>.elem:nth-child(4)>h2",
      scroller: "#main",
      start: "top 85%",
      end: "top 95%",
      scrub: 2,
    },
    x: -100,
    opacity: 0,
    duration: 1,
    delay: 3.6,
  })
  .from("#page4>#text-image>.elem:nth-child(5)>h2", {
    scrollTrigger: {
      trigger: "#page4>#text-image>.elem:nth-child(5)>h2",
      scroller: "#main",
      start: "top 85%",
      end: "top 95%",
      scrub: 2,
    },
    x: -100,
    opacity: 0,
    duration: 1,
    delay: 3.8,
  })
  .from("#page4>#text-image>.elem:nth-child(6)>h2", {
    scrollTrigger: {
      trigger: "#page4>#text-image>.elem:nth-child(6)>h2",
      scroller: "#main",
      start: "top 85%",
      end: "top 95%",
      scrub: 2,
    },
    x: -100,
    opacity: 0,
    duration: 1,
    delay: 4,
  })
  .from("#page4>#text-image>.elem:nth-child(7)>h2", {
    scrollTrigger: {
      trigger: "#page4>#text-image>.elem:nth-child(7)>h2",
      scroller: "#main",
      start: "top 85%",
      end: "top 95%",
      scrub: 2,
    },
    x: -100,
    opacity: 0,
    duration: 1,
    delay: 4.2,
  })
  .from("#page4>#text-image>.elem:nth-child(8)>h2", {
    scrollTrigger: {
      trigger: "#page4>#text-image>.elem:nth-child(8)>h2",
      scroller: "#main",
      start: "top 85%",
      end: "top 95%",
      scrub: 2,
    },
    x: -100,
    opacity: 0,
    duration: 1,
    delay: 4.4,
  });
gsap.to("#page6>#left>h1", {
  scrollTrigger: {
    trigger: "#page6>#left>h1",
    scroller: "#main",
    start: "top 100%",
    end: "top 95%",
    scrub: 3,
  },
  scale: 1,
  duration: 1,
  opacity: 1,
  delay: 2,
});
var tl3 = gsap.timeline();
tl3
  .from("#page6>#right>h1", {
    scrollTrigger: {
      trigger: "#page6>#right>h1",
      scroller: "#main",
      // markers:true,
      start: "top 80%",
      end: "top 85%",
      scrub: 2,
    },
    y: 50,
    duration: 1,
    opacity: 0,
    delay: 2,
  })
  .from("#page6>#right>#clients", {
    scrollTrigger: {
      trigger: "#page6>#right>#clients",
      scroller: "#main",
      // markers:true,
      start: "top 95%",
      end: "top 85%",
      scrub: 2,
    },
    y: 30,
    duration: 1,
    opacity: 0,
    delay: 2,
  })
  .from("#page6>#right>#clients-name1>h3", {
    scrollTrigger: {
      trigger: "#page6>#right>#clients-name1>h3",
      scroller: "#main",
      start: "top 95%",
      end: "top 85%",
      scrub: 2,
    },
    y: 20,
    duration: 1,
    opacity: 0,
    delay: 2.2,
    rotate: 5,
  })
  .from("#page6>#right>#clients-name2>h3", {
    scrollTrigger: {
      trigger: "#page6>#right>#clients-name2>h3",
      scroller: "#main",
      start: "top 95%",
      end: "top 85%",
      scrub: 2,
    },
    y: 20,
    duration: 1,
    opacity: 0,
    delay: 2.3,
    rotate: 5,
  })
  .from("#page6>#right>#clients-name3>h3", {
    scrollTrigger: {
      trigger: "#page6>#right>#clients-name3>h3",
      scroller: "#main",
      start: "top 95%",
      end: "top 85%",
      scrub: 2,
    },
    y: 20,
    duration: 1,
    opacity: 0,
    delay: 2.4,
    rotate: 5,
  })
  .from("#page6>#approach>#left>button", {
    scrollTrigger: {
      trigger: "#page6>#approach>#left>button",
      scroller: "#main",
      start: "top 95%",
      end: "top 85%",
      scrub: 2,
    },
    y: 20,
    duration: 1,
    opacity: 0,
    delay: 2,
    rotate: 5,
  });
gsap.from("#page6>#approach>#right>#mob-web>h1", {
  scrollTrigger: {
    trigger: "#page6>#approach>#right>#mob-web>h1",
    scroller: "#main",
    start: "top 90%",
    end: "top 80%",
    scrub: 2,
  },
  y: 20,
  duration: 1,
  opacity: 0,
  delay: 2,
  rotate: 5,
});
gsap.from("#page6>#approach>#right>#mob-web>h4", {
  scrollTrigger: {
    trigger: "#page6>#approach>#right>#mob-web>h4",
    scroller: "#main",
    start: "top 90%",
    end: "top 80%",
    scrub: 2,
  },
  y: 20,
  duration: 1,
  opacity: 0,
  delay: 2,
  rotate: 5,
});
gsap.from("#page6>#approach>#right>#art>h1", {
  scrollTrigger: {
    trigger: "#page6>#approach>#right>#art>h1",
    scroller: "#main",
    start: "top 90%",
    end: "top 80%",
    scrub: 2,
  },
  y: 20,
  duration: 1,
  opacity: 0,
  delay: 3,
  rotate: 5,
});
gsap.from("#page6>#approach>#right>#art>h4", {
  scrollTrigger: {
    trigger: "#page6>#approach>#right>#art>h4",
    scroller: "#main",
    start: "top 90%",
    end: "top 80%",
    scrub: 2,
  },
  y: 20,
  duration: 1,
  opacity: 0,
  delay: 3,
  rotate: 5,
});
gsap.from("#page6>#approach>#right>#vs-design>h1", {
  scrollTrigger: {
    trigger: "#page6>#approach>#right>#vs-design>h1",
    scroller: "#main",
    start: "top 90%",
    end: "top 80%",
    scrub: 2,
  },
  y: 20,
  duration: 1,
  opacity: 0,
  delay: 4,
  rotate: 5,
});
gsap.from("#page6>#approach>#right>#vs-design>h4", {
  scrollTrigger: {
    trigger: "#page6>#approach>#right>#vs-design>h4",
    scroller: "#main",
    start: "top 90%",
    end: "top 80%",
    scrub: 2,
  },
  y: 20,
  duration: 1,
  opacity: 0,
  delay: 4,
  rotate: 5,
});
gsap.from("#page6>#experienc-education>#left>button", {
  scrollTrigger: {
    trigger: "#page6>#experienc-education>#left>button",
    scroller: "#main",
    start: "top 95%",
    end: "top 85%",
    scrub: 2,
  },
  y: 20,
  duration: 1,
  opacity: 0,
  delay: 2.2,
  rotate: 5,
});
// gsap.from("#page6>#experinec-education>#right>.education",{
//   scrollTrigger:{
//     scroller:"#page6>#experienc-education>#right>.education>",
//     trigger:"#main",
//     start:"top 90%",
//     end:"top 80%",
//     scrub:2,
//   },
//   y:20,
//   duration:1,
//   opacity:0,
//   delay:2,
//   rotate:5,
// })
tl3
  .from("#page6>#experienc-education>#right>.education:nth-child(1)>#date>h2", {
    scrollTrigger: {
      trigger:
        "#page6>#experienc-education>#right>.education:nth-child(1)>#date>h2",
      scroller: "#main",
      start: "top 95%",
      end: "top 85%",
      scrub: 2,
    },
    y: 20,
    duration: 1,
    opacity: 0,
    delay: 2.2,
    rotate: 5,
  })
  .from(
    "#page6>#experienc-education>#right>.education:nth-child(1)>#date>#line",
    {
      scrollTrigger: {
        trigger:
          "#page6>#experienc-education>#right>.education:nth-child(1)>#date>#line",
        scroller: "#main",
        start: "top 95%",
        end: "top 85%",
        scrub: 2,
      },
      y: 20,
      duration: 1,
      opacity: 0,
      delay: 2.2,
      rotate: 5,
    }
  )
  .from("#page6>#experienc-education>#right>.education:nth-child(2)>#date>h2", {
    scrollTrigger: {
      trigger:
        "#page6>#experienc-education>#right>.education:nth-child(2)>#date>h2",
      scroller: "#main",
      start: "top 95%",
      end: "top 85%",
      scrub: 2,
    },
    y: 20,
    duration: 1,
    opacity: 0,
    delay: 2.2,
    rotate: 5,
  })
  .from(
    "#page6>#experienc-education>#right>.education:nth-child(2)>#date>#line",
    {
      scrollTrigger: {
        trigger:
          "#page6>#experienc-education>#right>.education:nth-child(2)>#date>#line",
        scroller: "#main",
        start: "top 95%",
        end: "top 85%",
        scrub: 2,
      },
      y: 20,
      duration: 1,
      opacity: 0,
      delay: 2.2,
      rotate: 5,
    }
  )
  .from("#page6>#experienc-education>#right>.education:nth-child(3)>#date>h2", {
    scrollTrigger: {
      trigger:
        "#page6>#experienc-education>#right>.education:nth-child(3)>#date>h2",
      scroller: "#main",
      start: "top 95%",
      end: "top 85%",
      scrub: 2,
    },
    y: 20,
    duration: 1,
    opacity: 0,
    delay: 2.2,
    rotate: 5,
  })
  .from(
    "#page6>#experienc-education>#right>.education:nth-child(3)>#date>#line",
    {
      scrollTrigger: {
        trigger:
          "#page6>#experienc-education>#right>.education:nth-child(3)>#date>#line",
        scroller: "#main",
        start: "top 95%",
        end: "top 85%",
        scrub: 2,
      },
      y: 20,
      duration: 1,
      opacity: 0,
      delay: 2.2,
      rotate: 5,
    }
  )
  .from("#page6>#experienc-education>#right>.education:nth-child(1)>h2", {
    scrollTrigger: {
      trigger: "#page6>#experienc-education>#right>.education:nth-child(1)>h2",
      scroller: "#main",
      start: "top 95%",
      end: "top 85%",
      scrub: 2,
    },
    y: 20,
    duration: 1,
    opacity: 0,
    delay: 2.2,
    rotate: 5,
  })
  .from("#page6>#experienc-education>#right>.education:nth-child(2)>h2", {
    scrollTrigger: {
      trigger: "#page6>#experienc-education>#right>.education:nth-child(2)>h2",
      scroller: "#main",
      start: "top 95%",
      end: "top 85%",
      scrub: 2,
    },
    y: 20,
    duration: 1,
    opacity: 0,
    delay: 2.2,
    rotate: 5,
  })
  .from("#page6>#experienc-education>#right>.education:nth-child(3)>h2", {
    scrollTrigger: {
      trigger: "#page6>#experienc-education>#right>.education:nth-child(3)>h2",
      scroller: "#main",
      start: "top 95%",
      end: "top 85%",
      scrub: 2,
    },
    y: 20,
    duration: 1,
    opacity: 0,
    delay: 2.2,
    rotate: 5,
  })

  .from("#page6>#experienc-education>#right>.education:nth-child(4)>#date>h2", {
    scrollTrigger: {
      trigger:
        "#page6>#experienc-education>#right>.education:nth-child(4)>#date>h2",
      scroller: "#main",
      start: "top 95%",
      end: "top 85%",
      scrub: 2,
    },
    y: 20,
    duration: 1,
    opacity: 0,
    delay: 2.2,
    rotate: 5,
  })
  .from(
    "#page6>#experienc-education>#right>.education:nth-child(4)>#date>#line",
    {
      scrollTrigger: {
        trigger:
          "#page6>#experienc-education>#right>.education:nth-child(4)>#date>#line",
        scroller: "#main",
        start: "top 95%",
        end: "top 85%",
        scrub: 2,
      },
      y: 20,
      duration: 1,
      opacity: 0,
      delay: 2.2,
      rotate: 5,
    }
  )
  .from("#page6>#experienc-education>#right>.education:nth-child(5)>#date>h2", {
    scrollTrigger: {
      trigger:
        "#page6>#experienc-education>#right>.education:nth-child(5)>#date>h2",
      scroller: "#main",
      start: "top 95%",
      end: "top 85%",
      scrub: 2,
    },
    y: 20,
    duration: 1,
    opacity: 0,
    delay: 2.2,
    rotate: 5,
  })
  .from(
    "#page6>#experienc-education>#right>.education:nth-child(5)>#date>#line",
    {
      scrollTrigger: {
        trigger:
          "#page6>#experienc-education>#right>.education:nth-child(5)>#date>#line",
        scroller: "#main",
        start: "top 95%",
        end: "top 85%",
        scrub: 2,
      },
      y: 20,
      duration: 1,
      opacity: 0,
      delay: 2.2,
      rotate: 5,
    }
  )
  .from("#page6>#experienc-education>#right>.education:nth-child(6)>#date>h2", {
    scrollTrigger: {
      trigger:
        "#page6>#experienc-education>#right>.education:nth-child(6)>#date>h2",
      scroller: "#main",
      start: "top 95%",
      end: "top 85%",
      scrub: 2,
    },
    y: 20,
    duration: 1,
    opacity: 0,
    delay: 2.2,
    rotate: 5,
  })
  .from(
    "#page6>#experienc-education>#right>.education:nth-child(6)>#date>#line",
    {
      scrollTrigger: {
        trigger:
          "#page6>#experienc-education>#right>.education:nth-child(6)>#date>#line",
        scroller: "#main",
        start: "top 95%",
        end: "top 85%",
        scrub: 2,
      },
      y: 20,
      duration: 1,
      opacity: 0,
      delay: 2.2,
      rotate: 5,
    }
  )
  .from("#page6>#experienc-education>#right>.education:nth-child(4)>h2", {
    scrollTrigger: {
      trigger: "#page6>#experienc-education>#right>.education:nth-child(4)>h2",
      scroller: "#main",
      start: "top 95%",
      end: "top 85%",
      scrub: 2,
    },
    y: 20,
    duration: 1,
    opacity: 0,
    delay: 2.2,
    rotate: 5,
  })
  .from("#page6>#experienc-education>#right>.education:nth-child(5)>h2", {
    scrollTrigger: {
      trigger: "#page6>#experienc-education>#right>.education:nth-child(5)>h2",
      scroller: "#main",
      start: "top 95%",
      end: "top 85%",
      scrub: 2,
    },
    y: 20,
    duration: 1,
    opacity: 0,
    delay: 2.2,
    rotate: 5,
  })
  .from("#page6>#experienc-education>#right>.education:nth-child(6)>h2", {
    scrollTrigger: {
      trigger: "#page6>#experienc-education>#right>.education:nth-child(6)>h2",
      scroller: "#main",
      start: "top 95%",
      end: "top 85%",
      scrub: 2,
    },
    y: 20,
    duration: 1,
    opacity: 0,
    delay: 2.2,
    rotate: 5,
  })

  .from("#page6>#experienc-education>#right>.education:nth-child(7)>#date>h2", {
    scrollTrigger: {
      trigger:
        "#page6>#experienc-education>#right>.education:nth-child(7)>#date>h2",
      scroller: "#main",
      start: "top 95%",
      end: "top 85%",
      scrub: 2,
    },
    y: 20,
    duration: 1,
    opacity: 0,
    delay: 2.2,
    rotate: 5,
  })
  .from(
    "#page6>#experienc-education>#right>.education:nth-child(7)>#date>#line",
    {
      scrollTrigger: {
        trigger:
          "#page6>#experienc-education>#right>.education:nth-child(7)>#date>#line",
        scroller: "#main",
        start: "top 95%",
        end: "top 85%",
        scrub: 2,
      },
      y: 20,
      duration: 1,
      opacity: 0,
      delay: 2.2,
      rotate: 5,
    }
  )
  .from("#page6>#experienc-education>#right>.education:nth-child(8)>#date>h2", {
    scrollTrigger: {
      trigger:
        "#page6>#experienc-education>#right>.education:nth-child(8)>#date>h2",
      scroller: "#main",
      start: "top 95%",
      end: "top 85%",
      scrub: 2,
    },
    y: 20,
    duration: 1,
    opacity: 0,
    delay: 2.2,
    rotate: 5,
  })
  .from(
    "#page6>#experienc-education>#right>.education:nth-child(8)>#date>#line",
    {
      scrollTrigger: {
        trigger:
          "#page6>#experienc-education>#right>.education:nth-child(8)>#date>#line",
        scroller: "#main",
        start: "top 95%",
        end: "top 85%",
        scrub: 2,
      },
      y: 20,
      duration: 1,
      opacity: 0,
      delay: 2.2,
      rotate: 5,
    }
  )
  .from("#page6>#experienc-education>#right>.education:nth-child(9)>#date>h2", {
    scrollTrigger: {
      trigger:
        "#page6>#experienc-education>#right>.education:nth-child(9)>#date>h2",
      scroller: "#main",
      start: "top 95%",
      end: "top 85%",
      scrub: 2,
    },
    y: 20,
    duration: 1,
    opacity: 0,
    delay: 2.2,
    rotate: 5,
  })
  .from(
    "#page6>#experienc-education>#right>.education:nth-child(9)>#date>#line",
    {
      scrollTrigger: {
        trigger:
          "#page6>#experienc-education>#right>.education:nth-child(9)>#date>#line",
        scroller: "#main",
        start: "top 95%",
        end: "top 85%",
        scrub: 2,
      },
      y: 20,
      duration: 1,
      opacity: 0,
      delay: 2.2,
      rotate: 5,
    }
  )
  .from("#page6>#experienc-education>#right>.education:nth-child(7)>h2", {
    scrollTrigger: {
      trigger: "#page6>#experienc-education>#right>.education:nth-child(7)>h2",
      scroller: "#main",
      start: "top 95%",
      end: "top 85%",
      scrub: 2,
    },
    y: 20,
    duration: 1,
    opacity: 0,
    delay: 2.2,
    rotate: 5,
  })
  .from("#page6>#experienc-education>#right>.education:nth-child(8)>h2", {
    scrollTrigger: {
      trigger: "#page6>#experienc-education>#right>.education:nth-child(8)>h2",
      scroller: "#main",
      start: "top 95%",
      end: "top 85%",
      scrub: 2,
    },
    y: 20,
    duration: 1,
    opacity: 0,
    delay: 2.2,
    rotate: 5,
  })
  .from("#page6>#experienc-education>#right>.education:nth-child(9)>h2", {
    scrollTrigger: {
      trigger: "#page6>#experienc-education>#right>.education:nth-child(9)>h2",
      scroller: "#main",
      start: "top 95%",
      end: "top 85%",
      scrub: 2,
    },
    y: 20,
    duration: 1,
    opacity: 0,
    delay: 2.2,
    rotate: 5,
  });

gsap.from("#page6>#awards-recognition>#left>button", {
  scrollTrigger: {
    trigger: "#page6>#awards-recognition>#left>button",
    scroller: "#main",
    start: "top 95%",
    end: "top 85%",
    scrub: 2,
  },
  y: 20,
  duration: 1,
  opacity: 0,
  delay: 2.2,
  rotate: 5,
});
gsap.from(
  "#page6>#awards-recognition>#right>.portfolio:nth-child(1)>h2:nth-child(1)",
  {
    scrollTrigger: {
      trigger:
        "#page6>#awards-recognition>#right>.portfolio:nth-child(1)>h2:nth-child(1)",
      scroller: "#main",
      start: "top 95%",
      end: "top 85%",
      scrub: 2,
    },
    y: 20,
    duration: 1,
    opacity: 0,
    delay: 2.2,
    rotate: 5,
  }
);
gsap.from(
  "#page6>#awards-recognition>#right>.portfolio:nth-child(2)>h2:nth-child(1)",
  {
    scrollTrigger: {
      trigger:
        "#page6>#awards-recognition>#right>.portfolio:nth-child(2)>h2:nth-child(1)",
      scroller: "#main",
      start: "top 95%",
      end: "top 85%",
      scrub: 2,
    },
    y: 20,
    duration: 1,
    opacity: 0,
    delay: 2.2,
    rotate: 5,
  }
);
gsap.from(
  "#page6>#awards-recognition>#right>.portfolio:nth-child(3)>h2:nth-child(1)",
  {
    scrollTrigger: {
      trigger:
        "#page6>#awards-recognition>#right>.portfolio:nth-child(3)>h2:nth-child(1)",
      scroller: "#main",
      start: "top 95%",
      end: "top 85%",
      scrub: 2,
    },
    y: 20,
    duration: 1,
    opacity: 0,
    delay: 2.2,
    rotate: 5,
  }
);
gsap.from(
  "#page6>#awards-recognition>#right>.portfolio:nth-child(1)>h2:nth-child(2)",
  {
    scrollTrigger: {
      trigger:
        "#page6>#awards-recognition>#right>.portfolio:nth-child(1)>h2:nth-child(2)",
      scroller: "#main",
      start: "top 95%",
      end: "top 85%",
      scrub: 2,
    },
    y: 20,
    duration: 1,
    opacity: 0,
    delay: 2.2,
    rotate: 5,
  }
);
gsap.from(
  "#page6>#awards-recognition>#right>.portfolio:nth-child(2)>h2:nth-child(2)",
  {
    scrollTrigger: {
      trigger:
        "#page6>#awards-recognition>#right>.portfolio:nth-child(2)>h2:nth-child(2)",
      scroller: "#main",
      start: "top 95%",
      end: "top 85%",
      scrub: 2,
    },
    y: 20,
    duration: 1,
    opacity: 0,
    delay: 2.2,
    rotate: 5,
  }
);
gsap.from(
  "#page6>#awards-recognition>#right>.portfolio:nth-child(3)>h2:nth-child(2)",
  {
    scrollTrigger: {
      trigger:
        "#page6>#awards-recognition>#right>.portfolio:nth-child(3)>h2:nth-child(2)",
      scroller: "#main",
      start: "top 95%",
      end: "top 85%",
      scrub: 2,
    },
    y: 20,
    duration: 1,
    opacity: 0,
    delay: 2.2,
    rotate: 5,
  }
);
gsap.from(
  "#page6>#awards-recognition>#right>.portfolio:nth-child(1)>h2:nth-child(3)",
  {
    scrollTrigger: {
      trigger:
        "#page6>#awards-recognition>#right>.portfolio:nth-child(1)>h2:nth-child(3)",
      scroller: "#main",
      start: "top 95%",
      end: "top 85%",
      scrub: 2,
    },
    y: 20,
    duration: 1,
    opacity: 0,
    delay: 2.2,
    rotate: 5,
  }
);
gsap.from(
  "#page6>#awards-recognition>#right>.portfolio:nth-child(2)>h2:nth-child(3)",
  {
    scrollTrigger: {
      trigger:
        "#page6>#awards-recognition>#right>.portfolio:nth-child(2)>h2:nth-child(3)",
      scroller: "#main",
      start: "top 95%",
      end: "top 85%",
      scrub: 2,
    },
    y: 20,
    duration: 1,
    opacity: 0,
    delay: 2.2,
    rotate: 5,
  }
);
gsap.from(
  "#page6>#awards-recognition>#right>.portfolio:nth-child(3)>h2:nth-child(3)",
  {
    scrollTrigger: {
      trigger:
        "#page6>#awards-recognition>#right>.portfolio:nth-child(3)>h2:nth-child(3)",
      scroller: "#main",
      start: "top 95%",
      end: "top 85%",
      scrub: 2,
    },
    y: 20,
    duration: 1,
    opacity: 0,
    delay: 2.2,
    rotate: 5,
  }
);
gsap.from(
  "#page6>#awards-recognition>#right>.portfolio:nth-child(1)>h2:nth-child(4)",
  {
    scrollTrigger: {
      trigger:
        "#page6>#awards-recognition>#right>.portfolio:nth-child(1)>h2:nth-child(4)",
      scroller: "#main",
      start: "top 95%",
      end: "top 85%",
      scrub: 2,
    },
    y: 20,
    duration: 1,
    opacity: 0,
    delay: 2.2,
    rotate: 5,
  }
);
gsap.from(
  "#page6>#awards-recognition>#right>.portfolio:nth-child(2)>h2:nth-child(4)",
  {
    scrollTrigger: {
      trigger:
        "#page6>#awards-recognition>#right>.portfolio:nth-child(2)>h2:nth-child(4)",
      scroller: "#main",
      start: "top 95%",
      end: "top 85%",
      scrub: 2,
    },
    y: 20,
    duration: 1,
    opacity: 0,
    delay: 2.2,
    rotate: 5,
  }
);
gsap.from(
  "#page6>#awards-recognition>#right>.portfolio:nth-child(3)>h2:nth-child(4)",
  {
    scrollTrigger: {
      trigger:
        "#page6>#awards-recognition>#right>.portfolio:nth-child(3)>h2:nth-child(4)",
      scroller: "#main",
      start: "top 95%",
      end: "top 85%",
      scrub: 2,
    },
    y: 20,
    duration: 1,
    opacity: 0,
    delay: 2.2,
    rotate: 5,
  }
);

gsap.from(
  "#page6>#awards-recognition>#right>.portfolio:nth-child(1)>h2:nth-child(5)",
  {
    scrollTrigger: {
      trigger:
        "#page6>#awards-recognition>#right>.portfolio:nth-child(1)>h2:nth-child(5)",
      scroller: "#main",
      start: "top 95%",
      end: "top 85%",
      scrub: 2,
    },
    y: 20,
    duration: 1,
    opacity: 0,
    delay: 2.2,
    rotate: 5,
  }
);
gsap.from(
  "#page6>#awards-recognition>#right>.portfolio:nth-child(2)>h2:nth-child(5)",
  {
    scrollTrigger: {
      trigger:
        "#page6>#awards-recognition>#right>.portfolio:nth-child(2)>h2:nth-child(5)",
      scroller: "#main",
      start: "top 95%",
      end: "top 85%",
      scrub: 2,
    },
    y: 20,
    duration: 1,
    opacity: 0,
    delay: 2.2,
    rotate: 5,
  }
);
gsap.from(
  "#page6>#awards-recognition>#right>.portfolio:nth-child(3)>h2:nth-child(5)",
  {
    scrollTrigger: {
      trigger:
        "#page6>#awards-recognition>#right>.portfolio:nth-child(3)>h2:nth-child(5)",
      scroller: "#main",
      start: "top 95%",
      end: "top 85%",
      scrub: 2,
    },
    y: 20,
    duration: 1,
    opacity: 0,
    delay: 2.2,
    rotate: 5,
  }
);
gsap.from(
  "#page6>#awards-recognition>#right>.portfolio:nth-child(1)>h2:nth-child(6)",
  {
    scrollTrigger: {
      trigger:
        "#page6>#awards-recognition>#right>.portfolio:nth-child(1)>h2:nth-child(6)",
      scroller: "#main",
      start: "top 95%",
      end: "top 85%",
      scrub: 2,
    },
    y: 20,
    duration: 1,
    opacity: 0,
    delay: 2.2,
    rotate: 5,
  }
);
gsap.from(
  "#page6>#awards-recognition>#right>.portfolio:nth-child(2)>h2:nth-child(6)",
  {
    scrollTrigger: {
      trigger:
        "#page6>#awards-recognition>#right>.portfolio:nth-child(2)>h2:nth-child(6)",
      scroller: "#main",
      start: "top 95%",
      end: "top 85%",
      scrub: 2,
    },
    y: 20,
    duration: 1,
    opacity: 0,
    delay: 2.2,
    rotate: 5,
  }
);
gsap.from(
  "#page6>#awards-recognition>#right>.portfolio:nth-child(3)>h2:nth-child(6)",
  {
    scrollTrigger: {
      trigger:
        "#page6>#awards-recognition>#right>.portfolio:nth-child(3)>h2:nth-child(6)",
      scroller: "#main",
      start: "top 95%",
      end: "top 85%",
      scrub: 2,
    },
    y: 20,
    duration: 1,
    opacity: 0,
    delay: 2.2,
    rotate: 5,
  }
);
gsap.from(
  "#page6>#awards-recognition>#right>.portfolio:nth-child(1)>h2:nth-child(7)",
  {
    scrollTrigger: {
      trigger:
        "#page6>#awards-recognition>#right>.portfolio:nth-child(1)>h2:nth-child(7)",
      scroller: "#main",
      start: "top 95%",
      end: "top 85%",
      scrub: 2,
    },
    y: 20,
    duration: 1,
    opacity: 0,
    delay: 2.2,
    rotate: 5,
  }
);
gsap.from(
  "#page6>#awards-recognition>#right>.portfolio:nth-child(2)>h2:nth-child(7)",
  {
    scrollTrigger: {
      trigger:
        "#page6>#awards-recognition>#right>.portfolio:nth-child(2)>h2:nth-child(7)",
      scroller: "#main",
      start: "top 95%",
      end: "top 85%",
      scrub: 2,
    },
    y: 20,
    duration: 1,
    opacity: 0,
    delay: 2.2,
    rotate: 5,
  }
);
gsap.from(
  "#page6>#awards-recognition>#right>.portfolio:nth-child(3)>h2:nth-child(7)",
  {
    scrollTrigger: {
      trigger:
        "#page6>#awards-recognition>#right>.portfolio:nth-child(3)>h2:nth-child(7)",
      scroller: "#main",
      start: "top 95%",
      end: "top 85%",
      scrub: 2,
    },
    y: 20,
    duration: 1,
    opacity: 0,
    delay: 2.2,
    rotate: 5,
  }
);
