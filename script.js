function myFunction() {
  event.preventDefault();
  var text1 = document.getElementById("text1").value;
  var text2 = document.getElementById("text2").value;
  $('form').fadeOut(500);
 
  //$('.wrapper').addClass('form-success'); 
    
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange=function()
  {
    if (xmlhttp.readyState==4 && xmlhttp.status==200)
    { 
      var result_array =  JSON.parse(xmlhttp.responseText).result;
        
          var result_1 = document.createElement("div");
          result_1.id ="result_1";
          result_1.innerHTML ="This is the result of text 1";
          document.getElementById("result").appendChild(result_1);
          var first_text_encoded = result_array[0];
        
        
          for (j = 0; j < first_text_encoded.length; j++){
          var result_1_0 = document.createElement("div");
          result_1_0.id = `${j}th_of_first_text`;
          result_1_0.innerHTML = `"<span>${first_text_encoded[j]}</span>"`;
          document.getElementById("result_1").appendChild(result_1_0);}
 
        
        
        
          var result_2 = document.createElement("div");
          result_2.id ="result_2";
          result_2.innerHTML ="This is the result of text 2";
          document.getElementById("result").appendChild(result_2);
          var second_text_encoded = result_array[1];
          //  console.log(second_text_encoded.length);
        
          var arr_euclidean_element = [];

          for (k = 0; k < second_text_encoded.length; k++){
          var result_2_0 = document.createElement("div");
          result_2_0.id = `${k}th_of_second_text`;
          result_2_0.innerHTML = `"<span>${second_text_encoded[k]}</span>"`;
          document.getElementById("result_2").appendChild(result_2_0);
                    
          var r1 = `${first_text_encoded[k]}`;
          var r2 = `${second_text_encoded[k]}`;
          var arr_diff = r1-r2;
          var arr_diff_pow = Math.pow(arr_diff,2);
          var arr_diff_pow_visual = Math.pow(arr_diff,2)*200;
          arr_euclidean_element.push(arr_diff_pow)
          console.log(arr_diff_pow_visual);
          var arr_diff_visual = `<div id="visual", style="transform: rotate(-90deg);;display：inline-block;width:${arr_diff_pow_visual}px;height:10px;background-color: rgb(${k}, ${k}, 0);"></div>`;
          document.getElementById("visualization").insertAdjacentHTML('beforeend', arr_diff_visual);
          }
    console.log(arr_euclidean_element);
    var sum_euclidean = 0;
    for (var i=0; i < arr_euclidean_element.length; i++){
        sum_euclidean += arr_euclidean_element[i]}
    console.log(sum_euclidean);
    var arr_euclidean = Math.sqrt(sum_euclidean);
    console.log("The Euclidean distance of this two sentences is :",arr_euclidean);   
    var euclidean = `<h1>The Euclidean distance of this two sentences is :${arr_euclidean}.</h1>`;    
    document.getElementById("visualization").insertAdjacentHTML('beforebegin', euclidean);}

  }
  xmlhttp.open("POST","http://api.zijiachen.com:11233/encode",true);
  xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xmlhttp.send(JSON.stringify({"id": 1,"texts": [text1,text2], "is_tokenized": false}));   
};
  