// dettagli di ciascun membro del team.
const team = [
  {
      name: "Wayne Barnett",
      job: "Founder & CEO",
      photo: "wayne-barnett-founder-ceo.jpg"
  },
  {
      name: "Angela Caroll",
      job: "Chief Editor",
      photo: "angela-caroll-chief-editor.jpg"
  },
  {
      name: "Walter Gordon",
      job: "Office Manager",
      photo: "walter-gordon-office-manager.jpg"
  },
  {
      name: "Angela Lopez",
      job: "Social Media Manager",
      photo: "angela-lopez-social-media-manager.jpg"
  },
  {
      name: "Scott Estrada",
      job: "Developer",
      photo: "scott-estrada-developer.jpg"
  },
  {
      name: "Barbara Ramos",
      job: "Graphic Designer",
      photo: "barbara-ramos-graphic-designer.jpg"
  }
];

// element html 

const row = document.querySelector(".row")

// ciclo cards 

let cards = "";
for (let i = 0; i < team.length; i++) {
    const teamer = team [i];
    cards += `
            <div class="col-4 g-4">
                <div class="card text-center">
                    <img src="img/${teamer.photo}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5>${teamer.name}</h5>
                        <h6>${teamer.job}</h6>
                    </div>
                </div>
            </div>
            `
}
// ... 
console.log(cards)
row.innerHTML = cards;