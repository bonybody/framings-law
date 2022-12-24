/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** {gameId}で指定されたゲームの状態を取得する。 */
  get: {
    status: 200
    /** OK */
    resBody: Types.Game
  }
}
