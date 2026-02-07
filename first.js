
// based on month
const zodiacSigns = [
    "Capricorn", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini",
    "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius"
  ];
  // size 31 based on date
  const compliments = [
  "You have a really kind heart.",
  "Your smile makes people feel comfortable.",
  "You are stronger than you think.",
  "Your presence brings positive energy.",
  "You have a beautiful way of thinking.",
  "People feel inspired around you.",
  "You are doing better than you realize.",
  "Your honesty is your superpower.",
  "You have a calm and peaceful aura.",
  "You are naturally intelligent.",
  "Your creativity stands out.",
  "You have a great sense of responsibility.",
  "You make others feel valued.",
  "Your confidence is growing every day.",
  "You handle challenges with grace.",
  "You have a pure and genuine nature.",
  "Your hard work will pay off.",
  "You are emotionally strong.",
  "You have leadership qualities.",
  "Your intentions are always good.",
  "You bring balance wherever you go.",
  "You are trusted by people around you.",
  "Your patience is admirable.",
  "You have a bright future ahead.",
  "You are learning and evolving constantly.",
  "Your positivity is contagious.",
  "You have a sharp and focused mind.",
  "You are worthy of success.",
  "Your efforts never go unnoticed.",
  "You spread warmth and care.",
  "You are exactly where you need to be right now."
];
//size20
const victimCardCompliments = [
  "You’ve been through a lot, and it’s okay to feel tired.",
  "Not everyone understands your struggles, but they are real.",
  "You tried your best with what you had at the time.",
  "It’s not your fault that things turned out this way.",
  "You deserved more support than you received.",
  "Anyone in your place would have felt the same.",
  "You carried burdens that were never meant to be yours.",
  "You stayed strong even when life was unfair to you.",
  "Your pain matters, even if others ignored it.",
  "You gave more than you ever got back.",
  "You were misunderstood, not weak.",
  "You kept going despite emotional wounds.",
  "You had to learn things the hard way, and that wasn’t fair.",
  "Your silence doesn’t mean you weren’t hurting.",
  "You were doing your best in a difficult situation.",
  "You sacrificed a lot for people who didn’t see it.",
  "You were treated unfairly, and that pain is valid.",
  "You endured more than most people realize.",
  "You didn’t fail — circumstances failed you.",
  "You survived things that could have broken anyone."
];
//size 30
const recommendations = [
  "Focus on taking one small step toward your goal today.",
  "Take some time to rest and recharge your energy.",
  "Be honest with yourself about what you truly want.",
  "Work on improving your daily routine.",
  "Spend time with people who genuinely support you.",
  "Practice patience; not everything needs to happen immediately.",
  "Pay attention to your mental and emotional health.",
  "Avoid overthinking things you cannot control.",
  "Trust your instincts when making decisions.",
  "Work on building consistency, not perfection.",
  "Express your feelings instead of holding them inside.",
  "Make time for learning something new.",
  "Set clear boundaries with people who drain your energy.",
  "Take responsibility for your growth and choices.",
  "Believe more in your abilities and strengths.",
  "Let go of past mistakes and focus on progress.",
  "Spend some time alone to reflect and plan.",
  "Be kind to yourself during difficult moments.",
  "Work on improving communication in your relationships.",
  "Turn your ideas into small actions.",
  "Stay disciplined even when motivation is low.",
  "Take care of your physical health through movement or exercise.",
  "Avoid comparing your journey with others.",
  "Focus on long-term growth rather than quick results.",
  "Learn to say no when something doesn’t feel right.",
  "Practice gratitude for what you already have.",
  "Use your time wisely and avoid unnecessary distractions.",
  "Trust the process, even when results are slow.",
  "Focus on becoming emotionally stronger.",
  "Take initiative instead of waiting for the perfect moment."
];
//size 20
const futurePredictions = [
  "A new opportunity will open up for you sooner than expected.",
  "Your efforts will slowly start showing positive results.",
  "You may receive good news related to personal growth.",
  "A challenging phase will teach you an important life lesson.",
  "You will gain more clarity about your future direction.",
  "Someone supportive will enter your life and help you grow.",
  "Financial stability will improve with disciplined decisions.",
  "You will feel more confident about your choices.",
  "A past issue will finally begin to resolve.",
  "You will develop stronger emotional balance.",
  "Your patience will be rewarded in the coming time.",
  "A meaningful connection will strengthen your happiness.",
  "You will discover a hidden strength within yourself.",
  "Your hard work will not go unnoticed by others.",
  "You may take a bold step that leads to growth.",
  "A period of self-reflection will bring inner peace.",
  "You will feel more motivated to work on your goals.",
  "Positive changes will slowly replace old worries.",
  "You will gain respect through consistent effort.",
  "The future holds steady progress rather than sudden change."
];

const form = document.getElementById("astroForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstname = document.getElementById("firstName").value;
  const lastname = document.getElementById("lastName").value;
  const date = Number(document.getElementById("date").value);
  const month = Number(document.getElementById("month").value);
  const year = Number(document.getElementById("year").value);

  const result = document.getElementById("result");

  const firstmsg = `Hello ${firstname} ${lastname}.`;
  const secondmsg = `Your zodiac sign is ${zodiacSigns[month - 1]}.`;

  const thirdmsg =
    compliments[(date - 1) % compliments.length];

  let index = Math.floor(Math.random() * victimCardCompliments.length);
  const fourthmsg = victimCardCompliments[index];

  index =
    (firstname.length * lastname.length * year) %
    recommendations.length;
  const fifthmsg = recommendations[index];

  index = (date * month * year) % futurePredictions.length;
  const sixthmsg = futurePredictions[index];

  result.style.display = "block";
  result.innerText = `${firstmsg} ${secondmsg} ${thirdmsg} ${fourthmsg} Our Recommendation For You: ${fifthmsg}Your Future Prediction For You: ${sixthmsg}`;
});