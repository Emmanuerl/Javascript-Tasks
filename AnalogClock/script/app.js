var canvas = document.getElementById('canvas');
 canvas.height = 300;
 canvas.width =300;
 var ctx = canvas.getContext('2d');
 function drawClock() {
    var time = new Date;
    var hr = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();
    hr%=12;

     ctx.clearRect(0,0,canvas.width,canvas.height);
    //hr arc
    ctx.beginPath();
    ctx.arc(150,150,90,1.5*Math.PI, hr *(Math.PI / 6) + (1.5*Math.PI) , false);
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 2.5;
    ctx.stroke();

    //min arc
    ctx.beginPath();
    ctx.arc(150,150,100,1.5*Math.PI, min *(Math.PI / 30) + (1.5*Math.PI) , false);
    ctx.strokeStyle = 'green';
    ctx.lineWidth = 2.3;
    ctx.stroke();

    //sec arc
    ctx.beginPath();
    ctx.arc(150,150,110,1.5*Math.PI, sec *(Math.PI / 30) + (1.5*Math.PI) , false);
    ctx.strokeStyle = 'orange';
    ctx.lineWidth = 2;
    ctx.stroke();

        //hr hand
    ctx.beginPath();
    ctx.translate(150, 150);
    ctx.rotate(hr * (Math.PI / 6) + 1.5 * Math.PI);
    ctx.translate(-150, -150);
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(150, 145, 60, 6);
    ctx.translate(150, 150);
    ctx.rotate(-(hr * (Math.PI / 6) + 1.5 * Math.PI));
    ctx.translate(-150, -150);

     //min hand
    ctx.beginPath();
    ctx.translate(150, 150);
    ctx.rotate(min * (Math.PI / 30) + 1.5 * Math.PI);
    ctx.translate(-150, -150);
    ctx.fillStyle = "green";
    ctx.fillRect(150, 145, 78, 5);
    ctx.translate(150, 150);
    ctx.rotate(-(min * (Math.PI / 30) + 1.5 * Math.PI));
    ctx.translate(-150, -150);

    //sec hand
    ctx.beginPath();
    ctx.translate(150, 150);
    ctx.rotate(sec * (Math.PI / 30) + 1.5 * Math.PI);
    ctx.translate(-150, -150);
    ctx.fillStyle = "orange";
    ctx.fillRect(150, 145, 83, 3);
    ctx.translate(150, 150);
    ctx.rotate(-(sec * (Math.PI / 30) + 1.5 * Math.PI));
    ctx.translate(-150, -150);

     //clock center
    ctx.beginPath();
    ctx.arc(150, 150, 10, 0, 2 * Math.PI, false);
    ctx.strokeStyle = "purple";
    ctx.fillStyle = "purple";
    ctx.fill();
    ctx.stroke();

 };
 drawClock();
 setInterval(drawClock,1000); 
