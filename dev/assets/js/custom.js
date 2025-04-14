const burger = document.querySelector('#btn-burger')

const mobileContainer = document.querySelector('#mobile-container')



burger.addEventListener('click', ()=> {

    burger.classList.toggle('active')

    mobileContainer.classList.toggle('show')

})


// modal//

const modalTrigers = document.querySelectorAll('[data-trigger-modal]');
const modalClose = document.querySelectorAll('[data-modal-close]')
const overlay = document.querySelector('.overlay')
const body = document.querySelector('body')




function showModal() {
    
    body.classList.add('overflow-hidden')
    overlay.classList.add('show')
    
}

function closeModal(){
    const openModal = document.querySelector('.modal.show');
    body.classList.remove('overflow-hidden')
    overlay.classList.remove('show')

    openModal.classList.remove('show')
    

}


modalTrigers.forEach(item => {
    item.addEventListener('click' , function(event){
        event.preventDefault()

        const dataTriger = item.getAttribute('data-trigger-modal')
        const modal = document.querySelector('#' + dataTriger)
        
        showModal()
        modal.classList.add('show')
    })
    
})

modalClose.forEach(close => {
    close.addEventListener('click', closeModal)
})

// function closeModal() {
    
//     overlay.classList.remove('show')
//     modal.classList.remove('show')
//     body.classList.remove('overflow-hidden')
    
// }


// btnTrigerProcess.addEventListener('click', showModal)
// btnModalClose.addEventListener('click', closeModal)

