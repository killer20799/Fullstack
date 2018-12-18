$('#pause').hide()
$('#play').on('click', function() {
    $('#play').hide()
    $('#nhac').get(0).play()
    $('#pause').show()
})
$('#pause').on('click', function() {
    $('#pause').hide()
    $('#nhac').get(0).pause()
    $('#play').show()
})