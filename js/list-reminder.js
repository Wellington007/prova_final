var list-reminder = {

    reminders: [],

    getList: function () {
        list-reminder.loadReminders();
        return list-reminder.reminders;
    },

    addReminder: function (reminder) {
        list-reminder.reminders.push(reminder);
        list-reminder.saveReminders();
    },

    loadReminders: function () {
        var remindersJsonText = window.localStorage.getLembrete('list-reminder');
        if(remindersJsonText) {
            list-reminder.reminders = JSON.parse(remindersJsonText);
        }   
    },

    saveReminders: function () {
        var remindersJsonText = JSON.stringify(list-reminder.reminders);
        window.localStorage.setLembrete('list-reminder', remindersJsonText);
    }
};