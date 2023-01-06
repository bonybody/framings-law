import type { AspidaClient, BasicHeaders } from 'aspida'
import { dataToURLString } from 'aspida'
import type { Methods as Methods0 } from './games'
import type { Methods as Methods1 } from './games/_gameId'
import type { Methods as Methods2 } from './games/_gameId/cards'
import type { Methods as Methods3 } from './games/_gameId@string/cards/_cardId@string'
import type { Methods as Methods4 } from './games/_gameId@string/health-check'
import type { Methods as Methods5 } from './games/_gameId@string/players'
import type { Methods as Methods6 } from './games/_gameId@string/players/_playerId@string'
import type { Methods as Methods7 } from './games/_gameId@string/players/me'
import type { Methods as Methods8 } from './games/_gameId@string/vote'
import type { Methods as Methods9 } from './rooms'
import type { Methods as Methods10 } from './rooms/_roomId/joins'
import type { Methods as Methods11 } from './rooms/_roomId@string'
import type { Methods as Methods12 } from './rooms/_roomId@string/readies'
import type { Methods as Methods13 } from './rooms/_roomId@string/users'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:3000/' : baseURL).replace(/\/$/, '')
  const PATH0 = '/games'
  const PATH1 = '/cards'
  const PATH2 = '/health-check'
  const PATH3 = '/players'
  const PATH4 = '/players/me'
  const PATH5 = '/vote'
  const PATH6 = '/rooms'
  const PATH7 = '/joins'
  const PATH8 = '/readies'
  const PATH9 = '/users'
  const GET = 'GET'
  const POST = 'POST'

  return {
    games: {
      _gameId: (val1: number | string) => {
        const prefix1 = `${PATH0}/${val1}`

        return {
          cards: {
            /**
             * {gameId}で指定されたゲーム内の投稿を一覧取得する。
             * 削除された投稿は除外して取得する。
             * @returns OK
             */
            get: (option?: { query?: Methods2['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, `${prefix1}${PATH1}`, GET, option).json(),
            /**
             * {gameId}で指定されたゲーム内の投稿を一覧取得する。
             * 削除された投稿は除外して取得する。
             * @returns OK
             */
            $get: (option?: { query?: Methods2['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, `${prefix1}${PATH1}`, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods2['get']['query'] } | undefined) =>
              `${prefix}${prefix1}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
          },
          /**
           * {gameId}で指定されたゲームの状態を取得する。
           * @returns OK
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * {gameId}で指定されたゲームの状態を取得する。
           * @returns OK
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      _gameId_string: (val1: string) => {
        const prefix1 = `${PATH0}/${val1}`

        return {
          cards: {
            _cardId: (val3: string) => {
              const prefix3 = `${prefix1}${PATH1}/${val3}`

              return {
                /**
                 * @returns OK
                 */
                get: (option?: { config?: T | undefined } | undefined) =>
                  fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, prefix3, GET, option).json(),
                /**
                 * @returns OK
                 */
                $get: (option?: { config?: T | undefined } | undefined) =>
                  fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, prefix3, GET, option).json().then(r => r.body),
                $path: () => `${prefix}${prefix3}`
              }
            }
          },
          health_check: {
            post: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods4['post']['status']>(prefix, `${prefix1}${PATH2}`, POST, option).send(),
            $post: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods4['post']['status']>(prefix, `${prefix1}${PATH2}`, POST, option).send().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH2}`
          },
          players: {
            _playerId: (val3: string) => {
              const prefix3 = `${prefix1}${PATH3}/${val3}`

              return {
                /**
                 * @returns OK
                 */
                get: (option?: { config?: T | undefined } | undefined) =>
                  fetch<Methods6['get']['resBody'], BasicHeaders, Methods6['get']['status']>(prefix, prefix3, GET, option).json(),
                /**
                 * @returns OK
                 */
                $get: (option?: { config?: T | undefined } | undefined) =>
                  fetch<Methods6['get']['resBody'], BasicHeaders, Methods6['get']['status']>(prefix, prefix3, GET, option).json().then(r => r.body),
                $path: () => `${prefix}${prefix3}`
              }
            },
            me: {
              /**
               * @returns OK
               */
              get: (option?: { config?: T | undefined } | undefined) =>
                fetch<Methods7['get']['resBody'], Methods7['get']['resHeaders'], Methods7['get']['status']>(prefix, `${prefix1}${PATH4}`, GET, option).json(),
              /**
               * @returns OK
               */
              $get: (option?: { config?: T | undefined } | undefined) =>
                fetch<Methods7['get']['resBody'], Methods7['get']['resHeaders'], Methods7['get']['status']>(prefix, `${prefix1}${PATH4}`, GET, option).json().then(r => r.body),
              $path: () => `${prefix}${prefix1}${PATH4}`
            },
            /**
             * @returns OK
             */
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods5['get']['resBody'], BasicHeaders, Methods5['get']['status']>(prefix, `${prefix1}${PATH3}`, GET, option).json(),
            /**
             * @returns OK
             */
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods5['get']['resBody'], BasicHeaders, Methods5['get']['status']>(prefix, `${prefix1}${PATH3}`, GET, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH3}`
          },
          vote: {
            post: (option: { body: Methods8['post']['reqBody'], config?: T | undefined }) =>
              fetch<void, BasicHeaders, Methods8['post']['status']>(prefix, `${prefix1}${PATH5}`, POST, option).send(),
            $post: (option: { body: Methods8['post']['reqBody'], config?: T | undefined }) =>
              fetch<void, BasicHeaders, Methods8['post']['status']>(prefix, `${prefix1}${PATH5}`, POST, option).send().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH5}`
          }
        }
      },
      /**
       * 新しくゲームを作成する。
       * @returns Created
       */
      post: (option: { body: Methods0['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option).json(),
      /**
       * 新しくゲームを作成する。
       * @returns Created
       */
      $post: (option: { body: Methods0['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH0}`
    },
    rooms: {
      _roomId: (val1: number | string) => {
        const prefix1 = `${PATH6}/${val1}`

        return {
          joins: {
            /**
             * @returns OK
             */
            post: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods10['post']['resBody'], Methods10['post']['resHeaders'], Methods10['post']['status']>(prefix, `${prefix1}${PATH7}`, POST, option).json(),
            /**
             * @returns OK
             */
            $post: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods10['post']['resBody'], Methods10['post']['resHeaders'], Methods10['post']['status']>(prefix, `${prefix1}${PATH7}`, POST, option).json().then(r => r.body),
            /**
             * @returns OK
             */
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods10['get']['resBody'], BasicHeaders, Methods10['get']['status']>(prefix, `${prefix1}${PATH7}`, GET, option).json(),
            /**
             * @returns OK
             */
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods10['get']['resBody'], BasicHeaders, Methods10['get']['status']>(prefix, `${prefix1}${PATH7}`, GET, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH7}`
          }
        }
      },
      _roomId_string: (val1: string) => {
        const prefix1 = `${PATH6}/${val1}`

        return {
          readies: {
            /**
             * @returns OK
             */
            post: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods12['post']['resBody'], BasicHeaders, Methods12['post']['status']>(prefix, `${prefix1}${PATH8}`, POST, option).json(),
            /**
             * @returns OK
             */
            $post: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods12['post']['resBody'], BasicHeaders, Methods12['post']['status']>(prefix, `${prefix1}${PATH8}`, POST, option).json().then(r => r.body),
            /**
             * @returns OK
             */
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods12['get']['resBody'], BasicHeaders, Methods12['get']['status']>(prefix, `${prefix1}${PATH8}`, GET, option).json(),
            /**
             * @returns OK
             */
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods12['get']['resBody'], BasicHeaders, Methods12['get']['status']>(prefix, `${prefix1}${PATH8}`, GET, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH8}`
          },
          users: {
            /**
             * @returns OK
             */
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods13['get']['resBody'], BasicHeaders, Methods13['get']['status']>(prefix, `${prefix1}${PATH9}`, GET, option).json(),
            /**
             * @returns OK
             */
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods13['get']['resBody'], BasicHeaders, Methods13['get']['status']>(prefix, `${prefix1}${PATH9}`, GET, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH9}`
          },
          /**
           * @returns OK
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods11['get']['resBody'], BasicHeaders, Methods11['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * @returns OK
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods11['get']['resBody'], BasicHeaders, Methods11['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      /**
       * 新しくゲームのルームを作成する。
       * @returns OK
       */
      post: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods9['post']['resBody'], BasicHeaders, Methods9['post']['status']>(prefix, PATH6, POST, option).json(),
      /**
       * 新しくゲームのルームを作成する。
       * @returns OK
       */
      $post: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods9['post']['resBody'], BasicHeaders, Methods9['post']['status']>(prefix, PATH6, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH6}`
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
