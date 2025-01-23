const menuButton = document.getElementById('menuButton');
      const mobileMenu = document.getElementById('mobileMenu');
      
      menuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
setMode()
      document.querySelectorAll('.mode').forEach((e)=>{
        e.addEventListener('click', function () {
          if (localStorage.theme === 'dark') {
            localStorage.theme = 'light';
            document.querySelector('.mode').innerHTML='Dark Mode'
          } else {
            localStorage.theme = 'dark'; 
             document.querySelector('.mode').innerHTML='Light Mode'
          }
          setMode()
      })
     
       
      });
      function setMode(){
        document.documentElement.classList.toggle(
          'dark',
          localStorage.theme === 'dark' ||
            (!('theme' in localStorage) &&
              window.matchMedia('(prefers-color-scheme: dark)').matches)
        );
      }