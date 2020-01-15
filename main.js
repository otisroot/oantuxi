var btn = document.getElementsByTagName('button');
var root = Math.floor(Math.random() * 3);
console.log(root);
var checkR = null;
  if(root === 0){
      checkR = 0;
      console.log('búa')
    }
  else if(root == 1){checkR = 1;console.log('bao')}
  else if(root ==2){checkR = 2;console.log('kéo')}
for(i = 0; i < btn.length; i++){
 btn[i].onclick = function(){
  var typee = this.getAttribute("data-value");
  console.log(typee)
  if(!isNaN(typee)){
    if(checkR == 0){
      if(typee == root){
        console.log('hòa nhau');
      }
      else if(typee == '1'){
        console.log(' máy chọn bao bạn đã thắng');
      }
      else if(typee == '2'){
        console.log('máy chọn kéo bạn đã thua');
      }
    }
    else if(checkR == 1){
      if(typee == root){
        console.log('hòa nhau');
      }
      else if(typee == '0'){
        console.log(' máy chọn búa bạn đã thắng');
      }
      else if(typee == '2'){
        console.log('máy chọn kéo bạn đã thua');
      }
    }
    else{
      if(typee == root){
        console.log('hòa nhau');
      }
      else if(typee == '0'){
        console.log('máy chọn búa bạn đã thắng' );
      }
      else if(typee == '1'){
        console.log('máy chọn bao bạn đã thua');
      }
    }
  }
}
}