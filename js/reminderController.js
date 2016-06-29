var reminderController = {
    
    init: function(params) {
        reminderController.setForm();
        reminderController.displayReminders();
    },
    
    setForm: function () {
        var form = document.getElementById('form-reminder');
        form.addEventListener('add', reminderController.eventAddHandler);
    },
    
    eventAddHandler: function (event) {
        event.preventDefault();
        var inputReminder = document.getElementById('reminder');
        reminderController.addReminder(inputReminder.value);
        inputReminder.value = "";
    },
    
    addReminder: function(reminder) {
        list-reminder.addReminder(reminder);
        htmlreminder.displayAddedReminder(reminder);
    },
    
    displayReminder: function() {
        var reminders = list-reminder.getList();
        reminders.forEach(htmlreminder.displayAddedReminder);
    }
    
};

//inicialização
list-reminder.init();