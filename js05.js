const runCode = new Promise(
    (resolve, reject) => {
  setTimeout(() => {
    let num =10;
    if (num > 11){
      resolve(num);
    } else {
      reject('error');
    }
  }, 1000);
    }
  );
  runCode.then((item)=> {
    console.log('success', item);
  }, (err)=> {
    console.log(err);
  });
  console.log('by dave lee')
  




  runCode.then(
    function(item){
      console.log('success', item);
    },
    function(err){
      console.log(err);
    }
  ).then(
    function(){
      console.log('by Dave lee');
    },
    function(){
     console.log('error2');
    }
  )


  const promise  = new Promise(
    (resolve, reject) => {
  setTimeout(() => {
    let num =10;
    if (num > 11){
      resolve(num);
    } else {
      reject('error');
    }
  }, 1000);
    }
  );
  
  promise
  .then((num) => {
    console.log('success', num);
  }, (num) => {
    console.log('failur', num);
  })
  .catch((error)=> {
    console.log('test');
    console.log(error);
  });
  


<html>
  <head>
    <style>
      .box1 {
        width: 100px;
        height: 100px;
        border: 2px solid #f2b441;
        border-radius: 10px;
        text-align: center;
        line-height: 100px;
      }
    </style>
  </head>
  <body>
    <script>
      const newBox1 = document.createElement("div");
      newBox1.innerText = "Dave Lee"; 
      newBox1.setAttribute("class", "box1"); 
      newBox1.style.background = "#f2d541"; 
      document.body.appendChild(newBox1); 
  </body>
</html>


const newBox2 = document.createElement("div");
      newBox2.innerText = "fun-coding"; 
      newBox2.setAttribute("class", "box1"); 
      newBox2.style.background = "#f2d541"; 
      document.body.replaceChild(newBox2, newBox1);



  

  <!DOCTYPE html>
  <html>
    <body>
      <script>
        addEventListener("click", () => {
          alert("Clicked!");
        });
      </script>
    </body>
  </html>

      <div class="box1">ease</div>

    <script>
      const box = document.querySelector(".box1");

      box.addEventListener("mouseover", () => {
        box.style.background = "red";
      });
      box.addEventListener("mouseout", () => {
        document.body.removeChild(box);