// let map;

// function initMap() {
//     map = new google.maps.Map(document.getElementById("map"), {
//         center: { lat: -0.023559, lng: 37.906193 },
//         zoom: 8
//     });
// }

let data = document.getElementById("fundi")


//fetch function
fetch("http://localhost:3000/Mechanics")
    .then(res => res.json())
    .then(json=>{
        json.map(data=>{
            console.log(data.name)
            fundi.append(mechanic(data))
        })
    })

//create mechanic
function mechanic({img, name, location}) {
    let mech = document.createElement("section")

    mech.innerHTML=`
    <section class="p-10 bg-[#adb5bd]">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 items-center">
                <div class="h-[15.5rem]">
                    <img src="${img}"
                        class="h-full w-full object-cover" alt="" />
                </div>
                <div class="space-y-3 bg-black p-12 text-white rounded">
                    <h2>${name}</h2>
                    <p>${location}</p>
                    <p>Rate: 500Ksh/hr</p>
                    <div class="items-center gap-2">

                        <button
                            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                            Details
                        </button>
                        <button
                            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                            Send Request
                        </button>
                    </div>
                </div>
            </div>
    </section>
    `;
    return mech;
}
