import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [{
      task: 'Laundry',
      id: '1',
      isFav: false,
      des: 'Laundary: It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using'
    },
    {
      task: 'Read new Book',
      id: '2',
      isFav: false,
      des: 'Read new Book: It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using'

    },
    {
      task: 'Complete the previous Task',
      id: '3',
      isFav: false,
      des: 'Complete the previous Task: It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using'

    },
    ],
    favTodos: []
  },
  getters: {
    thisTodo: state => todoId => {
      return state.todos.find(todo => todo.id === todoId);
    },
  },
  mutations: {
    favTodos: function (state, favTodo) {
      state.favTodos.push(favTodo);
      console.log(state.favTodo);
    },
  },
})
