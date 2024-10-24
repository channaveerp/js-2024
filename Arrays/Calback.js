// // get dosa and chetni
// const masalaDosaAndMysureMalsa = (mysureMasala) => {
//   console.log('masalaDosa is ready to eat');
//   mysureMasala();
// };

// const mysureMasala = () => {
//   setTimeout(() => {
//     console.log('mysurMasala Dosa also ready to eat');
//   }, 2000);
// };

// masalaDosaAndMysureMalsa(mysureMasala);

// replcaing Promise into callback function

// const masaDosa = new Promise((resolve, reject) => {
//   let mysureMasala = false;
//   if (mysureMasala) {
//     resolve('mysureMasala Dosa already ready to eat');
//   } else {
//     reject('mysureMasala Dosa not ready');
//   }
// });

// const makeDosa = async () => {
//   try {
//     const dosa = await masaDosa();
//     console.log(dosa);
//   } catch (err) {
//     console.log('err', err);
//   }
// };
// makeDosa();

// masaDosa
//   .then((dosa) => {
//     console.log(dosa);
//   })
//   .catch((err) => {
//     console.log('err', err);
//   });

// async await masaDosaAndMysureMalsa

// function caluclateOperation(a, b, operation) {
//   return operation(a * b);
// }

// caluclateOperation(3, 5, (operation) => {
//   console.log('operation', operation);
// });

// function masalaDosa(cheteny, samber, dosa, processing) {
//   return processing(cheteny, samber, dosa);
// }

// masalaDosa(1, 1, '1plate', (processing) => {
//   console.log('ur final dosa is ready', processing);
// });

// function masalaDosa(cheteny, samber, dosa, processing) {
//     // Invoke the callback function with the three arguments
//     return processing(cheteny, samber, dosa);
//   }

//   // Pass a callback function that accepts all three arguments
//   masalaDosa('1cup', '1cup', '1dosa', (cheteny, samber, dosa) => {
//     console.log('Your final dosa is ready with', cheteny, 'cheteny,', samber, 'samber, and', dosa);
//   });

// idli>rava>rice
function getrice(callback) {
  setTimeout(() => {
    let akki = '❤️';
    callback(akki);
    console.log('akki is ready', akki);
  }, 2000);
}

function getrava(rava, callback) {
  setTimeout(() => {
    let rava = '😍';
    callback(rava);
    console.log('rava is ready', rava);
  }, 2000);
}
function getuppit(callback) {
  setTimeout(() => {
    let uppit = '😘';
    callback(uppit);
    console.log('uppit is ready', uppit);
  }, 2000);
}

getrice((rice) => {
  getrava(rice, (rava) => {
    getuppit(rava, (uppit) => {
      console.log('uppit is ready', uppit);
    });
  });
});
