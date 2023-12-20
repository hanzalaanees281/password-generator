let btn = document.getElementById("btn")

btn.addEventListener("click", ()=>{
    class Password {
        constructor(){
            this.pass=""

        }
        generatePassword(len){
            let chars = "abcdefghijklmnopqrstuvwxyz"
            let num = "1234567890"
            let spec = "!@#$%&"
             
            let i = 0 
            while (i<len) {
                this.pass += chars[Math.floor(Math.random()*chars.length)]
                this.pass += num[Math.floor(Math.random()*num.length)]
                this.pass += spec[Math.floor(Math.random()*spec.length)]
                i +=3
            }
          this.pass = this.pass.substr(0,len)
          return this.pass
        }
    }
    let p = new Password
    gen.innerHTML = (p.generatePassword(7));
})