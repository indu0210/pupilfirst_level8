let c= document.getElementById("repo");
let context = c.getContext("2d");

let loadImages = (src, callback) => {
    let imges = document.createElement(imges);
    imges.onload = () => callback(imges);
    imges.src = src;
}
document.getElementById(repo).style.background = url('');

let myFunction = () => {
 var person = prompt("Enter your funky partner, Jaggu");

if (person != null) {
  document.getElementById(demo).innerHTML =
  "Hello"  + person + "! Let's start. Click on the buttons below to learn some cool moves! ";
    }
}

let imagePath = (frameNumber, animation) => {
    return "https://github.com/indu0210/pupilfirst_level8/tree/main/images"+ animation + "/" + frameNumber + ".png?raw=true";
}

let frames = {
    idle : [1, 2, 3, 4, 5, 6, 7, 8],
    kick : [1, 2, 3, 4, 5, 6, 7],
    punch : [1, 2, 3, 4, 5, 6, 7],
    backward : [1, 2, 3, 4, 5, 6],
    forward : [1, 2, 3, 4, 5, 6],
    block : [1, 2, 3, 4, 5, 6, 7, 8, 9]

};
let loadImages = (callback) => {
    let images = {idle:[], kick:[], punch:[], backward:[], forward:[], block:[]};
    let imagesToLoad = 0; 

    ["idle","kick","punch","backward","forward","block"].forEach((animation) => {
        let animationFrames = frames[animation];
        imagesToLoad = imagesToLoad + animationFrames.length;

        animationFrames.forEach((frameNumber) => {
            let path = imagePath(frameNumber,animation);

            loadImage(path, (image) => {
                images[animation][frameNumber - 1] = image;
                imagesToLoad = imagesToLoad - 1;    

                if(imagesToLoad === 0){
                    callback(images);
                }
            });
        });
    });
};


let animate = (context, images, animation, callback) => {
    images[animation].forEach((image, index) => {
        setTimeout(()=>{
            context.clearRect(500, 50, 250, 300);
            context.drawImage(image, 500, 50, 250, 300);
        }, index * 100);
    });
    setTimeout(callback, images[animation].length * 100);
};

loadImages((images, ) => {
    let queuedAnimations = [];

    let aux = () => {
        let selectedAnimation;

        if(queuedAnimations.length === 0){
            selectedAnimation = "idle";
        }else{
            selectedAnimation = queuedAnimations.shift();
        }
        animate(context, images, selectedAnimation, aux);
    };
    aux();

    document.getElementById("kick").onclick = () => {
        queuedAnimations.push("kick");
    };
    document.getElementById("punch").onclick = () => {
        queuedAnimations.push("punch");
    };
    document.getElementById("backward").onclick = () => {
        queuedAnimations.push("backward");
    };
    document.getElementById("forward").onclick = () => {
        queuedAnimations.push("forward");
    };
    document.getElementById("block").onclick = () => {
        queuedAnimations.push("block");
    };

    document.addEventListener("keyup", (event)=>{
        const key = event.key;

        if(key === "ArrowLeft"){
            queuedAnimations.push("kick");
        }else if(key === "ArrowRight"){
            queuedAnimations.push("punch");
        }
        else if(key === "ArrowDown"){
            queuedAnimations.push("backward");
        }
        else if(key === "ArrowUp"){
            queuedAnimations.push("forward");
        }
        else if(key === "Space"){
            queuedAnimations.push("block");
        }
    });
});











