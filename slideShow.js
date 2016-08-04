var slideShow = {
  photoList: ["cat", "dog", "fish"],
  currentPhotoIndex: 0,
  playInterval: null,
  nextPhoto:function (){
    if (this.currentPhotoIndex < this.photoList.length) {
      console.log(this.getCurrentPhoto());
      this.currentPhotoIndex +=1;
    }else {
      this.pause();
      console.log("End of slideshow");
    }
  },
  prevPhoto:function (){
    if (this.currentPhotoIndex > 0) {
      console.log(this.getCurrentPhoto());
      this.currentPhotoIndex -=1;
    }else {
      this.pause();
      console.log("Start of slideshow");
    }
  },
  getCurrentPhoto: function(){
    return this.photoList[this.currentPhotoIndex];
  },
  play: function(){
    this.playInterval = setInterval(this.nextPhoto.bind(this),2000);
  },
  pause: function(){
    clearInterval(this.playInterval);
  }
}

slideShow.play();

// for (i=0; i<5; i++){
//   rand = parseInt((Math.random()*2)%2)
//   console.log(rand);
//   if (rand===0){
//     slideShow.nextPhoto();
//   }else {
//     slideShow.prevPhoto();
//   }
//   console.log(slideShow.nextPhoto());
//   console.log(slideShow.currentPhotoIndex);
//   console.log(slideShow.getCurrentPhoto());
// }
