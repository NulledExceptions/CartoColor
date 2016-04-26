!function() {

var cartocolor = {Green1: {
2: ["#296B3B","#FAFCA4"],
3: ["#296B3B","#8EB26A","#FAFCA4"],
4: ["#296B3B","#6D9A5A","#B1CB7B","#FAFCA4"],
5: ["#296B3B","#5C8E52","#8EB26A","#C2D785","#FAFCA4"],
6: ["#296B3B","#52874D","#7AA460","#A3C174","#CDDE8B","#FAFCA4"],
7: ["#296B3B","#4C824A","#6D9A5A","#8EB26A","#B1CB7B","#D4E38F","#FAFCA4"]
},Green2: {
2: ["#007553","#cafdd8"],
3: ["#007553","#67cda3","#cafdd8"],
4: ["#007553","#34b289","#8fe2b8","#cafdd8"],
5: ["#007553","#00A47D","#67CDA3","#A2EDC3","#CAFDD8"],
6: ["#007553","#009a74","#4bbc94","#7fdab0","#aaf0c7","#cafdd8"],
7: ["#007553","#00946f","#34b289","#67cda3","#8fe2b8","#b0f2ca","#cafdd8"]
},Green3: {
2: ["#008080","#dfe895"],
3: ["#008080","#7dbb7d","#dfe895"],
4: ["#008080","#5da87e","#9bcf7d","#dfe895"],
5: ["#008080","#4d9e7f","#7dbb7d","#acd87e","#dfe895"],
6: ["#008080","#43987f","#6ab07e","#8fc77d","#b5de7f","#dfe895"],
7: ["#008080","#3b947f","#5da87e","#7dbb7d","#9bcf7d","#bce27f","#dfe895"]
},Green4: {
2: ["#0f4b51","#ebf49d"],
3: ["#0f4b51","#6da06f","#ebf49d"],
4: ["#0f4b51","#518266","#8fbe7b","#ebf49d"],
5: ["#0f4b51","#437461","#6da06f","#a6cb83","#ebf49d"],
6: ["#0f4b51","#3a6b5d","#5c8e6a","#81b276","#b4d389","#ebf49d"],
7: ["#0f4b51","#34665b","#518266","#6da06f","#8fbe7b","#bdd88c","#ebf49d"]
},Khaki1: {
2: ["#324546","#f9ebb2"],
3: ["#324546","#909e74","#f9ebb2"],
4: ["#324546","#6e7f61","#b4bc89","#f9ebb2"],
5: ["#324546","#5e6e5a","#909e74","#c7c894","#f9ebb2"],
6: ["#324546","#546455","#7b8b69","#a5b081","#d2d09b","#f9ebb2"],
7: ["#324546","#4e5e52","#6e7f61","#909e74","#b4bc89","#DAD59F","#f9ebb2"]
},Emrld1: {
2: ["#074050","#d3f2a3"],
3: ["#074050","#4c9b82","#d3f2a3"],
4: ["#074050","#217a79","#6cc08b","#d3f2a3"],
5: ["#074050","#19696f","#4c9b82","#82d091","#d3f2a3"],
6: ["#074050","#145f69","#35877d","#60b187","#8fda94","#d3f2a3"],
7: ["#074050","#105965","#217a79","#4c9b82","#6cc08b","#97e196","#d3f2a3"]
},Blue1: {
2: ["#00477b","#e0ece7"],
3: ["#00477b","#649baa","#e0ece7"],
4: ["#00477b","#437f99","#8cb6bd","#e0ece7"],
5: ["#00477B","#317290","#649BAA","#9FC4C7","#E0ECE7"],
6: ["#00477b","#2a698c","#518aa0","#7cabb6","#accccd","#e0ece7"],
7: ["#00477b","#266389","#437f99","#649baa","#8cb6bd","#b5d1d2","#e0ece7"]
},Teal1: {
2: ["#00718E","#C1F2EB"],
3: ["#00718E","#52B1B8","#C1F2EB"],
4: ["#00718E","#1F9BA9","#77C7C8","#C1F2EB"],
5: ["#00718E","#0090A2","#52B1B8","#89D2D0","#C1F2EB"],
6: ["#00718E","#008A9E","#37A4AF","#69BEC1","#94D8D5","#C1F2EB"],
7: ["#00718E","#00869B","#1F9BA9","#52B1B8","#77C7C8","#9BDDD9","#C1F2EB"]
},Teal2: {
2: ["#005777","#b2eee6"],
3: ["#005777","#37a4ab","#b2eee6"],
4: ["#005777","#1a8a98","#69bebf","#b2eee6"],
5: ["#005777","#007D8F","#37A4AB","#7ECBC9","#B2EEE6"],
6: ["#005777","#01758a","#2794a0","#57b3b7","#89d2cf","#b2eee6"],
7: ["#005777","#017087","#1a8a98","#37a4ab","#69bebf","#90d7d3","#b2eee6"]
},BluYl1: {
2: ["#045275","#f7feae"],
3: ["#045275","#46aea0","#f7feae"],
4: ["#045275","#089099","#7ccba2","#f7feae"],
5: ["#045275","#058092","#46aea0","#9bd8a4","#f7feae"],
6: ["#045275","#02778e","#2a9c9c","#68bfa1","#ace1a4","#f7feae"],
7: ["#045275","#00718b","#089099","#46aea0","#7ccba2","#b7e6a5","#f7feae"]
},BluYl2: {
2: ["#195a7e","#fff2b0"],
3: ["#195a7e","#59ae9c","#fff2b0"],
4: ["#195a7e","#2a9399","#8dc79d","#fff2b0"],
5: ["#195a7e","#168595","#59ae9c","#a8d39e","#fff2b0"],
6: ["#195a7e","#0c7c92","#3c9e9a","#77bd9c","#b9daa0","#fff2b0"],
7: ["#195a7e","#08778f","#2a9399","#59ae9c","#8dc79d","#c4dea2","#fff2b0"]
},Mint1: {
2: ["#246580","#e3efcd"],
3: ["#246580","#4cb2a0","#e3efcd"],
4: ["#246580","#399896","#86c6af","#e3efcd"],
5: ["#246580","#358b91","#4cb2a0","#9ed0b6","#e3efcd"],
6: ["#246580","#32838d","#41a29a","#71bea9","#acd7bb","#e3efcd"],
7: ["#246580","#307e8b","#399896","#4cb2a0","#86c6af","#b5dbbe","#e3efcd"]
},Mint2: {
2: ["#0d585f","#e4f1e1"],
3: ["#0d585f","#63a6a0","#e4f1e1"],
4: ["#0d585f","#448c8a","#89c0b6","#e4f1e1"],
5: ["#0D585F","#337F7F","#63A6A0","#9CCDC1","#E4F1E1"],
6: ["#0d585f","#2c7778","#509693","#7ab5ad","#abd4c7","#e4f1e1"],
7: ["#0d585f","#287274","#448c8a","#63a6a0","#89c0b6","#b4d9cc","#e4f1e1"]
},Mint3: {
2: ["#123f5a","#d2fbd4"],
3: ["#123f5a","#559c9e","#d2fbd4"],
4: ["#123f5a","#3a7c89","#7bbcb0","#d2fbd4"],
5: ["#123f5a","#2b6c7f","#559c9e","#8eccb9","#d2fbd4"],
6: ["#123f5a","#266377","#458892","#6cafa9","#9cd5be","#d2fbd4"],
7: ["#123f5a","#235d72","#3a7c89","#559c9e","#7bbcb0","#a5dbc2","#d2fbd4"]
},TealPink1: {
2: ["#3094b1","#ffe2ff"],
3: ["#3094b1","#a6b9e4","#ffe2ff"],
4: ["#3094b1","#83acd7","#c7c5ef","#ffe2ff"],
5: ["#3094b1","#70a6cf","#a6b9e4","#d6ccf3","#ffe2ff"],
6: ["#3094b1","#64a3c9","#91b1dd","#bac0eb","#dfd0f6","#ffe2ff"],
7: ["#3094b1","#5ca0c6","#83acd7","#a6b9e4","#c7c5ef","#e5d3f7","#ffe2ff"]
},BluPurp1: {
2: ["#3e57b5","#f9e1f9"],
3: ["#3e57b5","#caaafc","#f9e1f9"],
4: ["#3e57b5","#a08ce4","#dfbbf9","#f9e1f9"],
5: ["#3e57b5","#8a7ed8","#caaafc","#e7c4f8","#f9e1f9"],
6: ["#3e57b5","#7c76d1","#b198ee","#d7b4fa","#ecc9f8","#f9e1f9"],
7: ["#3e57b5","#7371cc","#a08ce4","#caaafc","#dfbbf9","#eecdf8","#f9e1f9"]
},Purp1: {
2: ["#5c308c","#ffc2c7"],
3: ["#5c308c","#c753a8","#ffc2c7"],
4: ["#5c308c","#a640a2","#e76cac","#ffc2c7"],
5: ["#5c308c","#953a9e","#c753a8","#f37daf","#ffc2c7"],
6: ["#5c308c","#8a379b","#b348a4","#da62aa","#fa86b0","#ffc2c7"],
7: ["#5C308C","#833599","#A640A2","#C753A8","#E76CAC","#FF8DB1","#FFC2C7"]
},Purp2: {
2: ["#443f7a","#ffe6ff"],
3: ["#443f7a","#ab8cb9","#ffe6ff"],
4: ["#443f7a","#8a71a3","#cca9d0","#ffe6ff"],
5: ["#443f7a","#796498","#ab8cb9","#dbb8dc","#ffe6ff"],
6: ["#443f7a","#6f5c91","#977cac","#bf9dc7","#e5c1e3","#ffe6ff"],
7: ["#443F7A","#68578D","#8A71A3","#AB8CB9","#CCA9D0","#EBC7E8","#FFE6FF"]
},Purp3: {
2: ["#5a3783","#ead0d7"],
3: ["#5a3783","#ad7bae","#ead0d7"],
4: ["#5a3783","#9462a1","#c496bb","#ead0d7"],
5: ["#5a3783","#87569a","#ad7bae","#cea4c2","#ead0d7"],
6: ["#5a3783","#7e5096","#9e6ca6","#bb8bb6","#d4adc5","#ead0d7"],
7: ["#5A3783","#794B93","#9462A1","#AD7BAE","#C496BB","#D8B3C8","#EAD0D7"]
},Purp4: {
2: ["#4b3c80","#ffd1e2"],
3: ["#4b3c80","#b97db2","#ffd1e2"],
4: ["#4b3c80","#9665a1","#d897c1","#ffd1e2"],
5: ["#4B3C80","#855A99","#B97DB2","#E8A5C9","#FFD1E2"],
6: ["#4b3c80","#7a5494","#a46fa8","#cc8dbb","#edaece","#ffd1e2"],
7: ["#4b3c80","#725091","#9665a1","#b97db2","#d897c1","#f0b4d1","#ffd1e2"]
},Sunset1: {
2: ["#7F56B4","#FFEAB0"],
3: ["#7F56B4","#F591B7","#FFEAB0"],
4: ["#7F56B4","#D977BC","#FFAFB1","#FFEAB0"],
5: ["#7F56B4","#C76CBC","#F591B7","#FFBEAF","#FFEAB0"],
6: ["#7F56B4","#BB66BC","#E581BB","#FFA3B4","#FFC7AE","#FFEAB0"],
7: ["#7F56B4","#B363BB","#D977BC","#F591B7","#FFAFB1","#FFCDAD","#FFEAB0"]
},Sunset2: {
2: ["#5c53a5","#f3e79b"],
3: ["#5c53a5","#eb7f86","#f3e79b"],
4: ["#5c53a5","#ce6693","#f8a07e","#f3e79b"],
5: ["#5c53a5","#b95e9a","#eb7f86","#fab27f","#f3e79b"],
6: ["#5c53a5","#ab5b9e","#dc6f8e","#f59280","#fabc82","#f3e79b"],
7: ["#5c53a5","#a059a0","#ce6693","#eb7f86","#f8a07e","#fac484","#f3e79b"]
},Sunset3: {
2: ["#e15383","#fef6b5"],
3: ["#e15383","#ffa679","#fef6b5"],
4: ["#e15383","#fa8a76","#ffc285","#fef6b5"],
5: ["#e15383","#f67b77","#ffa679","#ffd08e","#fef6b5"],
6: ["#e15383","#f37378","#fd9576","#ffb77f","#ffd795","#fef6b5"],
7: ["#e15383","#f16d7a","#fa8a76","#ffa679","#ffc285","#ffdd9a","#fef6b5"]
},Magnt1: {
2: ["#6f2a72","#ffbec4"],
3: ["#6f2a72","#bc3e8b","#ffbec4"],
4: ["#6f2a72","#a23784","#d76a97","#ffbec4"],
5: ["#6f2a72","#953480","#bc3e8b","#e37fa0","#ffbec4"],
6: ["#6f2a72","#8d327e","#ac3a87","#cd5992","#e98ba6","#ffbec4"],
7: ["#6f2a72","#88307c","#a23784","#bc3e8b","#d76a97","#ed94aa","#ffbec4"]
},Burg1: {
2: ["#581c3b","#ffd5d2"],
3: ["#581c3b","#cc607d","#ffd5d2"],
4: ["#581c3b","#ab4269","#e78393","#ffd5d2"],
5: ["#581c3b","#97365e","#cc607d","#f097a0","#ffd5d2"],
6: ["#581c3b","#8b3058","#b84e71","#dc758a","#f6a3a9","#ffd5d2"],
7: ["#581c3b","#832b54","#ab4269","#cc607d","#e78393","#f9abae","#ffd5d2"]
},Burg2: {
2: ["#672044","#ffc6c4"],
3: ["#672044","#cc607d","#ffc6c4"],
4: ["#672044","#ad466c","#e38191","#ffc6c4"],
5: ["#672044","#9e3963","#cc607d","#ee919b","#ffc6c4"],
6: ["#672044","#93345d","#b95073","#da7489","#f29ca3","#ffc6c4"],
7: ["#672044","#8b3058","#ad466c","#cc607d","#e38191","#f4a3a8","#ffc6c4"]
},RedOr1: {
2: ["#a53460","#f9e0a3"],
3: ["#a53460","#dd886b","#f9e0a3"],
4: ["#a53460","#ce6b63","#e8a678","#f9e0a3"],
5: ["#a53460","#c65d61","#dd886b","#edb480","#f9e0a3"],
6: ["#a53460","#c05461","#d47766","#e49a72","#efbd86","#f9e0a3"],
7: ["#a53460","#bc4f60","#ce6b63","#dd886b","#e8a678","#f1c38a","#f9e0a3"]
},OrYel1: {
2: ["#f2954b","#fafebd"],
3: ["#f2954b","#f3cd7a","#fafebd"],
4: ["#f2954b","#f3bb67","#f5de8e","#fafebd"],
5: ["#f2954b","#f3b25f","#f3cd7a","#f5e69a","#fafebd"],
6: ["#f2954b","#f3ac5a","#f3c26e","#f4d786","#f6eba0","#fafebd"],
7: ["#f2954b","#f3a957","#f3bb67","#f3cd7a","#f5de8e","#f7eea5","#fafebd"]
},Peach1: {
3: ["#eb4a40","#f59e72","#fde0c5"],
4: ["#eb4a40","#f2855d","#f8b58b","#fde0c5"],
5: ["#eb4a40","#f17854","#f59e72","#f9c098","#fde0c5"],
6: ["#eb4a40","#f0704f","#f38f65","#f7ac80","#fac7a1","#fde0c5"],
7: ["#eb4a40","#ef6a4c","#f2855d","#f59e72","#f8b58b","#facba6","#fde0c5"]
},PeachYl1: {
2: ["#eb4a40","#fff2b0"],
3: ["#eb4a40","#f6a85e","#fff2b0"],
4: ["#eb4a40","#f38c4d","#f8c275","#fff2b0"],
5: ["#eb4a40","#f27d47","#f6a85e","#f9cf82","#fff2b0"],
6: ["#eb4a40","#f17444","#f59853","#f7b86b","#fad68b","#fff2b0"],
7: ["#eb4a40","#f06e43","#f38c4d","#f6a85e","#f8c275","#fbdb91","#fff2b0"]
},Brown1: {
2: ["#884b3d","#f2d6af"],
3: ["#884b3d","#e29859","#f2d6af"],
4: ["#884b3d","#c67c51","#e7ad74","#f2d6af"],
5: ["#884b3d","#b76f4c","#e29859","#eab882","#f2d6af"],
6: ["#884b3d","#ae6749","#d18754","#e5a569","#ebbe8a","#f2d6af"],
7: ["#884b3d","#a86247","#c67c51","#e29859","#e7ad74","#ecc290","#f2d6af"]
},Bold: {
  2: ["#7F3C8D","#11A579"],
  3: ["#7F3C8D","#11A579","#3969AC"],
  4: ["#7F3C8D","#11A579","#3969AC","#F2B701"],
  5: ["#7F3C8D","#11A579","#3969AC","#F2B701","#E73F74"],
  6: ["#7F3C8D","#11A579","#3969AC","#F2B701","#E73F74","#80BA5A"],
  7: ["#7F3C8D","#11A579","#3969AC","#F2B701","#E73F74","#80BA5A","#E68310"],
  8: ["#7F3C8D","#11A579","#3969AC","#F2B701","#E73F74","#80BA5A","#E68310","#008695"],
  9: ["#7F3C8D","#11A579","#3969AC","#F2B701","#E73F74","#80BA5A","#E68310","#008695","#CF1C90"],
  10:["#7F3C8D","#11A579","#3969AC","#F2B701","#E73F74","#80BA5A","#E68310","#008695","#CF1C90","#f97b72"],
  11:["#7F3C8D","#11A579","#3969AC","#F2B701","#E73F74","#80BA5A","#E68310","#008695","#CF1C90","#f97b72","#A5AA99"]
},Fancy: {
  2: ["#99C945","#5D69B1"],
  3: ["#99C945","#5D69B1","#52BCA3"],
  4: ["#99C945","#5D69B1","#52BCA3","#E58606"],
  5: ["#99C945","#5D69B1","#52BCA3","#E58606","#2F8AC4"],
  6: ["#99C945","#5D69B1","#52BCA3","#E58606","#2F8AC4","#24796C"],
  7: ["#99C945","#5D69B1","#52BCA3","#E58606","#2F8AC4","#24796C","#cc2d7f"],
  8: ["#99C945","#5D69B1","#52BCA3","#E58606","#2F8AC4","#24796C","#cc2d7f","#764e9f"],
  9: ["#99C945","#5D69B1","#52BCA3","#E58606","#2F8AC4","#24796C","#cc2d7f","#764e9f","#ed645a"],
  10:["#99C945","#5D69B1","#52BCA3","#E58606","#2F8AC4","#24796C","#cc2d7f","#764e9f","#ed645a","#CC61B0"],
  11:["#99C945","#5D69B1","#52BCA3","#E58606","#2F8AC4","#24796C","#cc2d7f","#764e9f","#ed645a","#CC61B0","#A5AA99"]
},Pastel: {
  2: ["#78BDC8","#F4C34C"],
  3: ["#78BDC8","#F4C34C","#DCB0F2"],
  4: ["#78BDC8","#F4C34C","#DCB0F2","#87C55F"],
  5: ["#78BDC8","#F4C34C","#DCB0F2","#87C55F","#9EB9F3"],
  6: ["#78BDC8","#F4C34C","#DCB0F2","#87C55F","#9EB9F3","#F89C74"],
  7: ["#78BDC8","#F4C34C","#DCB0F2","#87C55F","#9EB9F3","#F89C74","#FE88B1"],
  8: ["#78BDC8","#F4C34C","#DCB0F2","#87C55F","#9EB9F3","#F89C74","#FE88B1","#48C1C0"],
  9: ["#78BDC8","#F4C34C","#DCB0F2","#87C55F","#9EB9F3","#F89C74","#FE88B1","#48C1C0","#C9DB74"],
  10:["#78BDC8","#F4C34C","#DCB0F2","#87C55F","#9EB9F3","#F89C74","#FE88B1","#48C1C0","#C9DB74","#8BE0A4"],
  11:["#78BDC8","#F4C34C","#DCB0F2","#87C55F","#9EB9F3","#F89C74","#FE88B1","#48C1C0","#C9DB74","#8BE0A4","#9DB8C1"]
},Antique: {
  2: ["#75445C","#D5A75B"],
  3: ["#75445C","#D5A75B","#AF6458"],
  4: ["#75445C","#D5A75B","#AF6458","#736F4C"],
  5: ["#75445C","#D5A75B","#AF6458","#736F4C","#5b788e"],
  6: ["#75445C","#D5A75B","#AF6458","#736F4C","#5b788e","#4C4E8F"],
  7: ["#75445C","#D5A75B","#AF6458","#736F4C","#5b788e","#4C4E8F","#6c4c8f"],
  8: ["#75445C","#D5A75B","#AF6458","#736F4C","#5b788e","#4C4E8F","#6c4c8f","#44755d"],
  9: ["#75445C","#D5A75B","#AF6458","#736F4C","#5b788e","#4C4E8F","#6c4c8f","#44755d","#af5878"],
  10:["#75445C","#D5A75B","#AF6458","#736F4C","#5b788e","#4C4E8F","#6c4c8f","#44755d","#af5878","#5c4c73"],
  11:["#75445C","#D5A75B","#AF6458","#736F4C","#5b788e","#4C4E8F","#6c4c8f","#44755d","#af5878","#5c4c73","#6C6D6F"]
},Safe: {
  2: ["#88CCEE","#CC6677"],
  3: ["#88CCEE","#CC6677","#DDCC77"],
  4: ["#88CCEE","#CC6677","#DDCC77","#117733"],
  5: ["#88CCEE","#CC6677","#DDCC77","#117733","#332288"],
  6: ["#88CCEE","#CC6677","#DDCC77","#117733","#332288","#AA4499"],
  7: ["#88CCEE","#CC6677","#DDCC77","#117733","#332288","#AA4499","#44AA99"],
  8: ["#88CCEE","#CC6677","#DDCC77","#117733","#332288","#AA4499","#44AA99","#999933"],
  9: ["#88CCEE","#CC6677","#DDCC77","#117733","#332288","#AA4499","#44AA99","#999933","#882255"],
  10:["#88CCEE","#CC6677","#DDCC77","#117733","#332288","#AA4499","#44AA99","#999933","#882255","#661100"],
  11:["#88CCEE","#CC6677","#DDCC77","#117733","#332288","#AA4499","#44AA99","#999933","#882255","#661100","#888888"]
}};

if (typeof define === "function" && define.amd) {
    define(cartocolor);
} else if (typeof module === "object" && module.exports) {
    module.exports = cartocolor;
} else {
    this.colorbrewer = cartocolor;
}

}();
