var shuffleSequence = seq("setcounter", "intro") //"practice", "presep", sepWith("sep", rshuffle(startsWith("gram"), "f")), "exit");
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
   
   //  ["practice", "DashedSentence", {s: "This is a practice sentence to get you used to reading sentences like this."},
   //               "Question", {hasCorrect: false, randomOrder: false,
   //                            q: "How would you like to answer this question?",
   //                            as: ["Press 1 or click here for this answer.",
   //                                 "Press 2 or click here for this answer."]}],
                                  
    
   //  //an example for self-paced reading, but with user-defined word chuncks
   //  ["practice", "DashedSentence", {s: ["Rick", "labeled", "the jar.", "Tim", "did too,", "because", "Tim", "liked", "jars."]},
   //               "Question", {hasCorrect: true, randomOrder: true,
   //                            q: "What did Tim do?",
   //                            as: ["Tim labeled a jar.",
   //                                 "Tim bought the jar Rick labeled."]}],
    
   // ["practice", "DashedSentence", {s: "This is the last practice sentence before the experiment begins."}],
    
   // ["presep", Separator, { transfer: 2000, normalMessage: "Please get ready. We will start. Please wait..." }],

   //  //
   //  // EXPERIMENT START
   //  //
   // [["grammatical","singular",1], "DashedSentence", {s: "The woman by the window was most definitely"},
   //             "Question",       {q: "Complete the sentence.", as: ["amused", "dusty"]}],
   // [["grammatical","plural",1], "DashedSentence", {s: "The woman by the windows was most definitely"},
   //             "Question",       {q: "Complete the sentence.", as: ["amused", "dusty"]}],
   // [["ungrammatical","singular",1], "DashedSentence", {s: "The woman by the window were most definitely"},
   //             "Question",       {q: "Complete the sentence.", as: ["amused", "dusty"]}],
   // [["ungrammatical","plural",1], "DashedSentence", {s: "The woman by the windows were most definitely"},
   //             "Question",       {q: "Complete the sentence.", as: ["amused", "dusty"]}],


   // [["grammatical","singular",2], "DashedSentence", {s: "The flower by the bed was most definitely"},
   //             "Question",       {q: "Complete the sentence.", as: ["blooming", "made"]}],
   // [["grammatical","plural",2], "DashedSentence", {s: "The flower by the beds was most definitely"},
   //             "Question",       {q: "Complete the sentence.", as: ["blooming", "made"]}],
   // [["ungrammatical","singular",2], "DashedSentence", {s: "The flower by the bed were most definitely"},
   //             "Question",       {q: "Complete the sentence.", as: ["blooming", "made"]}],
   // [["ungrammatical","plural",2], "DashedSentence", {s: "The flower by the beds were most definitely"},
   //             "Question",       {q: "Complete the sentence.", as: ["blooming", "made"]}],
    
];
