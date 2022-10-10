$(document).ready(function () {
    var currentFloor = 2
    var floorPath = $('.home-image path')
    var counterUp = $('.counter-up')
    var counterDown = $('.counter-down')
    var modal = $('.modal')
    var closeModalBtn = $('.modal-close-button')
    var viewFlatsBtn = $('.view-flats')
    var menuButton = $('.menu-button')
    var navbarPanel = $('.navbar-panel')

    menuButton.on('click', function () {
        navbarPanel.toggle('fast')
    })

    floorPath.on('mouseover', function () {
        floorPath.removeClass('current-floor')
        currentFloor = $(this).attr('data-floor')
        $('.counter').text(currentFloor)
    })

    floorPath.on('click', toggleModal)
    closeModalBtn.on('click', toggleModal)
    viewFlatsBtn.on('click', toggleModal)


    counterDown.on('click', function () {
        if (currentFloor > 02) {
            currentFloor--
            usCurrentFloor = currentFloor.toLocaleString('en-US', { minimumIntegerDigits: 2, useGroupping: false })
            $('.counter').text(usCurrentFloor)
            floorPath.removeClass('current-floor')
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor')
        }
    })

    counterUp.on('click', function () {
        if (currentFloor < 18) {
            currentFloor++
            usCurrentFloor = currentFloor.toLocaleString('en-US', { minimumIntegerDigits: 2, useGroupping: false })
            $('.counter').text(usCurrentFloor)
            floorPath.removeClass('current-floor')
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor')
        }
    })
    function toggleModal() {
        modal.toggleClass('is-open')
    }

    function colorLiBlue() {
        flat1.css('color', '#3596F5')
    }

    function colorLiBrown() {
        flat1.css('color', '#635854')
    }
});