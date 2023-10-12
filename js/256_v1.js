var Airtable = require('airtable');
var base = new Airtable({apiKey: 'patpQilcK7ah8GBip.de1a807d9e1ac1201aa443d7968212f2d1953505d2407a602eb70e468bc51f0e'}).base('app2jiKwvykQ53cAK');

base('256').select({
    // maxRecords: 3,
    view: "Grid view"
}).eachPage(async function page(records, fetchNextPage) {


    records.forEach(function(record) {
        // console.log(record.get('Images')[0]);
        // document.querySelector('#big').

        let image = document.createElement("img");
	    image.classList.add("img");
	    image.src = record.get('Images')[0].url;
	    document.querySelector("#big").append(image);

        let num = record.get('Images')[0].filename;
        let numDisplay = document.getElementById("nbr");

        let ctg = record.get('Category')[0];
        let ctgDisplay = document.getElementById("cat");


        // numDisplay.style.display = "none";
        
        image.addEventListener(
            "mouseenter",

            (event) => {
                // event.target.numDisplay.style.display = "block";
                console.log(num);
                numDisplay.innerHTML = num;
                ctgDisplay.innerHTML = ctg;
            }


        )
    });

    fetchNextPage();
}, function done(err) {
    if (err) { console.error(err); return; }
});
