$(document).ready(function () {
    var currentFloor = 2
    var floorPath = $('.home-image path')
    var counterUp = $('.counter-up')
    var counterDown = $('.counter-down')
    var modal = $('.modal')
    var closeModalBtn = $('.modal-close-button')
    var viewFlatsBtn = $('.view-flats')
    var highlight1 = $('#path1')
    var highlight2 = $('#path2')
    var highlight3 = $('#path3')
    var highlight4 = $('#path4')
    var highlight5 = $('#path5')
    var highlight6 = $('#path6')
    var highlight7 = $('#path7')
    var highlight8 = $('#path8')
    var highlight9 = $('#path9')
    var highlight10 = $('#path10')
    var flat1 = $('#flat1')
    var flat2 = $('#flat2')
    var flat3 = $('#flat3')
    var flat4 = $('#flat4')
    var flat5 = $('#flat5')
    var flat6 = $('#flat6')
    var flat7 = $('#flat7')
    var flat8 = $('#flat8')
    var flat9 = $('#flat9')
    var flat10 = $('#flat10')

    floorPath.on('mouseover', function () {
        floorPath.removeClass('current-floor')
        currentFloor = $(this).attr('data-floor')
        $('.counter').text(currentFloor)
    })

    floorPath.on('click', toggleModal)
    closeModalBtn.on('click', toggleModal)
    viewFlatsBtn.on('click', toggleModal)

    highlight1.on('mouseover', function () {
        flat1.css('color', '#3596F5')
    })
    highlight1.on('mouseout', function () {
        flat1.css('color', '#635854')
    })

    highlight2.on('mouseover', function () {
        flat2.css('color', '#3596F5')
    })
    highlight2.on('mouseout', function () {
        flat2.css('color', '#635854')
    })

    highlight3.on('mouseover', function () {
        flat3.css('color', '#3596F5')
    })
    highlight3.on('mouseout', function () {
        flat3.css('color', '#635854')
    })

    highlight4.on('mouseover', function () {
        flat4.css('color', '#3596F5')
    })
    highlight4.on('mouseout', function () {
        flat4.css('color', '#635854')
    })

    highlight5.on('mouseover', function () {
        flat5.css('color', '#3596F5')
    })
    highlight5.on('mouseout', function () {
        flat5.css('color', '#635854')
    })

    highlight6.on('mouseover', function () {
        flat6.css('color', '#3596F5')
    })
    highlight6.on('mouseout', function () {
        flat6.css('color', '#635854')
    })

    highlight7.on('mouseover', function () {
        flat7.css('color', '#3596F5')
    })
    highlight7.on('mouseout', function () {
        flat7.css('color', '#635854')
    })

    highlight8.on('mouseover', function () {
        flat8.css('color', '#3596F5')
    })
    highlight8.on('mouseout', function () {
        flat8.css('color', '#635854')
    })

    highlight9.on('mouseover', function () {
        flat9.css('color', '#3596F5')
    })
    highlight9.on('mouseout', function () {
        flat9.css('color', '#635854')
    })

    highlight10.on('mouseover', function () {
        flat10.css('color', '#3596F5')
    })
    highlight10.on('mouseout', function () {
        flat10.css('color', '#635854')
    })



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