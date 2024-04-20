
let curs = document.querySelector(".cursor")

document.addEventListener("mousemove", function(dets) {
    curs.style.left = dets.x+"px"
    curs.style.top = dets.y+"px"
    // console.log(dets)
})


// Trendings

const trendBlg = [
    {
        img: "https://images.unsplash.com/photo-1501554728187-ce583db33af7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8fA%3D%3D",
        title: "Himalaya",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita quas iusto ratione eaque ea rerum reiciendis nam suscipit, odio modi veritatis natus? Id est, optio quae repellat harum, possimus voluptate esse vitae debitis, a eius. Expedita, repellat sit suscipit est reiciendis laborum temporibus illum impedit. Quibusdam nam tempore molestiae reprehenderit?"
    },

    {
        img: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D",
        title: "Himalaya",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita quas iusto ratione eaque ea rerum reiciendis nam suscipit, odio modi veritatis natus? Id est, optio quae repellat harum, possimus voluptate esse vitae debitis, a eius. Expedita, repellat sit suscipit est reiciendis laborum temporibus illum impedit. Quibusdam nam tempore molestiae reprehenderit?"
    }

];

let card = ``
trendBlg.forEach((e) => {
    card += `<div class="card">
    <img src=${e.img} alt="" class="img">
    <div class="c-text">
        <h3 class="t-card">${e.title}</h3>
        <p class="c-desc">${e.desc}</p>
        <button class="btn">Read About</button>
    </div>
</div>`
})
document.querySelector(".card-sec").innerHTML = card



// Topics

let topicsDis = ["AI", "Travels", "Food", "Blogs", "JavaScript", "AI", "Travels", "Food", "Blogs", "JavaScript", "Ruby"]
let topics = ""
topicsDis.forEach((e) => {
    topics += `<button class="btn">${e}</button>`
})
document.querySelector(".btn3-sec").innerHTML = document.querySelector(".btn3-sec").innerHTML + topics
// Login
const loginForm = document.querySelector(".login")
const formCont = document.querySelector(".formCont")
document.querySelector(".loginBtn").addEventListener("click", (e) => {
    formCont.style.display = "flex"
})

document.querySelector(".cross").addEventListener("click", (e) => {
    formCont.style.display = "none"
})

// loginForm.addEventListener("submit", (e) => {
//     e.preventDefault()
//     let formCont2 = formCont
//     let username = document.querySelector("#username").value
//     let passsword = document.querySelector("#password").value
//     if (username == "" && passsword == ""){
//         alert("Insert Value")
//     }else{
//         alert("Thanks")
//         formCont2.style.display = "none"
//     }
//     username = ""
//     passsword = "" 
// });
