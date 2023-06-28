# go_graphql

## 実行方法
- 全件取得
`
query {
  todos {
    id
    text
    done
    user {
      name
    }
  }
}
`

- 新規作成
`
mutation {
  createTodo(input: { text: "ゴミ捨て", userId: "1" }) {
    id
    text
    done
  }
}
`