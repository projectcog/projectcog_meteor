Template.cogProjects.helpers({
    files(){
        var ary = new Array();
        var value = [
        {name: "Cogfile 1", author: "Noah", project: "Alpha", lastModified: "2017-02-25", dateCreated: "2017-01-23"},
        {name: "Cogfile 2", author: "Liam", project: "Beta", lastModified: "2018-01-23", dateCreated: "2017-10-23"},
        {name: "Cogfile 3", author: "Jacob", project: "Prototype", lastModified: "2018-03-05", dateCreated: "2018-03-02"},
        {name: "Cogfile 4", author: "Mason", project: "Template", lastModified: "2018-05-27", dateCreated: "2017-01-23"},
        {name: "Cogfile 5", author: "William", project: "Alpha", lastModified: "2018-03-15", dateCreated: "2017-07-20"},
        {name: "Cogfile 6", author: "Ethan", project: "Beta", lastModified: "2018-02-23", dateCreated: "2018-01-03"},
        {name: "Cogfile 7", author: "Michael", project: "Prototype", lastModified: "2018-01-18", dateCreated: "2018-01-02"},
        {name: "Cogfile 8", author: "Alexander", project: "Template", lastModified: "2018-02-14", dateCreated: "2018-02-13"},
        {name: "Cogfile 9", author: "Jayden", project: "Alpha", lastModified: "2017-01-25", dateCreated: "2017-01-23"},
        {name: "Cogfile 10", author: "Daniel", project: "Beta", lastModified: "2018-01-23", dateCreated: "2018-01-03"},
        {name: "Cogfile 11", author: "Noah", project: "Prototype", lastModified: "2018-03-14", dateCreated: "2018-01-23"},
        {name: "Cogfile 12", author: "Liam", project: "Template", lastModified: "2017-10-11", dateCreated: "2017-02-18"},
        {name: "Cogfile 13", author: "Jacob", project: "Alpha", lastModified: "2018-03-06", dateCreated: "2018-02-19"},
        {name: "Cogfile 14", author: "Mason", project: "Beta", lastModified: "2018-04-13", dateCreated: "2018-03-21"},
        {name: "Cogfile 15", author: "William", project: "Prototype", lastModified: "2018-03-17", dateCreated: "2018-03-16"},
        {name: "Cogfile 16", author: "Ethan", project: "Template", lastModified: "2018-02-14", dateCreated: "2018-02-14"},
        {name: "Cogfile 17", author: "Michael", project: "Alpha", lastModified: "2018-12-23", dateCreated: "2018-12-20"},
        {name: "Cogfile 18", author: "Alexander", project: "Beta", lastModified: "2017-12-25", dateCreated: "2017-01-23"},
        {name: "Cogfile 19", author: "Jayden", project: "Prototype", lastModified: "2018-04-03", dateCreated: "2018-01-04"},
        {name: "Cogfile 20", author: "Daniel", project: "Templage", lastModified: "2017-10-03", dateCreated: "2017-01-23"},
        {name: "Cogfile 21", author: "Noah", project: "Alpha", lastModified: "2017-05-14", dateCreated: "2017-06-05"},
        {name: "Cogfile 22", author: "Liam", project: "Beta", lastModified: "2017-12-15", dateCreated: "2017-11-03"},
        {name: "Cogfile 23", author: "Jacob", project: "Prototype", lastModified: "2017-09-20", dateCreated: "2017-08-15"},
        {name: "Cogfile 24", author: "Mason", project: "Template", lastModified: "2017-11-13", dateCreated: "2017-08-19"},
        {name: "Cogfile 25", author: "William", project: "Alpha", lastModified: "2017-11-29", dateCreated: "2017-02-29"},
        {name: "Cogfile 26", author: "Ethan", project: "Beta", lastModified: "2017-05-19", dateCreated: "2017-04-28"},
        {name: "Cogfile 27", author: "Michael", project: "Prototype", lastModified: "2018-08-30", dateCreated: "2018-05-23"},
        {name: "Cogfile 28", author: "Alexander", project: "Template", lastModified: "2018-08-12", dateCreated: "2018-03-18"},
        {name: "Cogfile 30", author: "Jayden", project: "Alpha", lastModified: "2017-05-12", dateCreated: "2017-05-06"},
        {name: "Cogfile 31", author: "Daniel", project: "Beta", lastModified: "2017-03-12", dateCreated: "2017-02-21"},
        {name: "Cogfile 32", author: "Noah", project: "Prototype", lastModified: "2018-08-23", dateCreated: "2017-09-18"},
        {name: "Cogfile 33", author: "Liam", project: "Template", lastModified: "2017-08-12", dateCreated: "2017-06-26"},
        {name: "Cogfile 34", author: "Jacob", project: "Alpha", lastModified: "2018-08-21", dateCreated: "2018-07-19"},
        {name: "Cogfile 35", author: "Mason", project: "Beta", lastModified: "2018-06-17", dateCreated: "2017-01-23"},
        {name: "Cogfile 36", author: "William", project: "Prototype", lastModified: "2017-04-27", dateCreated: "2017-03-20"},
        {name: "Cogfile 37", author: "Ethan", project: "Template", lastModified: "2017-09-05", dateCreated: "2017-09-04"},
        {name: "Cogfile 38", author: "Michael", project: "Alpha", lastModified: "2018-10-12", dateCreated: "2018-01-23"},
        {name: "Cogfile 39", author: "Alexander", project: "Beta", lastModified: "2017-10-22", dateCreated: "2017-05-17"},
        {name: "Cogfile 40", author: "Jayden", project: "Prototype", lastModified: "2018-11-09", dateCreated: "2017-08-09"},
        {name: "Cogfile 41", author: "Daniel", project: "Template", lastModified: "2017-05-23", dateCreated: "2017-05-02"},
        {name: "Cogfile 42", author: "Noah", project: "Alpha", lastModified: "2018-10-20", dateCreated: "2017-10-12"},
        {name: "Cogfile 43", author: "Liam", project: "Beta", lastModified: "2017-02-02", dateCreated: "2017-01-23"},
        {name: "Cogfile 44", author: "Jacob", project: "Prototype", lastModified: "2017-05-21", dateCreated: "2017-03-15"},
        {name: "Cogfile 45", author: "Mason", project: "Template", lastModified: "2018-09-10", dateCreated: "2017-08-28"},
        {name: "Cogfile 46", author: "William", project: "Alpha", lastModified: "2017-05-07", dateCreated: "2017-02-18"},
        {name: "Cogfile 47", author: "Ethan", project: "Beta", lastModified: "2018-10-23", dateCreated: "2018-04-25"},
        {name: "Cogfile 48", author: "Michael", project: "Prototype", lastModified: "2017-01-23", dateCreated: "2017-01-03"},
        {name: "Cogfile 49", author: "Alexander", project: "Template", lastModified: "2018-05-23", dateCreated: "2017-04-07"},
        {name: "Cogfile 50", author: "Jayden", project: "Alpha", lastModified: "2018-04-21", dateCreated: "2018-03-25"},
        {name: "Cogfile 51", author: "Daniel", project: "Beta", lastModified: "2018-03-25", dateCreated: "2018-03-20"},
        {name: "Cogfile 52", author: "Noah", project: "Prototype", lastModified: "2017-09-13", dateCreated: "2017-09-12"},
        {name: "Cogfile 53", author: "Liam", project: "Template", lastModified: "2018-10-22", dateCreated: "2018-09-12"},
        {name: "Cogfile 54", author: "Jacob", project: "Alpha", lastModified: "2017-04-25", dateCreated: "2017-04-23"},
        {name: "Cogfile 55", author: "Mason", project: "Beta", lastModified: "2017-06-19", dateCreated: "2017-02-20Cogfile 56"},
        {name: "Cogfile 56", author: "William", project: "Prototype", lastModified: "2018-03-19", dateCreated: "2018-03-05"},
        {name: "Cogfile 57", author: "Ethan", project: "Template", lastModified: "2017-05-17", dateCreated: "2017-04-18"},
        {name: "Cogfile 58", author: "Michael", project: "Alpha", lastModified: "2018-02-19", dateCreated: "2017-07-20"},
        {name: "Cogfile 59", author: "Alexander", project: "Beta", lastModified: "2018-04-18", dateCreated: "2018-01-31"}
    ];
        ary = value.sort(function(a, b){
            if (a.project < b.project)
                return -1;
            if (a.project > b.project)
                return 1;
            return 0;
        });
        //ary = value;
        return ary;
    }
});
Template.cogProjects.rendered = function(){

    // Initialize fooTable
    $('.footable').footable();
};