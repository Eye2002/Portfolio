


function Mode() {
  document.body.classList.toggle("dark-mode");
  const btn = document.querySelector(".ModeD");

  if (document.body.classList.contains("dark-mode")) {
    btn.textContent = "☀️";
  } else {
    btn.textContent = "🌙";
  }
}

   let mybutton = document.getElementById("scrollTopBtn");

    // Show the button when user scrolls down 100px
    window.onscroll = function() {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        mybutton.classList.add("show");
      } else {
        mybutton.classList.remove("show");
      }
    };

    // When clicked, scroll to top smoothly
    function topFunction() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    //scrolll show / hide
        const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show-text');
        } else {
          entry.target.classList.remove('show-text'); 
        }
      });
    }, { threshold: 0.2 });
    document.querySelectorAll('.hidden-text').forEach((el) => observer.observe(el));

// pop slide 
    const popObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show-pop');
      } else {
        entry.target.classList.remove('show-pop');
      }
    });
  }, { threshold: 0.2 });

  // Apply observer only to .hidden-pop
  document.querySelectorAll('.hidden-pop').forEach((el) => popObserver.observe(el));


 // Intersection Observer for soft effect
  const softObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show-soft');
      } else {
        entry.target.classList.remove('show-soft');
      }
    });
  }, { threshold: 0.2 });

  // Target all elements with .hidden-soft
  document.querySelectorAll('.hidden-soft').forEach((el) => softObserver.observe(el));


  const leftObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show-left');
      } else {
        entry.target.classList.remove('show-left');
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.hidden-left').forEach((el) => leftObserver.observe(el));


  // Observer for RIGHT slide
  const rightObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show-right');
      } else {
        entry.target.classList.remove('show-right');
      }
    });
  }, { threshold: 0.2 });

  
  document.querySelectorAll('.hidden-right').forEach((el) => rightObserver.observe(el));


document.querySelector('.email-btn').addEventListener('click', function() {
  const email = "Castanedajay90@gmail.com";
  navigator.clipboard.writeText(email).then(function() {
  Swal.fire({
  position: "center",
  icon: "success",
  title: "Email address copied to clipboard!",
  showConfirmButton: false,
  timer: 1500
    });
  }, function(err) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Failed to copy email.'
    });
  });
});

 document.getElementById('downloadResume').addEventListener('click', function (event) {
      event.preventDefault();

      // Show SweetAlert2 popup
      Swal.fire({
        title: 'Thank you!',
        text: 'Your resume is being downloaded.',
        icon: 'success',
        confirmButtonText: 'OK',
        timer: 2000,
        showConfirmButton: false
      });

      setTimeout(function () {
        window.location.href = 'files/HResume.pdf'; 
      }, 1500);
    });







