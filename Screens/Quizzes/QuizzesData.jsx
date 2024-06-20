import { COLORS } from "../../Constants/Colors";

const QuizzesData = [
    {
        id: 1,
        color: COLORS.Primary,
        image: require("../../Assets/Images/Personality-disorder-bro.png"),
        title: "Personality Disorder Quiz",
        questions: [
            {
                question: "Do you find it difficult to trust others?",
                options: [
                    { text: "Not at all", score: 1 },
                    { text: "Sometimes", score: 2 },
                    { text: "Often", score: 3 },
                    { text: "Very often", score: 4 },
                    { text: "Always", score: 5 }
                ]
            },
            {
                question: "How often do you feel like you have to be perfect?",
                options: [
                    { text: "Never", score: 1 },
                    { text: "Rarely", score: 2 },
                    { text: "Sometimes", score: 3 },
                    { text: "Often", score: 4 },
                    { text: "Always", score: 5 }
                ]
            },
            {
                question: "Do you experience frequent mood swings?",
                options: [
                    { text: "Never", score: 1 },
                    { text: "Rarely", score: 2 },
                    { text: "Sometimes", score: 3 },
                    { text: "Often", score: 4 },
                    { text: "Always", score: 5 }
                ]
            },
            {
                question: "Do you often feel like you are not good enough?",
                options: [
                    { text: "Never", score: 1 },
                    { text: "Rarely", score: 2 },
                    { text: "Sometimes", score: 3 },
                    { text: "Often", score: 4 },
                    { text: "Always", score: 5 }
                ]
            },
            {
                question: "Do you struggle with maintaining stable relationships?",
                options: [
                    { text: "Never", score: 1 },
                    { text: "Rarely", score: 2 },
                    { text: "Sometimes", score: 3 },
                    { text: "Often", score: 4 },
                    { text: "Always", score: 5 }
                ]
            },
            {
                question: "Do you frequently feel anxious or worried?",
                options: [
                    { text: "Never", score: 1 },
                    { text: "Rarely", score: 2 },
                    { text: "Sometimes", score: 3 },
                    { text: "Often", score: 4 },
                    { text: "Always", score: 5 }
                ]
            },
            {
                question: "Do you have trouble controlling your anger?",
                options: [
                    { text: "Never", score: 1 },
                    { text: "Rarely", score: 2 },
                    { text: "Sometimes", score: 3 },
                    { text: "Often", score: 4 },
                    { text: "Always", score: 5 }
                ]
            },
            {
                question: "Do you often feel empty or bored?",
                options: [
                    { text: "Never", score: 1 },
                    { text: "Rarely", score: 2 },
                    { text: "Sometimes", score: 3 },
                    { text: "Often", score: 4 },
                    { text: "Always", score: 5 }
                ]
            },
            {
                question: "Do you engage in impulsive behaviors?",
                options: [
                    { text: "Never", score: 1 },
                    { text: "Rarely", score: 2 },
                    { text: "Sometimes", score: 3 },
                    { text: "Often", score: 4 },
                    { text: "Always", score: 5 }
                ]
            },
            {
                question: "Do you often feel detached from reality or disconnected from your surroundings?",
                options: [
                    { text: "Never", score: 1 },
                    { text: "Rarely", score: 2 },
                    { text: "Sometimes", score: 3 },
                    { text: "Often", score: 4 },
                    { text: "Always", score: 5 }
                ]
            }
        ]
//         Scoring System Interpretation
// Total Score Range: 10 - 50
// 10-19: Low likelihood of personality disorder traits.
// 20-29: Mild likelihood of personality disorder traits.
// 30-39: Moderate likelihood of personality disorder traits.
// 40-50: High likelihood of personality disorder traits.

    },
    {
        id: 2,
        color: COLORS.Purple,
        image: require("../../Assets/Images/Depression-rafiki.png"),
        title: "Depression Quiz",
        questions: [
          {
            question: "How often do you have sleep disturbances?",
            options: [
              { text: "Never", score: 1 },
              { text: "Always", score: 2 },
              { text: "Often", score: 3 },
              { text: "Rarely", score: 4 },
              { text: "Sometimes", score: 5 },
              { text: "Not at all", score: 6 }
            ]
          },
          {
            question: "How is your appetite affected?",
            options: [
              { text: "Never", score: 1 },
              { text: "Always", score: 2 },
              { text: "Often", score: 3 },
              { text: "Rarely", score: 4 },
              { text: "Sometimes", score: 5 },
              { text: "Not at all", score: 6 }
            ]
          },
          {
            question: "How is your interest in activities you used to enjoy?",
            options: [
              { text: "I enjoy them as much as ever", score: 1 },
              { text: "I enjoy them much less", score: 2 },
              { text: "I enjoy them somewhat less", score: 3 },
              { text: "I hardly enjoy them at all", score: 4 },
              { text: "I don’t enjoy them at all", score: 5 }
            ]
          },
          {
            question: "How often do you experience feelings of fatigue or low energy?",
            options: [
              { text: "Never", score: 1 },
              { text: "Always", score: 2 },
              { text: "Often", score: 3 },
              { text: "Rarely", score: 4 },
              { text: "Sometimes", score: 5 },
              { text: "Not at all", score: 6 }
            ]
          },
          {
            question: "How often do you feel worthless or excessive guilt?",
            options: [
              { text: "Never", score: 1 },
              { text: "Always", score: 2 },
              { text: "Often", score: 3 },
              { text: "Rarely", score: 4 },
              { text: "Sometimes", score: 5 },
              { text: "Not at all", score: 6 }
            ]
          },
          {
            question: "How often do you have difficulty concentrating?",
            options: [
              { text: "Never", score: 1 },
              { text: "Always", score: 2 },
              { text: "Often", score: 3 },
              { text: "Rarely", score: 4 },
              { text: "Sometimes", score: 5 },
              { text: "Not at all", score: 6 }
            ]
          },
          {
            question: "How often do you experience physical agitation?",
            options: [
              { text: "Never", score: 1 },
              { text: "Always", score: 2 },
              { text: "Often", score: 3 },
              { text: "Rarely", score: 4 },
              { text: "Sometimes", score: 5 },
              { text: "Not at all", score: 6 }
            ]
          },
          {
            question: "How often do you have thoughts of self-harm or suicide?",
            options: [
              { text: "Never", score: 1 },
              { text: "Always", score: 2 },
              { text: "Often", score: 3 },
              { text: "Rarely", score: 4 },
              { text: "Sometimes", score: 5 },
              { text: "Not at all", score: 6 }
            ]
          },
          {
            question: "How often do you have issues with sleeping?",
            options: [
              { text: "Never", score: 1 },
              { text: "Always", score: 2 },
              { text: "Often", score: 3 },
              { text: "Rarely", score: 4 },
              { text: "Sometimes", score: 5 },
              { text: "Not at all", score: 6 }
            ]
          },
          {
            question: "How often do you experience feelings of aggression?",
            options: [
              { text: "Never", score: 1 },
              { text: "Always", score: 2 },
              { text: "Often", score: 3 },
              { text: "Rarely", score: 4 },
              { text: "Sometimes", score: 5 },
              { text: "Not at all", score: 6 }
            ]
          },
          {
            question: "How often do you feel hopeless?",
            options: [
              { text: "Never", score: 1 },
              { text: "Always", score: 2 },
              { text: "Often", score: 3 },
              { text: "Rarely", score: 4 },
              { text: "Sometimes", score: 5 },
              { text: "Not at all", score: 6 }
            ]
          },
          {
            question: "How often do you feel restless?",
            options: [
              { text: "Never", score: 1 },
              { text: "Always", score: 2 },
              { text: "Often", score: 3 },
              { text: "Rarely", score: 4 },
              { text: "Sometimes", score: 5 },
              { text: "Not at all", score: 6 }
            ]
          },
          {
            question: "How often do you experience lack of energy?",
            options: [
              { text: "Never", score: 1 },
              { text: "Always", score: 2 },
              { text: "Often", score: 3 },
              { text: "Rarely", score: 4 },
              { text: "Sometimes", score: 5 },
              { text: "Not at all", score: 6 }
            ]
          }
        ]
      }
      ,
    
        {
            id: 3,
            color: COLORS.Yellow,
            image: require("../../Assets/Images/Anxiety-bro.png"),
            title: "Anxiety Quiz",
            questions: [
                {
                    question: "How often do you feel nervous, anxious, or on edge?",
                    options: [
                        { text: "Never", score: 0 },
                        { text: "Rarely", score: 1 },
                        { text: "Sometimes", score: 2 },
                        { text: "Often", score: 3 },
                        { text: "Always", score: 4 }
                    ]
                },
                {
                    question: "How often do you worry too much about different things?",
                    options: [
                        { text: "Never", score: 0 },
                        { text: "Rarely", score: 1 },
                        { text: "Sometimes", score: 2 },
                        { text: "Often", score: 3 },
                        { text: "Always", score: 4 }
                    ]
                },
                {
                    question: "How often do you have trouble relaxing?",
                    options: [
                        { text: "Never", score: 0 },
                        { text: "Rarely", score: 1 },
                        { text: "Sometimes", score: 2 },
                        { text: "Often", score: 3 },
                        { text: "Always", score: 4 }
                    ]
                },
                {
                    question: "How often do you feel restless that it's hard to sit still?",
                    options: [
                        { text: "Never", score: 0 },
                        { text: "Rarely", score: 1 },
                        { text: "Sometimes", score: 2 },
                        { text: "Often", score: 3 },
                        { text: "Always", score: 4 }
                    ]
                },
                {
                    question: "How often do you become easily annoyed or irritable?",
                    options: [
                        { text: "Never", score: 0 },
                        { text: "Rarely", score: 1 },
                        { text: "Sometimes", score: 2 },
                        { text: "Often", score: 3 },
                        { text: "Always", score: 4 }
                    ]
                },
                {
                    question: "How often do you feel afraid as if something awful might happen?",
                    options: [
                        { text: "Never", score: 0 },
                        { text: "Rarely", score: 1 },
                        { text: "Sometimes", score: 2 },
                        { text: "Often", score: 3 },
                        { text: "Always", score: 4 }
                    ]
                }
            ]


//             Scoring System Interpretation
// 0-6 points: Low Anxiety

// Interpretation: You rarely experience symptoms of anxiety. This suggests that anxiety is not significantly impacting your daily life.
// 7-12 points: Mild Anxiety

// Interpretation: You experience some symptoms of anxiety. This level of anxiety might be manageable but could benefit from mindfulness or relaxation techniques.
// 13-18 points: Moderate Anxiety

// Interpretation: Anxiety is affecting you in various situations. It's advisable to seek strategies to manage anxiety, such as cognitive behavioral techniques, physical activity, or consulting a mental health professional.
// 19-24 points: High Anxiety

// Interpretation: Anxiety is significantly impacting your daily life. Seeking support from a mental health professional could be very beneficial to help manage these symptoms effectively.



        },
        
    // Add more quizzes if needed
];

export default QuizzesData;
