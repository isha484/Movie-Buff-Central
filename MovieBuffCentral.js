gsap.from(".nav .left",{
    y:-20,
    duratioon:0.8,
    opacity:0
})
gsap.from(".nav .right h5",{
    y:-20,
    duration:0.8,
    opacity:0,
    delay:0.5,
    stagger: 0.2
})
gsap.from(".poster .film h1",{
    x:-1200,
    duration:2,
    opcatity:0,
    delay:0.8
})
gsap.from(".poster .film p",{
    x:-1200,
    duration:2,
    opcatity:0,
    delay:0.8
})
gsap.from(".poster .circle",{
    y:-1200,
    duration:2,
    opcatity:0,
    delay:0.8
})





// var scroll= new LocomotiveScroll({
//     el:document.querySelector(".body"),
//     smooth:true
// })
var Quotes = [
    // Animal
    "Hum insaan insaan nahi rehte, jab hum jaanwar ban jaate hain.",
    "Badle ki aag har insaan ko andha kar deti hai.",
    "Is jang mein sirf ek hi vijay hai, aur wo hai maut.",
    "Kabhi kabhi jaanvar hona zaroori hota hai.",
    "Tumhe shayad samajh nahi, par ye raat hamari hai.",
    
    // Siddat
    "Pyaar ki koi seema nahi hoti.",
    "Jo dil ka raasta hai, wo kabhi khatam nahi hota.",
    "Jab tak tum mere saath ho, sab kuch thik hai.",
    "Ishq karne wale hamesha jeet te hain.",
    "Meri zindagi ka ek hi maqsad hai, tum.",
    
    // Malaal
    "Zindagi ek rangmanch hai, hum sab kalakar hain.",
    "Dilon ki doori kabhi khatam nahi hoti.",
    "Kabhi kabhi haar ke bhi jeet hoti hai.",
    "Hum dono ke sapne alag the, par raste ek.",
    "Mujhe tumse koi shikayat nahi, bas ek hi guzarish hai.",
    
    // Teri Baaton Mai Aise Uljhe Jiya (Song)
    "Teri baaton mein aise uljhe jiya, ke sapne huye mere saath jiya.",
    "Har pal teri yaadon mein kho gaya.",
    "Teri aankhon ka jadoo, ek nasha sa hai.",
    "Dil ki duniya bas teri baaton se chalti hai.",
    "Tu hai meri zindagi ka raaz, sab kuch tujh mein hai.",
    
    // Dear Zindagi
    "Kabhi kabhi galat train bhi sahi jagah le jaati hai.",
    "Don't let your past blackmail your present to ruin your future.",
    "Zindagi simple honi chahiye, complicated toh log hote hain.",
    "Jitni bhi problems ho, kaafi hoti hain, jab tak hum zinda hain.",
    "It's OK to be confused. Confusion se hi clarity aati hai.",
    
    // Jab Tak Hai Jaan
    "Har ishq ka ek waqt hota hai.",
    "Main jeena nahi chahta, jab tak hai jaan.",
    "Hum toh bas ek pal ke liye zinda rehte hain.",
    "Tere bina main adhura hoon.",
    "Ishq de rang kuch aur hote hain, jab tak hai jaan."
  ];
  

  var quotebut=document.querySelector("#quotebut")
  var quot=document.querySelector(".quot")

  quotebut.addEventListener("click",function(){
    var randomquotes=Math.floor(Math.random()*Quotes.length)
    console.log(randomquotes)
    quot.innerHTML=Quotes[randomquotes]
  })



  //array for trivia quiz
let currentQuestionIndex = 0;

