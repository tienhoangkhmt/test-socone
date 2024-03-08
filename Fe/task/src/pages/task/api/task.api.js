import { callApi } from "../../../api"
import { METHOD } from "../../../constants"
import { endpoint_task } from "../constants"

export const getTaskList = (params = {}) => {
  return callApi(endpoint_task.task, METHOD.GET, params, null)
}

export const postTaskRecord = (body = {}) => {
  return callApi(endpoint_task.task, METHOD.POST, null, body)
}

export const patchTaskRecord = (body = {}, id) => {
  return callApi(`${endpoint_task.task}/${id}`, METHOD.PATCH, null, body)
}

export const deleteTaskRecord = (id) => {
  return callApi(`${endpoint_task.task}/${id}`, METHOD.DELETE)
}
