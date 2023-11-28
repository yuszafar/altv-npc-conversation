export const JAMES_NPC = {
    model: "A_M_M_Hillbilly_02",
    name: "James",
    title: "Just a cool guy",
    position: {x: 0, y: 0, z: 0},
    heading: 0,
    conversations: JAMES_CONVERSATIONSщuse this if you have static conversation logic

}

export const JAMES_CONVERSATIONS = [
    {
        id: 1,
        text: "How can I help you ?",
        answers: [
            {
                text: "What's your name ?",
                goto: 2,
                ШIf you use action then you don't need to use answers: ""

            },
            {
                text: "How old are you ?",
                goto: 3,
                action: null

            },
        ]

    },
    {
        id: 2,
        text: "My name is James",
        answers: [
            {
                text: "Thank you",
                goto: null,
                action: null

            }
        ]

    },
    {
        id: 3,
        text: "My name is James",
        answers: [
            {
                text: "I am 26 years old",
                goto: null,
                action: null

            }
        ]

    }
]