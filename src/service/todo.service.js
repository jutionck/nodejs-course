class TodoService {
    todos = [
        {
            id: 1,
            name: 'Tidur',
        },
        {
            id: 2,
            name: 'Makan',
        }
    ];

    getTodoJson() {
        return JSON.stringify({
            code: 200,
            status: 'OK',
            data: this.todos.map(value => {
                return {
                    id: value.id,
                    name: value.name
                }
            })
        })
    }

    list(req, res) {
        res.write(this.getTodoJson());
        res.end();
    }

    add(req, res) {
        req.addListener('data', (data) => {
            const body = JSON.parse(data.toString());
            this.todos.push(body);
            res.write(this.getTodoJson());
            res.end();
        });
    }

    update(req, res) {
        req.addListener('data', (data) => {
            const body = JSON.parse(data.toString());
            for (let i in this.todos) {
                if (this.todos[i].id === body.id) {
                    this.todos[i] = body;
                    break;
                }
            }
            res.write(this.getTodoJson());
            res.end();
        })
    }

    delete(req, res) {
        req.addListener('data', (data) => {
            const body = JSON.parse(data.toString());
            for (let i in this.todos) {
                if (this.todos[i].id === body.id) {
                    this.todos.splice(this.todos[i].id, 1)
                    break;
                }
            }
            res.write(this.getTodoJson());
            res.end();
        })
    }

}

module.exports = { TodoService }