const triviaQuestions =[
  {
      question: "Who is the lead actor in the movie 'Animal'?",
      options: ["Ranbir Kapoor", "Shahid Kapoor", "Ranveer Singh", "Varun Dhawan"],
      answer: "Ranbir Kapoor"
  },
  {
      question: "In 'Siddat', which actor plays the role of Jaggi?",
      options: ["Sunny Kaushal", "Vicky Kaushal", "Ishaan Khatter", "Kartik Aaryan"],
      answer: "Sunny Kaushal"
  },
  {
      question: "Which actress plays the lead role of Kartika in 'Malaal'?",
      options: ["Sharmin Segal", "Sara Ali Khan", "Janhvi Kapoor", "Ananya Panday"],
      answer: "Sharmin Segal"
  },
  {
      question: "'Teri Baaton Mai Aise Uljhe Jiya' is a song from which movie?",
      options: ["Siddat", "Malaal", "Dear Zindagi", "None of the above"],
      answer: "None of the above"
  },
  {
      question: "Which famous director helmed 'Dear Zindagi'?",
      options: ["Karan Johar", "Zoya Akhtar", "Gauri Shinde", "Farah Khan"],
      answer: "Gauri Shinde"
  },
  {
      question: "Who plays the role of Samar Anand in 'Jab Tak Hai Jaan'?",
      options: ["Shah Rukh Khan", "Salman Khan", "Ranbir Kapoor", "Akshay Kumar"],
      answer: "Shah Rukh Khan"
  },
  {
      question: "What is the central theme of 'Dear Zindagi'?",
      options: ["Friendship", "Mental health", "Romance", "Action"],
      answer: "Mental health"
  },
  {
      question: "In 'Siddat', where do Jaggi and Kartika first meet?",
      options: ["On a road trip", "At a wedding", "In a swimming pool", "At a sports event"],
      answer: "In a swimming pool"
  },
  {
      question: "'Jab Tak Hai Jaan' marks the last directorial film of which legendary director?",
      options: ["Yash Chopra", "Karan Johar", "Aditya Chopra", "Sanjay Leela Bhansali"],
      answer: "Yash Chopra"
  },
  {
      question: "Which sport is prominently featured in 'Dear Zindagi'?",
      options: ["Cricket", "Basketball", "Cycling", "Tennis"],
      answer: "Cycling"
  },
  {
      question: "Who played the female lead opposite Shah Rukh Khan in 'Jab Tak Hai Jaan'?",
      options: ["Katrina Kaif", "Anushka Sharma", "Deepika Padukone", "Priyanka Chopra"],
      answer: "Katrina Kaif"
  },
  {
      question: "Which song from 'Dear Zindagi' became an instant hit?",
      options: ["Love You Zindagi", "Just Go to Hell Dil", "Tu Hi Hai", "Ae Zindagi Gale Laga Le"],
      answer: "Love You Zindagi"
  },
  {
      question: "What is the profession of Shah Rukh Khan's character in 'Jab Tak Hai Jaan'?",
      options: ["Chef", "Bomb disposal expert", "Businessman", "Writer"],
      answer: "Bomb disposal expert"
  },
  {
      question: "What motivates Jaggi in 'Siddat' to pursue Kartika?",
      options: ["Family expectations", "Love", "Revenge", "Professional ambition"],
      answer: "Love"
  },
  {
      question: "Which movie features the song 'Teri Baaton Mai Aise Uljhe Jiya'?",
      options: ["A Single Track Release", "A Romantic Film", "A Web Series", "None of the Above"],
      answer: "A Single Track Release"
  },
  {
      question: "Who composed the music for 'Jab Tak Hai Jaan'?",
      options: ["A.R. Rahman", "Pritam", "Shankar-Ehsaan-Loy", "Vishal-Shekhar"],
      answer: "A.R. Rahman"
  },
  {
      question: "In 'Dear Zindagi', who helps Kaira (Alia Bhatt) understand her life's complexities?",
      options: ["Her friends", "Her therapist", "Her parents", "Her boyfriend"],
      answer: "Her therapist"
  },
  {
      question: "Which famous poet's verses are recited by Shah Rukh Khan in 'Jab Tak Hai Jaan'?",
      options: ["Mirza Ghalib", "Javed Akhtar", "Gulzar", "Rabindranath Tagore"],
      answer: "Gulzar"
  },
  {
      question: "Who plays Kaira’s therapist in 'Dear Zindagi'?",
      options: ["Shah Rukh Khan", "Aamir Khan", "Ranbir Kapoor", "Siddharth Malhotra"],
      answer: "Shah Rukh Khan"
  },
  {
      question: "Which of these movies features a long-distance romance as a central theme?",
      options: ["Malaal", "Siddat", "Animal", "Dear Zindagi"],
      answer: "Siddat"
  },
  {
      question: "In 'Malaal', what cultural differences challenge the relationship between Shiva and Astha?",
      options: ["Religious differences", "Economic background", "Caste differences", "Education level"],
      answer: "Economic background"
  },
  {
      question: "Which song from 'Jab Tak Hai Jaan' became iconic?",
      options: ["Challa", "Saans", "Ishq Shava", "Heer"],
      answer: "Saans"
  },
  {
      question: "What profession does Kaira (Alia Bhatt) pursue in 'Dear Zindagi'?",
      options: ["Fashion designer", "Photographer", "Writer", "Interior designer"],
      answer: "Photographer"
  },
  {
      question: "Which actor made a cameo appearance in 'Dear Zindagi'?",
      options: ["Aditya Roy Kapur", "Ali Zafar", "Siddharth Malhotra", "Shah Rukh Khan"],
      answer: "Ali Zafar"
  },
  {
      question: "In 'Jab Tak Hai Jaan', what is Meera’s (Katrina Kaif) promise to God?",
      options: ["To leave Samar if he survives", "To never marry Samar", "To marry another man", "To move to London"],
      answer: "To leave Samar if he survives"
  }
];


// Display the current question and options
function displayQuestion() {
    const question = triviaQuestions[currentQuestionIndex];
    document.querySelector(".ques").innerText = question.question;

    const optionsHtml = question.options.map((option) => 
        `<button onclick="checkAnswer('${option}', '${question.answer}')">${option}</button>`
    ).join('');
    
    document.getElementById("options").innerHTML = optionsHtml;
}

// Check if the selected answer is correct
function checkAnswer(selected, correct) {
    if (selected === correct) {
        alert("Correct!");
    } else {
        alert("Wrong! The correct answer was: " + correct);
    }
    document.getElementById("next-button").style.display = "block";
}

// Move to the next question
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < triviaQuestions.length) {
        displayQuestion();
        document.getElementById("next-button").style.display = "none";
    } else {
        alert("You've completed the quiz!");
    }
}

// Display the first question when the page loads
window.onload = () => {
    displayQuestion();
};
