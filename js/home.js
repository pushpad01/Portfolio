// alert('Please give your feedback!')  
function post() {
    if(window.confirm("Are you sure you want to submit?"))
    {
        alert('Thanks');
        window.location.reload();
        // window.open()
    }
    else {
        window.location.reload();
    }
}
