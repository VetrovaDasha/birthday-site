
function toggleForm() {
    var form = document.getElementById('rsvp-form');
    if (form.classList.contains('hidden')) {
        form.classList.remove('hidden');
    } else {
        form.classList.add('hidden');
    }
}