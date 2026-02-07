/*
Problem-05: Text Analyzer for an AI Company
⚠️ Function Name Must be analyzeText()
জিহাদ একটি AI কোম্পানিতে কাজ করে।
 অনেক সময় ইউজাররা অনেক বড় লেখা (text) ইনপুট দেয়। এত বড় লেখা নিয়ে কাজ করতে AI-এর বেশি সময় লাগে।
তাই জিহাদ এমন একটি ফাংশন বানাতে চায়, যা বড় টেক্সটকে একটু ছোট করে বিশ্লেষণ করতে সাহায্য করবে।
তোমাকে একটি ফাংশন লিখতে হবে, যা—
1️⃣ ইনপুট হিসেবে একটি text (string) নেবে
 2️⃣ ওই text থেকে  সবচেয়ে বড় (দীর্ঘ) শব্দটি খুঁজে বের করবে
 3️⃣ পুরো text-এ মোট কতটি অক্ষর আছে তা গণনা করবে
  ➡️ স্পেস (space) গণনায় ধরা হবে না
এই তথ্যগুলো ব্যবহার করে জিহাদ একটি ছোট summary তৈরি করতে পারবে।
👉 তোমার কাজ হলো এই লজিক ব্যবহার করে একটি ফাংশন তৈরি করা।
ফাংশনের কাজ: ফাংশনটি ইনপুট হিসেবে একটি String নেবে এবং একটি Object রিটার্ন করবে যেখানে সবচেয়ে বড় শব্দ এবং মোট ক্যারেক্টার সংখ্যা থাকবে।

📥 Input:
ইনপুট হবে একটি String (একটি পূর্ণ বাক্য/ Sentence)। 


 🚀 Output:
Object: { longwords:String, token: Number }
longwords → সবচেয়ে বড় শব্দের একটা string  (highest সাইজ এর ওয়ার্ড multiple হলে প্রথম টা)
token → Sentence এর total length without স্পেস 




Challenge 📢 : যদি ইনপুটটি String না হয় (যেমন: Number, Array বা Object), তবে আউটপুট হিসেবে Invalid রিটার্ন করতে হবে।


Hints 💡:  split(), join() মেথড ব্যবহার করতে পারো। 
*/

function analyzeText(str){
    let maxLength = 0, bWord = "";
    if (typeof str !== "string" || str.length <= 0) return "Invalid";

    let strArray = str.split(" ");
    // for (word of strArray){
    //     if (maxLength < word.length) {maxLength = word.length; bWord = word};
    // }

    for (let i = 0; i < strArray.length; i++){
        if (maxLength < strArray[i].length) {maxLength = strArray[i].length; bWord = strArray[i]}
    }

    let sentenceSummery = { longwords: bWord, token: strArray.join("").length };
    return sentenceSummery;
}

// let crp = "I am a little honest person", max = 0, wd = 0;
// console.log(crp instanceof String ? true : false);
// crp = crp.split(" ");
// for (crowd of crp){
//     if (max < crowd.length) {max = crowd.length; wd = crowd};
// }

// max;
// wd;
// let sence = { large : max, word : wd };
// console.log(sence);

console.log(analyzeText("I am a little honest person"));
console.log(analyzeText("Hello world"));
console.log(analyzeText("Keep coding keep shining"));
console.log(analyzeText(12345));
console.log(analyzeText("Programming is fun"));