var htmlreminder = {
    
    displayAddedReminder: function(reminder) {
        var listLembrete = htmlreminder.createListLembrete(reminder);
        htmlreminder.addToList(listLembrete);
    },
    
    createListLembrete: function(text) {
        var listlembrete = document.createElement('li');
        listlembrete.innerHTML = text;
        return listLembrete;
    },
    
    addToList: function (listLembrete) {
        var unOrderedList = document.getElementById('list-reminder');
        unOrderedList.appendChild(listLembrete);
    }
};