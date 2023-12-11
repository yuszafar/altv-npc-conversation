

export const BILL_CONVERSATIONS = [
    {
        action: "checkCar"
    },
    {
        id: 1,
        text: "Hello, I'm a rich man. How can I help you ?",
        answers: [
            {
                text: "Please give me the car",
                goto: null,
                action: "giveCar"

            }
        ]

    },
    {
        id: 2,
        text: "I already gave you a car",
        answers: [
            {
                text: "Thank you",
                goto: null,
                action: null

            }
        ]

    }
]

export const BILL_NPC = {
    model: "A_M_M_Business_01",
    name: "BILL",
    title: "Rich man",
    position: {x: -113.34066009521484, y: -1053.5736083984375, z: 27.2579345703125},
    heading: -0.49473902583122253,
    conversations: BILL_CONVERSATIONS
}