const patchNotes = [
    ["Sims can now become astronauts and visit other planets.", "Sims can no longer WooHoo with a Sim in the elevator while the Sim is on a different floor"],
    ["Sims will no longer walk on water to view paintings placed on swimming pool walls.", "Fixed an issue where certain pieces of furniture would become invisible after rotating them."],
    ["Baby Sims will no longer become stuck on a Sim’s hand while driving a car.", "Resolved a problem where toddlers would sometimes teleport to random locations within the house."],
    ["Kleptomaniac Sims can no longer steal Subway stations from lots.", "Pets no longer float in the air after jumping off furniture."],
    ["Fix for babysitter routing off lots with babies.", "Fixed a bug that caused Sims to be stuck in an endless cooking animation, forever preparing but never completing a meal."],
    ["Fix for a freeze that can occur when Sims attempt to clean out bad food from the fridge.", "Addressed an issue where doors would appear to open and close spontaneously."],
    ["Babies will no longer be born to single parents.", "Corrected a graphical glitch causing incorrect reflections in mirrors."],
    ["Reduced the urge for neat Sims to put away fire pits.", "Elders will no longer remain ageless under certain circumstances, bringing immortality to an end."],
    ["Eating specific prepared meals no longer has an impact on an unborn baby's gender.", "Parties now end as expected and no longer continue indefinitely."],
    ["\"Become Enemies with Child\" wish no longer appears.", "Fixed a problem where Sims would run away from their own weddings."],
    ["Fixed a tuning issue so that Sims now vomit at acceptable levels.", "TVs no longer turn on by themselves, scaring Sims who believe in ghosts."],
    ["Sims who are on fire will no longer be forced to attend graduation before they can put themselves out.", "Babies are no longer placed in unreachable locations after birth, ensuring that parents can always take care of their newborns."],
    ["Fish are no longer duplicated in the fridge when moving homes.", "Fixed a bug where Sims were holding a grudge against refrigerators."],
    ["Sims can no longer \"Try for Baby\" with the Grim Reaper.", "Sims can now argue with plants. Be careful, though; some plants have very strong opinions!"],
    ["Televisions no longer play video after they are burned or broken.", "Added a new interaction: \"Debate the Meaning of WooHoo\" with other Sims."],
    ["", ""],
    // Add more patch notes here
];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
}

// Shuffle the patch notes
shuffleArray(patchNotes);

// Initialize the current note index
let currentNote = 0;


function shufflePatchNote() {
    const patchNote = patchNotes[currentNote];
    if (Math.random() < 0.5) {
        return { notes: patchNote, realIndex: 0 };
    } else {
        return { notes: patchNote.reverse(), realIndex: 1 };
    }
}

function loadPatchNote() {
    const { notes, realIndex: index } = shufflePatchNote();
    realIndex = index; // Store the real index
    document.getElementById('patch-note1').innerText = notes[0];
    document.getElementById('patch-note2').innerText = notes[1];
    
    // Reset styling
    document.getElementById('patch-note1').classList.remove('correct', 'incorrect');
    document.getElementById('patch-note2').classList.remove('correct', 'incorrect');
    document.getElementById('result').innerText = '';
}

function checkAnswer(answer) {
    const correctAnswer = answer === realIndex; // Compare with the real index
    const selectedNote = document.getElementById(`patch-note${answer + 1}`);
    const otherNote = document.getElementById(`patch-note${answer === 0 ? 2 : 1}`);

    if (correctAnswer) {
        selectedNote.classList.add('correct');
        otherNote.classList.add('incorrect');
        document.getElementById('result').innerText = 'Correct!';
    } else {
        selectedNote.classList.add('incorrect');
        otherNote.classList.add('correct');
        document.getElementById('result').innerText = 'Incorrect!';
    }
    
    // Move on to the next question after a short delay
    currentNote++;
    if (currentNote < patchNotes.length) {
        setTimeout(loadPatchNote, 3000); // 5-second delay
    } else {
        setTimeout(function() {
            document.getElementById('result').innerText = 'Game over! Refresh to play again.';
        }, 2000); // 2-second delay
    }
}

loadPatchNote(); // Call this to load the initial question