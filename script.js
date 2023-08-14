const patchNotes = [
    {
        notes: ["Fix for babysitter routing off lots with babies.", "Fixed a bug that caused Sims to be stuck in an endless cooking animation, forever preparing but never completing a meal."],
        year: "25th June 2009",
        patch: "The Sims 3 - Patch 2 - Base Game"
    },
    {
        notes: ["It is no longer possible to 'Try for Baby' with the Grim Reaper.", "Sims can now argue with plants. Be careful, though; some plants have very strong opinions!"],
        year: "25th June 2009",
        patch: "The Sims 3 - Patch 2 - Base Game"
    },
    {
        notes: ["\"Human\" Sims no longer display pet statistics in the \"Stats\" page.", "Fixed an issue where Sims could accidentally teleport to work while taking a bath."],
        year: "2002",
        patch: "The Sims: Unleashed CD Patch"
    },
    {
        notes: ["Visitors will no longer \"kidnap\" a baby or toddler by leaving the lot while carrying them.", "Elders will no longer remain ageless under certain circumstances, bringing immortality to an end."],
        year: "2008",
        patch: "The Sims 2 CD Patch"
    },
    {
        notes: ["Teens no longer get the unsatisfiable \"Write a Novel\" want.", "Parties now end as expected and no longer continue indefinitely."],
        year: "2008",
        patch: "The Sims 2 CD Patch"
    },
    {
        notes: ["Patched an issue with the game locking up when in cameraman mode while a pregnancy state transition occurred or a Sim burned to death.", "Fixed a problem where Sims would run away from their own weddings."],
        year: "March 2005",
        patch: "The Sims 2: University Patch"
    },
    {
        notes: ["Asking too many Sims at once to freestyle no longer results in scripting errors.", "TVs no longer turn on by themselves, scaring Sims who believe in ghosts."],
        year: "March 2005",
        patch: "The Sims 2: University Patch"
    },
    {
        notes: ["Babies no longer appear in the pool of online chatters.", "Babies are no longer placed in unreachable locations after birth, ensuring that parents can always take care of their newborns."],
        year: "March 2005",
        patch: "The Sims 2: University Patch"
    },
    {
        notes: ["The player will no longer receive text notification messages that deceased Sims \"are no longer friends.\"", "Fixed a bug where Sims were holding a grudge against refrigerators."],
        year: "March 2005",
        patch: "The Sims 2: University Patch"
    },
    {
        notes: ["Cowplants will no longer have their faces squished after eating Nightlife NPCs.", "Added a new interaction: \"Debate the Meaning of WooHoo\" with other Sims."],
        year: "September 2005",
        patch: "The Sims 2: Nightlife Patch"
    },
    {
        notes: ["Sims will no longer get a memory of making out with themselves in the hot tub under certain conditions.", "Sims now react to bad fashion choices by other Sims, potentially leading to fashion interventions."],
        year: "September 2005",
        patch: "The Sims 2: Nightlife Patch"
    },
    {
        notes: ["Flaming Bags of Poo should not be delivered indefinitely after a bad date.", "Elder Sims can now time-travel back to their youth by taking a special bubble bath."],
        year: "September 2005",
        patch: "The Sims 2: Nightlife Patch"
    },
    {
        notes: ["The Social Bunny can no longer be killed.", "Cats in the game will now be drawn to sit on any available keyboards, blocking Sim's computer access."],
        year: "March 2006",
        patch: "The Sims 2: Open for Business Patch"
    },
    {
        notes: ["Pets now receive their pension upon retirement.", "Added new trait: ‘Serial Hobbyist’, where Sims compulsively pick up and drop hobbies every Sim-week."],
        year: "October 2006",
        patch: "The Sims 2: Pets Patch"
    },
    {
        notes: ["Influencing Sims to fight another Sim will no longer cause non-werewolf Sims to turn into a werewolf.", "Sims now risk being abducted by sentient vacuum cleaners if house chores are neglected."],
        year: "October 2006",
        patch: "The Sims 2: Pets Patch"
    },
    {
        notes: ["Players will now be warned before the Social Worker takes away children for temperature neglect.", "Sims' dreams now include ads. Upgrade to Premium Sleep to remove them."],
        year: "March 2007",
        patch: "The Sims 2: Seasons Patch"
    },
    {
        notes: ["Children will no longer go on a vacation alone if their parents die before van arrives.", "Fixed a bug where Sims were writing novels backwards, starting with the last chapter."],
        year: "September 2007",
        patch: "The Sims 2: Bon Voyage Patch"
    },
    {
        notes: ["Drinking Eggplant Juice no longer produces a false memory of maximizing a skill.", "Child Sims can now ground their parents if household rules are violated."],
        year: "February 2008",
        patch: "The Sims 2: Free Time Patch"
    },
    {
        notes: ["The Butler no longer calls the fire department if there is a fire outside during a thunder storm.", "Fixed a bug where Sims were able to fish in their swimming pools and catch sharks."],
        year: "August 2008",
        patch: "The Sims 2: Apartment Life Patch"
    },
    {
        notes: ["\"Become Enemies with Child\" wish no longer appears.", "Sims no longer obsess over the meaning of life after eating grilled cheese."],
        year: "5th August 2009",
        patch: "The Sims 3 - Patch 3 - Base Game"
    },
    {
        notes: ["Infants no longer stretch in reaction to government agents taking away your refrigerator.", "Sims who engage in a staring contest with mirrors may now occasionally lose."],
        year: "18th April 2023",
        patch: "The Sims 4 - Patch 144"
    },
    {
        notes: ["Alien diapers are now only available to Aliens.", "Sims are now able to train their houseplants to perform tricks, such as 'stay' and 'play dead."],
        year: "14th March 2023",
        patch: "The Sims 4 - Patch 142"
    },
    {
        notes: ["Sims won't freeze to death in the Summer when interacting with sprinklers.", "Fixed an issue where Alien Sims would mistakenly abduct themselves during nighttime."],
        year: "17th January 2023",
        patch: "The Sims 4 - Patch 139"
    },
    {
        notes: ["Siblings can attend prom together, now just as friends.", "Implemented a fix for ghost Sims who were receiving spam calls from other ghosts selling afterlife insurance."],
        year: "11th October 2022",
        patch: "The Sims 4 - Patch 136"
    },
    {
        notes: ["Everyone will be excited for Cake and Dessert at Wedding Ceremonies now.", "Sims will no longer be able to propose marriage to their own reflection."],
        year: "31st March 2022",
        patch: "The Sims 4 - Patch 126"
    },
    {
        notes: ["Grim Reaper now possesses the emotional fortitude to deal with the death of two animals at the same time.", "Fixed a bug where Sims could become best friends with a wall after talking to it for too long."],
        year: "15th February 2022",
        patch: "The Sims 4 - Patch 123"
    },
    {
        notes: ["Fixed an issue where sometimes the ocean would reset when Sims woohooed in the underwater cave.", "Sims can no longer WooHoo with a Sim in the elevator while the Sim is on a different floor"],
        year: "4th September 2013",
        patch: "The Sims 3 - Patch 57"
    },
    {
        notes: ["Children can no longer gain influence with social groups.", "Sims can no longer become professional space cowboys without proper training."],
        year: "18th June 2013",
        patch: "The Sims 3 - Patch 55"
    },
    {
        notes: ["The game should no longer generate multiple Tragic Clowns. We have enough.", "Sims can no longer invent time machines in their spare time, as it was causing problems in the space-time continuum."],
        year: "16th June 2016",
        patch: "The Sims 4 - Patch 35"
    },
    {
        notes: ["Angry pregnant Sims will no longer choose to Take an Angry Poop when taking a pregnancy test.", "Sims can now argue with inanimate objects, leading to some rather heated debates with furniture."],
        year: "3rd February 2015",
        patch: "The Sims 4 - Patch 12"
    },
]

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
}

