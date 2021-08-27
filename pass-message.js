(function(){
    window.onload = function(){
        const form =document.querySelector('.form');

        form.addEventListener('submit', function(a){
            a.preventDefault();

            const message = document.querySelector('.message');
            const feedback = document.querySelector('.show');
            const messageContent = document.querySelector('.input');

            if(message.value===''){
                feedback.textContent ='Please Enter The Text';
                feedback.style.color='red';
                setTimeout(function() {
                    feedback.textContent ='Last Message Deliver';
                    feedback.style.color='black';
                }, 3000);
            }
            else{
            messageContent.textContent = message.value;
            message.value ='';
            
            }
        });
    }
})()
    

    


































