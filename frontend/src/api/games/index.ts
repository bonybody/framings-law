/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  /** 新しくゲームを作成する。 */
  post: {
    status: 201
    /** Created */
    resBody: Types.GameStatus

    reqBody: {
      roomId: string
    }
  }
}
