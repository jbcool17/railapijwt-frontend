var viewHelpers = {
    hideById: function(id) {
        document.getElementById(id).style.visibility = 'hidden';
    },
    showById: function(id) {
        document.getElementById(id).style.visibility = '';
    }
}

export default viewHelpers;
