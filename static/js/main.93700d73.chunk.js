(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e){e.exports=[{id:1,name:"SpongeBob",image:"https://vignette.wikia.nocookie.net/spongebobgalaxy/images/0/07/SpongeBob_SquarePants.png/revision/latest?cb=20171228024014"},{id:2,name:"Mr. Krabs",image:"https://vignette3.wikia.nocookie.net/vsbattles/images/8/80/Mr._Krabs.png/revision/latest?cb=20150919162131"},{id:3,name:"Squidward",image:"https://vignette2.wikia.nocookie.net/fictionalcharacters/images/a/ac/Squidward.png/revision/latest?cb=20131121012626"},{id:4,name:"Dexter",image:"https://s-media-cache-ak0.pinimg.com/originals/fe/32/49/fe32495d45283cd6860ae122f0aeaad9.png"},{id:5,name:"Courage",image:"https://vignette4.wikia.nocookie.net/vsbattles/images/3/39/Courage-0.png/revision/latest?cb=20160719055423"},{id:6,name:"Doug Funnie",image:"https://vignette1.wikia.nocookie.net/doug/images/3/3b/Doug001.gif/revision/latest?cb=20110807170511"},{id:7,name:"Bugs Bunny",image:"https://vignette2.wikia.nocookie.net/deathbattlefanon/images/2/2b/Bugs_Bunny.png/revision/latest?cb=20151206010607"},{id:8,name:"Johnny Bravo",image:"http://vignette3.wikia.nocookie.net/p__/images/9/9a/Johnny_Bravo.png/revision/latest?cb=20131031233339&path-prefix=protagonist"},{id:9,name:"Tommy Pickles",image:"https://vignette4.wikia.nocookie.net/uncyclopedia/images/e/e4/Tommy_Pickles.png/revision/latest?cb=20110530102641"},{id:10,name:"Rocko",image:"http://vignette3.wikia.nocookie.net/rockosmodernlife/images/9/9e/Rockos-modern-life-4e582a8f06a41.png/revision/latest?cb=20130522173416"},{id:11,name:"Captain Planet",image:"http://vignette2.wikia.nocookie.net/dragon-rap-battles/images/b/b6/Captain_Planet.png/revision/latest?cb=20160911200836"},{id:12,name:"Ickis",image:"http://static.tvtropes.org/pmwiki/pub/images/ickis.png"}]},,,function(e,t,a){e.exports=a(21)},,,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(2),r=a.n(o),s=(a(15),a(3)),c=a(4),u=a(7),g=a(5),m=a(8);a(16),a(17),a(18);var l=function(e){return i.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},i.a.createElement("div",{className:"row"},i.a.createElement("p",{className:"navbar-brand gameName"},"Clicky-Game"),i.a.createElement("p",{className:"guessText"},e.yourGuessText),i.a.createElement("p",{className:"currentScoreText"},"Score: ",e.yourScore),i.a.createElement("p",{className:"highScoreText"},"| Top Score: ",e.yourHighScore)))};a(19);var p=function(e){return i.a.createElement("div",{onClick:function(){return e.handleClick(e.id)},className:"card"},i.a.createElement("div",{className:"img-container"},i.a.createElement("img",{alt:e.name,src:e.image})))},d=a(6);a(20);var h=function(e){return i.a.createElement("div",{className:"wrapper"},e.children)},v=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(i)))).state={yourGuessText:"",yourScore:0,yourHighScore:0,yourGuesses:[],characters:d},a.handleClick=function(e){for(var t=a.state.yourGuesses,n=!0,i=0;i<a.state.yourGuesses.length+1;i++){if(e===a.state.yourGuesses[i]){console.log("Matching IDs"),a.setState({yourGuessText:"You guessed incorrectly :("}),o=0,a.setState({yourScore:o}),t=[],n=!1;break}a.setState({yourGuessText:"You guessed correctly!"});var o=a.state.yourScore;o++,a.setState({yourScore:o});var r=a.state.yourHighScore;o>r&&(r=o,a.setState({yourHighScore:r}))}n&&t.push(e),console.log("Score:"+o),a.setState({yourGuesses:t})},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement(h,null,i.a.createElement(l,{yourGuessText:this.state.yourGuessText,yourScore:this.state.yourScore,yourHighScore:this.state.yourHighScore}),this.state.characters.map(function(t){return i.a.createElement(p,{handleClick:e.handleClick,id:t.id,key:t.id,name:t.name,image:t.image})})))}}]),t}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.93700d73.chunk.js.map