var cursor = document.querySelector('.cursor')
var refresh = document.querySelector('.refresh')
var cursorMove = function(event)
{
	//console.log(event.pageX)
	cursor.style.left = `${event.pageX - 8}px`
	cursor.style.top = `${event.pageY - 9.5}px`
	//document.body.insertAdjacentHTML('beforeend',`<div style="width:${event.pageX}px"></div>`)
}

window.addEventListener('mousemove',cursorMove)


var submitBtn = document.querySelector('input[type=submit]')

console.log(submitBtn.style.display)

var showsubmitBtn = function(str){
    if (str.length === 0){
    submitBtn.style.display = 'none';
}   else{
    console.log('triggered')
    submitBtn.style.display = 'block';
}
}


function myFunction() {
  event.preventDefault();
  $('form').fadeOut(0);
  var body = document.body;
  body.style.margin = '0px';
  refresh.style.display = 'block';
  cursor.style.backgroundColor ='white';
  var text1 = document.getElementById("text1").value;
  var text2 = document.getElementById("text2").value;
  //$('.wrapper').addClass('form-success'); 
    
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange=function()
  {
    if (xmlhttp.readyState==4 && xmlhttp.status==200)
    { 
      var result_array =  JSON.parse(xmlhttp.responseText).result;
          var test_array = [];
          var test_array_2 = [];
          for(a = 0; a < 1024; a++){
              test_array.push(Math.random())
              test_array_2.push(Math.random())}
          var result_1 = document.createElement("div");
          result_1.id ="result_1";
          result_1.innerHTML ="This is the result of text 1";
          document.getElementById("result").appendChild(result_1);
          var first_text_encoded = result_array[0];
          //var first_text_encoded = test_array;
        
          for (let j = 0; j < first_text_encoded.length; j++){
          var result_1_0 = document.createElement("div");
          result_1_0.id = `${j}th_of_first_text`;
          result_1_0.innerHTML = `"<span>${first_text_encoded[j]}</span>"`;
          document.getElementById("result_1").appendChild(result_1_0);}
 
        
        
        
          var result_2 = document.createElement("div");
          result_2.id ="result_2";
          result_2.innerHTML ="This is the result of text 2";
          document.getElementById("result").appendChild(result_2);
          var second_text_encoded = result_array[1];
          //var second_text_encoded = test_array_2
          //  console.log(second_text_encoded.length);
        
          var arr_euclidean_element = [];

          for (let k = 0; k < second_text_encoded.length; k++){
          (function(k){
              setTimeout(function(){
                         
          
          var result_2_0 = document.createElement("div");
          result_2_0.id = `${k}th_of_second_text`;
          result_2_0.innerHTML = `"<span>${second_text_encoded[k]}</span>"`;
          document.getElementById("result_2").appendChild(result_2_0);
                    
          var r1 = `${first_text_encoded[k]}`;
          var r2 = `${second_text_encoded[k]}`;
          var arr_diff = r1-r2;
          var arr_diff_pow = Math.pow(arr_diff,2);
          var arr_diff_pow_visual = Math.pow(arr_diff,2)*80;
          arr_euclidean_element.push(arr_diff_pow)
          console.log(arr_diff_pow_visual);
          var arr_diff_visual = `<div id="visual" backGround="rgb(${100+arr_diff_pow_visual*2}, 164, 169)" onMouseOver=" this.style.filter='saturate(10)';this.style.width='20px'"  onMouseOut="setTimeout(this.style.width='4px';this.style.filter='saturate(1)'",3000)" style="display：inline-block;width:4px;z-index:0;height:${arr_diff_pow_visual}vh;background-color: rgb(${100+arr_diff_pow_visual*2}, 164, 169);"></div>`;
          console.log(arr_diff_visual);
          //setTimeout(function() {
          document.getElementById("visualization").insertAdjacentHTML('beforeend', arr_diff_visual);
          //}, 100*(k+1));
              
              
          },5*(k+1));})(k);
          
          }
          
          }
    setTimeout(function(){   
    console.log(arr_euclidean_element);
    var sum_euclidean = 0;
    for (var i=0; i < arr_euclidean_element.length; i++){
        sum_euclidean += arr_euclidean_element[i]}
    console.log(sum_euclidean);
    var arr_euclidean = Math.sqrt(sum_euclidean);
    console.log("The Euclidean distance of this two sentences is :",arr_euclidean);   
    var euclidean = `<h2 style="margin-left:5px;position:fixed;left:0px;">The Euclidean distance of this two sentences is :${arr_euclidean}.</h2>`; 
    var euclidean_str = `The Euclidean distance of this two sentences is :${arr_euclidean}.` 
    var b = 0;
    var typeWriter = function(){
        if(b < euclidean_str.length){
            document.getElementById('euclidean').innerHTML += euclidean_str[b];
            b++;
            setTimeout(typeWriter,10);
        }
    }
   typeWriter();},5125)  
   
   // document.getElementById("visualization").insertAdjacentHTML('beforebegin', //euclidean);

  }
  xmlhttp.open("POST","http://34.73.255.246:11233/encode",true);
  xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xmlhttp.send(JSON.stringify({"id": 1,"texts": [text1,text2], "is_tokenized": false}));   
};
  