// Shuffle the patch notes
shuffleArray(patchNotes);

// Initialize the global variables
let currentNote = 0;
let correctYear = "1999";
let correctPatch = "Default";
let score = 0;
let total = patchNotes.length;

function shufflePatchNote() {
    const patchNote = patchNotes[currentNote];

    if (Math.random() < 0.5) {
        return { notes: patchNote.notes, realIndex: 0, year: patchNote.year, patch: patchNote.patch };
    } else {
        return { notes: patchNote.notes.reverse(), realIndex: 1, year: patchNote.year, patch: patchNote.patch };
    }
}

function nextQuestion() {
    // Enable the button only if there are more questions
    if (currentNote < patchNotes.length) {
        document.getElementById('next-button').hidden = false;
        document.getElementById('next-button').disabled = false;
        loadPatchNote();
    } else {
        document.getElementById('result').innerText = 'Game over! Refresh to play again.';
        document.getElementById('next-button').hidden = true; // Disable the button if the game is over
        document.getElementById('next-button').disabled = true;
    }
}

function loadPatchNote() {
    const { notes, realIndex: index, year, patch } = shufflePatchNote();

    realIndex = index; // Store the real index
    correctYear = year; // Store the year
    correctPatch = patch; // Store the patch

    document.getElementById('patch-note1').innerText = notes[0];
    document.getElementById('patch-note2').innerText = notes[1];
    
    // Reset styling
    document.getElementById('patch-note1').classList.remove('correct', 'incorrect');
    document.getElementById('patch-note2').classList.remove('correct', 'incorrect');
    document.getElementById('result').innerText = '';

    // Disable the "Next" button
    document.getElementById('next-button').hidden = true;
    document.getElementById('next-button').disabled = true;
}

function checkAnswer(answer) {
    const correctAnswer = answer === realIndex; // Compare with the real index
    const selectedNote = document.getElementById(`patch-note${answer + 1}`);
    const otherNote = document.getElementById(`patch-note${answer === 0 ? 2 : 1}`);

    if (correctAnswer) {
        selectedNote.classList.add('correct');
        otherNote.classList.add('incorrect');
        ++score;
        document.getElementById('score').innerText = score;
        document.getElementById('total').innerText = patchNotes.length;
        document.getElementById('result').innerText = `Correct! This note is from "${correctPatch}" in ${correctYear}`;
    } else {
        selectedNote.classList.add('incorrect');
        otherNote.classList.add('correct');
        document.getElementById('result').innerText = `Incorrect! The correct note was from "${correctPatch}" in ${correctYear}`;
    }
    

    currentNote++;

    // Enable the "Next" button
    document.getElementById('next-button').hidden = false;
    document.getElementById('next-button').disabled = false;
}

nextQuestion(); // Call this to load the initial question
