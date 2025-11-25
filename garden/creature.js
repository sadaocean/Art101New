// memorize all creatures in array

let allCreatures = [];

// main add click handler
  // create creature object based on form inputs
  // safety check-ups
  // prepare an html for a single creature
 
  // print single creature on a page
  // add the creature to the memory
  // reset the from

function getCreatureFromForm(){ 

    const freshCreature={
    name: $("#crName").val(),
    color: $("#crColor").val(),
    eyesNum: $("#crEyesNum").val()
    };

    return freshCreature;

};

// prepare HTML for a single creature (does NOT add to the page)
function renderCreature(creature) {
  let crEyesHTML = "";

  for (let i = 0; i < creature.eyesNum; i++) {
    crEyesHTML = crEyesHTML + "<div class='eye'>.</div>";
  }

  const html=`
<div class="creature">
  <div class="creature-body" style="background: ${creature.color}">
${crEyesHTML}
  </div>
  <div class="creature-info">${creature.name}</div>
</div>
`;
  return html;
}


// check if creature data is valid
function isCreatureValid(creature) {
  if (creature.name === "") return false;
  if (creature.name.length > 12) return false;
  if ( isNaN(creature.eyesNum) || creature.eyesNum > 5) return false;
  return true;
  
}


$("#add-creature").click(
    function () {

    // create creature object based on form inputs
    const newCreature = getCreatureFromForm();

    // do checks, exit function if something is wrong
   if ( isCreatureValid(newCreature)==false) {
    return;
   }




    });

// memorize all creatures in array

let allCreatures = [];

// main add click handler
  // create creature object based on form inputs
  // safety check-ups
  // prepare an html for a single creature
 
  // print single creature on a page
  // add the creature to the memory
  // reset the from

function getCreatureFromForm(){ 

    const freshCreature={
    name: $("#crName").val(),
    color: $("#crColor").val(),
    eyesNum: $("#crEyesNum").val()
    };

    return freshCreature;

};

// prepare HTML for a single creature (does NOT add to the page)
function renderCreature(creature) {
  let crEyesHTML = "";

  for (let i = 0; i < creature.eyesNum; i++) {
    crEyesHTML = crEyesHTML + "<div class='eye'>.</div>";
  }

  const html=`
<div class="creature">
  <div class="creature-body" style="background: ${creature.color}">
${crEyesHTML}
  </div>
  <div class="creature-info">${creature.name}</div>
</div>
`;
  return html;
}


// append one creature to the DOM using its HTML
function addCreatureToDOM(creature) {
  const html = renderCreature(creature);
  $("#creature-list").append(html);
}

// check if creature data is valid
function isCreatureValid(creature) {
  if (creature.name === "") return false;
  if (creature.name.length > 12) return false;
  if ( isNaN(creature.eyesNum) || creature.eyesNum > 5) return false;
  return true;
  
}


$("#add-creature").click(
    function () {

    // create creature object based on form inputs
    const newCreature = getCreatureFromForm();

    // do checks, exit function if something is wrong
   if ( isCreatureValid(newCreature)==false) {
    return;
   }




    });
