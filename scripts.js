const switchElement = document.querySelector('.switch')

// if switched in clicked, execute function
switchElement.addEventListener('click', () => {
    document.body.classList.toggle('dark')
})
