const app = Vue.createApp({
    data(){
        return {
            title: "Contador App - Vue de Kevin Sierra",
            count: 0,
            valorDeInput: 26,
        }
    },
    methods: {
        modCount(instruction = "add", limit = 1){
            if(instruction==='dis'){
                this.count -= limit;
            }else{
                this.count += limit;
            }
        }
    }
})
