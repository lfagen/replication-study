var shuffleSequence = seq("setcounter", "intro", "practice", "presep", sepWith("sep", rshuffle(startsWith("test"), "f")), "exit");
var practiceItemTypes = ["practice"];

var defaults = [
    "Separator", {
        transfer: 1000,
        normalMessage: "Please wait for the next sentence.",
        errorMessage: "Please wait for the next sentence."
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
    
    ["intro", "Form", {consentRequired: true, html: {include: "instruction1.html" }} ],
    ["intro", "Form", {consentRequired: true, html: {include: "instruction2.html" }} ],
    ["intro", "Form", {consentRequired: true, html: {include: "instruction3.html" }} ],
    ["exit", "Form", {consentRequired: false, html: {include: "exit.html" }} ],
    
    
    //    
    //an example for self-paced reading, with word-by-word presentation
    
    ["practice", "DashedSentence", {s: "This is a practice sentence to get you used to reading sentences like this."},
     "Question", {hasCorrect: false, randomOrder: false,
                  q: "And here is a question following the sentence.",
                  as: ["choice 1",
                  "choice 2"]}],
    
    
    //an example for self-paced reading, but with user-defined word chuncks
    ["practice", "DashedSentence", {s: "Dogs have four legs, and chickens have"},
     "Question", {hasCorrect: true, randomOrder: true,
                  q: "Complete the sentence.",
                  as: ["two.",
                       "four."]}],
    
    ["practice", "DashedSentence", {s: "Snakes have no legs, and cats have"},
     "Question", {hasCorrect: true, randomOrder: true,
                  q: "Complete the sentence.",
                  as: ["four.",
                       "two."]}],
    
    //["practice", "Question", {q: "<q>My name \u005F\u005F\u005F quite beautiful.</q><br/>Complete the sentence.",
    //              as: ["is", "are"]}],
    
    
    //["practice", "Question", {q: "My dog ____ very smart.\nComplete the sentence.",
    //                          as: ["is", "are"]}],
    
    ["practice", "DashedSentence", {s: "This is the last practice sentence before the experiment begins."}],
    
    ["presep", Separator, { transfer: 2000, normalMessage: "Please get ready. We will start. Please wait..." }],
    
    //
    // EXPERIMENT START
    //

    // FILLERS
    ["f", "DashedSentence", {s: "The payment was usually rather"},
     "Question",       {q: "Complete the sentence.", as: ["late", "ancient"]}],

    ["f", "DashedSentence", {s: "The paper was really quite"},
     "Question",       {q: "Complete the sentence.", as: ["boring", "innocent"]}],

    ["f", "DashedSentence", {s: "The beer was certainly rather"},
     "Question",       {q: "Complete the sentence.", as: ["sour", "visible"]}],
  
    ["f", "DashedSentence", {s: "The solution was really very"},
     "Question",       {q: "Complete the sentence.", as: ["elegant", "puzzled"]}],  

    ["f", "DashedSentence", {s: "The homework was quite unusually"},
     "Question",       {q: "Complete the sentence.", as: ["difficult", "guttural"]}],

    ["f", "DashedSentence", {s: "The recording was undoubtedly very"},
     "Question",       {q: "Complete the sentence.", as: ["quiet", "tangible"]}],

    ["f", "DashedSentence", {s: "The salary was most definitely"},
     "Question",       {q: "Complete the sentence.", as: ["high", "gray"]}],

    ["f", "DashedSentence", {s: "The software was entirely too"},
     "Question",       {q: "Complete the sentence.", as: ["complicated", "damp"]}],

    ["f", "DashedSentence", {s: "The paint was still somewhat"},
     "Question",       {q: "Complete the sentence.", as: ["wet", "plausible"]}],

    ["f", "DashedSentence", {s: "The office was nearly always"},
     "Question",       {q: "Complete the sentence.", as: ["busy", "pricey"]}],

    ["f", "DashedSentence", {s: "The instructions were very remarkably"},
     "Question",       {q: "Complete the sentence.", as: ["simple", "itchy"]}],

    ["f", "DashedSentence", {s: "The temperature was obviously extraordinarily"},
     "Question",       {q: "Complete the sentence.", as: ["cold", "old-fashioned"]}],

    ["f", "DashedSentence", {s: "The store was often extremely"},
     "Question",       {q: "Complete the sentence.", as: ["crowded", "alert"]}],

    ["f", "DashedSentence", {s: "The magazine was only slightly"},
     "Question",       {q: "Complete the sentence.", as: ["ripped", "apathetic"]}],

    ["f", "DashedSentence", {s: "The shoes were obviously quite"},
     "Question",       {q: "Complete the sentence.", as: ["new", "parched"]}],

    ["f", "DashedSentence", {s: "The stars were luckily fairly"},
     "Question",       {q: "Complete the sentence.", as: ["bright", "practical"]}],

    ["f", "DashedSentence", {s: "The rice was certainly very"},
     "Question",       {q: "Complete the sentence.", as: ["mushy", "sad"]}],

    ["f", "DashedSentence", {s: "The client was evidently rather"},
     "Question",       {q: "Complete the sentence.", as: ["rich", "sparkling"]}],

    ["f", "DashedSentence", {s: "The professor was almost always"},
     "Question",       {q: "Complete the sentence.", as: ["helpful", "melted"]}],

    ["f", "DashedSentence", {s: "The child was usually fairly"},
     "Question",       {q: "Complete the sentence.", as: ["sleepy", "mountainous"]}],

    ["f", "DashedSentence", {s: "The video was unfortunately extremely"},
     "Question",       {q: "Complete the sentence.", as: ["blurry", "burnt"]}],

    ["f", "DashedSentence", {s: "The shirt was clearly very"},
     "Question",       {q: "Complete the sentence.", as: ["baggy", "adamant"]}],

    ["f", "DashedSentence", {s: "The train was unquestionably very"},
     "Question",       {q: "Complete the sentence.", as: ["fast", "harsh"]}],

    ["f", "DashedSentence", {s: "The song was definitely very"},
     "Question",       {q: "Complete the sentence.", as: ["catchy", "mighty"]}],

    ["f", "DashedSentence", {s: "The comments were almost always"},
     "Question",       {q: "Complete the sentence.", as: ["rude", "awake"]}],

    ["f", "DashedSentence", {s: "The database was hardly very"},
     "Question",       {q: "Complete the sentence.", as: ["user-friendly", "sincere"]}],

    ["f", "DashedSentence", {s: "The chocolate was surprisingly quite"},
     "Question",       {q: "Complete the sentence.", as: ["delicious", "fearful"]}],

    ["f", "DashedSentence", {s: "The fish was certainly quite"},
     "Question",       {q: "Complete the sentence.", as: ["slippery", "polite"]}],

    ["f", "DashedSentence", {s: "The student was quite noticeably"},
     "Question",       {q: "Complete the sentence.", as: ["shy", "misty"]}],

    ["f", "DashedSentence", {s: "The conversation was truly remarkably"},
     "Question",       {q: "Complete the sentence.", as: ["interesting", "purple"]}],

    ["f", "DashedSentence", {s: "The town was rather quite"},
     "Question",       {q: "Complete the sentence.", as: ["small", "convievable"]}],

    ["f", "DashedSentence", {s: "The camera was evidently rather"},
     "Question",       {q: "Complete the sentence.", as: ["expensive", "amused"]}],

    ["f", "DashedSentence", {s: "The desk was most likely"},
     "Question",       {q: "Complete the sentence.", as: ["old", "excited"]}],

    ["f", "DashedSentence", {s: "The lake was entirely too"},
     "Question",       {q: "Complete the sentence.", as: ["cold", "kind"]}],

    ["f", "DashedSentence", {s: "The girl was really quite"},
     "Question",       {q: "Complete the sentence.", as: ["tall", "metallic"]}],

    ["f", "DashedSentence", {s: "The journalist was seemingly rather"},
     "Question",       {q: "Complete the sentence.", as: ["diligent", "moldy"]}],

    ["f", "DashedSentence", {s: "The engine was rather unfortunately"},
     "Question",       {q: "Complete the sentence.", as: ["broken", "squeamish"]}],

    ["f", "DashedSentence", {s: "The carpet was most certainly"},
     "Question",       {q: "Complete the sentence.", as: ["fuzzy", "cloudy"]}],

    ["f", "DashedSentence", {s: "The boy was rather unusually"},
     "Question",       {q: "Complete the sentence.", as: ["short", "windy"]}],

    ["f", "DashedSentence", {s: "The guests were probably extremely"},
     "Question",       {q: "Complete the sentence.", as: ["drunk", "functional"]}],

    ["f", "DashedSentence", {s: "The theory was certainly very"},
     "Question",       {q: "Complete the sentence.", as: ["complex", "ethereal"]}],

    ["f", "DashedSentence", {s: "The mirror was surprisingly very"},
     "Question",       {q: "Complete the sentence.", as: ["dirty", "stingy"]}],

    ["f", "DashedSentence", {s: "The menu was truly remarkably"},
     "Question",       {q: "Complete the sentence.", as: ["long", "elderly"]}],

    ["f", "DashedSentence", {s: "The room was rather unusually"},
     "Question",       {q: "Complete the sentence.", as: ["spacious", "unlikely"]}],

    ["f", "DashedSentence", {s: "The window was only slightly"},
     "Question",       {q: "Complete the sentence.", as: ["cracked", "cowardly"]}],

    ["f", "DashedSentence", {s: "The recipe was most definitely"},
     "Question",       {q: "Complete the sentence.", as: ["delicious", "fluffy"]}],

    ["f", "DashedSentence", {s: "The coffee was almost always"},
     "Question",       {q: "Complete the sentence.", as: ["bitter", "possessive"]}],

    ["f", "DashedSentence", {s: "The hotel was obviously extraordinarily"},
     "Question",       {q: "Complete the sentence.", as: ["luxurious", "nostalgic"]}],
    
    // TARGETS

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
    
    [["test_grammatical_singular",27], "DashedSentence", {s: "The apple near the cabinet was luckily fairly"},
     "Question",       {q: "Complete the sentence.", as: ["fresh", "childproof"]}],
    [["test_grammatical_plural",27], "DashedSentence", {s: "The apple near the cabinets was luckily fairly"},
     "Question",       {q: "Complete the sentence.", as: ["fresh", "childproof"]}],
    [["test_ungrammatical_singular",27], "DashedSentence", {s: "The apple near the cabinet were luckily fairly"},
     "Question",       {q: "Complete the sentence.", as: ["fresh", "childproof"]}],
    [["test_ungrammatical_plural",27], "DashedSentence", {s: "The apple near the cabinets were luckily fairly"},
     "Question",       {q: "Complete the sentence.", as: ["fresh", "childproof"]}],
    
    [["test_grammatical_singular",28], "DashedSentence", {s: "The key for the door was apparently quite"},
     "Question",       {q: "Complete the sentence.", as: ["lost", "open"]}],
    [["test_grammatical_plural",28], "DashedSentence", {s: "The key for the doors was apparently quite"},
     "Question",       {q: "Complete the sentence.", as: ["lost", "open"]}],
    [["test_ungrammatical_singular",28], "DashedSentence", {s: "The key for the door were apparently quite"},
     "Question",       {q: "Complete the sentence.", as: ["lost", "open"]}],
    [["test_ungrammatical_plural",28], "DashedSentence", {s: "The key for the doors were apparently quite"},
     "Question",       {q: "Complete the sentence.", as: ["lost", "open"]}],
    
    [["test_grammatical_singular",29], "DashedSentence", {s: "The couple with the stroller was seemingly rather"},
     "Question",       {q: "Complete the sentence.", as: ["tired", "damaged"]}],
    [["test_grammatical_plural",29], "DashedSentence", {s: "The couple with the strollers was seemingly rather"},
     "Question",       {q: "Complete the sentence.", as: ["tired", "damaged"]}],
    [["test_ungrammatical_singular",29], "DashedSentence", {s: "The couple with the stroller were seemingly rather"},
     "Question",       {q: "Complete the sentence.", as: ["tired", "damaged"]}],
    [["test_ungrammatical_plural",29], "DashedSentence", {s: "The couple with the strollers were seemingly rather"},
     "Question",       {q: "Complete the sentence.", as: ["tired", "damaged"]}],
    
    [["test_grammatical_singular",30], "DashedSentence", {s: "The movie with the dinosaur was really quite"},
     "Question",       {q: "Complete the sentence.", as: ["well-made", "extinct"]}],
    [["test_grammatical_plural",30], "DashedSentence", {s: "The movie with the dinosaurs was really quite"},
     "Question",       {q: "Complete the sentence.", as: ["well-made", "extinct"]}],
    [["test_ungrammatical_singular",30], "DashedSentence", {s: "The movie with the dinosaur were really quite"},
     "Question",       {q: "Complete the sentence.", as: ["well-made", "extinct"]}],
    [["test_ungrammatical_plural",30], "DashedSentence", {s: "The movie with the dinosaurs were really quite"},
     "Question",       {q: "Complete the sentence.", as: ["well-made", "extinct"]}],
    
    [["test_grammatical_singular",31], "DashedSentence", {s: "The man with the crutch was unfortunately very"},
     "Question",       {q: "Complete the sentence.", as: ["unhealthy", "bent"]}],
    [["test_grammatical_plural",31], "DashedSentence", {s: "The man with the crutches was unfortunately very"},
     "Question",       {q: "Complete the sentence.", as: ["unhealthy", "bent"]}],
    [["test_ungrammatical_singular",31], "DashedSentence", {s: "The man with the crutch were unfortunately very"},
     "Question",       {q: "Complete the sentence.", as: ["unhealthy", "bent"]}],
    [["test_ungrammatical_plural",31], "DashedSentence", {s: "The man with the crutches were unfortunately very"},
     "Question",       {q: "Complete the sentence.", as: ["unhealthy", "bent"]}],
    
    [["test_grammatical_singular",32], "DashedSentence", {s: "The music for the concert was clearly very"},
     "Question",       {q: "Complete the sentence.", as: ["difficult", "crowded"]}],
    [["test_grammatical_plural",32], "DashedSentence", {s: "The music for the concerts was clearly very"},
     "Question",       {q: "Complete the sentence.", as: ["difficult", "crowded"]}],
    [["test_ungrammatical_singular",32], "DashedSentence", {s: "The music for the concert were clearly very"},
     "Question",       {q: "Complete the sentence.", as: ["difficult", "crowded"]}],
    [["test_ungrammatical_plural",32], "DashedSentence", {s: "The music for the concerts were clearly very"},
     "Question",       {q: "Complete the sentence.", as: ["difficult", "crowded"]}],
    
    [["test_grammatical_singular",33], "DashedSentence", {s: "The eraser beside the pencil was evidently rather"},
     "Question",       {q: "Complete the sentence.", as: ["round", "sharp"]}],
    [["test_grammatical_plural",33], "DashedSentence", {s: "The eraser beside the pencils was evidently rather"},
     "Question",       {q: "Complete the sentence.", as: ["round", "sharp"]}],
    [["test_ungrammatical_singular",33], "DashedSentence", {s: "The eraser beside the pencil were evidently rather"},
     "Question",       {q: "Complete the sentence.", as: ["round", "sharp"]}],
    [["test_ungrammatical_plural",33], "DashedSentence", {s: "The eraser beside the pencils were evidently rather"},
     "Question",       {q: "Complete the sentence.", as: ["round", "sharp"]}],
    
    [["test_grammatical_singular",34], "DashedSentence", {s: "The owner of the store was rarely ever"},
     "Question",       {q: "Complete the sentence.", as: ["friendly", "cluttered"]}],
    [["test_grammatical_plural",34], "DashedSentence", {s: "The owner of the stores was rarely ever"},
     "Question",       {q: "Complete the sentence.", as: ["friendly", "cluttered"]}],
    [["test_ungrammatical_singular",34], "DashedSentence", {s: "The owner of the store were rarely ever"},
     "Question",       {q: "Complete the sentence.", as: ["friendly", "cluttered"]}],
    [["test_ungrammatical_plural",34], "DashedSentence", {s: "The owner of the stores were rarely ever"},
     "Question",       {q: "Complete the sentence.", as: ["friendly", "cluttered"]}],
    
    [["test_grammatical_singular",35], "DashedSentence", {s: "The person by the lounge was rarely ever"},
     "Question",       {q: "Complete the sentence.", as: ["excited", "vacant"]}],
    [["test_grammatical_plural",35], "DashedSentence", {s: "The person by the lounges was rarely ever"},
     "Question",       {q: "Complete the sentence.", as: ["excited", "vacant"]}],
    [["test_ungrammatical_singular",35], "DashedSentence", {s: "The person by the lounge were rarely ever"},
     "Question",       {q: "Complete the sentence.", as: ["excited", "vacant"]}],
    [["test_ungrammatical_plural",35], "DashedSentence", {s: "The person by the lounges were rarely ever"},
     "Question",       {q: "Complete the sentence.", as: ["excited", "vacant"]}],
    
    [["test_grammatical_singular",36], "DashedSentence", {s: "The house by the waterfall was probably extremely"},
     "Question",       {q: "Complete the sentence.", as: ["expensive", "turbulent"]}],
    [["test_grammatical_plural",36], "DashedSentence", {s: "The house by the waterfalls was probably extremely"},
     "Question",       {q: "Complete the sentence.", as: ["expensive", "turbulent"]}],
    [["test_ungrammatical_singular",36], "DashedSentence", {s: "The house by the waterfall were probably extremely"},
     "Question",       {q: "Complete the sentence.", as: ["expensive", "turbulent"]}],
    [["test_ungrammatical_plural",36], "DashedSentence", {s: "The house by the waterfalls were probably extremely"},
     "Question",       {q: "Complete the sentence.", as: ["expensive", "turbulent"]}],
    
    [["test_grammatical_singular",37], "DashedSentence", {s: "The backpack with the zipper was unfortunately extremely"},
     "Question",       {q: "Complete the sentence.", as: ["heavy", "broken"]}],
    [["test_grammatical_plural",37], "DashedSentence", {s: "The backpack with the zippers was unfortunately extremely"},
     "Question",       {q: "Complete the sentence.", as: ["heavy", "broken"]}],
    [["test_ungrammatical_singular",37], "DashedSentence", {s: "The backpack with the zipper were unfortunately extremely"},
     "Question",       {q: "Complete the sentence.", as: ["heavy", "broken"]}],
    [["test_ungrammatical_plural",37], "DashedSentence", {s: "The backpack with the zippers were unfortunately extremely"},
     "Question",       {q: "Complete the sentence.", as: ["heavy", "broken"]}],
    
    [["test_grammatical_singular",38], "DashedSentence", {s: "The book near the window was only slightly"},
     "Question",       {q: "Complete the sentence.", as: ["tattered", "transparent"]}],
    [["test_grammatical_plural",38], "DashedSentence", {s: "The book near the windows was only slightly"},
     "Question",       {q: "Complete the sentence.", as: ["tattered", "transparent"]}],
    [["test_ungrammatical_singular",38], "DashedSentence", {s: "The book near the window were only slightly"},
     "Question",       {q: "Complete the sentence.", as: ["tattered", "transparent"]}],
    [["test_ungrammatical_plural",38], "DashedSentence", {s: "The book near the windows were only slightly"},
     "Question",       {q: "Complete the sentence.", as: ["tattered", "transparent"]}],
    
    [["test_grammatical_singular",39], "DashedSentence", {s: "The note for the proprietor was surprisingly very"},
     "Question",       {q: "Complete the sentence.", as: ["illegible", "happy"]}],
    [["test_grammatical_plural",39], "DashedSentence", {s: "The note for the proprietors was surprisingly very"},
     "Question",       {q: "Complete the sentence.", as: ["illegible", "happy"]}],
    [["test_ungrammatical_singular",39], "DashedSentence", {s: "The note for the proprietor were surprisingly very"},
     "Question",       {q: "Complete the sentence.", as: ["illegible", "happy"]}],
    [["test_ungrammatical_plural",39], "DashedSentence", {s: "The note for the proprietors were surprisingly very"},
     "Question",       {q: "Complete the sentence.", as: ["illegible", "happy"]}],
    
    [["test_grammatical_singular",40], "DashedSentence", {s: "The umbrella near the closet was certainly very"},
     "Question",       {q: "Complete the sentence.", as: ["wet", "empty"]}],
    [["test_grammatical_plural",40], "DashedSentence", {s: "The umbrella near the closets was certainly very"},
     "Question",       {q: "Complete the sentence.", as: ["wet", "empty"]}],
    [["test_ungrammatical_singular",40], "DashedSentence", {s: "The umbrella near the closet were certainly very"},
     "Question",       {q: "Complete the sentence.", as: ["wet", "empty"]}],
    [["test_ungrammatical_plural",40], "DashedSentence", {s: "The umbrella near the closets were certainly very"},
     "Question",       {q: "Complete the sentence.", as: ["wet", "empty"]}],
    
    [["test_grammatical_singular",41], "DashedSentence", {s: "The towel on the shelf was almost entirely"},
     "Question",       {q: "Complete the sentence.", as: ["shredded", "tidy"]}],
    [["test_grammatical_plural",41], "DashedSentence", {s: "The towel on the shelves was almost entirely"},
     "Question",       {q: "Complete the sentence.", as: ["shredded", "tidy"]}],
    [["test_ungrammatical_singular",41], "DashedSentence", {s: "The towel on the shelf were almost entirely"},
     "Question",       {q: "Complete the sentence.", as: ["shredded", "tidy"]}],
    [["test_ungrammatical_plural",41], "DashedSentence", {s: "The towel on the shelves were almost entirely"},
     "Question",       {q: "Complete the sentence.", as: ["shredded", "tidy"]}],
    
    [["test_grammatical_singular",42], "DashedSentence", {s: "The photograph for the newspaper was certainly well"},
     "Question",       {q: "Complete the sentence.", as: ["cropped", "proofread"]}],
    [["test_grammatical_plural",42], "DashedSentence", {s: "The photograph for the newspapers was certainly well"},
     "Question",       {q: "Complete the sentence.", as: ["cropped", "proofread"]}],
    [["test_ungrammatical_singular",42], "DashedSentence", {s: "The photograph for the newspaper were certainly well"},
     "Question",       {q: "Complete the sentence.", as: ["cropped", "proofread"]}],
    [["test_ungrammatical_plural",42], "DashedSentence", {s: "The photograph for the newspapers were certainly well"},
     "Question",       {q: "Complete the sentence.", as: ["cropped", "proofread"]}],
    
    [["test_grammatical_singular",43], "DashedSentence", {s: "The child with the basketball was usually fairly"},
     "Question",       {q: "Complete the sentence.", as: ["happy", "inflated"]}],
    [["test_grammatical_plural",43], "DashedSentence", {s: "The child with the basketballs was usually fairly"},
     "Question",       {q: "Complete the sentence.", as: ["happy", "inflated"]}],
    [["test_ungrammatical_singular",43], "DashedSentence", {s: "The child with the basketball were usually fairly"},
     "Question",       {q: "Complete the sentence.", as: ["happy", "inflated"]}],
    [["test_ungrammatical_plural",43], "DashedSentence", {s: "The child with the basketballs were usually fairly"},
     "Question",       {q: "Complete the sentence.", as: ["happy", "inflated"]}],
    
    [["test_grammatical_singular",44], "DashedSentence", {s: "The water in the cooler was always remarkably"},
     "Question",       {q: "Complete the sentence.", as: ["refreshing", "damaged"]}],
    [["test_grammatical_plural",44], "DashedSentence", {s: "The water in the coolers was always remarkably"},
     "Question",       {q: "Complete the sentence.", as: ["refreshing", "damaged"]}],
    [["test_ungrammatical_singular",44], "DashedSentence", {s: "The water in the cooler were always remarkably"},
     "Question",       {q: "Complete the sentence.", as: ["refreshing", "damaged"]}],
    [["test_ungrammatical_plural",44], "DashedSentence", {s: "The water in the coolers were always remarkably"},
     "Question",       {q: "Complete the sentence.", as: ["refreshing", "damaged"]}],
    
    [["test_grammatical_singular",45], "DashedSentence", {s: "The runner in the marathon was certainly very"},
     "Question",       {q: "Complete the sentence.", as: ["athletic", "long"]}],
    [["test_grammatical_plural",45], "DashedSentence", {s: "The runner in the marathons was certainly very"},
     "Question",       {q: "Complete the sentence.", as: ["athletic", "long"]}],
    [["test_ungrammatical_singular",45], "DashedSentence", {s: "The runner in the marathon were certainly very"},
     "Question",       {q: "Complete the sentence.", as: ["athletic", "long"]}],
    [["test_ungrammatical_plural",45], "DashedSentence", {s: "The runner in the marathons were certainly very"},
     "Question",       {q: "Complete the sentence.", as: ["athletic", "long"]}],
    
    [["test_grammatical_singular",46], "DashedSentence", {s: "The ground under the water fountain was occasionally somewhat"},
     "Question",       {q: "Complete the sentence.", as: ["slippery", "loud"]}],
    [["test_grammatical_plural",46], "DashedSentence", {s: "The ground under the water fountains was occasionally somewhat"},
     "Question",       {q: "Complete the sentence.", as: ["slippery", "loud"]}],
    [["test_ungrammatical_singular",46], "DashedSentence", {s: "The ground under the water fountain were occasionally somewhat"},
     "Question",       {q: "Complete the sentence.", as: ["slippery", "loud"]}],
    [["test_ungrammatical_plural",46], "DashedSentence", {s: "The ground under the water fountains were occasionally somewhat"},
     "Question",       {q: "Complete the sentence.", as: ["slippery", "loud"]}],
    
    [["test_grammatical_singular",47], "DashedSentence", {s: "The elf with the present was almost always"},
     "Question",       {q: "Complete the sentence.", as: ["joyful", "wrapped"]}],
    [["test_grammatical_plural",47], "DashedSentence", {s: "The elf with the presents was almost always"},
     "Question",       {q: "Complete the sentence.", as: ["joyful", "wrapped"]}],
    [["test_ungrammatical_singular",47], "DashedSentence", {s: "The elf with the present were almost always"},
     "Question",       {q: "Complete the sentence.", as: ["joyful", "wrapped"]}],
    [["test_ungrammatical_plural",47], "DashedSentence", {s: "The elf with the presents were almost always"},
     "Question",       {q: "Complete the sentence.", as: ["joyful", "wrapped"]}],
    
    [["test_grammatical_singular",48], "DashedSentence", {s: "The food for the event was unquestionably very"},
     "Question",       {q: "Complete the sentence.", as: ["delicious", "organized"]}],
    [["test_grammatical_plural",48], "DashedSentence", {s: "The food for the events was unquestionably very"},
     "Question",       {q: "Complete the sentence.", as: ["delicious", "organized"]}],
    [["test_ungrammatical_singular",48], "DashedSentence", {s: "The food for the event were unquestionably very"},
     "Question",       {q: "Complete the sentence.", as: ["delicious", "organized"]}],
    [["test_ungrammatical_plural",48], "DashedSentence", {s: "The food for the events were unquestionably very"},
     "Question",       {q: "Complete the sentence.", as: ["delicious", "organized"]}],
    
];