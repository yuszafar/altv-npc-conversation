

export const JAMES_CONVERSATIONS = [
    {
        id: 1,
        text: "How can I help you ?",
        answers: [
            {
                text: "What's your name ?",
                goto: 2,
                action: null

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
        text: "I am 26 years old",
        answers: [
            {
                text: "Thank you",
                goto: null,
                action: null

            }
        ]

    }
]

export const JAMES_NPC = {
    model: "A_M_M_Hillbilly_02",
    name: "James",
    title: "Just a cool guy",

    position: {x: -104.16263580322266, y: -1056.949462890625, z: 27.6959228515625},
    heading: 0.49473902583122253,
    conversations: JAMES_CONVERSATIONS

}