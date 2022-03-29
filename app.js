

let app = new Vue({
    el: "#app",
    data: {
        Name: "",
        Email: "",
        message: "",

        lists: [
            {
                name:"Protagonist",
                codename:"Joker",
            },
            {
                name:"Anne",
                codename:"Panther",
            },
            {
                name:"Ryuji",
                codename:"Skull"
            },

    ]},

    watch: {
        Name: function () {
            if (this.Name.length < 2) {
                this.message = "Letter should more than 2 letters";

            }else {
                this.message = "";
            }
        },
        Email: function () {
            if (this.Email.slice(14,20)){
                this.message = "";
            } else {
                this.message = "Your text should be like @domain.com";
            }
        }
    }
})
