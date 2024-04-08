const srcList = [
  "https://i.pinimg.com/236x/25/c4/56/25c456945f5607b539004bb3d6ad3f82.jpg",
  "https://scontent.famd1-2.fna.fbcdn.net/v/t39.30808-6/375051969_1078526923641539_6141717613249906768_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_ohc=BzxJjJLKU7YAX9MELch&_nc_ht=scontent.famd1-2.fna&oh=00_AfAUkh6nF6P75MbQ9X2gOODkgVE-hCm1IMsynEVsfirFSw&oe=66118409",
  "https://rukminim2.flixcart.com/image/416/416/l0e6kcw0/poster/c/q/t/medium-narendra-modi-hd-wallpaper-on-art-paper-poster2577-original-imagc6xwz27vfxbk.jpeg?q=70&crop=false",
  "https://cdn.narendramodi.in/cmsuploads/0.89801200_1639141921_1.jpg",
  "https://rukminim2.flixcart.com/image/416/416/l0cr4i80/poster/l/v/v/medium-narendra-modi-hd-wallpaper-on-art-paper-poster2579-original-imagc5yrthnbjmag.jpeg?q=70&crop=false",
  "https://images.news18.com/ibnlive/uploads/2022/08/narendra-modi-2-16605473524x3.jpg?impolicy=website&width=640&height=480",
  "https://etimg.etb2bimg.com/photo/96493840.cms",
  "https://static.punemirror.com/full/ada0225b-fb1e-4508-bbd0-14ff0a0c35af.webp",
  "https://img.etimg.com/thumb/msid-100838863,width-300,height-225,imgsize-46420,resizemode-75/modi-new-pti1.jpg",
  "https://assets.telegraphindia.com/telegraph/2022/May/1653080143_modi.jpg",
  "https://img.etimg.com/thumb/msid-88079271,width-300,height-225,imgsize-66884,resizemode-75/modi-3.jpg",
];

const handleChange = () => {
  try {
    if (new Date().getHours() >= 17) {
      let imgs = Array.from(document.querySelectorAll("img"));
      imgs.forEach((each) => {
        if (!srcList.includes(each.src)) {
          each.src = srcList[Math.ceil(Math.random() * 1000) % srcList.length];
        }
      });
    }
  } catch (err) {
    console.log(err);
  }
};
const observer = new MutationObserver(handleChange);
observer.observe(document.querySelector("body"), {
  childList: true,
  subtree: true,
});
