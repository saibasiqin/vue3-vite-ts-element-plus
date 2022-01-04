const state = {
  // 接口调用参数
  params: {
    pageNo: 1,
    pageSize: 10,
    options: {}
  },
  roles: {}, // 权限
  apiName: 'roleList',
  privileges: ['role_add', 'role_edit', 'role_delete'],
  // 列表data数据
  total: 0,
  isLoading: false,
  tableData: [],
  searchData: [],
  tableHeadList: [
    {
      label: '角色名称',
      prop: 'name',
      checked: 1
    },
    {
      label: '角色描述',
      prop: 'description',
      checked: 1
    },
    {
      label: '创建时间',
      prop: 'createTime',
      checked: 1
    }
  ]
}

// getters
const getters = {}

// actions
const actions = {}

// mutations
const mutations = {
  // 更新页面搜索内容
  updateSearchData(state, payload) {
    state.searchData = payload
  },
  // 更新表格 loading 状态
  updateLoading(state, payload) {
    state.isLoading = payload
  },
  // 更新数据总条数
  updateTotal(state, payload) {
    state.total = payload
  },
  // 更新data数据
  updateTableData(state, payload) {
    state.tableData = payload
  },
  // 更新列表参数数据
  updateParams(state, payload) {
    state.params = Object.assign({}, state.params, payload)
  },
  // 更新权限
  updateRoles(state, payload) {
    state.roles = payload
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
