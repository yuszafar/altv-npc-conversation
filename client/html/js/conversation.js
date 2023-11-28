new Vue({
    el: '#dialogue',

    data() {
        return {
            name: '',
            title: '',
            text: '',
            answerList: [],
        };
    },

    mounted() {
        alt.on('setConversation', this.setConversation);
    },

    methods: {


        toggleAnswer(answer) {
            alt.emit("npcConversation:selectAnswer", answer);
        },
        setConversation(name, title, text, answers) {
            this.name = name;
            this.title = title;
            this.text = text;
            this.answerList = answers;

        },
    }
});
