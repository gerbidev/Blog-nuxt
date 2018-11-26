const state = () => ({
  posts: [
    {
      id: '1',
      title: 'Learn Nuxt',
      description:
        'Its main scope is UI rendering while abstracting away the client/server distribution.\n' +
        '\n' +
        'Our goal is to create a framework flexible enough that you can use it as a main project base or in addition to your current project based on Node.js.\n' +
        '\n' +
        'Nuxt.js presets all the configuration needed to make your development of a Vue.js Application Server Rendered more enjoyable.'
    },
    {
      id: '2',
      title: 'Learn GraphQL',
      description:
        'GraphQL is a data query language developed by Facebook. It provides an alternative to REST and ad-hoc webservice architectures. It allows clients to define the structure of the data required, and exactly the same structure of the data is returned from the server. It is a strongly typed runtime which allows clients to dictate what data is needed.'
    },
    {
      id: '3',
      title: 'Learn VueJs',
      description:
        'Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects.'
    }
  ]
})
const getters = {}
const actions = {}
const mutations = {}

const postModule = {
  state,
  getters,
  mutations,
  actions
}
export default postModule
