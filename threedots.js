const ages = [12,13,14,15,16];
const ages2 = [17,18,12];
const ages3 = [25,26,27];
const allAges = ages.concat(ages2).concat([5]).concat(ages3);

const allAges2 = [ ... ages,...ages2,5,...ages3];

const business = 650;
const minister = 450;
const sochib = 270;
const takaPoysa = [650,500,670,700,800];
// const maximum = Math.max(business,minister,sochib);
const maximum = Math.max(...takaPoysa);
console.log(maximum);