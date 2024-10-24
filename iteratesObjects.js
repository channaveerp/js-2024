// // i have netsed objects
// // inside that i want get key and value
// // only on if they have anfd value

// const obj = {
//   obj1: {
//     obj2: {
//       obj3: {
//         obj4: {
//           obj5: {
//             myname: 'channa',
//           },
//         },
//       },
//     },
//   },
// };
// // console.log('hiii', obj);

// function iterates(obj) {
//   for (const key in obj) {
//     console.log('iterating', key);
//     //  first it should be type should be object && it should havbe vkey and value or not nul
//     if (typeof Object.keys(obj) === Object && Object.key(obj) !== null) {
//       console.log('nested', key);
//       iterates(obj(key));
//     }
//     else{
//         // console.log(`${key}:${obj[key]}`)
//         console.log(`${key}: ${obj[key]}`);
//     }
//   }
// }
// iterates(obj);

function iterates(obj) {
    for (const key in obj) {
      console.log('iterating', key);
      
      // Check if the value is an object and not null
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        console.log('nested', key);
        iterates(obj[key]); // Correctly accessing the nested object
      } else {
        console.log(`${key}: ${obj[key]}`); // Print the key-value pair
      }
    }
  }
  
  // Example object to test
  const obj = {
    obj1: {
      obj2: {
        obj3: {
          obj4: {
            obj5: {
              myname: 'channa',
            },
          },
        },
      },
    },
  };
  
  // Call the function
  iterates(obj);
  