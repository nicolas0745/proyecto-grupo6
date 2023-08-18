(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open]"),
      openModalBtnMobile: document.querySelector("[data-modal-open-mobile]"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),
    };
    
    refs.openModalBtnMobile.addEventListener("click", toggleModal);
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();

  (() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal2-open]"),
      closeModalBtn: document.querySelector("[data-modal2-close]"),
      modal: document.querySelector("[data-modal2]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();

  (() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal3-open]"),
      closeModalBtn: document.querySelector("[data-modal3-close]"),
      modal: document.querySelector("[data-modal3]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();

  (() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal4-open]"),
      closeModalBtn: document.querySelector("[data-modal4-close]"),
      modal: document.querySelector("[data-modal4]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();

  
  (() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal5-open]"),
      closeModalBtn: document.querySelector("[data-modal5-close]"),
      modal: document.querySelector("[data-modal5]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();