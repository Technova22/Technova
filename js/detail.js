

const data  = [{
    id: "0",
   eventName: "Arduino",
   eventDescripton: "THis is arduino challenge to make interesting gadgets. Fugit cumque beatae ut error laudantium nam, temporibus dolore aspernatur tempore.",
   eventImage: "url(../Images/360_F_387954147_QMQRhvyvtTdBB2bL1ypyOcy23ZYPyXFE.jpg)",
    rules: "<ul><li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo</li><li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</li><li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</li><li>Lorem ipsum dolsit amet, consetetur sadipscing elitr</li></ul>"
 },
 {
   id: "1",
  eventName: "Web Development",
  eventDescripton: "Get ready for a WEb dev challenge. . Fugit cumque beatae ut error laudantium nam, temporibus dolore aspernatur tempore.",
  eventImage: "url(../Images/360_F_387954147_QMQRhvyvtTdBB2bL1ypyOcy23ZYPyXFE.jpg)",
   rules: "<ul><li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo</li><li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</li><li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</li><li>Lorem ipsum dolsit amet, consetetur sadipscing elitr</li></ul>"
},
{
   id: "2",
  eventName: "Robo Race",
  eventDescripton: "Get ready for a robo race challenge. . Fugit cumque beatae ut error laudantium nam, temporibus dolore aspernatur tempore.",
  eventImage: "url(../Images/360_F_387954147_QMQRhvyvtTdBB2bL1ypyOcy23ZYPyXFE.jpg)",
   rules: "<ul><li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo</li><li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</li><li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</li><li>Lorem ipsum dolsit amet, consetetur sadipscing elitr</li></ul>"
},
{
   id: "3",
  eventName: "PUBG",
  eventDescripton: "Get ready for a pubg challenge. . Fugit cumque beatae ut error laudantium nam, temporibus dolore aspernatur tempore.",
  eventImage: "url(../Images/360_F_387954147_QMQRhvyvtTdBB2bL1ypyOcy23ZYPyXFE.jpg)",
   rules: "<ul><li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo</li><li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</li><li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</li><li>Lorem ipsum dolsit amet, consetetur sadipscing elitr</li></ul>"
},
]

 let currpath = window.location.href;

 console.log(currpath);

 let ch = currpath.charAt(currpath.length -1);
 console.log(ch);

 let heading = document.getElementById('desgh');
 let description = document.querySelector('#desc > p');

//  console.log(heading);

let idx = parseInt(ch);
heading.innerHTML = data[idx].eventName;

description.innerHTML = data[idx].eventDescripton;
