var disp= document.getElementById("hidden");
document.getElementById("filter").onclick = function() {   
    if (disp.style.display === "none") {
        disp.style.display = "block";
    } else {
        disp.style.display = "none";
    }
};
document.getElementById("filter").addEventListener('mouseleave', function() {
    disp.style.display = 'none';
});
disp.addEventListener('mouseleave', function() {
    disp.style.display = 'none';
});

document.getElementById("btn1").onclick = function() {
    var div1= document.getElementById("div1");
    if (div1.style.display === "none") {
        div1.style.display = "block";
    } else {
        div1.style.display = "none";
    }
};
document.getElementById("btn1").addEventListener('mouseleave', function() {
    div1.style.display = 'none';
});
div1.addEventListener('mouseleave', function() {
    div1.style.display = 'none';
});


document.getElementById("btn2").onclick = function() {
    var div2= document.getElementById("div2");
    if (div2.style.display === "none") {
        div2.style.display = "block";
    } else {
        div2.style.display = "none";
    }
};
document.getElementById("btn2").addEventListener('mouseleave', function() {
    div2.style.display = 'none';
});
div2.addEventListener('mouseleave', function() {
    div2.style.display = 'none';
});


document.getElementById("btn3").onclick = function() {
    var div3= document.getElementById("div3");
    if (div3.style.display === "none") {
        div3.style.display = "block";
    } else {
        div3.style.display = "none";
    }
};
document.getElementById("btn3").addEventListener('mouseleave', function() {
    div3.style.display = 'none';
});
div3.addEventListener('mouseleave', function() {
    div3.style.display = 'none';
});


document.getElementById("btn4").onclick = function() {
    var div4= document.getElementById("div4");
    if (div4.style.display === "none") {
        div4.style.display = "block";
    } else {
        div4.style.display = "none";
    }
};
document.getElementById("btn4").addEventListener('mouseleave', function() {
    div4.style.display = 'none';
});
div4.addEventListener('mouseleave', function() {
    div4.style.display = 'none';
});


document.getElementById("btn5").onclick = function() {
    var div5= document.getElementById("div5");
    if (div5.style.display === "none") {
        div5.style.display = "block";
    } else {
        div5.style.display = "none";
    }
};
document.getElementById("btn5").addEventListener('mouseleave', function() {
    div5.style.display = 'none';
});
div5.addEventListener('mouseleave', function() {
    div5.style.display = 'none';
})


var div6= document.getElementById("div6");
document.getElementById("btn6").onclick = function() {
    if (div6.style.display === "none") {
        div6.style.display = "block";
    } else {
        div6.style.display = "none";
    }
};
document.getElementById("btn6").addEventListener('mouseleave', function() {
    div6.style.display = 'none';
});
div6.addEventListener('mouseleave', function() {
    div6.style.display = 'none';
})


var div7= document.getElementById("div7");
document.getElementById("btn7").addEventListener('click', function() {
    div7.style.display = (div7.style.display === 'none' || div7.style.display === '') ? 'block' : 'none';
});
document.getElementById("btn7").addEventListener('mouseleave', function() {
    div7.style.display = 'none';
});
div7.addEventListener('mouseleave', function() {
    div7.style.display = 'none';
})
