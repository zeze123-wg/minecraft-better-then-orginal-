var canaa = new fabric.Canvas('myCanvas');

var terraria_x = 10;
var terraria_y = 10;

var block_height = 30;
var block_width = 30;




player = "";
img = "";

function player_update() {
    fabric.img.fromURL("terraria.png", function (Img) {
        player = Img;
        player.scaleToWidth(150);
        player.scaleToHeight(140);
        player.set({
            top: terraria_x,
            left: terraria_y
        });
        canaa.add(player);
    });

}

function new_update(get_doggy) {
    fabric.img.fromURL(get_doggy, function (Img) {
        img = Img;
        img.scaleToWidth(block_width);
        img.scaleToHeight(block_height);
        img.set({
            top: terraria_x,
            left: terraria_y
        });
        canaa.add(img);
    });

}

window.addEventListener("keydown".my_keydown);

function my_keydown(e) {
    keypressed = e.keycode;
    console.log(keypressed);

    if (e.shiftKey == true && keypressed == '90') {
        console.log("you just pressed z and shift.");
        block_height = block_height + 10;
        block_width = block_width + 10;
        document.getElementById("Current_width").innerHTML = block_width;
        document.getElementById("Current_height").innerHTML = block_height;
    }
    if (e.shiftKey == true && keypressed == '88') {
        console.log("you just pressed x and shift.");
        block_height = block_height - 10;
        block_width = block_width - 10;
        document.getElementById("Current_width").innerHTML = block_width;
        document.getElementById("Current_height").innerHTML = block_height;
    }

    if (keypressed == '87') {
        up();
        console.log("up is not pressed");
    }

    if (keypressed == '83') {
        down();
        console.log("down is not pressed");
    }

    if (keypressed == '68') {
        right();
        console.log("right is not pressed");
    }

    if (keypressed == '65') {
        left();
        console.log("left is not pressed");
    }

    if (keypressed == '66') {
        new_update("brick.jpg");
        console.log("brick is placed");
    }
    if (keypressed == '50') {
        new_update("leaf2.png");
        console.log("DARK OAK LEAf is placed");
    }
    if (keypressed == '66') {
        new_update("brick.jpg");
        console.log("brick is placed");
    }

    function up(){
        if(terraria_y >= 0)
{
        terraria_y = terraria_y - block_height;
        console.log("i am pressed ha");
        canvas.remove(player);
        player_update();
}
    }
    function down(){
        if(terraria_y <= 500)
{
        terraria_y = terraria_y + block_height;
        canvas.remove(player);
        console.log("i am pressed ha");
        player_update();
}
    }
    function left(){
        if(terraria_y >= 0)
{
        terraria_x = terraria_x - block_width;
        console.log("i am pressed ha");
        canvas.remove(player);
        player_update();
}
    }
    function right(){
        if(terraria_x <= 500)
{
        terraria_x = terraria_x + block_width;
        console.log("i am pressed ha");
        canvas.remove(player);
        player_update();
}
    }
}