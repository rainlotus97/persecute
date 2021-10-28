<template>
  <div class="newCake">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>

    <div class="mobile">最大化查看</div>
    <div class="pyro">
      <div class="before"></div>
      <div class="after"></div>
    </div>
    <h1>Feliz Cumpleaños Pratik!</h1>
    <h2>Happy Birthday {{yourName}}!</h2>
    <span>🎉</span>
    <div class="candle">
      <div id="flame" class="lit"></div>
    </div>

    <div class="cake"></div>
    <div class="plate"></div>
  </div>
</template>

<script>
export default {
  name: "NewCake",
  props: {
    yourName: {
      type: String,
      default: "WangYuan",
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Concert+One|Pacifico");
.newCake{
    height: 100vh;
    overflow: hidden;
    position: relative;
    &::before{
        display: table;
        content: '';
    }
}
.mobile {
  position: fixed;
  text-align: center;
  width: 100%;
  top: 1rem;
  font-size: 1.6rem;
  display: block;
}

h1,
h2,
span {
  display: none;
}

@media screen and (min-width: 300px) {
  .mobile {
    display: none;
  }

  h1,
  h2,
  span {
    display: block;
  }

  h1 {
    position: fixed;
    text-align: center;
    width: 100%;
    top: 2.4rem;
    font-size: 1.6rem;
    background: -webkit-linear-gradient(0deg, #ceadfc 0%, #a3bbfb 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: "Concert One", cursive;
    font-weight: 400;
    z-index: -1;
    letter-spacing: 0.12rem;
  }

  span {
    position: fixed;
    text-align: center;
    width: 100%;
    top: 1.4rem;
    font-size: 1.4rem;
  }

  h2 {
    position: fixed;
    text-align: center;
    width: 100%;
    top: 1.4rem;
    font-size: 1rem;
    background: -webkit-linear-gradient(90deg, #e9e6ff 0%, white 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  span {
    position: fixed;
    width: 2vmin;
    height: 2vmin;
    border-radius: 50%;
    animation-name: explosion;
    animation-iteration-count: infinite;
    animation-direction: reverse;
    animation-timing-function: cubic-bezier(0.84, 0.02, 1, 1);
  }
  span:nth-child(1) {
    background-color: #2bd8ff;
    transform: translate(70.7404476506vw, 39.2982912115vh);
    animation-duration: 2.451477853s;
    animation-delay: -3.9090695973s;
  }
  span:nth-child(2) {
    background-color: #feff28;
    transform: translate(21.390916309vw, 83.9320950239vh);
    animation-duration: 2.6082661613s;
    animation-delay: -2.4177632704s;
  }
  span:nth-child(3) {
    background-color: #feff28;
    transform: translate(99.4707896083vw, 50.8779038063vh);
    animation-duration: 2.3934609219s;
    animation-delay: -4.9374235187s;
  }
  span:nth-child(4) {
    background-color: #ef8d22;
    transform: translate(88.0762428158vw, 60.8758646268vh);
    animation-duration: 4.3745762554s;
    animation-delay: -4.2335574629s;
  }
  span:nth-child(5) {
    background-color: #feff28;
    transform: translate(87.209776097vw, 87.4722435411vh);
    animation-duration: 2.6247180243s;
    animation-delay: -0.3571633852s;
  }
  span:nth-child(6) {
    background-color: #feff28;
    transform: translate(67.5348277973vw, 93.8934516001vh);
    animation-duration: 3.0630744908s;
    animation-delay: -4.4890304964s;
  }
  span:nth-child(7) {
    background-color: #feff28;
    transform: translate(51.2278043561vw, 39.0030857051vh);
    animation-duration: 3.1065374294s;
    animation-delay: -4.5619134997s;
  }
  span:nth-child(8) {
    background-color: #fc85e1;
    transform: translate(63.2547804674vw, 88.7449965817vh);
    animation-duration: 2.8384921355s;
    animation-delay: -0.0965491775s;
  }
  span:nth-child(9) {
    background-color: #fc85e1;
    transform: translate(1.7747115187vw, 78.6520215079vh);
    animation-duration: 4.3100039072s;
    animation-delay: -0.553894004s;
  }
  span:nth-child(10) {
    background-color: #ef8d22;
    transform: translate(61.1915375825vw, 46.9592056036vh);
    animation-duration: 2.6244512022s;
    animation-delay: -4.5897035553s;
  }
  span:nth-child(11) {
    background-color: #ef8d22;
    transform: translate(4.3118502657vw, 31.3689335931vh);
    animation-duration: 2.9020870937s;
    animation-delay: -0.0475365525s;
  }
  span:nth-child(12) {
    background-color: #fc85e1;
    transform: translate(11.7124176675vw, 39.3853134156vh);
    animation-duration: 2.7165067308s;
    animation-delay: -0.3402677425s;
  }
  span:nth-child(13) {
    background-color: #fc85e1;
    transform: translate(94.2835231134vw, 15.247368654vh);
    animation-duration: 3.1761028617s;
    animation-delay: -4.3999397039s;
  }
  span:nth-child(14) {
    background-color: #ef8d22;
    transform: translate(22.7721270307vw, 68.9730094645vh);
    animation-duration: 3.6217481701s;
    animation-delay: -4.3121585024s;
  }
  span:nth-child(15) {
    background-color: #2bd8ff;
    transform: translate(82.1182207545vw, 11.2392421851vh);
    animation-duration: 3.4960993434s;
    animation-delay: -3.7739573258s;
  }
  span:nth-child(16) {
    background-color: #2bd8ff;
    transform: translate(19.7968006723vw, 77.2717558727vh);
    animation-duration: 3.1354637591s;
    animation-delay: -2.8370634184s;
  }
  span:nth-child(17) {
    background-color: #feff28;
    transform: translate(84.4109063964vw, 23.5168492096vh);
    animation-duration: 4.3723964886s;
    animation-delay: -1.7390935649s;
  }
  span:nth-child(18) {
    background-color: #fc85e1;
    transform: translate(72.7671083205vw, 62.5592027903vh);
    animation-duration: 4.4313534479s;
    animation-delay: -3.0082038529s;
  }
  span:nth-child(19) {
    background-color: #2bd8ff;
    transform: translate(79.3141365436vw, 1.3143345978vh);
    animation-duration: 2.392781523s;
    animation-delay: -0.261672225s;
  }
  span:nth-child(20) {
    background-color: #ef8d22;
    transform: translate(29.2041570725vw, 86.8219678576vh);
    animation-duration: 3.7180833613s;
    animation-delay: -1.7317238209s;
  }
  span:nth-child(21) {
    background-color: #2bd8ff;
    transform: translate(72.3682688076vw, 29.3261143931vh);
    animation-duration: 3.5629502006s;
    animation-delay: -4.5261179684s;
  }
  span:nth-child(22) {
    background-color: #2bd8ff;
    transform: translate(41.7909696011vw, 5.9456249418vh);
    animation-duration: 2.7586444687s;
    animation-delay: -1.2172526656s;
  }
  span:nth-child(23) {
    background-color: #feff28;
    transform: translate(76.2571451639vw, 17.195474965vh);
    animation-duration: 4.4228449437s;
    animation-delay: -0.4973092974s;
  }
  span:nth-child(24) {
    background-color: #2bd8ff;
    transform: translate(64.8267410528vw, 72.3685961754vh);
    animation-duration: 4.0308729373s;
    animation-delay: -3.4748753047s;
  }
  span:nth-child(25) {
    background-color: #feff28;
    transform: translate(51.9640189709vw, 48.6043629666vh);
    animation-duration: 3.1974276784s;
    animation-delay: -1.6166953152s;
  }
  span:nth-child(26) {
    background-color: #ef8d22;
    transform: translate(41.1498699458vw, 47.5398372353vh);
    animation-duration: 4.8552340393s;
    animation-delay: -0.9697552189s;
  }
  span:nth-child(27) {
    background-color: #2bd8ff;
    transform: translate(81.3954514701vw, 46.9511786798vh);
    animation-duration: 2.767644001s;
    animation-delay: -2.7950220038s;
  }
  span:nth-child(28) {
    background-color: #ef8d22;
    transform: translate(75.1070545511vw, 54.2036989448vh);
    animation-duration: 4.7036199387s;
    animation-delay: -1.0505926433s;
  }
  span:nth-child(29) {
    background-color: #fc85e1;
    transform: translate(25.2485702636vw, 35.8851684261vh);
    animation-duration: 3.7316305594s;
    animation-delay: -1.828910888s;
  }
  span:nth-child(30) {
    background-color: #2bd8ff;
    transform: translate(33.607420868vw, 8.2345981698vh);
    animation-duration: 2.7029717368s;
    animation-delay: -2.5500282063s;
  }
  span:nth-child(31) {
    background-color: #fc85e1;
    transform: translate(4.5567738711vw, 26.915212362vh);
    animation-duration: 3.4355180075s;
    animation-delay: -0.5790819766s;
  }
  span:nth-child(32) {
    background-color: #feff28;
    transform: translate(25.9501588313vw, 20.9473646869vh);
    animation-duration: 4.3830077577s;
    animation-delay: -4.6564701835s;
  }
  span:nth-child(33) {
    background-color: #feff28;
    transform: translate(90.303759829vw, 29.6733774558vh);
    animation-duration: 2.6689654722s;
    animation-delay: -0.9045308203s;
  }
  span:nth-child(34) {
    background-color: #2bd8ff;
    transform: translate(89.2836951603vw, 26.5025411567vh);
    animation-duration: 2.6426834256s;
    animation-delay: -4.8319924428s;
  }
  span:nth-child(35) {
    background-color: #ef8d22;
    transform: translate(49.6593402454vw, 41.2989731288vh);
    animation-duration: 2.53627768s;
    animation-delay: -1.6992049899s;
  }
  span:nth-child(36) {
    background-color: #ef8d22;
    transform: translate(55.3578105489vw, 75.1503457961vh);
    animation-duration: 2.9803742064s;
    animation-delay: -3.860230436s;
  }
  span:nth-child(37) {
    background-color: #feff28;
    transform: translate(84.2137545181vw, 99.6489820089vh);
    animation-duration: 2.8525129053s;
    animation-delay: -1.909336042s;
  }
  span:nth-child(38) {
    background-color: #feff28;
    transform: translate(58.4226829219vw, 6.6082231423vh);
    animation-duration: 4.1724251653s;
    animation-delay: -2.5373921442s;
  }
  span:nth-child(39) {
    background-color: #2bd8ff;
    transform: translate(4.1325762908vw, 16.5826905712vh);
    animation-duration: 3.3196820224s;
    animation-delay: -0.1998524335s;
  }
  span:nth-child(40) {
    background-color: #ef8d22;
    transform: translate(38.1082612566vw, 99.6828149038vh);
    animation-duration: 2.4716860672s;
    animation-delay: -3.804687821s;
  }
  span:nth-child(41) {
    background-color: #ef8d22;
    transform: translate(80.1246196199vw, 23.2154454066vh);
    animation-duration: 3.9966714491s;
    animation-delay: -3.2041854036s;
  }
  span:nth-child(42) {
    background-color: #2bd8ff;
    transform: translate(12.4867607956vw, 81.990153671vh);
    animation-duration: 4.3771268993s;
    animation-delay: -2.9204017862s;
  }
  span:nth-child(43) {
    background-color: #feff28;
    transform: translate(88.4304689846vw, 21.1509289349vh);
    animation-duration: 2.4345176476s;
    animation-delay: -1.7879472609s;
  }
  span:nth-child(44) {
    background-color: #fc85e1;
    transform: translate(69.7647889352vw, 45.9607535566vh);
    animation-duration: 4.3935398987s;
    animation-delay: -3.4611102331s;
  }
  span:nth-child(45) {
    background-color: #ef8d22;
    transform: translate(61.1024281766vw, 8.6360893002vh);
    animation-duration: 3.7418427756s;
    animation-delay: -0.8676250685s;
  }
  span:nth-child(46) {
    background-color: #2bd8ff;
    transform: translate(3.2214371062vw, 25.2935105902vh);
    animation-duration: 3.074683766s;
    animation-delay: -0.4965853318s;
  }
  span:nth-child(47) {
    background-color: #feff28;
    transform: translate(74.1716691607vw, 3.1894365936vh);
    animation-duration: 4.4907628187s;
    animation-delay: -2.968930085s;
  }
  span:nth-child(48) {
    background-color: #fc85e1;
    transform: translate(71.7485884871vw, 81.5140808668vh);
    animation-duration: 4.6478212704s;
    animation-delay: -2.4913789916s;
  }
  span:nth-child(49) {
    background-color: #ef8d22;
    transform: translate(68.5706834892vw, 26.9999891094vh);
    animation-duration: 4.4816990552s;
    animation-delay: -4.3381289066s;
  }
  span:nth-child(50) {
    background-color: #ef8d22;
    transform: translate(41.4062073866vw, 53.7404657598vh);
    animation-duration: 3.4662897168s;
    animation-delay: -3.0623966223s;
  }
  span:nth-child(51) {
    background-color: #ef8d22;
    transform: translate(87.7275522899vw, 57.8586420239vh);
    animation-duration: 4.5492821401s;
    animation-delay: -3.9375445372s;
  }
  span:nth-child(52) {
    background-color: #fc85e1;
    transform: translate(98.2142162683vw, 57.3579443658vh);
    animation-duration: 2.8023852526s;
    animation-delay: -2.8018360542s;
  }
  span:nth-child(53) {
    background-color: #ef8d22;
    transform: translate(58.9158153095vw, 2.5851120782vh);
    animation-duration: 4.8828427898s;
    animation-delay: -4.0170178676s;
  }
  span:nth-child(54) {
    background-color: #feff28;
    transform: translate(21.8232629797vw, 30.541333487vh);
    animation-duration: 4.1215064165s;
    animation-delay: -1.7175877986s;
  }
  span:nth-child(55) {
    background-color: #fc85e1;
    transform: translate(13.5806715283vw, 97.9236982484vh);
    animation-duration: 3.5107176799s;
    animation-delay: -2.201395581s;
  }
  span:nth-child(56) {
    background-color: #feff28;
    transform: translate(14.4730253941vw, 70.3026987242vh);
    animation-duration: 2.8655370997s;
    animation-delay: -4.5406682184s;
  }
  span:nth-child(57) {
    background-color: #feff28;
    transform: translate(8.9309655313vw, 17.5932162599vh);
    animation-duration: 3.8738411593s;
    animation-delay: -0.7726217596s;
  }
  span:nth-child(58) {
    background-color: #fc85e1;
    transform: translate(37.5050301898vw, 74.5977925362vh);
    animation-duration: 2.8543587537s;
    animation-delay: -0.6382727009s;
  }
  span:nth-child(59) {
    background-color: #fc85e1;
    transform: translate(44.1369706808vw, 19.0224357251vh);
    animation-duration: 3.4677241213s;
    animation-delay: -0.3790625881s;
  }
  span:nth-child(60) {
    background-color: #ef8d22;
    transform: translate(89.9172143086vw, 60.5896372203vh);
    animation-duration: 2.2591286422s;
    animation-delay: -3.3436293949s;
  }
  span:nth-child(61) {
    background-color: #2bd8ff;
    transform: translate(86.129997629vw, 57.7175593668vh);
    animation-duration: 3.3394070906s;
    animation-delay: -1.2058207724s;
  }
  span:nth-child(62) {
    background-color: #ef8d22;
    transform: translate(62.6094040216vw, 64.6028247058vh);
    animation-duration: 2.7708027023s;
    animation-delay: -1.3248560361s;
  }
  span:nth-child(63) {
    background-color: #fc85e1;
    transform: translate(1.4935870167vw, 49.1580693638vh);
    animation-duration: 4.0753471222s;
    animation-delay: -1.1042384607s;
  }
  span:nth-child(64) {
    background-color: #ef8d22;
    transform: translate(49.4229799547vw, 14.4558125829vh);
    animation-duration: 4.6042743538s;
    animation-delay: -1.5068368619s;
  }
  span:nth-child(65) {
    background-color: #2bd8ff;
    transform: translate(24.1752717226vw, 44.959300202vh);
    animation-duration: 2.7140677085s;
    animation-delay: -4.1288509334s;
  }
  span:nth-child(66) {
    background-color: #2bd8ff;
    transform: translate(47.8734263303vw, 94.391925096vh);
    animation-duration: 4.5332114735s;
    animation-delay: -2.9163200431s;
  }
  span:nth-child(67) {
    background-color: #ef8d22;
    transform: translate(78.8655189976vw, 86.980092905vh);
    animation-duration: 2.3004360444s;
    animation-delay: -2.2638107753s;
  }
  span:nth-child(68) {
    background-color: #feff28;
    transform: translate(9.900688433vw, 44.1486399622vh);
    animation-duration: 4.5713456324s;
    animation-delay: -1.6496695177s;
  }
  span:nth-child(69) {
    background-color: #fc85e1;
    transform: translate(69.5673498579vw, 22.4102469728vh);
    animation-duration: 4.5195536497s;
    animation-delay: -2.4477867877s;
  }
  span:nth-child(70) {
    background-color: #fc85e1;
    transform: translate(11.1928628475vw, 56.5732657592vh);
    animation-duration: 4.2452477565s;
    animation-delay: -4.784497837s;
  }
  span:nth-child(71) {
    background-color: #feff28;
    transform: translate(55.2490898496vw, 28.0060803314vh);
    animation-duration: 2.4738318304s;
    animation-delay: -4.2575550351s;
  }
  span:nth-child(72) {
    background-color: #ef8d22;
    transform: translate(47.5206781163vw, 98.1803905721vh);
    animation-duration: 4.4299041867s;
    animation-delay: -1.6544913646s;
  }
  span:nth-child(73) {
    background-color: #fc85e1;
    transform: translate(3.3800457033vw, 87.8857972808vh);
    animation-duration: 2.1543860283s;
    animation-delay: -1.5361790929s;
  }
  span:nth-child(74) {
    background-color: #feff28;
    transform: translate(50.2022983803vw, 53.6621206454vh);
    animation-duration: 3.5498075114s;
    animation-delay: -1.622928478s;
  }
  span:nth-child(75) {
    background-color: #2bd8ff;
    transform: translate(61.4792038272vw, 49.9574099775vh);
    animation-duration: 4.3023511502s;
    animation-delay: -2.5662268689s;
  }
  span:nth-child(76) {
    background-color: #2bd8ff;
    transform: translate(96.8566584025vw, 62.4294941633vh);
    animation-duration: 3.0488542535s;
    animation-delay: -3.2247802825s;
  }
  span:nth-child(77) {
    background-color: #ef8d22;
    transform: translate(39.2082016768vw, 31.510327441vh);
    animation-duration: 3.3263311044s;
    animation-delay: -4.8680742107s;
  }
  span:nth-child(78) {
    background-color: #ef8d22;
    transform: translate(96.5195887397vw, 10.3731475626vh);
    animation-duration: 4.2409467825s;
    animation-delay: -0.7158376764s;
  }
  span:nth-child(79) {
    background-color: #fc85e1;
    transform: translate(60.3099737688vw, 98.3753373411vh);
    animation-duration: 2.5537973442s;
    animation-delay: -0.63998392s;
  }
  span:nth-child(80) {
    background-color: #ef8d22;
    transform: translate(11.5967388759vw, 14.9299043275vh);
    animation-duration: 2.8098590221s;
    animation-delay: -2.4370859968s;
  }
  span:nth-child(81) {
    background-color: #ef8d22;
    transform: translate(74.1223777298vw, 70.1971631522vh);
    animation-duration: 4.2838589963s;
    animation-delay: -3.7401444523s;
  }
  span:nth-child(82) {
    background-color: #feff28;
    transform: translate(84.1015262739vw, 81.3441360981vh);
    animation-duration: 3.2939592107s;
    animation-delay: -1.9150983315s;
  }
  span:nth-child(83) {
    background-color: #fc85e1;
    transform: translate(0.7106752653vw, 36.7850329091vh);
    animation-duration: 4.8849572533s;
    animation-delay: -1.6034485131s;
  }
  span:nth-child(84) {
    background-color: #ef8d22;
    transform: translate(87.8717119902vw, 89.8137587323vh);
    animation-duration: 4.4917909367s;
    animation-delay: -0.6839290268s;
  }
  span:nth-child(85) {
    background-color: #fc85e1;
    transform: translate(57.2928640388vw, 75.8426881671vh);
    animation-duration: 3.1987712966s;
    animation-delay: -0.7031902792s;
  }
  span:nth-child(86) {
    background-color: #fc85e1;
    transform: translate(95.0682843643vw, 18.2581374607vh);
    animation-duration: 2.8925956423s;
    animation-delay: -1.0572694348s;
  }
  span:nth-child(87) {
    background-color: #fc85e1;
    transform: translate(59.0707981851vw, 48.7661464606vh);
    animation-duration: 2.6026617399s;
    animation-delay: -4.8628976688s;
  }
  span:nth-child(88) {
    background-color: #fc85e1;
    transform: translate(41.8052009135vw, 3.1629584265vh);
    animation-duration: 3.9945698031s;
    animation-delay: -3.2234605093s;
  }
  span:nth-child(89) {
    background-color: #2bd8ff;
    transform: translate(47.1542426485vw, 6.2335870209vh);
    animation-duration: 3.2101759535s;
    animation-delay: -4.3446493263s;
  }
  span:nth-child(90) {
    background-color: #feff28;
    transform: translate(55.1752701425vw, 47.3028980994vh);
    animation-duration: 3.7706786674s;
    animation-delay: -3.1945484167s;
  }
  span:nth-child(91) {
    background-color: #2bd8ff;
    transform: translate(64.3680183118vw, 70.2328105992vh);
    animation-duration: 4.9905256372s;
    animation-delay: -3.3445529913s;
  }
  span:nth-child(92) {
    background-color: #fc85e1;
    transform: translate(57.1140237902vw, 90.0487890223vh);
    animation-duration: 3.8901112768s;
    animation-delay: -1.6312829089s;
  }
  span:nth-child(93) {
    background-color: #feff28;
    transform: translate(79.8479180254vw, 50.5459436949vh);
    animation-duration: 2.0763765466s;
    animation-delay: -2.2578885579s;
  }
  span:nth-child(94) {
    background-color: #feff28;
    transform: translate(19.6698287233vw, 25.3724994599vh);
    animation-duration: 2.3036069206s;
    animation-delay: -4.4809995763s;
  }
  span:nth-child(95) {
    background-color: #fc85e1;
    transform: translate(53.2976851652vw, 47.9411811828vh);
    animation-duration: 4.0118610481s;
    animation-delay: -4.5248562455s;
  }
  span:nth-child(96) {
    background-color: #feff28;
    transform: translate(39.9679535656vw, 74.256254716vh);
    animation-duration: 3.4959949039s;
    animation-delay: -3.4307375377s;
  }
  span:nth-child(97) {
    background-color: #feff28;
    transform: translate(22.0090368657vw, 87.5674469503vh);
    animation-duration: 2.1309873931s;
    animation-delay: -2.9910336889s;
  }
  span:nth-child(98) {
    background-color: #ef8d22;
    transform: translate(19.475671768vw, 52.8257337375vh);
    animation-duration: 2.0885845263s;
    animation-delay: -3.3263154797s;
  }
  span:nth-child(99) {
    background-color: #ef8d22;
    transform: translate(64.559290293vw, 91.8668029819vh);
    animation-duration: 4.6404932212s;
    animation-delay: -4.9311549742s;
  }
  span:nth-child(100) {
    background-color: #fc85e1;
    transform: translate(23.7654664572vw, 23.0565546063vh);
    animation-duration: 2.4373894218s;
    animation-delay: -3.7747104339s;
  }

  @keyframes explosion {
    0% {
      opacity: 0;
    }
    70% {
      opacity: 1;
    }
    100% {
      transform: translate(50vw, 100vh);
    }
  }
  .cake {
    position: relative;
    top: 5rem;
    margin: auto;
    width: 4rem;
    height: 1.2rem;
    background: #f9fdff;
    border-radius: 100%;
    transform: translateZ(2rem);
    z-index: 99;
    box-shadow: 0rem 0.08rem 0rem #f4f9fd, 0rem 0.16rem 0rem #dba9ff, 0rem 0.24rem 0rem #fec3b3,
      0rem 0.32rem 0rem #f7f6fb, 0rem 0.4rem 0rem #f7f6fb, 0rem 0.48rem 0rem #f7f6fb,
      0rem 0.56rem 0rem #f7f6fb, 0rem 0.64rem 0rem #fea0bb, 0rem 0.72rem 0rem #fea0bb,
      0rem 0.8rem 0rem #9cef9d, 0rem 0.88rem 0rem #9cef9d, 0rem 0.96rem 0rem #f7f6fb,
      0rem 1.04rem 0rem #f7f6fb, 0rem 1.12rem 0rem #f7f6fb, 0rem 1.2rem 0rem #f7f6fb,
      0rem 1.28rem 0rem #f7f6fb, 0rem 1.36rem 0rem #dfa5fc, 0rem 1.44rem 0rem #dfa5fc,
      0rem 1.52rem 0rem #fafffe, 0rem 1.6rem 0rem #fafffe;
  }

  .plate {
    position: absolute;
    height: 1.8rem;
    width: 6rem;
    bottom: -1.9rem;
    left: 50%;
    top: 7.6rem;
    margin-left: -3rem;
    border-radius: 100%;
    background: radial-gradient(
      ellipse closest-side at center,
      #08c7fe 0%,
      #04d7f2 71%,
      #02ffd0 100%
    );
    box-shadow: 0rem 0.06rem 0rem #00e2e1, 0rem 0.12rem 0rem #00d3fb;
    transform: translateZ(1.6rem);
  }

  .candle {
    position: relative;
    height: 1rem;
    width: 0.24rem;
    top: 5.6rem;
    margin: auto;
    background: linear-gradient(0deg, #b7f4a7 0%, white 100%);
    border-radius: 0.08rem;
    transform: translateZ(2.4rem);
  }

  #flame {
    position: absolute;
    z-index: 10;
  }

  .lit {
    background: linear-gradient(to bottom, #fff6d9, #fbc36c);
    width: 0.3rem;
    height: 0.7rem;
    /*  Info on border radius. http://www.css3.info/preview/rounded-border/ */
    border-top-left-radius: 0.2rem 0.7rem;
    border-top-right-radius: 0.2rem 0.7rem;
    border-bottom-right-radius: 0.2rem 0.2rem;
    border-bottom-left-radius: 0.2rem 0.2rem;
    top: -0.68rem;
    margin: auto;
    /*   http://www.css3.info/preview/box-shadow/ */
    box-shadow: 0 0 0.34rem 0.14rem rgba(251, 246, 190, 0.71);
    transform-origin: bottom;
    animation: flicker 1s ease-in-out alternate infinite;
  }

  @keyframes flicker {
    0% {
      transform: skewX(5deg);
      box-shadow: 0 0 0.34rem 0.2rem rgba(251, 246, 190, 0.71);
    }
    25% {
      transform: skewX(-5deg);
      box-shadow: 0 0 0.34rem 0.1rem rgba(251, 246, 190, 0.71);
    }
    50% {
      transform: skewX(10deg);
      box-shadow: 0 0 0.34rem 0.14rem rgba(251, 246, 190, 0.71);
    }
    75% {
      transform: skewX(-10deg);
      box-shadow: 0 0 0.34rem 0.1rem rgba(251, 246, 190, 0.71);
    }
    100% {
      transform: skewX(5deg);
      box-shadow: 0 0 0.34rem 0.2rem rgba(251, 246, 190, 0.71);
    }
  }
  .pyro > .before,
  .pyro > .after {
    position: fixed;
    width: 0.1rem;
    height: 0.1rem;
    border-radius: 50%;
    box-shadow: 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff,
      0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff,
      0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff,
      0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff,
      0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff,
      0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff,
      0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff,
      0 0 #fff, 0 0 #fff, 0 0 #fff;
    -moz-animation: 1s bang ease-out infinite backwards,
      1s gravity ease-in infinite backwards,
      5s position linear infinite backwards;
    -webkit-animation: 1s bang ease-out infinite backwards,
      1s gravity ease-in infinite backwards,
      5s position linear infinite backwards;
    -o-animation: 1s bang ease-out infinite backwards,
      1s gravity ease-in infinite backwards,
      5s position linear infinite backwards;
    -ms-animation: 1s bang ease-out infinite backwards,
      1s gravity ease-in infinite backwards,
      5s position linear infinite backwards;
    animation: 1s bang ease-out infinite backwards,
      1s gravity ease-in infinite backwards,
      5s position linear infinite backwards;
  }

  .pyro > .after {
    -moz-animation-delay: 1.25s, 1.25s, 1.25s;
    -webkit-animation-delay: 1.25s, 1.25s, 1.25s;
    -o-animation-delay: 1.25s, 1.25s, 1.25s;
    -ms-animation-delay: 1.25s, 1.25s, 1.25s;
    animation-delay: 1.25s, 1.25s, 1.25s;
    -moz-animation-duration: 1.25s, 1.25s, 6.25s;
    -webkit-animation-duration: 1.25s, 1.25s, 6.25s;
    -o-animation-duration: 1.25s, 1.25s, 6.25s;
    -ms-animation-duration: 1.25s, 1.25s, 6.25s;
    animation-duration: 1.25s, 1.25s, 6.25s;
  }

  @-webkit-keyframes bang {
    to {
      box-shadow: -2.2rem -2.0933rem #00ff51, -0.06rem 0.7267rem #5eff00,
        4.98rem -5.9133rem #00ff84, -3.3rem -0.6533rem #ff00e6,
        0.98rem -0.2933rem #ff6600, -0.04rem -7.4133rem #00ddff,
        1.2rem -4.9133rem #ddff00, 2.7rem -4.1133rem #00a6ff,
        2.78rem -4.0933rem #ff00fb, -0.72rem -3.1133rem #00ff48,
        -1.5rem 0.1667rem #00ff84, -4.04rem -2.7933rem #00ff0d,
        2.46rem -1.6933rem #00ffaa, 0.74rem -7.9333rem #6aff00,
        -3.14rem -2.6933rem #ff5900, 0.14rem 0.1267rem #ffbb00,
        4.44rem -0.3133rem #66ff00, -2.28rem -0.8133rem #ffb700,
        -2.54rem -0.9933rem #ffb300, 2.6rem -1.2733rem #0080ff,
        2.78rem -0.2333rem #0077ff, -3.34rem -6.0333rem #ff00e6,
        1.1rem -4.4533rem #62ff00, 0.24rem -0.2133rem #95ff00,
        -4.8rem -2.2933rem #ff9900, -1.56rem -4.2133rem blue,
        3.5rem -2.8533rem #3700ff, 1.66rem -6.3333rem #ff00c4,
        1.38rem -7.8133rem #ff0040, -3.36rem -7.2333rem #00aaff,
        -0.88rem -1.7533rem #0040ff, 4.7rem -8.3133rem #ffae00,
        0.9rem 1.1067rem #00ff0d, -1.22rem -0.0533rem #e600ff,
        -4.5rem -1.1933rem #59ff00, -0.6rem 0.9667rem #00f7ff,
        4.22rem -3.4133rem #f700ff, -3.3rem -4.1933rem #37ff00,
        -2.62rem -6.1333rem #00ff66, -2.74rem 1.0867rem red,
        0.84rem -7.9533rem #00e1ff, 4.6rem -5.0133rem #ff4d00,
        -3.44rem -6.7133rem #000dff, 2.86rem -6.8533rem #04ff00,
        -1.52rem -3.8933rem #fff200, -4.74rem -3.3333rem #00a6ff,
        -3.44rem -3.5733rem #d0ff00, 1.02rem -1.4533rem #1500ff,
        -4.12rem 0.6867rem #ff0015, 1.02rem 0.2267rem #ff0400,
        -2.98rem -4.3133rem #ff0048;
    }
  }
  @-moz-keyframes bang {
    to {
      box-shadow: -2.2rem -2.0933rem #00ff51, -0.06rem 0.7267rem #5eff00,
        4.98rem -5.9133rem #00ff84, -3.3rem -0.6533rem #ff00e6,
        0.98rem -0.2933rem #ff6600, -0.04rem -7.4133rem #00ddff,
        1.2rem -4.9133rem #ddff00, 2.7rem -4.1133rem #00a6ff,
        2.78rem -4.0933rem #ff00fb, -0.72rem -3.1133rem #00ff48,
        -1.5rem 0.1667rem #00ff84, -4.04rem -2.7933rem #00ff0d,
        2.46rem -1.6933rem #00ffaa, 0.74rem -7.9333rem #6aff00,
        -3.14rem -2.6933rem #ff5900, 0.14rem 0.1267rem #ffbb00,
        4.44rem -0.3133rem #66ff00, -2.28rem -0.8133rem #ffb700,
        -2.54rem -0.9933rem #ffb300, 2.6rem -1.2733rem #0080ff,
        2.78rem -0.2333rem #0077ff, -3.34rem -6.0333rem #ff00e6,
        1.1rem -4.4533rem #62ff00, 0.24rem -0.2133rem #95ff00,
        -4.8rem -2.2933rem #ff9900, -1.56rem -4.2133rem blue,
        3.5rem -2.8533rem #3700ff, 1.66rem -6.3333rem #ff00c4,
        1.38rem -7.8133rem #ff0040, -3.36rem -7.2333rem #00aaff,
        -0.88rem -1.7533rem #0040ff, 4.7rem -8.3133rem #ffae00,
        0.9rem 1.1067rem #00ff0d, -1.22rem -0.0533rem #e600ff,
        -4.5rem -1.1933rem #59ff00, -0.6rem 0.9667rem #00f7ff,
        4.22rem -3.4133rem #f700ff, -3.3rem -4.1933rem #37ff00,
        -2.62rem -6.1333rem #00ff66, -2.74rem 1.0867rem red,
        0.84rem -7.9533rem #00e1ff, 4.6rem -5.0133rem #ff4d00,
        -3.44rem -6.7133rem #000dff, 2.86rem -6.8533rem #04ff00,
        -1.52rem -3.8933rem #fff200, -4.74rem -3.3333rem #00a6ff,
        -3.44rem -3.5733rem #d0ff00, 1.02rem -1.4533rem #1500ff,
        -4.12rem 0.6867rem #ff0015, 1.02rem 0.2267rem #ff0400,
        -2.98rem -4.3133rem #ff0048;
    }
  }
  @-o-keyframes bang {
    to {
      box-shadow: -2.2rem -2.0933rem #00ff51, -0.06rem 0.7267rem #5eff00,
        4.98rem -5.9133rem #00ff84, -3.3rem -0.6533rem #ff00e6,
        0.98rem -0.2933rem #ff6600, -0.04rem -7.4133rem #00ddff,
        1.2rem -4.9133rem #ddff00, 2.7rem -4.1133rem #00a6ff,
        2.78rem -4.0933rem #ff00fb, -0.72rem -3.1133rem #00ff48,
        -1.5rem 0.1667rem #00ff84, -4.04rem -2.7933rem #00ff0d,
        2.46rem -1.6933rem #00ffaa, 0.74rem -7.9333rem #6aff00,
        -3.14rem -2.6933rem #ff5900, 0.14rem 0.1267rem #ffbb00,
        4.44rem -0.3133rem #66ff00, -2.28rem -0.8133rem #ffb700,
        -2.54rem -0.9933rem #ffb300, 2.6rem -1.2733rem #0080ff,
        2.78rem -0.2333rem #0077ff, -3.34rem -6.0333rem #ff00e6,
        1.1rem -4.4533rem #62ff00, 0.24rem -0.2133rem #95ff00,
        -4.8rem -2.2933rem #ff9900, -1.56rem -4.2133rem blue,
        3.5rem -2.8533rem #3700ff, 1.66rem -6.3333rem #ff00c4,
        1.38rem -7.8133rem #ff0040, -3.36rem -7.2333rem #00aaff,
        -0.88rem -1.7533rem #0040ff, 4.7rem -8.3133rem #ffae00,
        0.9rem 1.1067rem #00ff0d, -1.22rem -0.0533rem #e600ff,
        -4.5rem -1.1933rem #59ff00, -0.6rem 0.9667rem #00f7ff,
        4.22rem -3.4133rem #f700ff, -3.3rem -4.1933rem #37ff00,
        -2.62rem -6.1333rem #00ff66, -2.74rem 1.0867rem red,
        0.84rem -7.9533rem #00e1ff, 4.6rem -5.0133rem #ff4d00,
        -3.44rem -6.7133rem #000dff, 2.86rem -6.8533rem #04ff00,
        -1.52rem -3.8933rem #fff200, -4.74rem -3.3333rem #00a6ff,
        -3.44rem -3.5733rem #d0ff00, 1.02rem -1.4533rem #1500ff,
        -4.12rem 0.6867rem #ff0015, 1.02rem 0.2267rem #ff0400,
        -2.98rem -4.3133rem #ff0048;
    }
  }
  @-ms-keyframes bang {
    to {
      box-shadow: -2.2rem -2.0933rem #00ff51, -0.06rem 0.7267rem #5eff00,
        4.98rem -5.9133rem #00ff84, -3.3rem -0.6533rem #ff00e6,
        0.98rem -0.2933rem #ff6600, -0.04rem -7.4133rem #00ddff,
        1.2rem -4.9133rem #ddff00, 2.7rem -4.1133rem #00a6ff,
        2.78rem -4.0933rem #ff00fb, -0.72rem -3.1133rem #00ff48,
        -1.5rem 0.1667rem #00ff84, -4.04rem -2.7933rem #00ff0d,
        2.46rem -1.6933rem #00ffaa, 0.74rem -7.9333rem #6aff00,
        -3.14rem -2.6933rem #ff5900, 0.14rem 0.1267rem #ffbb00,
        4.44rem -0.3133rem #66ff00, -2.28rem -0.8133rem #ffb700,
        -2.54rem -0.9933rem #ffb300, 2.6rem -1.2733rem #0080ff,
        2.78rem -0.2333rem #0077ff, -3.34rem -6.0333rem #ff00e6,
        1.1rem -4.4533rem #62ff00, 0.24rem -0.2133rem #95ff00,
        -4.8rem -2.2933rem #ff9900, -1.56rem -4.2133rem blue,
        3.5rem -2.8533rem #3700ff, 1.66rem -6.3333rem #ff00c4,
        1.38rem -7.8133rem #ff0040, -3.36rem -7.2333rem #00aaff,
        -0.88rem -1.7533rem #0040ff, 4.7rem -8.3133rem #ffae00,
        0.9rem 1.1067rem #00ff0d, -1.22rem -0.0533rem #e600ff,
        -4.5rem -1.1933rem #59ff00, -0.6rem 0.9667rem #00f7ff,
        4.22rem -3.4133rem #f700ff, -3.3rem -4.1933rem #37ff00,
        -2.62rem -6.1333rem #00ff66, -2.74rem 1.0867rem red,
        0.84rem -7.9533rem #00e1ff, 4.6rem -5.0133rem #ff4d00,
        -3.44rem -6.7133rem #000dff, 2.86rem -6.8533rem #04ff00,
        -1.52rem -3.8933rem #fff200, -4.74rem -3.3333rem #00a6ff,
        -3.44rem -3.5733rem #d0ff00, 1.02rem -1.4533rem #1500ff,
        -4.12rem 0.6867rem #ff0015, 1.02rem 0.2267rem #ff0400,
        -2.98rem -4.3133rem #ff0048;
    }
  }
  @keyframes bang {
    to {
      box-shadow: -2.2rem -2.0933rem #00ff51, -0.06rem 0.7267rem #5eff00,
        4.98rem -5.9133rem #00ff84, -3.3rem -0.6533rem #ff00e6,
        0.98rem -0.2933rem #ff6600, -0.04rem -7.4133rem #00ddff,
        1.2rem -4.9133rem #ddff00, 2.7rem -4.1133rem #00a6ff,
        2.78rem -4.0933rem #ff00fb, -0.72rem -3.1133rem #00ff48,
        -1.5rem 0.1667rem #00ff84, -4.04rem -2.7933rem #00ff0d,
        2.46rem -1.6933rem #00ffaa, 0.74rem -7.9333rem #6aff00,
        -3.14rem -2.6933rem #ff5900, 0.14rem 0.1267rem #ffbb00,
        4.44rem -0.3133rem #66ff00, -2.28rem -0.8133rem #ffb700,
        -2.54rem -0.9933rem #ffb300, 2.6rem -1.2733rem #0080ff,
        2.78rem -0.2333rem #0077ff, -3.34rem -6.0333rem #ff00e6,
        1.1rem -4.4533rem #62ff00, 0.24rem -0.2133rem #95ff00,
        -4.8rem -2.2933rem #ff9900, -1.56rem -4.2133rem blue,
        3.5rem -2.8533rem #3700ff, 1.66rem -6.3333rem #ff00c4,
        1.38rem -7.8133rem #ff0040, -3.36rem -7.2333rem #00aaff,
        -0.88rem -1.7533rem #0040ff, 4.7rem -8.3133rem #ffae00,
        0.9rem 1.1067rem #00ff0d, -1.22rem -0.0533rem #e600ff,
        -4.5rem -1.1933rem #59ff00, -0.6rem 0.9667rem #00f7ff,
        4.22rem -3.4133rem #f700ff, -3.3rem -4.1933rem #37ff00,
        -2.62rem -6.1333rem #00ff66, -2.74rem 1.0867rem red,
        0.84rem -7.9533rem #00e1ff, 4.6rem -5.0133rem #ff4d00,
        -3.44rem -6.7133rem #000dff, 2.86rem -6.8533rem #04ff00,
        -1.52rem -3.8933rem #fff200, -4.74rem -3.3333rem #00a6ff,
        -3.44rem -3.5733rem #d0ff00, 1.02rem -1.4533rem #1500ff,
        -4.12rem 0.6867rem #ff0015, 1.02rem 0.2267rem #ff0400,
        -2.98rem -4.3133rem #ff0048;
    }
  }
  @-webkit-keyframes gravity {
    to {
      transform: translateY(4rem);
      -moz-transform: translateY(4rem);
      -webkit-transform: translateY(4rem);
      -o-transform: translateY(4rem);
      -ms-transform: translateY(4rem);
      opacity: 0;
    }
  }
  @-moz-keyframes gravity {
    to {
      transform: translateY(4rem);
      -moz-transform: translateY(4rem);
      -webkit-transform: translateY(4rem);
      -o-transform: translateY(4rem);
      -ms-transform: translateY(4rem);
      opacity: 0;
    }
  }
  @-o-keyframes gravity {
    to {
      transform: translateY(4rem);
      -moz-transform: translateY(4rem);
      -webkit-transform: translateY(4rem);
      -o-transform: translateY(4rem);
      -ms-transform: translateY(4rem);
      opacity: 0;
    }
  }
  @-ms-keyframes gravity {
    to {
      transform: translateY(4rem);
      -moz-transform: translateY(4rem);
      -webkit-transform: translateY(4rem);
      -o-transform: translateY(4rem);
      -ms-transform: translateY(4rem);
      opacity: 0;
    }
  }
  @keyframes gravity {
    to {
      transform: translateY(4rem);
      -moz-transform: translateY(4rem);
      -webkit-transform: translateY(4rem);
      -o-transform: translateY(4rem);
      -ms-transform: translateY(4rem);
      opacity: 0;
    }
  }
  @-webkit-keyframes position {
    0%,
    19.9% {
      margin-top: 10%;
      margin-left: 40%;
    }
    20%,
    39.9% {
      margin-top: 40%;
      margin-left: 30%;
    }
    40%,
    59.9% {
      margin-top: 20%;
      margin-left: 70%;
    }
    60%,
    79.9% {
      margin-top: 30%;
      margin-left: 20%;
    }
    80%,
    99.9% {
      margin-top: 30%;
      margin-left: 80%;
    }
  }
  @-moz-keyframes position {
    0%,
    19.9% {
      margin-top: 10%;
      margin-left: 40%;
    }
    20%,
    39.9% {
      margin-top: 40%;
      margin-left: 30%;
    }
    40%,
    59.9% {
      margin-top: 20%;
      margin-left: 70%;
    }
    60%,
    79.9% {
      margin-top: 30%;
      margin-left: 20%;
    }
    80%,
    99.9% {
      margin-top: 30%;
      margin-left: 80%;
    }
  }
  @-o-keyframes position {
    0%,
    19.9% {
      margin-top: 10%;
      margin-left: 40%;
    }
    20%,
    39.9% {
      margin-top: 40%;
      margin-left: 30%;
    }
    40%,
    59.9% {
      margin-top: 20%;
      margin-left: 70%;
    }
    60%,
    79.9% {
      margin-top: 30%;
      margin-left: 20%;
    }
    80%,
    99.9% {
      margin-top: 30%;
      margin-left: 80%;
    }
  }
  @-ms-keyframes position {
    0%,
    19.9% {
      margin-top: 10%;
      margin-left: 40%;
    }
    20%,
    39.9% {
      margin-top: 40%;
      margin-left: 30%;
    }
    40%,
    59.9% {
      margin-top: 20%;
      margin-left: 70%;
    }
    60%,
    79.9% {
      margin-top: 30%;
      margin-left: 20%;
    }
    80%,
    99.9% {
      margin-top: 30%;
      margin-left: 80%;
    }
  }
  @keyframes position {
    0%,
    19.9% {
      margin-top: 10%;
      margin-left: 40%;
    }
    20%,
    39.9% {
      margin-top: 40%;
      margin-left: 30%;
    }
    40%,
    59.9% {
      margin-top: 20%;
      margin-left: 70%;
    }
    60%,
    79.9% {
      margin-top: 30%;
      margin-left: 20%;
    }
    80%,
    99.9% {
      margin-top: 30%;
      margin-left: 80%;
    }
  }
}
</style>