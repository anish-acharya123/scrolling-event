const first = document.getElementById('first-div');
const second = document.getElementById('second-div');
const third = document.getElementById('third-div');
const fourth = document.getElementById('fourth-div');
const cont = document.getElementById('container');
// const arry = document.getElementsByClassName('div');



    window.addEventListener('scroll',()=>{
        if(window.pageYOffset > 1 && window.pageYOffset < 300)
        {
            first.style.opacity = '1'
            first.style.background = 'blue'
            first.style.animation = 'first 2s 1'
        }
    
        
     if(window.pageYOffset > 300 && window.pageYOffset < 600 )
        {
            second.style.opacity = '1'
            second.style.background = 'red'
            second.style.animation = 'second 2s 1'
        }
     
     if(window.pageYOffset > 600 && window.pageYOffset < 1000)
        {
            third.style.opacity = '1'
            third.style.background = 'green'
            third.style.animation = 'third 2s 1'
        }
   
     if(window.pageYOffset > 1000 && window.pageYOffset < 1100)
        {
            fourth.style.opacity = '1'
            fourth.style.background = 'yellow'
            fourth.style.animation = 'fourth 2s 1'
        }
      
        else{

           
 
                window.addEventListener('scroll',()=>{
                    
                   
                    if(window.pageYOffset < 1 )
                    {
                        // cont.style.display = "show"
                        // e.style.animation = "hero 5s 1"
                        first.style.opacity = '0'
                        first.style.animation = "first-back 5s"
                    }
                    if(window.pageYOffset < 300 )
                    {
                        // e.style.animation = "hero 5s 1"
                        second.style.opacity = '0'
                        second.style.animation = "second-back 5s"
                      
                    }
                    if(window.pageYOffset < 600 )
                    {
                        // e.style.animation = "hero 5s 1"
                        third.style.opacity = '0'
                        third.style.animation = "third-back 5s"
                        
                    }
                    if(window.pageYOffset < 1000 )
                    {
                        fourth.style.opacity = '0'
                        // e.style.animation = "hero 5s 1"
                        fourth.style.animation = "fourth-back 5s"
                       
                    }
                })
            
        }
       
    })

