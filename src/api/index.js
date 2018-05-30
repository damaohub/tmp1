import http from '@/utils/fetch'

export function obtainIndexVo() {
  return http.get(
    '/api/dashboard/obtainIndexVo'
  )
}

