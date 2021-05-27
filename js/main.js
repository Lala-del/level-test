const body = document.querySelector("body");
    const navbar = document.querySelector(".navbar-menu");
    const menu = document.querySelector(".menu-list");
    const menuBtn = document.querySelector(".menu-btn");
    const cancelBtn = document.querySelector(".cancel-btn");
    menuBtn.onclick = ()=>{
      menu.classList.add("active");
      menuBtn.classList.add("hide");
      cancelBtn.classList.add("show");
      body.classList.add("disabledScroll");
    }
    cancelBtn.onclick = ()=>{
      menu.classList.remove("active");
      menuBtn.classList.remove("hide");
      cancelBtn.classList.remove("show");
      body.classList.remove("disabledScroll");
    }

    window.onscroll = ()=>{
      this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
    }


/// task 3

const a = "Welcome to Python";

console.log(
  a.split('').map(function(repeat) {
    return repeat + repeat;
  }).join('')
)


//task 4



    function smallest_alphabet(b, n)
    {
           
        let min = 'z';
       
        for (let i = 0; i < n - 1; i++)
            if (b[i].charCodeAt() < min.charCodeAt())
                min = b[i];
        return min;
    }
     
  let b = "abrakadabra"
  let size = b.length;

    console.log(smallest_alphabet(b, size));
     