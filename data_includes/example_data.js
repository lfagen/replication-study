var shuffleSequence = seq("setcounter", "intro", "practice", "presep", sepWith("sep", rshuffle(startsWith("test"))), "exit");
var practiceItemTypes = ["practice"];

var defaults = [
    "Separator", {
        transfer: 1000,
        normalMessage: "Please wait for the next sentence.",
        errorMessage: "Wrong. Please wait for the next sentence."
    },
    "DashedSentence", {
        mode: "self-paced reading"
    },
    "AcceptabilityJudgment", {
        as: ["1", "2", "3", "4", "5", "6", "7"],
        presentAsScale: true,
        instructions: "Use number keys or click boxes to answer.",
        leftComment: "(Bad)", rightComment: "(Good)"
    },
    "Question", {
        hasCorrect: true,
        randomOrder: true,
        presentHorizontally: true
    },
    "Message", {
        hideProgressBar: true
    },
    "Form", {
        hideProgressBar: true,
        continueOnReturn: true,
        saveReactionTime: true
    }
];

var items = [
    
    // New in Ibex 0.3-beta-9. You can now add a '__SendResults__' controller in your shuffle
    // sequence to send results before the experiment has finished. This is NOT intended to allow
    // for incremental sending of results -- you should send results exactly once per experiment.
    // However, it does permit additional messages to be displayed to participants once the
    // experiment itself is over. If you are manually inserting a '__SendResults__' controller into
    // the shuffle sequence, you must set the 'manualSendResults' configuration variable to 'true', since
    // otherwise, results are automatically sent at the end of the experiment.
    //
    //["sr", "__SendResults__", { }],
    
    ["sep", "Separator", { }],
    
    // New in Ibex 0.3-beta19. You can now determine the point in the experiment at which the counter
    // for latin square designs will be updated. (Previously, this was always updated upon completion
    // of the experiment.) To do this, insert the special '__SetCounter__' controller at the desired
    // point in your running order. If given no options, the counter is incremented by one. If given
    // an 'inc' option, the counter is incremented by the specified amount. If given a 'set' option,
    // the counter is set to the given number. (E.g., { set: 100 }, { inc: -1 })
    //
    ["setcounter", "__SetCounter__", { }],
    
    // NOTE: You could also use the 'Message' controller for the experiment intro (this provides a simple
    // consent checkbox).
    
    ["intro", "Form", {
        html: { include: "example_intro.html" },
        validators: {
            age: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018age\u2019"; }
        }
    } ],
    
    ["intro", "Form", {consentRequired: true, html: {include: "intruction1.html" }} ],
    ["intro", "Form", {consentRequired: true, html: {include: "intruction2.html" }} ],
    ["intro", "Form", {consentRequired: true, html: {include: "intruction3.html" }} ],
    ["exit", "Form", {consentRequired: false, html: {include: "exit.html" }} ],
    
    
    //    
    //an example for self-paced reading, with word-by-word presentation
    
    ["practice", "DashedSentence", {s: "This is a practice sentence to get you used to reading sentences like this."},
     "Question", {hasCorrect: false, randomOrder: false,
                  q: "How would you like to answer this question?",
                  as: ["Press 1 or click here for this answer.",
                       "Press 2 or click here for this answer."]}],
    
    
    //an example for self-paced reading, but with user-defined word chuncks
    ["practice", "DashedSentence", {s: "Dogs have four legs, and chicken have"},
     "Question", {hasCorrect: true, randomOrder: true,
                  q: "Complete the sentence.",
                  as: ["two legs",
                       "four legs"]}],
    
    ["practice", "DashedSentence", {s: "Snakes have no legs, and cats have"},
     "Question", {hasCorrect: true, randomOrder: true,
                  q: "Complete the sentence.",
                  as: ["four legs",
                       "two legs"]}],

    ["practice", "DashedSentence", {s: "This is the last practice sentence before the experiment begins."}],
    
    ["presep", Separator, { transfer: 2000, normalMessage: "Please get ready. We will start. Please wait..." }],
    
    //
    // EXPERIMENT START
    //
    [["test_grammatical_singular",1], "DashedSentence", {s: "The woman by the window was most definitely"},
     "Question",       {q: "Complete the sentence.", as: ["amused", "dusty"]}],
    [["test_grammatical_plural",1], "DashedSentence", {s: "The woman by the windows was most definitely"},
     "Question",       {q: "Complete the sentence.", as: ["amused", "dusty"]}],
    [["test_ungrammatical_singular",1], "DashedSentence", {s: "The woman by the window were most definitely"},
     "Question",       {q: "Complete the sentence.", as: ["amused", "dusty"]}],
    [["test_ungrammatical_plural",1], "DashedSentence", {s: "The woman by the windows were most definitely"},
     "Question",       {q: "Complete the sentence.", as: ["amused", "dusty"]}],
    
    
    [["test_grammatical_singular",2], "DashedSentence", {s: "The flower by the bed was most definitely"},
    "Question",       {q: "Complete the sentence.", as: ["blooming", "made"]}],
    [["test_grammatical_plural",2], "DashedSentence", {s: "The flower by the beds was most definitely"},
    "Question",       {q: "Complete the sentence.", as: ["blooming", "made"]}],
    [["test_ungrammatical_singular",2], "DashedSentence", {s: "The flower by the bed were most definitely"},
     "Question",       {q: "Complete the sentence.", as: ["blooming", "made"]}],
    [["test_ungrammatical_plural",2], "DashedSentence", {s: "The flower by the beds were most definitely"},
     "Question",       {q: "Complete the sentence.", as: ["blooming", "made"]}],
    
    [["test_grammatical_singular",3], "DashedSentence", {s: "The notebook for the class was unfortunately rather"},
    "Question",       {q: "Complete the sentence.", as: ["ripped", "difficult"]}],
    [["test_grammatical_plural",3], "DashedSentence", {s: "The notebook for the classes was unfortunately rather"},
    "Question",       {q: "Complete the sentence.", as: ["ripped", "difficult"]}],
    [["test_ungrammatical_singular",3], "DashedSentence", {s: "The notebook for the class were unfortunately rather"},
     "Question",       {q: "Complete the sentence.", as: ["ripped", "difficult"]}],
    [["test_ungrammatical_plural",3], "DashedSentence", {s: "The notebook for the classes were unfortunately rather"},
     "Question",       {q: "Complete the sentence.", as: ["ripped", "difficult"]}],

    [["test_grammatical_singular",4], "DashedSentence", {s: "The laptop on the magazine was most certainly"},
    "Question",       {q: "Complete the sentence.", as: ["overheating", "wordy"]}],
    [["test_grammatical_plural",4], "DashedSentence", {s: "The laptop on the magazines was most certainly"},
    "Question",       {q: "Complete the sentence.", as: ["overheating", "wordy"]}],
    [["test_ungrammatical_singular",4], "DashedSentence", {s: "The laptop on the magazine were most certainly"},
     "Question",       {q: "Complete the sentence.", as: ["overheating", "wordy"]}],
    [["test_ungrammatical_plural",4], "DashedSentence", {s: "The laptop on the magazines were most certainly"},
     "Question",       {q: "Complete the sentence.", as: ["overheating", "wordy"]}],

    [["test_grammatical_singular",5], "DashedSentence", {s: "The jack-o'-lantern near the child was certainly rather"},
    "Question",       {q: "Complete the sentence.", as: ["carved", "upset"]}],
    [["test_grammatical_plural",5], "DashedSentence", {s: "The jack-o'-lantern near the children was certainly rather"},
    "Question",       {q: "Complete the sentence.", as: ["carved", "upset"]}],
    [["test_ungrammatical_singular",5], "DashedSentence", {s: "The jack-o'-lantern near the child were certainly rather"},
     "Question",       {q: "Complete the sentence.", as: ["carved", "upset"]}],
    [["test_ungrammatical_plural",5], "DashedSentence", {s: "The jack-o'-lantern near the children were certainly rather"},
     "Question",       {q: "Complete the sentence.", as: ["carved", "upset"]}],

    [["test_grammatical_singular",6], "DashedSentence", {s: "The baby near the pillow was quite noticeably"},
    "Question",       {q: "Complete the sentence.", as: ["happy", "fluffy"]}],
    [["test_grammatical_plural",6], "DashedSentence", {s: "The baby near the pillows was quite noticeably"},
    "Question",       {q: "Complete the sentence.", as: ["happy", "fluffy"]}],
    [["test_ungrammatical_singular",6], "DashedSentence", {s: "The baby near the pillow were quite noticeably"},
     "Question",       {q: "Complete the sentence.", as: ["happy", "fluffy"]}],
    [["test_ungrammatical_plural",6], "DashedSentence", {s: "The baby near the pillows were quite noticeably"},
     "Question",       {q: "Complete the sentence.", as: ["happy", "fluffy"]}],

    [["test_grammatical_singular",7], "DashedSentence", {s: "The woman with the shopping bag was nearly always"},
    "Question",       {q: "Complete the sentence.", as: ["sad", "ripping"]}],
    [["test_grammatical_plural",7], "DashedSentence", {s: "The woman with the shopping bags was nearly always"},
    "Question",       {q: "Complete the sentence.", as: ["sad", "ripping"]}],
    [["test_ungrammatical_singular",7], "DashedSentence", {s: "The woman with the shopping bag were nearly always"},
     "Question",       {q: "Complete the sentence.", as: ["sad", "ripping"]}],
    [["test_ungrammatical_plural",7], "DashedSentence", {s: "The woman with the shopping bags were nearly always"},
     "Question",       {q: "Complete the sentence.", as: ["sad", "ripping"]}],

    [["test_grammatical_singular",8], "DashedSentence", {s: "The cloud above the car was obviously extraordinarily"},
    "Question",       {q: "Complete the sentence.", as: ["fluffy", "flashy"]}],
    [["test_grammatical_plural",8], "DashedSentence", {s: "The cloud above the cars was obviously extraordinarily"},
    "Question",       {q: "Complete the sentence.", as: ["fluffy", "flashy"]}],
    [["test_ungrammatical_singular",8], "DashedSentence", {s: "The cloud above the car were obviously extraordinarily"},
     "Question",       {q: "Complete the sentence.", as: ["fluffy", "flashy"]}],
    [["test_ungrammatical_plural",8], "DashedSentence", {s: "The cloud above the cars were obviously extraordinarily"},
     "Question",       {q: "Complete the sentence.", as: ["fluffy", "flashy"]}],

    [["test_grammatical_singular",9], "DashedSentence", {s: "The bottle with the logo was very remarkably"},
    "Question",       {q: "Complete the sentence.", as: ["leaky", "clever"]}],
    [["test_grammatical_plural",9], "DashedSentence", {s: "The bottle with the logos was very remarkably"},
    "Question",       {q: "Complete the sentence.", as: ["leaky", "clever"]}],
    [["test_ungrammatical_singular",9], "DashedSentence", {s: "The bottle with the logo were very remarkably"},
     "Question",       {q: "Complete the sentence.", as: ["leaky", "clever"]}],
    [["test_ungrammatical_plural",9], "DashedSentence", {s: "The bottle with the logos were very remarkably"},
     "Question",       {q: "Complete the sentence.", as: ["leaky", "clever"]}],
    
    [["test_grammatical_singular",10], "DashedSentence", {s: "The boy by the tree is really very"},
    "Question",       {q: "Complete the sentence.", as: ["chubby", "green"]}],
    [["test_grammatical_plural",10], "DashedSentence", {s: "The boy by the trees is really very"},
    "Question",       {q: "Complete the sentence.", as: ["chubby", "green"]}],
    [["test_ungrammatical_singular",10], "DashedSentence", {s: "The boy by the tree are really very"},
     "Question",       {q: "Complete the sentence.", as: ["chubby", "green"]}],
    [["test_ungrammatical_plural",10], "DashedSentence", {s: "The boy by the trees are really very"},
     "Question",       {q: "Complete the sentence.", as: ["chubby", "green"]}],

    [["test_grammatical_singular",11], "DashedSentence", {s: "The bed by the lamp was undoubtedly quite"},
    "Question",       {q: "Complete the sentence.", as: ["comfortable", "bright"]}],
    [["test_grammatical_plural",11], "DashedSentence", {s: "The bed by the lamps was undoubtedly quite"},
    "Question",       {q: "Complete the sentence.", as: ["comfortable", "bright"]}],
    [["test_ungrammatical_singular",11], "DashedSentence", {s: "The bed by the lamp were undoubtedly quite"},
     "Question",       {q: "Complete the sentence.", as: ["comfortable", "bright"]}],
    [["test_ungrammatical_plural",11], "DashedSentence", {s: "The bed by the lamps were undoubtedly quite"},
     "Question",       {q: "Complete the sentence.", as: ["comfortable", "bright"]}],
    
    [["test_grammatical_singular",12], "DashedSentence", {s: "The student with the textbook was nearly always"},
    "Question",       {q: "Complete the sentence.", as: ["cheerful", "read"]}],
    [["test_grammatical_plural",12], "DashedSentence", {s: "The student with the textbooks was nearly always"},
    "Question",       {q: "Complete the sentence.", as: ["cheerful", "read"]}],
    [["test_ungrammatical_singular",12], "DashedSentence", {s: "The student with the textbook were nearly always"},
     "Question",       {q: "Complete the sentence.", as: ["cheerful", "read"]}],
    [["test_ungrammatical_plural",12], "DashedSentence", {s: "The student with the textbooks were nearly always"},
     "Question",       {q: "Complete the sentence.", as: ["cheerful", "read"]}],

    [["test_grammatical_singular",13], "DashedSentence", {s: "The pool behind the gate was almost always"},
    "Question",       {q: "Complete the sentence.", as: ["full", "stuck"]}],
    [["test_grammatical_plural",13], "DashedSentence", {s: "The pool behind the gates was almost always"},
    "Question",       {q: "Complete the sentence.", as: ["full", "stuck"]}],
    [["test_ungrammatical_singular",13], "DashedSentence", {s: "The pool behind the gate were almost always"},
     "Question",       {q: "Complete the sentence.", as: ["full", "stuck"]}],
    [["test_ungrammatical_plural",13], "DashedSentence", {s: "The pool behind the gates were almost always"},
     "Question",       {q: "Complete the sentence.", as: ["full", "stuck"]}],

    [["test_grammatical_singular",14], "DashedSentence", {s: "The band near the van was probably pretty"},
    "Question",       {q: "Complete the sentence.", as: ["rested", "fuel-efficient"]}],
    [["test_grammatical_plural",14], "DashedSentence", {s: "The band near the vans was probably pretty"},
    "Question",       {q: "Complete the sentence.", as: ["rested", "fuel-efficient"]}],
    [["test_ungrammatical_singular",14], "DashedSentence", {s: "The band near the van were probably pretty"},
     "Question",       {q: "Complete the sentence.", as: ["rested", "fuel-efficient"]}],
    [["test_ungrammatical_plural",14], "DashedSentence", {s: "The band near the vans were probably pretty"},
     "Question",       {q: "Complete the sentence.", as: ["rested", "fuel-efficient"]}],

    [["test_grammatical_singular",15], "DashedSentence", {s: "The cat under the chair was most likely"},
    "Question",       {q: "Complete the sentence.", as: ["sleepy", "wobbly"]}],
    [["test_grammatical_plural",15], "DashedSentence", {s: "The cat under the chairs was most likely"},
    "Question",       {q: "Complete the sentence.", as: ["sleepy", "wobbly"]}],
    [["test_ungrammatical_singular",15], "DashedSentence", {s: "The cat under the chair were most likely"},
     "Question",       {q: "Complete the sentence.", as: ["sleepy", "wobbly"]}],
    [["test_ungrammatical_plural",15], "DashedSentence", {s: "The cat under the chairs were most likely"},
     "Question",       {q: "Complete the sentence.", as: ["sleepy", "wobbly"]}],
    
    [["test_grammatical_singular",16], "DashedSentence", {s: "The girl in the movie was rather unusually"},
    "Question",       {q: "Complete the sentence.", as: ["tall", "long"]}],
    [["test_grammatical_plural",16], "DashedSentence", {s: "The girl in the movies was rather unusually"},
    "Question",       {q: "Complete the sentence.", as: ["tall", "long"]}],
    [["test_ungrammatical_singular",16], "DashedSentence", {s: "The girl in the movie were rather unusually"},
     "Question",       {q: "Complete the sentence.", as: ["tall", "long"]}],
    [["test_ungrammatical_plural",16], "DashedSentence", {s: "The girl in the movies were rather unusually"},
     "Question",       {q: "Complete the sentence.", as: ["tall", "long"]}],

    [["test_grammatical_singular",17], "DashedSentence", {s: "The author of the paper was truly remarkably"},
    "Question",       {q: "Complete the sentence.", as: ["outraged", "well-written"]}],
    [["test_grammatical_plural",17], "DashedSentence", {s: "The author of the papers was truly remarkably"},
    "Question",       {q: "Complete the sentence.", as: ["outraged", "well-written"]}],
    [["test_ungrammatical_singular",17], "DashedSentence", {s: "The author of the paper were truly remarkably"},
     "Question",       {q: "Complete the sentence.", as: ["outraged", "well-written"]}],
    [["test_ungrammatical_plural",17], "DashedSentence", {s: "The author of the papers were truly remarkably"},
     "Question",       {q: "Complete the sentence.", as: ["outraged", "well-written"]}],

    [["test_grammatical_singular",18], "DashedSentence", {s: "The novel next to the interviewer was entirely too"},
    "Question",       {q: "Complete the sentence.", as: ["lengthy", "loud"]}],
    [["test_grammatical_plural",18], "DashedSentence", {s: "The novel next to the interviewers was entirely too"},
    "Question",       {q: "Complete the sentence.", as: ["lengthy", "loud"]}],
    [["test_ungrammatical_singular",18], "DashedSentence", {s: "The novel next to the interviewer were entirely too"},
     "Question",       {q: "Complete the sentence.", as: ["lengthy", "loud"]}],
    [["test_ungrammatical_plural",18], "DashedSentence", {s: "The novel next to the interviewers were entirely too"},
     "Question",       {q: "Complete the sentence.", as: ["lengthy", "loud"]}],

    [["test_grammatical_singular",19], "DashedSentence", {s: "The glass behind the curtain was most definitely"},
    "Question",       {q: "Complete the sentence.", as: ["shattered", "tattered"]}],
    [["test_grammatical_plural",19], "DashedSentence", {s: "The glass behind the curtains was most definitely"},
    "Question",       {q: "Complete the sentence.", as: ["shattered", "tattered"]}],
    [["test_ungrammatical_singular",19], "DashedSentence", {s: "The glass behind the curtain were most definitely"},
     "Question",       {q: "Complete the sentence.", as: ["shattered", "tattered"]}],
    [["test_ungrammatical_plural",19], "DashedSentence", {s: "The glass behind the curtains were most definitely"},
     "Question",       {q: "Complete the sentence.", as: ["shattered", "tattered"]}],

    [["test_grammatical_singular",20], "DashedSentence", {s: "The vacation for the family was still profoundly"},
    "Question",       {q: "Complete the sentence.", as: ["satisfying", "jet-lagged"]}],
    [["test_grammatical_plural",20], "DashedSentence", {s: "The vacation for the families was still profoundly"},
    "Question",       {q: "Complete the sentence.", as: ["satisfying", "jet-lagged"]}],
    [["test_ungrammatical_singular",20], "DashedSentence", {s: "The vacation for the family were still profoundly"},
     "Question",       {q: "Complete the sentence.", as: ["satisfying", "jet-lagged"]}],
    [["test_ungrammatical_plural",20], "DashedSentence", {s: "The vacation for the families were still profoundly"},
     "Question",       {q: "Complete the sentence.", as: ["satisfying", "jet-lagged"]}],

    [["test_grammatical_singular",21], "DashedSentence", {s: "The corn from the field was actually very"},
    "Question",       {q: "Complete the sentence.", as: ["tasty", "fruitful"]}],
    [["test_grammatical_plural",21], "DashedSentence", {s: "The corn from the fields was actually very"},
    "Question",       {q: "Complete the sentence.", as: ["tasty", "fruitful"]}],
    [["test_ungrammatical_singular",21], "DashedSentence", {s: "The corn from the field were actually very"},
     "Question",       {q: "Complete the sentence.", as: ["tasty", "fruitful"]}],
    [["test_ungrammatical_plural",21], "DashedSentence", {s: "The corn from the fields were actually very"},
     "Question",       {q: "Complete the sentence.", as: ["tasty", "fruitful"]}],

    [["test_grammatical_singular",22], "DashedSentence", {s: "The cake for the woman was certainly intentionally"},
    "Question",       {q: "Complete the sentence.", as: ["decorated", "kind"]}],
    [["test_grammatical_plural",22], "DashedSentence", {s: "The cake for the women was certainly intentionally"},
    "Question",       {q: "Complete the sentence.", as: ["decorated", "kind"]}],
    [["test_ungrammatical_singular",22], "DashedSentence", {s: "The cake for the woman were certainly intentionally"},
     "Question",       {q: "Complete the sentence.", as: ["decorated", "kind"]}],
    [["test_ungrammatical_plural",22], "DashedSentence", {s: "The cake for the women were certainly intentionally"},
     "Question",       {q: "Complete the sentence.", as: ["decorated", "kind"]}],

    
    [["test_grammatical_singular",23], "DashedSentence", {s: "The painting of the dog was surprisingly very"},
    "Question",       {q: "Complete the sentence.", as: ["artistic", "tired"]}],
    [["test_grammatical_plural",23], "DashedSentence", {s: "The painting of the dogs was surprisingly very"},
    "Question",       {q: "Complete the sentence.", as: ["artistic", "tired"]}],
    [["test_ungrammatical_singular",23], "DashedSentence", {s: "The painting of the dog were surprisingly very"},
     "Question",       {q: "Complete the sentence.", as: ["artistic", "tired"]}],
    [["test_ungrammatical_plural",23], "DashedSentence", {s: "The painting of the dogs were surprisingly very"},
     "Question",       {q: "Complete the sentence.", as: ["artistic", "tired"]}],
    
    [["test_grammatical_singular",24], "DashedSentence", {s: "The coffee for the office was usually rather"},
    "Question",       {q: "Complete the sentence.", as: ["burnt", "quiet"]}],
    [["test_grammatical_plural",24], "DashedSentence", {s: "The coffee for the offices was usually rather"},
    "Question",       {q: "Complete the sentence.", as: ["burnt", "quiet"]}],
    [["test_ungrammatical_singular",24], "DashedSentence", {s: "The coffee for the office were usually rather"},
     "Question",       {q: "Complete the sentence.", as: ["burnt", "quiet"]}],
    [["test_ungrammatical_plural",24], "DashedSentence", {s: "The coffee for the offices were usually rather"},
     "Question",       {q: "Complete the sentence.", as: ["burnt", "quiet"]}],

    [["test_grammatical_singular",25], "DashedSentence", {s: "The football near the tree was generally fairly"},
    "Question",       {q: "Complete the sentence.", as: ["flat", "tall"]}],
    [["test_grammatical_plural",25], "DashedSentence", {s: "The football near the trees was generally fairly"},
    "Question",       {q: "Complete the sentence.", as: ["flat", "tall"]}],
    [["test_ungrammatical_singular",25], "DashedSentence", {s: "The football near the tree were generally fairly"},
     "Question",       {q: "Complete the sentence.", as: ["flat", "tall"]}],
    [["test_ungrammatical_plural",25], "DashedSentence", {s: "The football near the trees were generally fairly"},
     "Question",       {q: "Complete the sentence.", as: ["flat", "tall"]}],

    [["test_grammatical_singular",26], "DashedSentence", {s: "The plant next to the gnome was really quite"},
    "Question",       {q: "Complete the sentence.", as: ["leafy", "scary"]}],
    [["test_grammatical_plural",26], "DashedSentence", {s: "The plant next to the gnomes was really quite"},
    "Question",       {q: "Complete the sentence.", as: ["leafy", "scary"]}],
    [["test_ungrammatical_singular",26], "DashedSentence", {s: "The plant next to the gnome were really quite"},
     "Question",       {q: "Complete the sentence.", as: ["leafy", "scary"]}],
    [["test_ungrammatical_plural",26], "DashedSentence", {s: "The plant next to the gnomes were really quite"},
     "Question",       {q: "Complete the sentence.", as: ["leafy", "scary"]}],

    
    
    
    
    
    
    
    
    
    
];
