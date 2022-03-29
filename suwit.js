function getPilihanComputer() {
  const comp = Math.random();
  if( comp < 0.34 ) return 'gajah';
  if( comp >= 0.34 && comp < 0.67 ) return 'orang';
  return 'semut';
}

function getHasil(comp, player) {
  if( player == comp ) return 'SERI!';
  if( player == 'gajah' ) return ( comp == 'orang' ) ? 'MENANG!' : 'KALAH!';
  if( player == 'orang' ) return ( comp == 'gajah' ) ? 'KALAH!' : 'MENANG!';
  if( player == 'semut' ) return ( comp == 'orang' ) ? 'KALAH' : 'MENANG!';
}
const jempol = document.querySelector('.gajah');

jempol.addEventListener('click', function() {
  const pilihanComputer = getPilihanComputer();
  const pilihanPlayer = jempol.className;
  const hasil = getHasil(pilihanComputer, pilihanPlayer);
  console.log('comp :' + pilihanComputer);
  console.log('player :' + pilihanPlayer);
  console.log('hasil :' +  hasil);

  const imgComp = document.querySelector('.img-komputer');
  imgComp.setAttribute('src', pilihanComputer +'.png');

  const info = document.querySelector('.info');
  info.innerHTML = hasil;
});
const telunjuk = document.querySelector('.orang');

telunjuk.addEventListener('click', function() {
  const pilihanComputer = getPilihanComputer();
  const pilihanPlayer = telunjuk.className;
  const hasil = getHasil(pilihanComputer, pilihanPlayer);
  console.log('comp :' + pilihanComputer);
  console.log('player :' + pilihanPlayer);
  console.log('hasil :' +  hasil);

  const imgComp = document.querySelector('.img-komputer');
  imgComp.setAttribute('src', pilihanComputer +'.png');

  const info = document.querySelector('.info');
  info.innerHTML = hasil;
});
const kelingking = document.querySelector('.semut');

kelingking.addEventListener('click', function() {
  const pilihanComputer = getPilihanComputer();
  const pilihanPlayer = kelingking.className;
  const hasil = getHasil(pilihanComputer, pilihanPlayer);
  console.log('comp :' + pilihanComputer);
  console.log('player :' + pilihanPlayer);
  console.log('hasil :' +  hasil);

  const imgComp = document.querySelector('.img-komputer');
  imgComp.setAttribute('src', pilihanComputer +'.png');

  const info = document.querySelector('.info');
  info.innerHTML = hasil;
});
