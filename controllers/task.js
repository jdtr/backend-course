const Task = require('../models').Task;
const User = require('../models').User;

module.exports = {
    index: function (req, res) {
        Task.findAll().then((tasks) => {
            res.render('task/index', { tasks: req.user.tasks })
        })
    },
    show: function (req, res) {
        Task.findById(req.params.id, {
            include: [
                {
                    model: User,
                    as: 'user'
                },
                'categories'
            ]
        }).then(function(task) {
            res.render('tasks/show', { task });
        });
    },
    edit: function (req, res) {
        Task.findById(req.params.id).then(function (task) {
            task.addCategories([1,5]);
            res.render('tasks/edit', { task })
        });
    },
    destroy: function (res, res) {
        Task.detroy({
            where: {
                id:req.params.id
            }
        }).then(function (countRemovedElements) {
            res.redirect('/tasks');
        })
    },
    create: function(req, res) {
        Task.create({
            description: req.body.description,
            userId: req.user.id
        }).then(result => {
            res.json(result)
        }).catch(err => {
            console.log(err)
            res.json(err);
        });
    },
    update: function () {
        Task.update({ description: req.body.description }, {
            where: {
                id: req.params.id
            }
        }).then(function(response){
            res.redirect('/tasks/'+ req.params.id);
        })
    },
    new: function (req, res) {
        res.render("tasks/new");
    }
}