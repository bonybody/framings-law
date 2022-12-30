/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /**
   * {gameId}で指定されたゲーム内の投稿を一覧取得する。
   * 削除された投稿は除外して取得する。
   */
  get: {
    query?: {
      is_framing?: boolean | undefined
      is_deleted?: boolean | undefined
    } | undefined

    status: 200

    /** OK */
    resBody: {
      cards: Types.GameCard[]
    }
  }
}
